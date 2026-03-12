import type * as React from 'react';

export interface SelectOption {
    value: string;
    label: React.ReactNode;
    searchValue?: string;
    disabled?: boolean;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    error?: string;
    supportText?: string;
    size?: SelectSize;
    placeholder?: string;
    full?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
}
