import './Accordion.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../icons';
import type { AccordionComponent, AccordionItemProps } from './types';

export type { AccordionComponent, AccordionItemProps, AccordionProps } from './types';

function useAccordionState(type: 'single' | 'multiple', defaultValue?: string | string[]) {
    const initial = Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
    const [openItems, setOpenItems] = useState<string[]>(initial);

    const toggle = (id: string) => {
        setOpenItems((current) => {
            const isOpen = current.includes(id);
            if (type === 'single') return isOpen ? [] : [id];
            return isOpen ? current.filter((item) => item !== id) : [...current, id];
        });
    };

    return { openItems, toggle };
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    onToggle,
    id,
    className,
    ...props
}) => (
    <div className={classNames('accordion-item', isOpen && 'accordion-item--open', className)} {...props}>
        <button
            className="accordion-item__trigger"
            onClick={onToggle}
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

export const Accordion: AccordionComponent = ({
    children,
    type = 'single',
    defaultValue,
    className,
    ...props
}) => {
    const { openItems, toggle } = useAccordionState(type, defaultValue);

    return (
        <div className={classNames('accordion', className)} {...props}>
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement<AccordionItemProps>(child)) return child;
                const id = child.props.id ?? `accordion-item-${index}`;
                return React.cloneElement(child, {
                    id,
                    isOpen: openItems.includes(id),
                    onToggle: () => toggle(id)
                });
            })}
        </div>
    );
};

Accordion.Item = AccordionItem;
