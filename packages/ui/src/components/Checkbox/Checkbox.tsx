import './Checkbox.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { FormField } from '../FormField/FormField';
import { colorVar } from '../../utils/styleTokens';
import { Icon } from '../../icons';
import type { CheckboxProps } from './types';

export type { CheckboxProps } from './types';

function setForwardedRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
    if (typeof ref === 'function') ref(value);
    else if (ref) ref.current = value;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, indeterminate = false, supportText, className, id, disabled, color = 'primary', style, ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id ?? `checkbox-${generatedId}`;
        const inputRef = React.useRef<HTMLInputElement | null>(null);

        React.useEffect(() => {
            if (inputRef.current) inputRef.current.indeterminate = indeterminate;
        }, [indeterminate]);

        const handleRef = (node: HTMLInputElement | null) => {
            inputRef.current = node;
            setForwardedRef(ref, node);
        };

        return (
            <FormField hint={supportText} full className={className} htmlFor={inputId}>
                <label className={classNames('checkbox', disabled && 'checkbox--disabled')} style={{ ['--checkbox-color' as string]: colorVar(color), ...(style ?? {}) }}>
                    <span className="checkbox__control">
                        <input
                            ref={handleRef}
                            id={inputId}
                            type="checkbox"
                            className="checkbox__input"
                            disabled={disabled}
                            aria-checked={indeterminate ? 'mixed' : undefined}
                            {...props}
                        />
                        <span className="checkbox__box" aria-hidden="true">
                            <span className="checkbox__icon">{indeterminate ? <Icon name="minus" /> : <Icon name="check" />}</span>
                        </span>
                    </span>
                    {label && <span className="checkbox__label">{label}</span>}
                </label>
            </FormField>
        );
    }
);

Checkbox.displayName = 'Checkbox';
