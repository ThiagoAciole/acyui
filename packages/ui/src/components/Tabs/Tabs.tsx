import './Tabs.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import type { TabsProps } from './types';

export type { TabItem, TabsProps, TabsSize, TabsVariant } from './types';

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultValue,
    value: controlledValue,
    onChange,
    className,
    variant = 'default',
    size = 'md'
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value ?? '');
    const activeValue = controlledValue ?? internalValue;

    const handleSelect = (val: string) => {
        if (controlledValue === undefined) {
            setInternalValue(val);
        }
        onChange?.(val);
    };

    const activeTab = tabs.find((t) => t.value === activeValue);

    return (
        <div className={classNames('tabs', `tabs--${variant}`, `tabs--${size}`, className)}>
            <div className="tabs-list" role="tablist">
                {tabs.map((tab) => {
                    const isActive = activeValue === tab.value;
                    const triggerClasses = classNames(
                        'tabs-trigger',
                        isActive && 'tabs-trigger--active'
                    );

                    if (tab.href) {
                        return (
                            <a
                                key={tab.value}
                                role="tab"
                                href={tab.href}
                                aria-selected={isActive}
                                className={triggerClasses}
                                onClick={(e) => {
                                    if (tab.disabled) e.preventDefault();
                                    else handleSelect(tab.value);
                                }}
                            >
                                {tab.label}
                            </a>
                        );
                    }

                    return (
                        <button
                            key={tab.value}
                            role="tab"
                            type="button"
                            disabled={tab.disabled}
                            aria-selected={isActive}
                            className={triggerClasses}
                            onClick={() => handleSelect(tab.value)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div
                role="tabpanel"
                className="tabs-panel"
                tabIndex={0}
            >
                {activeTab?.content}
            </div>
        </div>
    );
};

Tabs.displayName = 'Tabs';
