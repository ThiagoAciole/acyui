import type * as React from 'react';

export type ImageObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: ImageObjectFit;
    radius?: ImageRadius;
    fallback?: React.ReactNode;
}
