import './Alert.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Heading5 } from '../Heading/Heading';
import { Text } from '../Text/Text';
import type { AlertProps } from './types';

export type { AlertProps, AlertVariant } from './types';

export const Alert: React.FC<AlertProps> = ({
    variant = 'primary',
    title,
    icon,
    action,
    children,
    className,
    ...props
}) => {
    return (
        <div className={classNames('alert', `alert--${variant}`, className)} role="alert" {...props}>
            {icon && <div className="alert__icon">{icon}</div>}
            <div className="alert__content">
                {title && <Heading5 className="alert__title">{title}</Heading5>}
                {children && (
                    <Text size="sm" className="alert__description">
                        {children}
                    </Text>
                )}
            </div>
            {action && <div className="alert__action">{action}</div>}
        </div>
    );
};
