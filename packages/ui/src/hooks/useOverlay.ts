import { useEffect, useRef } from 'react';

export interface UseOverlayOptions {
    isOpen: boolean;
    onClose: () => void;
    closeOnEscape?: boolean;
    lockScroll?: boolean;
}

export function useOverlay({
    isOpen,
    onClose,
    closeOnEscape = true,
    lockScroll = true
}: UseOverlayOptions) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        if (lockScroll) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isOpen, lockScroll]);

    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeOnEscape, onClose]);

    return {
        overlayRef
    };
}
