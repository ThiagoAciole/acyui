import './EmptyState.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Heading4 } from '../Heading/Heading';
import { Text } from '../Text/Text';
import type { EmptyStateProps } from './types';

export type { EmptyStateProps } from './types';

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className,
    ...props
}) => {
    return (
        <div className={classNames('empty-state', className)} {...props}>
            {icon && <div className="empty-state__icon">{icon}</div>}
            <Heading4>{title}</Heading4>
            {description && <Text color="neutral">{description}</Text>}
            {action && <div className="empty-state__action">{action}</div>}
        </div>
    );
};
