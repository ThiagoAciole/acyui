import React, { useLayoutEffect, useRef, useState } from 'react';
import { Icon } from '../../icons';
import { classNames } from '../../utils/classNames';
import './Carousel.css';
import type { CarouselProps } from './types';

export type { CarouselProps } from './types';

export const Carousel: React.FC<CarouselProps> = ({
    items,
    index,
    defaultIndex = 0,
    onChange,
    itemsPerView = 1,
    showDots = true,
    showArrows = true,
    loop = false,
    className,
}) => {
    const isControlled = index !== undefined;
    const [internalIndex, setInternalIndex] = useState(defaultIndex);
    const current = isControlled ? (index ?? 0) : internalIndex;

    const count = items.length;

    const maxIndex = loop ? count - 1 : Math.max(0, count - itemsPerView);
    const dotCount = maxIndex + 1;

    const touchStartPos = useRef(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const firstSlideRef = useRef<HTMLDivElement>(null);

    const [stepSize, setStepSize] = useState(0);

    useLayoutEffect(() => {
        const track = trackRef.current;
        const firstSlide = firstSlideRef.current;

        if (!track || !firstSlide) return;

        const measure = () => {
            const trackStyles = window.getComputedStyle(track);
            const gap = parseFloat(trackStyles.columnGap || '0');
            const slideSize = firstSlide.getBoundingClientRect().width;
            setStepSize(slideSize + gap);
        };

        measure();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(track);
        resizeObserver.observe(firstSlide);

        return () => {
            resizeObserver.disconnect();
        };
    }, [itemsPerView, items.length]);

    const go = (next: number) => {
        const target = loop
            ? ((next % count) + count) % count
            : Math.min(Math.max(next, 0), maxIndex);

        if (target === current) return;

        if (!isControlled) setInternalIndex(target);
        onChange?.(target);
    };

    const prev = () => go(current - 1);
    const next = () => go(current + 1);

    const atStart = !loop && current === 0;
    const atEnd = !loop && current >= maxIndex;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prev();
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            next();
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartPos.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const delta = touchStartPos.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) next();
            else prev();
        }
    };

    const slideBasis = `calc((100% - (var(--carousel-gap) * ${Math.max(itemsPerView - 1, 0)})) / ${itemsPerView})`;

    return (
        <div
            className={classNames('carousel', 'carousel--horizontal', className)}
            role="region"
            aria-label="Carrossel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div className="carousel__row">
                {showArrows && (
                    <button
                        type="button"
                        className="carousel__arrow"
                        onClick={prev}
                        disabled={atStart}
                        aria-label="Slide anterior"
                    >
                        <Icon name="chevron-left" size={16} />
                    </button>
                )}

                <div
                    className="carousel__viewport"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        ref={trackRef}
                        className="carousel__track"
                        style={{ transform: `translate3d(-${stepSize * current}px, 0, 0)` }}
                        aria-live="polite"
                    >
                        {items.map((item, i) => (
                            <div
                                key={i}
                                ref={i === 0 ? firstSlideRef : undefined}
                                className="carousel__slide"
                                style={{ flex: `0 0 ${slideBasis}`, maxWidth: slideBasis }}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${i + 1} de ${count}`}
                                aria-hidden={i < current || i >= current + itemsPerView}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {showArrows && (
                    <button
                        type="button"
                        className="carousel__arrow"
                        onClick={next}
                        disabled={atEnd}
                        aria-label="Próximo slide"
                    >
                        <Icon name="chevron-right" size={16} />
                    </button>
                )}
            </div>

            {showDots && dotCount > 1 && (
                <div className="carousel__dots" role="tablist" aria-label="Slides">
                    {Array.from({ length: dotCount }, (_, i) => (
                        <button
                            key={i}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Ir para posição ${i + 1}`}
                            className={classNames(
                                'carousel__dot',
                                i === current && 'carousel__dot--active',
                            )}
                            onClick={() => go(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Carousel.displayName = 'Carousel';
