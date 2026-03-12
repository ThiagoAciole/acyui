import './Progress.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import type { ProgressProps } from './types';

export type { ProgressProps, ProgressSize } from './types';

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    size = 'md',
    color,
    animated = false,
    showValue = false,
    label,
    className,
    style,
    ...props
}) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div
            className={classNames('progress-wrapper', className)}
            style={{ ['--progress-color' as string]: colorVar(color), ...(style ?? {}) }}
            {...props}
        >
            {(label || showValue) && (
                <div className="progress-label">
                    {label && <span>{label}</span>}
                    {showValue && <span className="progress-value">{Math.round(percentage)}%</span>}
                </div>
            )}
            <div
                className={classNames('progress', `progress--${size}`, animated && 'progress--animated')}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
            >
                <div className="progress-bar" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
};

Progress.displayName = 'Progress';
