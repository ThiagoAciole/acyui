import React from 'react';
import './Flex.css';
import { classNames } from '../../utils/classNames';
import type { FlexProps } from './types';

export type { FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexOwnProps, FlexProps, FlexWrap } from './types';

export const Flex = <TElement extends React.ElementType = 'div'>({
    children,
    direction = 'row',
    align = 'stretch',
    justify = 'flex-start',
    wrap = 'nowrap',
    gap = '0',
    className,
    style,
    as,
    ...props
}: FlexProps<TElement>) => {
    const Component = (as || 'div') as React.ElementType;

    return (
        <Component
            className={classNames(
                'flex',
                `flex-direction--${direction}`,
                `flex-align--${align}`,
                `flex-justify--${justify}`,
                `flex-wrap--${wrap}`,
                `flex-gap--${gap}`,
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </Component>
    );
};





