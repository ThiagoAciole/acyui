import './Input.css';
import { classNames, LabelFormater } from '../../utils';
import React from 'react';
import { FormField } from '../FormField/FormField';
import type { InputProps } from './types';

export type { InputProps, InputSize } from './types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, supportText, prefix, suffix, size = 'md', full = false, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `input-${LabelFormater(label)}` : undefined);

        return (
            <FormField label={label} error={error} hint={supportText} full={full} htmlFor={inputId} className={className}>
                <div className={classNames('input-field', `input-field--${size}`, error && 'input-field--error', props.disabled && 'input-field--disabled')}>
                    {prefix && <span className="input-field__adornment input-field__adornment--prefix">{prefix}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className={classNames(
                            'input-field__input',
                            Boolean(prefix) && 'input-field__input--with-prefix',
                            Boolean(suffix) && 'input-field__input--with-suffix'
                        )}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : supportText ? `${inputId}-supportText` : undefined}
                        {...props}
                    />
                    {suffix && <span className="input-field__adornment input-field__adornment--suffix">{suffix}</span>}
                </div>
            </FormField>
        );
    }
);

Input.displayName = 'Input';
