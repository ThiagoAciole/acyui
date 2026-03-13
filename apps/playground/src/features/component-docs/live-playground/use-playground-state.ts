import { useEffect, useMemo, useState } from 'react';
import type { AnyComponentDefinition } from '../../../registry/types';

export function usePlaygroundState(definition: AnyComponentDefinition) {
  const [propsState, setPropsState] = useState<Record<string, unknown>>(definition.playground.initialProps);

  useEffect(() => {
    setPropsState(definition.playground.initialProps);
  }, [definition]);

  const code = useMemo(() => definition.playground.code(propsState), [definition, propsState]);

  const preview = useMemo(() => {
    try {
      return {
        element: definition.playground.render(propsState),
        error: null,
      };
    } catch (error) {
      return {
        element: null,
        error: error instanceof Error ? error.message : 'Erro desconhecido ao renderizar o componente.',
      };
    }
  }, [definition, propsState]);

  const setValue = (name: string, value: unknown) => {
    setPropsState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const reset = () => {
    setPropsState(definition.playground.initialProps);
  };

  return {
    propsState,
    controls: definition.playground.controls,
    code,
    preview,
    setValue,
    reset,
  };
}
