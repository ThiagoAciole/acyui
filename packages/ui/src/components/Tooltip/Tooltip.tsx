import './Tooltip.css';
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import type { TooltipProps } from './types';

export type { TooltipPlacement, TooltipProps } from './types';

export function Tooltip({ content, placement = 'top', children, delay = 300 }: TooltipProps) {
    const tooltipId = useId();
    const triggerRef = useRef<HTMLElement | null>(null);
    const timerRef = useRef<number>();
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const offset = 10;

        if (placement === 'top') {
            setPosition({ top: rect.top + window.scrollY - offset, left: rect.left + rect.width / 2 + window.scrollX });
            return;
        }

        if (placement === 'bottom') {
            setPosition({ top: rect.bottom + window.scrollY + offset, left: rect.left + rect.width / 2 + window.scrollX });
            return;
        }

        if (placement === 'left') {
            setPosition({ top: rect.top + rect.height / 2 + window.scrollY, left: rect.left + window.scrollX - offset });
            return;
        }

        setPosition({ top: rect.top + rect.height / 2 + window.scrollY, left: rect.right + window.scrollX + offset });
    }, [placement]);

    const show = useCallback(() => {
        timerRef.current = window.setTimeout(() => {
            updatePosition();
            setVisible(true);
        }, delay);
    }, [delay, updatePosition]);

    const hide = useCallback(() => {
        window.clearTimeout(timerRef.current);
        setVisible(false);
    }, []);

    useEffect(() => {
        if (!visible) return;

        const handleUpdate = () => updatePosition();
        window.addEventListener('scroll', handleUpdate, true);
        window.addEventListener('resize', handleUpdate);

        return () => {
            window.removeEventListener('scroll', handleUpdate, true);
            window.removeEventListener('resize', handleUpdate);
        };
    }, [visible, updatePosition]);

    const child = React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
            children.props.onMouseEnter?.(event);
            show();
        },
        onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
            children.props.onMouseLeave?.(event);
            hide();
        },
        onFocus: (event: React.FocusEvent<HTMLElement>) => {
            children.props.onFocus?.(event);
            show();
        },
        onBlur: (event: React.FocusEvent<HTMLElement>) => {
            children.props.onBlur?.(event);
            hide();
        },
        'aria-describedby': visible ? tooltipId : children.props['aria-describedby']
    });

    return (
        <>
            {child}
            {visible && createPortal(
                <div
                    id={tooltipId}
                    className={classNames('tooltip', `tooltip--${placement}`)}
                    style={{ top: position.top, left: position.left }}
                    role="tooltip"
                >
                    {content}
                </div>,
                document.body
            )}
        </>
    );
}
