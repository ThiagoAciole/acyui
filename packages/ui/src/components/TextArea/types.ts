import type * as React from 'react';

export type TextAreaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    supportText?: string;
    full?: boolean;
    resize?: TextAreaResize;
}
