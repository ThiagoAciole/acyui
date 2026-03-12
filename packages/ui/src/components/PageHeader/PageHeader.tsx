import React from 'react';
import { Icon } from '../../icons';
import { classNames } from '../../utils/classNames';
import { Heading } from '../Heading/Heading';
import { IconButton } from '../IconButton/IconButton';
import { Text } from '../Text/Text';
import './PageHeader.css';
import type { PageHeaderProps } from './types';

export type { PageHeaderProps } from './types';

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    showBack = false,
    onBack,
    width,
    action,
    className,
    ...props
}) => {
    return (
        <div className={classNames('page-header', className)} {...props} >
            <div className="page-header__left">
                {showBack && (
                    <IconButton
                        variant="ghost"
                        size="sm"
                        icon={<Icon name="chevron-left" size={16} />}
                        onClick={onBack}
                        label="Back"
                    />
                )}
                <div className="page-header__content">
                    <Heading weight="bold">{title}</Heading>
                    {description && <Text color="subtle" style={{ width: `${width || '100%'}` }}>{description}</Text>}
                </div>
            </div>
            {action && <div className="page-header__right">{action}</div>}
        </div>
    );
};
