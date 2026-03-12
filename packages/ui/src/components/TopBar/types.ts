import type * as React from 'react';

export interface TopBarNavItem {
    label?: string;
    active?: boolean;
    onClick?: () => void;
    href?: string;
    to?: string;
}

export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    navItems?: TopBarNavItem[];
    navPosition?: 'center' | 'right';
    extraContent?: React.ReactNode;
    themeToggle?: React.ReactNode | boolean;
    sticky?: boolean;
    contentInside?: boolean;
}
