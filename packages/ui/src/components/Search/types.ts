import type { InputProps } from '../Input/types';

export interface SearchProps extends Omit<InputProps, 'prefix' | 'type'> {
    onSearch?: (value: string) => void;
    loading?: boolean;
}
