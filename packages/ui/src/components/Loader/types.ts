import type { ColorValue } from '../../utils/styleTokens';

export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';

export interface LoaderProps {
    size?: LoaderSize;
    color?: ColorValue;
    className?: string;
    label?: string;
}
