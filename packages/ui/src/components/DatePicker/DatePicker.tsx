import './DatePicker.css';
import React from 'react';
import { Input } from '../Input/Input';
import { Icon } from '../../icons';
import type { DatePickerProps } from './types';

export type { DatePickerProps } from './types';

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
    ({ prefix, ...props }, ref) => {
        return <Input ref={ref} type="date" prefix={prefix ?? <Icon name="calendar" size={16} />} {...props} />;
    }
);

DatePicker.displayName = 'DatePicker';
