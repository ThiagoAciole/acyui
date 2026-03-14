import './Table.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { TableProps } from './types';

export type { TableProps } from './types';

export const Table: React.FC<TableProps> = ({
    striped = false,
    hover = true,
    compact = false,
    stickyHeader = false,
    className,
    containerClassName,
    children,
    ...props
}) => {
    return (
        <div className={classNames(
            'table-container',
            stickyHeader && 'table-container--sticky-header',
            containerClassName
        )}>
            <table
                className={classNames(
                    'table',
                    striped && 'table--striped',
                    hover && 'table--hover',
                    compact && 'table--compact',
                    className
                )}
                {...props}
            >
                {children}
            </table>
        </div>
    );
};

export const Thead = React.memo<React.HTMLAttributes<HTMLTableSectionElement>>((props) => (
    <thead {...props} />
));

export const Tbody = React.memo<React.HTMLAttributes<HTMLTableSectionElement>>((props) => (
    <tbody {...props} />
));

export const Tr = React.memo<React.HTMLAttributes<HTMLTableRowElement>>((props) => (
    <tr {...props} />
));

export const Th = React.memo<React.ThHTMLAttributes<HTMLTableCellElement>>((props) => (
    <th {...props} />
));

export const Td = React.memo<React.TdHTMLAttributes<HTMLTableCellElement>>((props) => (
    <td {...props} />
));

Table.displayName = 'Table';
Thead.displayName = 'Thead';
Tbody.displayName = 'Tbody';
Tr.displayName = 'Tr';
Th.displayName = 'Th';
Td.displayName = 'Td';
