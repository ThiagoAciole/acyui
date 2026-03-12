import './Divider.css';
import { classNames } from '../../utils/classNames';
import type { DividerProps } from './types';

export type { DividerOrientation, DividerProps } from './types';

export function Divider({ orientation = 'horizontal', label, className, ...props }: DividerProps) {
    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={classNames('divider', `divider--${orientation}`, label && 'divider--labeled', className)}
            {...props}
        >
            {label && orientation === 'horizontal' && <span className="divider__label">{label}</span>}
        </div>
    );
}
