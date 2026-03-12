import './Select.css';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { FormField } from '../FormField/FormField';
import { Icon } from '../../icons';
import type { SelectProps } from './types';

export type { SelectOption, SelectProps, SelectSize } from './types';

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    ({
        options,
        value,
        defaultValue,
        onChange,
        label,
        error,
        supportText,
        size = 'md',
        placeholder = 'Select...',
        full = false,
        disabled = false,
        searchable = false,
        searchPlaceholder = 'Search...',
        className,
        ...props
    }, ref) => {
        const generatedId = useId();
        const rootRef = useRef<HTMLDivElement>(null);
        const searchInputRef = useRef<HTMLInputElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');
        const [internalValue, setInternalValue] = useState(defaultValue ?? '');
        const selectedValue = value ?? internalValue;

        useEffect(() => {
            if (!isOpen) {
                setSearchTerm('');
                return;
            }

            if (searchable) {
                searchInputRef.current?.focus();
            }
        }, [isOpen, searchable]);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const selectedOption = options.find((option) => option.value === selectedValue);

        const filteredOptions = useMemo(() => {
            if (!searchable || !searchTerm) return options;

            return options.filter((option) => {
                const term = option.searchValue ?? (typeof option.label === 'string' ? option.label : option.value);
                return term.toLowerCase().includes(searchTerm.toLowerCase());
            });
        }, [options, searchable, searchTerm]);

        const handleSelect = (nextValue: string, optionDisabled?: boolean) => {
            if (optionDisabled) return;

            if (value === undefined) {
                setInternalValue(nextValue);
            }

            onChange?.(nextValue);
            setIsOpen(false);
        };

        return (
            <FormField label={label} error={error} hint={supportText} full={full} className={className} htmlFor={generatedId}>
                <div ref={rootRef} className={classNames('select', full && 'select--full')}>
                    <div
                        ref={ref}
                        id={generatedId}
                        role="combobox"
                        aria-expanded={isOpen}
                        aria-controls={`${generatedId}-listbox`}
                        aria-haspopup="listbox"
                        tabIndex={disabled ? -1 : 0}
                        className={classNames(
                            'select__trigger',
                            `select__trigger--${size}`,
                            isOpen && 'select__trigger--open',
                            error && 'select__trigger--error',
                            disabled && 'select__trigger--disabled'
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
                        <span className={classNames('select__value', !selectedOption && 'select__value--placeholder')}>
                            {selectedOption?.label ?? placeholder}
                        </span>
                        <span className="select__icon"><Icon name="chevron-down" size={16} /></span>
                    </div>

                    {isOpen && (
                        <div className="select__menu">
                            {searchable && (
                                <div className="select__search">
                                    <span className="select__search-icon"><Icon name="search" size={14} /></span>
                                    <input
                                        ref={searchInputRef}
                                        className="select__search-input"
                                        value={searchTerm}
                                        placeholder={searchPlaceholder}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                    />
                                </div>
                            )}

                            <ul id={`${generatedId}-listbox`} className="select__list" role="listbox">
                                {filteredOptions.length > 0 ? filteredOptions.map((option) => {
                                    const isSelected = option.value === selectedValue;

                                    return (
                                        <li
                                            key={option.value}
                                            role="option"
                                            aria-selected={isSelected}
                                            className={classNames(
                                                'select__option',
                                                isSelected && 'select__option--selected',
                                                option.disabled && 'select__option--disabled'
                                            )}
                                            onClick={() => handleSelect(option.value, option.disabled)}
                                        >
                                            <span>{option.label}</span>
                                            {isSelected && <span className="select__option-check"><Icon name="check" size={14} /></span>}
                                        </li>
                                    );
                                }) : (
                                    <li className="select__empty">No results found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </FormField>
        );
    }
);

Select.displayName = 'Select';
