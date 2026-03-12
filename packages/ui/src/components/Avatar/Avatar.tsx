import './Avatar.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { AvatarProps } from './types';

export type { AvatarProps, AvatarSize, AvatarStatus } from './types';

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
    src,
    name,
    size = 'md',
    status,
    className,
    ...props
}, ref) => {
    const getInitials = (name?: string) => {
        if (!name) return '';
        const parts = name.split(' ');
        if (parts.length === 1) return parts[0].substring(0, 2);
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    return (
        <div ref={ref} className={classNames('avatar', `avatar--${size}`, className)} {...props}>
            {src ? (
                <img src={src} alt={name} className="avatar-image" />
            ) : (
                <span className="avatar-initials">{getInitials(name)}</span>
            )}
            {status && (
                <span className={classNames('avatar-status', `avatar-status--${status}`)} />
            )}
        </div>
    );
});

Avatar.displayName = 'Avatar';
