import type * as React from 'react';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    striped?: boolean;
    hover?: boolean;
    compact?: boolean;
    stickyHeader?: boolean;
    containerClassName?: string;
}
