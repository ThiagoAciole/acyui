import type * as React from 'react';

export interface FormFieldProps {
    label?: string;
    error?: string;
    hint?: string;
    children: React.ReactNode;
    full?: boolean;
    className?: string;
    htmlFor?: string;
}
