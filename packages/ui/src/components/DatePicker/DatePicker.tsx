import './DatePicker.css';
import React from 'react';
import { classNames, LabelFormater } from '../../utils';
import { Icon } from '../../icons';
import { FormField } from '../FormField/FormField';
import { Button } from '../Button/Button';
import type { DatePickerProps } from './types';

export type { DatePickerProps } from './types';

const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

function parseDateValue(value?: string) {
    if (!value) return null;

    const [year, month, day] = value.split('-').map(Number);
    if (!year || !month || !day) return null;

    return new Date(year, month - 1, day);
}

function formatDateValue(date: Date | null) {
    if (!date) return '';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function toIsoDate(date: Date | null) {
    if (!date) return '';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

function isSameDay(a: Date | null, b: Date | null) {
    if (!a || !b) return false;

    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
}

function buildCalendarDays(monthDate: Date) {
    const startOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
    const endOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();
    const days: Array<{ date: Date; outside: boolean }> = [];

    for (let index = startDay - 1; index >= 0; index -= 1) {
        const date = new Date(startOfMonth);
        date.setDate(startOfMonth.getDate() - (index + 1));
        days.push({ date, outside: true });
    }

    for (let day = 1; day <= totalDays; day += 1) {
        days.push({ date: new Date(monthDate.getFullYear(), monthDate.getMonth(), day), outside: false });
    }

    const minimumCells = days.length <= 35 ? 35 : 42;

    while (days.length < minimumCells) {
        const lastDate = days[days.length - 1]?.date ?? endOfMonth;
        const nextDate = new Date(lastDate);
        nextDate.setDate(lastDate.getDate() + 1);
        days.push({ date: nextDate, outside: true });
    }

    return days;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
    ({ label, error, supportText, full = false, className, id, value, defaultValue, onChange, placeholder = 'dd/mm/aaaa', disabled, size: _size, prefix: _prefix, suffix: _suffix, clearable: _clearable, ...props }, ref) => {
        const inputId = id ?? (label ? `datepicker-${LabelFormater(label)}` : undefined);
        const rootRef = React.useRef<HTMLDivElement | null>(null);
        const fallbackToday = React.useMemo(() => toIsoDate(new Date()), []);
        const initialDate = React.useMemo(() => parseDateValue(value ?? defaultValue ?? fallbackToday), [defaultValue, fallbackToday, value]);
        const [internalValue, setInternalValue] = React.useState<string>(defaultValue ?? fallbackToday);
        const [open, setOpen] = React.useState(false);
        const selectedDate = parseDateValue(value ?? internalValue);
        const [viewDate, setViewDate] = React.useState<Date>(initialDate ?? new Date());
        const isControlled = value !== undefined;

        React.useEffect(() => {
            const nextDate = parseDateValue(value ?? internalValue);
            if (nextDate) {
                setViewDate(nextDate);
            }
        }, [internalValue, value]);

        React.useEffect(() => {
            if (!open) return undefined;

            const handlePointerDown = (event: MouseEvent) => {
                if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                    setOpen(false);
                }
            };

            document.addEventListener('mousedown', handlePointerDown);
            return () => document.removeEventListener('mousedown', handlePointerDown);
        }, [open]);

        const commitValue = (nextIsoValue: string) => {
            if (!isControlled) {
                setInternalValue(nextIsoValue);
            }

            const nextEvent = {
                target: { value: nextIsoValue, id: inputId, name: props.name },
                currentTarget: { value: nextIsoValue, id: inputId, name: props.name },
            } as React.ChangeEvent<HTMLInputElement>;

            onChange?.(nextEvent);
        };

        const handleSelectDate = (date: Date) => {
            const nextIsoValue = toIsoDate(date);
            commitValue(nextIsoValue);
            setViewDate(date);
        };

        const handleClear = () => {
            commitValue('');
        };

        const handleApply = () => {
            setOpen(false);
        };

        const monthLabel = viewDate.toLocaleDateString('pt-BR', {
            month: 'long',
            year: 'numeric',
        });

        const calendarDays = buildCalendarDays(viewDate);

        return (
            <FormField label={label} error={error} hint={supportText} full={full} htmlFor={inputId} className={className}>
                <div ref={rootRef} className="date-picker">
                    <div
                        className={classNames(
                            'date-picker__field',
                            open && 'date-picker__field--open',
                            error && 'date-picker__field--error',
                            disabled && 'date-picker__field--disabled'
                        )}
                    >
                        <input
                            {...props}
                            ref={ref}
                            id={inputId}
                            type="text"
                            value={formatDateValue(selectedDate)}
                            placeholder={placeholder}
                            readOnly
                            disabled={disabled}
                            className="date-picker__input"
                            onClick={() => !disabled && setOpen(true)}
                        />
                        <button
                            type="button"
                            className="date-picker__toggle"
                            onClick={() => !disabled && setOpen((current) => !current)}
                            aria-label="Abrir calendario"
                            disabled={disabled}
                        >
                            <Icon name="calendar" size={18} />
                        </button>
                    </div>

                    {open ? (
                        <div className="date-picker__popover" role="dialog" aria-modal="false">
                            <div className="date-picker__header">
                                <button
                                    type="button"
                                    className="date-picker__nav"
                                    onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))}
                                    aria-label="Mes anterior"
                                >
                                    <Icon name="chevron-left" size={16} />
                                </button>
                                <span className="date-picker__month">{monthLabel}</span>
                                <button
                                    type="button"
                                    className="date-picker__nav"
                                    onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))}
                                    aria-label="Proximo mes"
                                >
                                    <Icon name="chevron-right" size={16} />
                                </button>
                            </div>

                            <div className="date-picker__weekdays">
                                {WEEK_DAYS.map((day) => (
                                    <span key={day} className="date-picker__weekday">{day}</span>
                                ))}
                            </div>

                            <div className="date-picker__grid">
                                {calendarDays.map(({ date, outside }) => {
                                    const isSelected = isSameDay(date, selectedDate);

                                    return (
                                        <button
                                            key={date.toISOString()}
                                            type="button"
                                            className={classNames(
                                                'date-picker__day',
                                                outside && 'date-picker__day--outside',
                                                isSelected && 'date-picker__day--selected'
                                            )}
                                            onClick={() => handleSelectDate(date)}
                                        >
                                            {date.getDate()}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="date-picker__footer">
                                <Button variant="ghost" onClick={handleClear}>Limpar</Button>
                                <Button onClick={handleApply}>Concluido</Button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </FormField>
        );
    }
);

DatePicker.displayName = 'DatePicker';
