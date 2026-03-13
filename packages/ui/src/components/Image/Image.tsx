import './Image.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Skeleton } from '../Skeleton/Skeleton';
import type { ImageProps } from './types';

export type { ImageObjectFit, ImageProps, ImageRadius } from './types';

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    objectFit = 'cover',
    radius = 'medium',
    className,
    style,
    fallback,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    if (error && fallback) return <>{fallback}</>;

    return (
        <div className={classNames('image-wrapper', className)} style={style}>
            {!loaded && !error && (
                <div className={classNames('image-skeleton', `image-radius--${radius}`)}>
                    <Skeleton width="100%" height="100%" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={classNames('image', `image-fit--${objectFit}`, `image-radius--${radius}`, loaded && 'image--loaded')}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />
        </div>
    );
};
