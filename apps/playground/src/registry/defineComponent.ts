import type { ComponentDefinition } from './types';

export function defineComponent<TProps extends Record<string, unknown>>(
  definition: ComponentDefinition<TProps>,
): ComponentDefinition<TProps> {
  return definition;
}
