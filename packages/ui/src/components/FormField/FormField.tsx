import React from 'react';
import { classNames, LabelFormater } from '../../utils';
import { Text } from '../Text/Text';
import { Flex } from '../Flex/Flex';
import './FormField.css';
import type { FormFieldProps } from './types';

export type { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
    label,
    error,
    hint,
    children,
    full = false,
    className,
    htmlFor
}) => {
    return (
        <Flex direction="column" gap="1" className={classNames('form-field-root', full && 'form-field--full', className)}>
            {label && (
                <Text size="sm" weight="medium" as="label" htmlFor={htmlFor} className="form-field-label">
                    {LabelFormater(label)}
                </Text>
            )}
            {children}
            {error && (
                <Text as="span" color="danger" size="sm" className="form-field-message" role="alert">
                    {error}
                </Text>
            )}
            {!error && hint && (
                <Text as="span" color="subtle" size="sm" className="form-field-message">
                    {hint}
                </Text>
            )}
        </Flex>
    );
};
