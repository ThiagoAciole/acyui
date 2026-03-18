import { useEffect, useRef } from 'react';

export interface UseOverlayOptions {
    isOpen: boolean;
    onClose: () => void;
    closeOnEscape?: boolean;
    lockScroll?: boolean;
}

let scrollLockCount = 0;

function acquireScrollLock() {
    scrollLockCount++;
    document.body.classList.add('acioleui-scroll-lock');
}

function releaseScrollLock() {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) {
        document.body.classList.remove('acioleui-scroll-lock');
    }
}

export function useOverlay({
    isOpen,
    onClose,
    closeOnEscape = true,
    lockScroll = true
}: UseOverlayOptions) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen || !lockScroll) return;

        acquireScrollLock();
        return releaseScrollLock;
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
