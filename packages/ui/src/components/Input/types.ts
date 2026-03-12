import type * as React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'prefix' | 'suffix'> {
    label?: string;
    error?: string;
    supportText?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: InputSize;
    full?: boolean;
}
