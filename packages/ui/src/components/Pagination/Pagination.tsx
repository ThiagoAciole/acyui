import './Pagination.css';
import React, { useMemo } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../icons';
import type { PaginationProps } from './types';

export type { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    showControls = true,
    className,
    ...props
}) => {
    const pages = useMemo(() => {
        const items: Array<number | string> = [];
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);

        if (startPage > 1) {
            items.push(1);
            if (startPage > 2) items.push('dots-start');
        }

        for (let page = startPage; page <= endPage; page += 1) {
            items.push(page);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) items.push('dots-end');
            items.push(totalPages);
        }

        return items;
    }, [currentPage, totalPages]);

    return (
        <nav className={classNames('pagination', className)} aria-label="Pagination" {...props}>
            {showControls && (
                <button
                    type="button"
                    className={classNames('pagination__item', currentPage === 1 && 'pagination__item--disabled')}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <Icon name="chevron-left" size={16} />
                </button>
            )}

            {pages.map((page, index) => {
                if (typeof page === 'string') {
                    return <span key={`${page}-${index}`} className="pagination__dots">...</span>;
                }

                const isActive = page === currentPage;

                return (
                    <button
                        key={page}
                        type="button"
                        className={classNames('pagination__item', isActive && 'pagination__item--active')}
                        onClick={() => !isActive && onPageChange(page)}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {page}
                    </button>
                );
            })}

            {showControls && (
                <button
                    type="button"
                    className={classNames('pagination__item', currentPage === totalPages && 'pagination__item--disabled')}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <Icon name="chevron-right" size={16} />
                </button>
            )}
        </nav>
    );
};

Pagination.displayName = 'Pagination';
