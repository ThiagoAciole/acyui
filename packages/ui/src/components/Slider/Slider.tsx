import './Slider.css';
import React, { useState } from 'react';
import { FormField } from '../FormField/FormField';
import type { SliderProps } from './types';

export type { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
    value,
    defaultValue,
    onChange,
    min = 0,
    max = 100,
    label,
    supportText,
    className,
    id,
    ...props
}) => {
    const generatedId = React.useId();
    const inputId = id ?? `slider-${generatedId}`;
    const [internalValue, setInternalValue] = useState(Number(value ?? defaultValue ?? 0));
    const currentValue = value !== undefined ? Number(value) : internalValue;
    const percentage = ((currentValue - Number(min)) / (Number(max) - Number(min))) * 100;

    return (
        <FormField label={label} hint={supportText} full className={className} htmlFor={inputId}>
            <div className="slider">
                <div className="slider__track">
                    <div className="slider__fill" style={{ width: `${percentage}%` }} />
                </div>
                <input
                    id={inputId}
                    type="range"
                    min={min}
                    max={max}
                    value={currentValue}
                    onChange={(event) => {
                        const next = Number(event.target.value);
                        if (value === undefined) setInternalValue(next);
                        onChange?.(event);
                    }}
                    className="slider__input"
                    {...props}
                />
                <div className="slider__value">{currentValue}</div>
            </div>
        </FormField>
    );
};
