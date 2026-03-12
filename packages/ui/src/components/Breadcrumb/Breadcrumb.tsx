import './Breadcrumb.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Link } from '../Link/Link';
import type { BreadcrumbProps } from './types';

export type { BreadcrumbItem, BreadcrumbProps } from './types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = '/',
    className
}) => {
    return (
        <nav className={classNames('breadcrumb', className)} aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="breadcrumb-item">
                            {item.href && !isLast ? (
                                <Link href={item.href} color="neutral" className="breadcrumb-link">
                                    {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                                    {item.label}
                                </Link>
                            ) : (
                                <span 
                                    className={classNames('breadcrumb-link', isLast && 'breadcrumb-current')} 
                                    aria-current={isLast ? 'page' : undefined}
                                >
                                    {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                                    {item.label}
                                </span>
                            )}

                            {!isLast && <span className="breadcrumb-separator">{separator}</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';
