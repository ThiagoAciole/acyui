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
        size = 'medium',
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
        const listRef = useRef<HTMLUListElement>(null);
        const searchInputRef = useRef<HTMLInputElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');
        const [internalValue, setInternalValue] = useState(defaultValue ?? '');
        const [focusedIndex, setFocusedIndex] = useState(-1);
        const selectedValue = value ?? internalValue;

        useEffect(() => {
            if (!isOpen) {
                setSearchTerm('');
                setFocusedIndex(-1);
                return;
            }

            const selectedIndex = options.findIndex(o => o.value === selectedValue);
            setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);

            if (searchable) {
                searchInputRef.current?.focus();
            }
        }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

        useEffect(() => {
            if (isOpen) setFocusedIndex(0);
        }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

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

        const selectedOption = options.find((option) => option.value === selectedValue);

        const filteredOptions = useMemo(() => {
            if (!searchable || !searchTerm) return options;

            return options.filter((option) => {
                const term = option.searchValue ?? (typeof option.label === 'string' ? option.label : option.value);
                return term.toLowerCase().includes(searchTerm.toLowerCase());
            });
        }, [options, searchable, searchTerm]);

        const getNextEnabledIndex = (startIndex: number, direction: 1 | -1) => {
            const len = filteredOptions.length;
            let i = startIndex;
            for (let count = 0; count < len; count++) {
                i = ((i + direction) + len) % len;
                if (!filteredOptions[i]?.disabled) return i;
            }
            return startIndex;
        };

        const handleSelect = (nextValue: string, optionDisabled?: boolean) => {
            if (optionDisabled) return;

            if (value === undefined) {
                setInternalValue(nextValue);
            }

            onChange?.(nextValue);
            setIsOpen(false);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (disabled) return;

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (isOpen && focusedIndex >= 0 && filteredOptions[focusedIndex]) {
                    handleSelect(filteredOptions[focusedIndex].value, filteredOptions[focusedIndex].disabled);
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
                    setFocusedIndex(prev => getNextEnabledIndex(prev < 0 ? filteredOptions.length : prev, -1));
                }
            }

            if (event.key === 'Home' && isOpen) {
                event.preventDefault();
                const first = filteredOptions.findIndex(o => !o.disabled);
                if (first >= 0) setFocusedIndex(first);
            }

            if (event.key === 'End' && isOpen) {
                event.preventDefault();
                const last = filteredOptions.map((o, i) => (!o.disabled ? i : -1)).filter(i => i >= 0).at(-1);
                if (last !== undefined) setFocusedIndex(last);
            }
        };

        const activedescendant = isOpen && focusedIndex >= 0
            ? `${generatedId}-option-${focusedIndex}`
            : undefined;

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
                        aria-activedescendant={activedescendant}
                        tabIndex={disabled ? -1 : 0}
                        className={classNames(
                            'select__trigger',
                            `select__trigger--${size}`,
                            isOpen && 'select__trigger--open',
                            error && 'select__trigger--error',
                            disabled && 'select__trigger--disabled'
                        )}
                        onClick={() => !disabled && setIsOpen((current) => !current)}
                        onKeyDown={handleKeyDown}
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

                            <ul ref={listRef} id={`${generatedId}-listbox`} className="select__list" role="listbox">
                                {filteredOptions.length > 0 ? filteredOptions.map((option, index) => {
                                    const isSelected = option.value === selectedValue;
                                    const isFocused = focusedIndex === index;

                                    return (
                                        <li
                                            key={option.value}
                                            id={`${generatedId}-option-${index}`}
                                            role="option"
                                            aria-selected={isSelected}
                                            aria-disabled={option.disabled}
                                            className={classNames(
                                                'select__option',
                                                isSelected && 'select__option--selected',
                                                option.disabled && 'select__option--disabled',
                                                isFocused && 'select__option--focused'
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
