import './Radio.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { FormField } from '../FormField/FormField';
import { colorVar } from '../../utils/styleTokens';
import type { RadioProps } from './types';

export type { RadioProps } from './types';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
    label,
    description,
    className,
    disabled,
    error,
    style,
    color = 'primary',
    id,
    ...props
}, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? `radio-${generatedId}`;

    return (
        <FormField full className={className} htmlFor={inputId}>
            <label className={classNames('radio', disabled && 'radio--disabled', error && 'radio--error')} style={{ ['--radio-color' as string]: colorVar(color), ...(style ?? {}) }}>
                <span className="radio__input-container">
                    <input ref={ref} id={inputId} type="radio" className="radio__input" disabled={disabled} {...props} />
                    <span className="radio__control">
                        <span className="radio__dot" />
                    </span>
                </span>
                {(label || description) && (
                    <span className="radio__content">
                        {label && <span className="radio__label">{label}</span>}
                        {description && <span className="radio__description">{description}</span>}
                    </span>
                )}
            </label>
        </FormField>
    );
});

Radio.displayName = 'Radio';
