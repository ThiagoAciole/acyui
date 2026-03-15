import type * as React from 'react';

export interface CarouselProps {
  /** Array of slides — accepts any ReactNode: images, components, JSX */
  items: React.ReactNode[];
  /** Controlled active index */
  index?: number;
  /** Initial index when uncontrolled */
  defaultIndex?: number;
  /** Called when the active slide changes */
  onChange?: (index: number) => void;
  /** Number of slides visible at once (default: 1) */
  itemsPerView?: number;
  /** Show dot indicators (default: true) */
  showDots?: boolean;
  /** Show prev/next arrow buttons (default: true) */
  showArrows?: boolean;
  /** Wrap around from last to first slide (default: false) */
  loop?: boolean;
  className?: string;
}
