import './Toast.css';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../../icons';
import type { ToastContextValue, ToastData, ToastProviderProps } from './types';

export type { ToastColor, ToastContextValue, ToastData, ToastPosition, ToastProviderProps } from './types';

const ToastContext = createContext<ToastContextValue | null>(null);

const COLOR_ICONS: Record<string, React.ReactNode> = {
    success: <Icon name="check" size={16} />,
    warning: <Icon name="warning" size={16} />,
    error: <Icon name="close" size={16} />,
    neutral: <Icon name="info" size={16} />,
    primary: <Icon name="info" size={16} />
};

function ToastItem({ toast, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
    const [exiting, setExiting] = useState(false);
    
    const handleDismiss = useCallback(() => { 
        setExiting(true); 
        setTimeout(() => onDismiss(toast.id), 250); 
    }, [toast.id, onDismiss]);

    useEffect(() => { 
        const timer = setTimeout(handleDismiss, toast.duration ?? 4000); 
        return () => clearTimeout(timer); 
    }, [handleDismiss, toast.duration]);

    const color = toast.color ?? 'primary';
    const icon = COLOR_ICONS[color] || COLOR_ICONS.primary;

    return (
        <div className={classNames('toast', `toast--${color}`, exiting && 'toast--exiting')}>
            <span className="toast-icon">
                {icon}
            </span>
            <div className="toast-content">
                <p className="toast-title">{toast.title}</p>
                {toast.description && <p className="toast-description">{toast.description}</p>}
            </div>
            <IconButton 
                icon={<Icon name="close" size={14} />}
                aria-label="Dismiss notification" 
                variant="ghost" 
                size="sm" 
                onClick={handleDismiss} 
                className="toast-close" 
            />
        </div>
    );
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
    children, 
    position = 'top-right', 
    maxToasts = 5 
}) => {
    const [status, setStatus] = useState<boolean>(false);
    const [toasts, setToasts] = useState<ToastData[]>([]);

    useEffect(() => {
        setStatus(true);
    }, []);

    const toast = useCallback((data: Omit<ToastData, 'id'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        setToasts((prev) => [...prev.slice(-(maxToasts - 1)), { ...data, id }]);
    }, [maxToasts]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            {status && createPortal(
                <div className={classNames('toast-container', `toast-container--${position}`)}>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};

export function useToast(): ToastContextValue {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
}
