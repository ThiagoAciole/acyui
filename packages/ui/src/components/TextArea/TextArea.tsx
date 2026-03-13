import './TextArea.css';
import React from 'react';
import { classNames, LabelFormater } from '../../utils';
import { FormField } from '../FormField/FormField';
import type { TextAreaProps } from './types';

export type { TextAreaProps, TextAreaResize } from './types';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, error, hint, full = false, resize = 'vertical', className, id, rows = 4, style, ...props }, ref) => {
        const inputId = id ?? (label ? `textarea-${LabelFormater(label)}` : undefined);

        return (
            <FormField label={label} error={error} hint={hint} full={full} htmlFor={inputId} className={className}>
                <textarea
                    ref={ref}
                    id={inputId}
                    rows={rows}
                    className={classNames(
                        'textarea',
                        error && 'textarea--error'
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
                    style={{ resize, ...(style ?? {}) }}
                    {...props}
                />
            </FormField>
        );
    }
);

TextArea.displayName = 'TextArea';
