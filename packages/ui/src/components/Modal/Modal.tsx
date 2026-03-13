import './Modal.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Heading2 } from '../Heading/Heading';
import { Icon } from '../../icons';
import type { ModalProps } from './types';

export type { ModalProps, ModalSize } from './types';

export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    title,
    description,
    children,
    footer,
    size = 'md',
    closeOnOverlayClick = true,
    className,
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        setMounted(true);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open || !mounted) return null;

    return createPortal(
        <div
            className="modal-overlay"
            onClick={closeOnOverlayClick ? onClose : undefined}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
                aria-describedby={description ? 'modal-description' : undefined}
                tabIndex={-1}
                className={classNames('modal', `modal--${size}`, className)}
                onClick={(e) => e.stopPropagation()}
            >
                {(title || description) && (
                    <div className="modal-header">
                        <div>
                            {title && (
                                <Heading2 id="modal-title" className="modal-title">{title}</Heading2>
                            )}

                            {description && (
                                <p id="modal-description" className="modal-description">
                                    {description}
                                </p>
                            )}
                        </div>

                        <IconButton
                            icon={<Icon name="close" size={16} />}
                            aria-label="Close modal"
                            variant="ghost"
                            color="neutral"
                            size="sm"
                            onClick={onClose}
                        />
                    </div>
                )}

                {children && <div className="modal-body">{children}</div>}
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>,
        document.body
    );
};

Modal.displayName = 'Modal';
