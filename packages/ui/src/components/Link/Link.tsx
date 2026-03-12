import './Link.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import type { LinkProps } from './types';

export type { LinkOwnProps, LinkProps } from './types';

export const Link = <TElement extends React.ElementType = 'a'>({ 
    color = 'primary', 
    underline = false, 
    active, 
    as, 
    className, 
    children, 
    href, 
    to, 
    style, 
    ...props 
}: LinkProps<TElement>) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const route = to ?? href;
    const Component = (as || 'a') as React.ElementType;
    
    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };
    
    const isCurrentRoute = route && currentPath ? normalizePath(currentPath) === normalizePath(route) : false;
    const isActive = active ?? isCurrentRoute;

    return (
        <Component
            className={classNames('link', underline && 'link--underline', isActive && 'link--active', className)}
            style={{ 
                ['--link-color' as string]: colorVar(color),
                ...(style ?? {}) 
            }}
            href={route}
            aria-current={isActive ? 'page' : undefined}
            {...props}
        >
            {children}
        </Component>
    );
};

Link.displayName = 'Link';
