import React from 'react';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';
import { Icon } from '../../icons';
import type { SearchProps } from './types';

export type { SearchProps } from './types';

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
    ({ onSearch, loading = false, onChange, ...props }, ref) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
            onSearch?.(event.target.value);
        };

        return (
            <Input
                ref={ref}
                type="search"
                prefix={loading ? <Loader size="xs" /> : <Icon name="search" size={16} />}
                onChange={handleChange}
                {...props}
            />
        );
    }
);

Search.displayName = 'Search';
