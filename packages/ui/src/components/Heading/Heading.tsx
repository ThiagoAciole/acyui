import React from 'react';
import { classNames } from '../../utils/classNames';
import './Heading.css';
import type { BaseHeadingProps, HeadingTag } from './types';

export type { BaseHeadingProps, HeadingTag, HeadingWeight } from './types';

function createHeading(tag: HeadingTag, levelClassName: string) {
    const Component = React.forwardRef<HTMLHeadingElement, BaseHeadingProps>(
        ({ weight = 'bold', className, children, ...props }, ref) => {
            return React.createElement(
                tag,
                {
                    ref,
                    className: classNames(
                        'heading',
                        levelClassName,
                        `heading--weight-${weight}`,
                        className
                    ),
                    ...props,
                },
                children
            );
        }
    );

    Component.displayName = tag.charAt(0).toUpperCase() + tag.slice(1);

    return Component;
}

export const Heading = createHeading('h1', 'heading--h1');
export const Heading2 = createHeading('h2', 'heading--h2');
export const Heading3 = createHeading('h3', 'heading--h3');
export const Heading4 = createHeading('h4', 'heading--h4');
export const Heading5 = createHeading('h5', 'heading--h5');
export const Heading6 = createHeading('h6', 'heading--h6');
