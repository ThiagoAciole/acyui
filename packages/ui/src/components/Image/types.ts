import type * as React from 'react';

export type ImageObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scaleDown';
export type ImageRadius = 'small' | 'medium' | 'large' | 'full';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: ImageObjectFit;
    radius?: ImageRadius;
    fallback?: React.ReactNode;
}
