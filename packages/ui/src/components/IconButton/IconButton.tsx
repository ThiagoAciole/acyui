import React from 'react';
import { classNames } from '../../utils/classNames';
import './IconButton.css';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import type { IconButtonProps } from './types';

export type { IconButtonProps, IconButtonSize, IconButtonVariant } from './types';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'solid', size = 'md', loading = false, disabled, className, style, label, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={classNames('icon-btn', `icon-btn--size-${size}`, className)}
                aria-label={label || (typeof icon === 'string' ? icon : 'icon-button')}
                aria-busy={loading}
                variant={variant}
                size={size}
                disabled={disabled || loading}
                style={style}
                {...props}
            >
                {loading ? (
                    <Loader />
                ) : (
                    <span className="icon-btn__content">
                        {icon}
                    </span>
                )}
            </Button>
        );
    }
);

IconButton.displayName = 'IconButton';
