import React from 'react';
import { Icon } from '../../icons';
import { classNames } from '../../utils';
import { FormField } from '../FormField/FormField';
import './NumberInput.css';
import type { NumberInputProps } from './types';

export type { NumberInputProps, NumberInputVariant } from './types';

function clamp(value: number, min?: number, max?: number): number {
    if (min !== undefined && value < min) return min;
    if (max !== undefined && value > max) return max;
    return value;
}

function sanitizeNumberInput(raw: string): string {
    let value = raw.replace(',', '.');

    value = value.replace(/[^\d.-]/g, '');

    const isNegative = value.startsWith('-');
    value = value.replace(/-/g, '');
    if (isNegative) value = `-${value}`;

    const parts = value.split('.');
    if (parts.length > 2) {
        value = `${parts[0]}.${parts.slice(1).join('')}`;
    }

    if (value.includes('-')) {
        value = value[0] === '-' ? `-${value.slice(1).replace(/-/g, '')}` : value.replace(/-/g, '');
    }

    return value;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
    (
        {
            value,
            defaultValue,
            onChange,
            min,
            max,
            step = 1,
            variant = 'default',
            disabled = false,
            invalid = false,
            fullWidth = false,
            label,
            hint,
            error,
            inputClassName,
            containerClassName,
            id,
            ...props
        },
        ref,
    ) => {
        const generatedId = React.useId();
        const inputId = id ?? (label ? `number-input-${generatedId}` : undefined);

        const isControlled = value !== undefined;
        const [internalValue, setInternalValue] = React.useState<number | undefined>(defaultValue);
        const [inputText, setInputText] = React.useState<string>(
            String(isControlled ? value ?? '' : defaultValue ?? ''),
        );

        const currentValue = isControlled ? value : internalValue;

        React.useEffect(() => {
            if (isControlled) {
                setInputText(value !== undefined ? String(value) : '');
            }
        }, [isControlled, value]);

        const commit = (raw: string) => {
            const sanitized = sanitizeNumberInput(raw).trim();

            if (sanitized === '' || sanitized === '-' || sanitized === '.' || sanitized === '-.') {
                setInputText('');
                if (!isControlled) setInternalValue(undefined);
                onChange?.(undefined);
                return;
            }

            const parsed = Number(sanitized);
            if (!Number.isFinite(parsed)) return;

            const clamped = clamp(parsed, min, max);

            setInputText(String(clamped));
            if (!isControlled) setInternalValue(clamped);
            onChange?.(clamped);
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const sanitized = sanitizeNumberInput(event.target.value);
            setInputText(sanitized);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            commit(event.target.value);
            props.onBlur?.(event);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const allowedControlKeys = [
                'Backspace',
                'Delete',
                'Tab',
                'Escape',
                'Enter',
                'ArrowLeft',
                'ArrowRight',
                'ArrowUp',
                'ArrowDown',
                'Home',
                'End',
            ];

            const isShortcut =
                event.ctrlKey || event.metaKey || event.altKey;

            if (event.key === 'Enter') {
                commit((event.target as HTMLInputElement).value);
                props.onKeyDown?.(event);
                return;
            }

            if (isShortcut || allowedControlKeys.includes(event.key)) {
                props.onKeyDown?.(event);
                return;
            }

            const input = event.currentTarget;
            const current = input.value;
            const selectionStart = input.selectionStart ?? current.length;
            const selectionEnd = input.selectionEnd ?? current.length;

            const hasMinus = current.includes('-');
            const hasDot = current.includes('.');

            const isDigit = /^\d$/.test(event.key);
            const isMinus = event.key === '-';
            const isDot = event.key === '.' || event.key === ',';

            if (isDigit) {
                props.onKeyDown?.(event);
                return;
            }

            if (isMinus) {
                const insertingAtStart = selectionStart === 0;
                const replacingExistingMinus =
                    hasMinus && selectionStart === 0 && selectionEnd > 0;

                if ((!hasMinus && insertingAtStart) || replacingExistingMinus) {
                    props.onKeyDown?.(event);
                    return;
                }
            }

            if (isDot) {
                if (!hasDot) {
                    props.onKeyDown?.(event);
                    return;
                }
            }

            event.preventDefault();
            props.onKeyDown?.(event);
        };

        const increment = () => {
            const base = currentValue ?? (min ?? 0);
            const next = clamp(base + step, min, max);
            setInputText(String(next));
            if (!isControlled) setInternalValue(next);
            onChange?.(next);
        };

        const decrement = () => {
            const base = currentValue ?? (min ?? 0);
            const next = clamp(base - step, min, max);
            setInputText(String(next));
            if (!isControlled) setInternalValue(next);
            onChange?.(next);
        };

        const atMin = min !== undefined && (currentValue ?? -Infinity) <= min;
        const atMax = max !== undefined && (currentValue ?? Infinity) >= max;

        const resolvedError = error ?? (invalid ? ' ' : undefined);

        return (
            <FormField
                label={label}
                hint={hint}
                error={resolvedError}
                full={fullWidth}
                htmlFor={inputId}
                className={containerClassName}
            >
                <div
                    className={classNames(
                        'number-input',
                        `number-input--${variant}`,
                        resolvedError && 'number-input--error',
                        disabled && 'number-input--disabled',
                        fullWidth && 'number-input--full',
                    )}
                >
                    {variant === 'stepper' && (
                        <button
                            type="button"
                            tabIndex={-1}
                            className="number-input__stepper-btn number-input__stepper-btn--decrement"
                            onClick={decrement}
                            disabled={disabled || atMin}
                            aria-label="Diminuir"
                        >
                            <Icon name="minus" size={16} />
                        </button>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        type="text"
                        inputMode="decimal"
                        role="spinbutton"
                        aria-valuenow={currentValue}
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-invalid={invalid || !!error}
                        disabled={disabled}
                        value={inputText}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        className={classNames('number-input__input', inputClassName)}
                        {...props}
                    />

                    {variant === 'default' && (
                        <div className="number-input__chevrons">
                            <button
                                type="button"
                                tabIndex={-1}
                                className="number-input__chevron-btn"
                                onClick={increment}
                                disabled={disabled || atMax}
                                aria-label="Aumentar"
                            >
                                <Icon name="chevron-up" size={12} />
                            </button>
                            <button
                                type="button"
                                tabIndex={-1}
                                className="number-input__chevron-btn"
                                onClick={decrement}
                                disabled={disabled || atMin}
                                aria-label="Diminuir"
                            >
                                <Icon name="chevron-down" size={12} />
                            </button>
                        </div>
                    )}

                    {variant === 'stepper' && (
                        <button
                            type="button"
                            tabIndex={-1}
                            className="number-input__stepper-btn number-input__stepper-btn--increment"
                            onClick={increment}
                            disabled={disabled || atMax}
                            aria-label="Aumentar"
                        >
                            <Icon name="plus" size={16} />
                        </button>
                    )}
                </div>
            </FormField>
        );
    },
);

NumberInput.displayName = 'NumberInput';