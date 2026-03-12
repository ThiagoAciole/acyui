import './Tag.css';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import type { TagProps } from './types';

export type { TagProps, TagSize, TagVariant } from './types';

export function Tag({
    children,
    variant = 'soft',
    size = 'md',
    color = 'primary',
    leftIcon,
    rightIcon,
    closable,
    onRemove,
    className,
    style,
    ...props
}: TagProps) {
    const removable = closable || Boolean(onRemove);

    return (
        <span
            className={classNames('tag', `tag--variant-${variant}`, `tag--size-${size}`, className)}
            style={{ ['--tag-color' as string]: colorVar(color), ...(style ?? {}) }}
            {...props}
        >
            {leftIcon && <span className="tag__icon">{leftIcon}</span>}
            <span className="tag__label">{children}</span>
            {rightIcon && <span className="tag__icon">{rightIcon}</span>}
            {removable && (
                <button type="button" className="tag__remove" onClick={onRemove} aria-label="Remove tag">
                    x
                </button>
            )}
        </span>
    );
}
