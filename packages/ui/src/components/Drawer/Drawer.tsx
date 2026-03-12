import './Drawer.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Heading2 } from '../Heading/Heading';
import { Icon } from '../../icons';
import type { DrawerProps } from './types';

export type { DrawerPlacement, DrawerProps, DrawerSize } from './types';

export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    title,
    placement = 'right',
    children,
    footer,
    size = 'md',
    className,
    closeOnOverlayClick = true
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <>
            {isOpen && <div className="drawer-overlay" onClick={closeOnOverlayClick ? onClose : undefined} />}
            <div
                className={classNames(
                    'drawer',
                    `drawer--${placement}`,
                    `drawer--size-${size}`,
                    isOpen && 'drawer--open',
                    className
                )}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="drawer-header">
                    {title ? <Heading2 className="drawer-title">{title}</Heading2> : <span />}
                    <IconButton
                        icon={<Icon name="close" size={16} />}
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        aria-label="Fechar painel"
                    />
                </div>
                <div className="drawer-body">
                    {children}
                </div>
                {footer && (
                    <div className="drawer-footer">
                        {footer}
                    </div>
                )}
            </div>
        </>,
        document.body
    );
};

Drawer.displayName = 'Drawer';
