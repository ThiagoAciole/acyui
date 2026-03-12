import type * as React from 'react';

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
    onFileSelect?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxSize?: number;
    title?: string;
    description?: string;
}
