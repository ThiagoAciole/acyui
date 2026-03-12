import './Timeline.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Avatar } from '../Avatar/Avatar';
import { Text } from '../Text/Text';
import type { TimelineItemProps, TimelineProps } from './types';

export type { TimelineItemProps, TimelineProps } from './types';

export const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, date, icon, src, name }) => {
    return (
        <div className={classNames('timeline-item', !icon && !src && !name && 'timeline-item--dot')}>
            <div className="timeline-item__aside">
                <div className="timeline-item__marker">
                    {src || name ? <Avatar src={src} name={name} size="sm" /> : icon ? <div className="timeline-item__icon">{icon}</div> : <div className="timeline-item__dot" />}
                </div>
                <div className="timeline-item__line" />
            </div>
            <div className="timeline-item__content">
                <div className="timeline-item__header">
                    <Text weight="medium">{title}</Text>
                    {date && <Text size="sm" color="subtle">{date}</Text>}
                </div>
                {description && <div className="timeline-item__description"><Text color="subtle">{description}</Text></div>}
            </div>
        </div>
    );
};

export const Timeline: React.FC<TimelineProps> = ({ children, className, ...props }) => {
    return <div className={classNames('timeline', className)} {...props}>{children}</div>;
};

Timeline.displayName = 'Timeline';
TimelineItem.displayName = 'TimelineItem';
