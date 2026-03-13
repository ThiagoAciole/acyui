import { componentCategories } from './categories';
import { dataDisplayMeta, dataDisplayPlaygrounds } from './data-display';
import { feedbackMeta, feedbackPlaygrounds } from './feedback';
import { formsMeta, formsPlaygrounds } from './forms';
import { layoutMeta, layoutPlaygrounds } from './layout';
import { navigationMeta, navigationPlaygrounds } from './navigation';
import { overlayMeta, overlayPlaygrounds } from './overlay';
import { typographyMeta, typographyPlaygrounds } from './typography';
import type { Category, ComponentMeta, PlaygroundConfigMap } from './types';

const orderedMetaByCategory: Record<Category, ComponentMeta[]> = {
  typography: typographyMeta,
  forms: formsMeta,
  'data-display': dataDisplayMeta,
  navigation: navigationMeta,
  feedback: feedbackMeta,
  overlay: overlayMeta,
  layout: layoutMeta,
};

export const componentRoutes: ComponentMeta[] = componentCategories.flatMap((category) => orderedMetaByCategory[category]);

export const playgroundConfigs: PlaygroundConfigMap = {
  ...typographyPlaygrounds,
  ...formsPlaygrounds,
  ...dataDisplayPlaygrounds,
  ...navigationPlaygrounds,
  ...feedbackPlaygrounds,
  ...overlayPlaygrounds,
  ...layoutPlaygrounds,
};

export const componentRegistry = componentRoutes.reduce<Record<string, ComponentMeta>>((accumulator, component) => {
  accumulator[component.id] = component;
  return accumulator;
}, {});
