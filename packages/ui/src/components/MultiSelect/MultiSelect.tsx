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
        const listRef = useRef<HTMLUListElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
        const [focusedIndex, setFocusedIndex] = useState(-1);
        const selectedValues = value ?? internalValue;

        useEffect(() => {
            if (!isOpen) {
                setFocusedIndex(-1);
                return;
            }
            setFocusedIndex(0);
        }, [isOpen]);

        useEffect(() => {
            if (!isOpen || focusedIndex < 0) return;
            const list = listRef.current;
            if (!list) return;
            (list.children[focusedIndex] as HTMLElement | undefined)?.scrollIntoView({ block: 'nearest' });
        }, [focusedIndex, isOpen]);

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

        const getNextEnabledIndex = (startIndex: number, direction: 1 | -1) => {
            const len = options.length;
            let i = startIndex;
            for (let count = 0; count < len; count++) {
                i = ((i + direction) + len) % len;
                if (!options[i]?.disabled) return i;
            }
            return startIndex;
        };

        const toggleValue = (optionValue: string, optionDisabled?: boolean) => {
            if (optionDisabled) return;

            if (selectedValues.includes(optionValue)) {
                commitChange(selectedValues.filter((item) => item !== optionValue));
                return;
            }

            commitChange([...selectedValues, optionValue]);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (disabled) return;

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (isOpen && focusedIndex >= 0 && options[focusedIndex]) {
                    toggleValue(options[focusedIndex].value, options[focusedIndex].disabled);
                } else {
                    setIsOpen((current) => !current);
                }
            }

            if (event.key === 'Escape') {
                event.preventDefault();
                setIsOpen(false);
            }

            if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                } else {
                    setFocusedIndex(prev => getNextEnabledIndex(prev < 0 ? -1 : prev, 1));
                }
            }

            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (isOpen) {
                    setFocusedIndex(prev => getNextEnabledIndex(prev < 0 ? options.length : prev, -1));
                }
            }

            if (event.key === 'Home' && isOpen) {
                event.preventDefault();
                const first = options.findIndex(o => !o.disabled);
                if (first >= 0) setFocusedIndex(first);
            }

            if (event.key === 'End' && isOpen) {
                event.preventDefault();
                const last = options.map((o, i) => (!o.disabled ? i : -1)).filter(i => i >= 0).at(-1);
                if (last !== undefined) setFocusedIndex(last);
            }
        };

        const activedescendant = isOpen && focusedIndex >= 0
            ? `${generatedId}-option-${focusedIndex}`
            : undefined;

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
                        aria-activedescendant={activedescendant}
                        tabIndex={disabled ? -1 : 0}
                        className={classNames(
                            'multiselect__trigger',
                            isOpen && 'multiselect__trigger--open',
                            error && 'multiselect__trigger--error',
                            disabled && 'multiselect__trigger--disabled'
                        )}
                        onClick={() => !disabled && setIsOpen((current) => !current)}
                        onKeyDown={handleKeyDown}
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
                        <ul ref={listRef} id={`${generatedId}-listbox`} className="multiselect__menu" role="listbox" aria-multiselectable="true">
                            {options.length > 0 ? options.map((option, index) => {
                                const isSelected = selectedValues.includes(option.value);
                                const isFocused = focusedIndex === index;

                                return (
                                    <li
                                        key={option.value}
                                        id={`${generatedId}-option-${index}`}
                                        role="option"
                                        aria-selected={isSelected}
                                        aria-disabled={option.disabled}
                                        className={classNames(
                                            'multiselect__option',
                                            isSelected && 'multiselect__option--selected',
                                            option.disabled && 'multiselect__option--disabled',
                                            isFocused && 'multiselect__option--focused'
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
