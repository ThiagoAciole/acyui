/**
 * classNames – combina strings de classes CSS ignorando falsy values.
 * Similar ao `clsx` mas sem dependências externas.
 */
type ClassValue = string | undefined | null | false | ClassValue[] | Record<string, unknown>;

export function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;
    
    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      const nested = classNames(...arg);
      if (nested) classes.push(nested);
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}



