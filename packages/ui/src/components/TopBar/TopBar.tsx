import './TopBar.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Flex } from '../Flex/Flex';
import { IconButton } from '../IconButton/IconButton';
import { Link } from '../Link/Link';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { Icon } from '../../icons';
import type { TopBarProps } from './types';

export type { TopBarNavItem, TopBarProps } from './types';

export const TopBar: React.FC<TopBarProps> = ({
    logo,
    navItems = [],
    navPosition = 'center',
    extraContent,
    themeToggle = false,
    sticky = false,
    className,
    children,
    contentInside = false,
    ...props
}) => {
    const { theme, toggleTheme } = useTheme();
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };

    const renderNav = () => (
        <Flex as="nav" align="center" gap="5" className="topbar__nav">
            {navItems.map((item, index) => {
                const route = item.to ?? item.href;
                const isActive = item.active ?? (route ? normalizePath(route) === normalizePath(currentPath) : false);

                if (route) {
                    return (
                        <Link
                            key={`${item.label ?? 'link'}-${index}`}
                            href={route}
                            className={classNames('topbar__nav-item', isActive && 'topbar__nav-item--active')}
                            active={isActive}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </Link>
                    );
                }

                return (
                    <button
                        key={`${item.label ?? 'button'}-${index}`}
                        type="button"
                        className={classNames('topbar__nav-item', isActive && 'topbar__nav-item--active')}
                        onClick={item.onClick}
                    >
                        {item.label}
                    </button>
                );
            })}
        </Flex>
    );

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            className={classNames(
                'topbar',
                sticky && 'topbar--sticky',
                navPosition === 'right' && 'topbar--nav-right',
                contentInside && 'topbar--with-children',
                className
            )}
            {...props}
        >
            <Flex align="center" gap="4" className="topbar__left">
                {logo && <div className="topbar__logo">{logo}</div>}
            </Flex>

            {navPosition === 'center' && navItems.length > 0 && (
                <Flex align="center" justify="center" className="topbar__center">
                    {renderNav()}
                </Flex>
            )}

            {contentInside && children && <div className="topbar__content">{children}</div>}

            <Flex align="center" gap="4" className="topbar__right">
                {navPosition === 'right' && navItems.length > 0 && renderNav()}
                {extraContent}
                {themeToggle && (
                    <IconButton
                        icon={theme === 'dark' ? <Icon name="sun" size={16} /> : <Icon name="moon" size={16} />}
                        variant="ghost"
                        size="sm"
                        label="Toggle theme"
                        onClick={toggleTheme}
                    />
                )}
            </Flex>

            {!contentInside && children && <div className="topbar__children">{children}</div>}
        </Flex>
    );
};

TopBar.displayName = 'TopBar';
