import './FileUpload.css';
import React, { useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Text } from '../Text/Text';
import { Icon } from '../../icons';
import type { FileUploadProps } from './types';

export type { FileUploadProps } from './types';

export const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    accept,
    multiple = false,
    disabled = false,
    maxSize,
    title = 'Drag and drop a file or click to upload',
    description = 'Supported files depend on the accept property.',
    className,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const processFiles = (incoming: File[]) => {
        setError(null);
        let valid = incoming;

        if (maxSize) {
            const oversized = incoming.filter((file) => file.size > maxSize);
            if (oversized.length > 0) {
                setError(`Some files exceed ${Math.round(maxSize / 1024 / 1024)}MB.`);
                valid = incoming.filter((file) => file.size <= maxSize);
            }
        }

        if (!multiple && valid.length > 1) valid = [valid[0]];

        const updated = multiple ? [...files, ...valid] : valid;
        setFiles(updated);
        onFileSelect?.(updated);
    };

    return (
        <div className={classNames('file-upload', className)} {...props}>
            <div
                className={classNames(
                    'file-upload__dropzone',
                    isDragging && 'file-upload__dropzone--dragging',
                    disabled && 'file-upload__dropzone--disabled',
                    error && 'file-upload__dropzone--error'
                )}
                onDragEnter={(event) => {
                    event.preventDefault();
                    if (!disabled) setIsDragging(true);
                }}
                onDragOver={(event) => {
                    event.preventDefault();
                    if (!disabled) setIsDragging(true);
                }}
                onDragLeave={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                }}
                onDrop={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                    if (!disabled) processFiles(Array.from(event.dataTransfer.files));
                }}
                onClick={() => !disabled && inputRef.current?.click()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="file-upload__input"
                    onChange={(event) => event.target.files && processFiles(Array.from(event.target.files))}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />
                <div className="file-upload__content">
                    <div className="file-upload__icon"><Icon name="upload" size={20} /></div>
                    <Text weight="medium">{title}</Text>
                    <Text size="sm" color="neutral">{description}</Text>
                </div>
            </div>
            {error && <Text size="sm" color="error">{error}</Text>}
            {files.length > 0 && (
                <ul className="file-upload__list">
                    {files.map((file, index) => (
                        <li key={`${file.name}-${index}`} className="file-upload__item">
                            <span className="file-upload__file-name">{file.name}</span>
                            <button
                                type="button"
                                className="file-upload__remove"
                                onClick={() => {
                                    const updated = files.filter((_, itemIndex) => itemIndex !== index);
                                    setFiles(updated);
                                    onFileSelect?.(updated);
                                }}
                            >
                                <Icon name="close" size={14} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
