/**
 * Sistema de variants – mapeia variant/size → classes CSS.
 * Inspirado no CVA mas sem dependências externas.
 */

type VariantMap<V extends string, S extends string> = {
  base?: string;
  variants?: Partial<Record<V, string>>;
  sizes?: Partial<Record<S, string>>;
  compound?: Array<{
    variant?: V;
    size?: S;
    className: string;
  }>;
  defaultVariants?: {
    variant?: V;
    size?: S;
  };
};

type VariantOptions<V extends string, S extends string> = {
  variant?: V;
  size?: S;
  className?: string;
};

export function createVariants<V extends string, S extends string>(
  config: VariantMap<V, S>
) {
  return function resolve(options: VariantOptions<V, S> = {}): string {
    const variant = options.variant ?? config.defaultVariants?.variant;
    const size = options.size ?? config.defaultVariants?.size;

    const classes: string[] = [];

    if (config.base) classes.push(config.base);
    if (variant && config.variants?.[variant]) {
      classes.push(config.variants[variant] as string);
    }
    if (size && config.sizes?.[size]) {
      classes.push(config.sizes[size] as string);
    }
    if (config.compound) {
      for (const c of config.compound) {
        const matchVariant = c.variant === undefined || c.variant === variant;
        const matchSize = c.size === undefined || c.size === size;
        if (matchVariant && matchSize) classes.push(c.className);
      }
    }
    if (options.className) classes.push(options.className);

    return classes.filter(Boolean).join(' ');
  };
}



