import './MultiSelect.css';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { FormField } from '../FormField/FormField';
import { Icon } from '../../icons';
import type { MultiSelectProps } from './types';

export type { MultiSelectOption, MultiSelectProps } from './types';

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
    ({
        options,
        value,
        defaultValue = [],
        onChange,
        label,
        error,
        supportText,
        placeholder = 'Select options...',
        full = false,
        disabled = false,
        className,
        ...props
    }, ref) => {
        const generatedId = useId();
        const rootRef = useRef<HTMLDivElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
        const selectedValues = value ?? internalValue;

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const selectedOptions = useMemo(
            () => options.filter((option) => selectedValues.includes(option.value)),
            [options, selectedValues]
        );

        const commitChange = (nextValue: string[]) => {
            if (value === undefined) {
                setInternalValue(nextValue);
            }

            onChange?.(nextValue);
        };

        const toggleValue = (optionValue: string, optionDisabled?: boolean) => {
            if (optionDisabled) return;

            if (selectedValues.includes(optionValue)) {
                commitChange(selectedValues.filter((item) => item !== optionValue));
                return;
            }

            commitChange([...selectedValues, optionValue]);
        };

        return (
            <FormField label={label} error={error} hint={supportText} full={full} className={className} htmlFor={generatedId}>
                <div ref={rootRef} className={classNames('multiselect', full && 'multiselect--full')}>
                    <div
                        ref={ref}
                        id={generatedId}
                        role="combobox"
                        aria-expanded={isOpen}
                        aria-controls={`${generatedId}-listbox`}
                        aria-haspopup="listbox"
                        tabIndex={disabled ? -1 : 0}
                        className={classNames(
                            'multiselect__trigger',
                            isOpen && 'multiselect__trigger--open',
                            error && 'multiselect__trigger--error',
                            disabled && 'multiselect__trigger--disabled'
                        )}
                        onClick={() => !disabled && setIsOpen((current) => !current)}
                        onKeyDown={(event) => {
                            if (disabled) return;
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                setIsOpen((current) => !current);
                            }
                            if (event.key === 'Escape') {
                                setIsOpen(false);
                            }
                        }}
                        {...props}
                    >
                        <div className="multiselect__values">
                            {selectedOptions.length > 0 ? selectedOptions.map((option) => (
                                <span key={option.value} className="multiselect__tag">
                                    <span className="multiselect__tag-label">{option.label}</span>
                                    <button
                                        type="button"
                                        className="multiselect__tag-remove"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            toggleValue(option.value);
                                        }}
                                        aria-label={`Remove ${option.label}`}
                                    >
                                        <Icon name="close" size={12} />
                                    </button>
                                </span>
                            )) : (
                                <span className="multiselect__placeholder">{placeholder}</span>
                            )}
                        </div>
                        <span className="multiselect__icon"><Icon name="chevron-down" size={16} /></span>
                    </div>

                    {isOpen && (
                        <ul id={`${generatedId}-listbox`} className="multiselect__menu" role="listbox" aria-multiselectable="true">
                            {options.length > 0 ? options.map((option) => {
                                const isSelected = selectedValues.includes(option.value);

                                return (
                                    <li
                                        key={option.value}
                                        role="option"
                                        aria-selected={isSelected}
                                        className={classNames(
                                            'multiselect__option',
                                            isSelected && 'multiselect__option--selected',
                                            option.disabled && 'multiselect__option--disabled'
                                        )}
                                        onClick={() => toggleValue(option.value, option.disabled)}
                                    >
                                        <span className="multiselect__checkbox">{isSelected ? <Icon name="check" size={12} /> : null}</span>
                                        <span>{option.label}</span>
                                    </li>
                                );
                            }) : (
                                <li className="multiselect__empty">No options available</li>
                            )}
                        </ul>
                    )}
                </div>
            </FormField>
        );
    }
);

MultiSelect.displayName = 'MultiSelect';
