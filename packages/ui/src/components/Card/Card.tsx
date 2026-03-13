import './Card.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Heading5 } from '../Heading/Heading';
import { Text } from '../Text/Text';
import type { CardHeaderProps, CardProps, CardSectionProps } from './types';

export type { CardHeaderProps, CardPadding, CardProps, CardSectionProps, CardVariant } from './types';

export function Card<TElement extends React.ElementType = 'div'>({ padding = 'md', variant = 'default', as, children, className, ...props }: CardProps<TElement>) {
    const Component = (as || 'div') as React.ElementType;

    return (
        <Component
            className={classNames('card', `card--${variant}`, `card--pad-${padding}`, className)}
            {...props}
        >
            {children}
        </Component>
    );
}

export function CardHeader({ title, description, icon, action, children, className, ...props }: CardHeaderProps) {
    return (
        <div className={classNames('card-header', className)} {...props}>
            <div className="card-header__content">
                {(title || icon) && (
                    <div className="card-header__title-wrapper">
                        {icon && <span className="card-header__icon">{icon}</span>}
                        {title && (
                            <Heading5 weight="semibold">{title}</Heading5>
                        )}
                    </div>
                )}
                {description && (
                    <Text size="sm" color="neutral">
                        {description}
                    </Text>
                )}
                {children}
            </div>
            {action && <div className="card-header__action">{action}</div>}
        </div>
    );
}

export function CardBody({ children, className, ...props }: CardSectionProps) {
    return <div className={classNames('card-body', className)} {...props}>{children}</div>;
}

export function CardFooter({ children, className, ...props }: CardSectionProps) {
    return <div className={classNames('card-footer', className)} {...props}>{children}</div>;
}
