import './Button.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar, isTokenColor } from '../../utils/styleTokens';
import { Loader } from '../Loader/Loader';
import type { ButtonProps } from './types';

export type { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'solid',
        size = 'md',
        loading = false,
        disabled,
        icon,
        iconRight = false,
        full = false,
        color = 'primary',
        children,
        className,
        style,
        ...props
    }, ref) => {
        const isDisabled = disabled || loading;
        const tokenColor = isTokenColor(color) || color === 'default' ? color : undefined;
        const customColor = !color || tokenColor || color === 'default' ? undefined : colorVar(color);
        const buttonStyle = customColor
            ? {
                ...style,
                ['--btn-base' as string]: customColor,
                ['--btn-bg' as string]: customColor,
                ['--btn-text' as string]: 'var(--text-inverse)',
            }
            : style;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames(
                    'btn',
                    `btn--${variant}`,
                    `btn--${size}`,
                    tokenColor && `btn--color-${tokenColor}`,
                    full && 'btn--full',
                    loading && 'btn--loading',
                    className
                )}
                style={buttonStyle}
                {...props}
            >
                {loading && (
                    <Loader 
                        size={size === 'xs' || size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'} 
                        className="btn__spinner" 
                    />
                )}
                {!loading && icon && !iconRight && (
                    <span className="btn__icon btn__icon--left">{icon}</span>
                )}
                {children && <span className="btn__label">{children}</span>}
                {!loading && icon && iconRight && (
                    <span className="btn__icon btn__icon--right">{icon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
