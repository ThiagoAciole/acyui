import './Loader.css';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import type { LoaderProps } from './types';

export type { LoaderProps, LoaderSize } from './types';

export function Loader({ size = 'md', color, className, label = 'Loading...' }: LoaderProps) {
    const style = color ? { ['--loader-color' as string]: colorVar(color) } : {};
    
    return (
        <span role="status" aria-label={label} className={classNames('loader', `loader--${size}`, className)} style={style}>
            <span className="loader__ring" />
            <span className="sr-only">{label}</span>
        </span>
    );
}

