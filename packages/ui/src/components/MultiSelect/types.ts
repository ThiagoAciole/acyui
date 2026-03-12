import type * as React from 'react';

export interface MultiSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface MultiSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: MultiSelectOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    label?: string;
    error?: string;
    supportText?: string;
    placeholder?: string;
    full?: boolean;
    disabled?: boolean;
}
