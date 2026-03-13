import './Input.css';
import { classNames, LabelFormater } from '../../utils';
import React from 'react';
import { FormField } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../../icons';
import type { InputProps } from './types';

export type { InputProps, InputSize } from './types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, hint, prefix, suffix, clearable = false, size = 'md', full = false, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `input-${LabelFormater(label)}` : undefined);
        const inputRef = React.useRef<HTMLInputElement | null>(null);
        const [, forceRender] = React.useState(0);
        const isControlled = props.value !== undefined;
        const hasValue = String(isControlled ? props.value ?? '' : props.defaultValue ?? inputRef.current?.value ?? '').length > 0;

        const setRefs = (node: HTMLInputElement | null) => {
            inputRef.current = node;

            if (typeof ref === 'function') {
                ref(node);
                return;
            }

            if (ref) {
                ref.current = node;
            }
        };

        const handleClear = () => {
            const node = inputRef.current;
            if (!node || props.disabled || props.readOnly) {
                return;
            }

            const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
            descriptor?.set?.call(node, '');
            node.dispatchEvent(new Event('input', { bubbles: true }));
            node.dispatchEvent(new Event('change', { bubbles: true }));
            forceRender((current) => current + 1);
            node.focus();
        };

        const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
            props.onInput?.(event);
            if (!isControlled) {
                forceRender((current) => current + 1);
            }
        };

        const resolvedSuffix = clearable && hasValue ? (
            <IconButton
                icon={<Icon name="close" size={12} />}
                aria-label="Limpar campo"
                variant="ghost"
                size="sm"
                onClick={handleClear}
                tabIndex={-1}
                className="input-field__clear"
            />
        ) : suffix;

        return (
            <FormField label={label} error={error} hint={hint} full={full} htmlFor={inputId} className={className}>
                <div className={classNames('input-field', `input-field--${size}`, error && 'input-field--error', props.disabled && 'input-field--disabled')}>
                    {prefix && <span className="input-field__adornment input-field__adornment--prefix">{prefix}</span>}
                    <input
                        ref={setRefs}
                        id={inputId}
                        className={classNames(
                            'input-field__input',
                            Boolean(prefix) && 'input-field__input--with-prefix',
                            Boolean(resolvedSuffix) && 'input-field__input--with-suffix'
                        )}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
                        {...props}
                        onInput={handleInput}
                    />
                    {resolvedSuffix && <span className="input-field__adornment input-field__adornment--suffix">{resolvedSuffix}</span>}
                </div>
            </FormField>
        );
    }
);

Input.displayName = 'Input';
