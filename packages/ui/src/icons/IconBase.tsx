import React from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
    size?: number;
}

export function IconBase({
    size = 20,
    width,
    height,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    children,
    ...props
}: IconProps) {
    return (
        <svg
            width={width ?? size}
            height={height ?? size}
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    );
}
