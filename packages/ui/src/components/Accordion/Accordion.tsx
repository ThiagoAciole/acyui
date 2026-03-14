import './Accordion.css';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../icons';
import type { AccordionComponent, AccordionItemProps } from './types';

export type { AccordionComponent, AccordionItemProps, AccordionProps } from './types';

interface AccordionContextValue {
    toggle: (id: string) => void;
    openItems: string[];
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionState(type: 'single' | 'multiple', defaultValue?: string | string[]) {
    const initial = Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
    const [openItems, setOpenItems] = useState<string[]>(initial);

    const toggle = useCallback((id: string) => {
        setOpenItems((current) => {
            const isOpen = current.includes(id);
            if (type === 'single') return isOpen ? [] : [id];
            return isOpen ? current.filter((item) => item !== id) : [...current, id];
        });
    }, [type]);

    return { openItems, toggle };
}

export const AccordionItem = React.memo<AccordionItemProps>(({
    title, children, isOpen: isOpenProp = false, onToggle: onToggleProp, id = '', className, ...props
}) => {
    const ctx = useContext(AccordionContext);
    const isOpen = ctx ? ctx.openItems.includes(id) : isOpenProp;
    const ctxToggle = ctx?.toggle;
    const handleToggle = useCallback(() => {
        if (ctxToggle) { ctxToggle(id); } else { onToggleProp?.(); }
    }, [ctxToggle, id, onToggleProp]);

    return (
        <div className={classNames('accordion-item', isOpen && 'accordion-item--open', className)} {...props}>
            <button
                className="accordion-item__trigger"
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${id}`}
                id={`accordion-trigger-${id}`}
                type="button"
            >
                <span className="accordion-item__title">{title}</span>
                <span className="accordion-item__icon"><Icon name="chevron-down" size={16} /></span>
            </button>
            <div
                className="accordion-item__content"
                id={`accordion-content-${id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${id}`}
                hidden={!isOpen}
            >
                <div className="accordion-item__content-inner">{children}</div>
            </div>
        </div>
    );
});

AccordionItem.displayName = 'AccordionItem';

export const Accordion: AccordionComponent = ({
    children, type = 'single', defaultValue, className, ...props
}) => {
    const { openItems, toggle } = useAccordionState(type, defaultValue);
    const ctx = useMemo(() => ({ toggle, openItems }), [toggle, openItems]);
    return (
        <AccordionContext.Provider value={ctx}>
            <div className={classNames('accordion', className)} {...props}>{children}</div>
        </AccordionContext.Provider>
    );
};

Accordion.Item = AccordionItem;
