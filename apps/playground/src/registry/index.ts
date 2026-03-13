import { groupBy } from '../shared/utils/groupBy';
import { sortBy } from '../shared/utils/sortBy';
import { CATEGORY_CONFIG } from './categories';
import type { AnyComponentDefinition, SidebarGroup } from './types';

type DefinitionModule = {
  default?: AnyComponentDefinition;
};

const definitionModules = import.meta.glob<DefinitionModule>('./components/**/*.definition.tsx', {
  eager: true,
});

function compareDefinitions(left: AnyComponentDefinition, right: AnyComponentDefinition) {
  const categoryOrder = CATEGORY_CONFIG[left.category].order - CATEGORY_CONFIG[right.category].order;

  if (categoryOrder !== 0) {
    return categoryOrder;
  }

  const orderDiff = (left.order ?? Number.MAX_SAFE_INTEGER) - (right.order ?? Number.MAX_SAFE_INTEGER);
  if (orderDiff !== 0) {
    return orderDiff;
  }

  return left.name.localeCompare(right.name);
}

const discoveredDefinitions = Object.values(definitionModules)
  .map((module) => module.default)
  .filter((definition): definition is AnyComponentDefinition => Boolean(definition));

export const componentDefinitions = sortBy(discoveredDefinitions, compareDefinitions);

export const componentDefinitionsById = componentDefinitions.reduce<Record<string, AnyComponentDefinition>>(
  (definitions, definition) => {
    definitions[definition.id] = definition;
    return definitions;
  },
  {},
);

export const sidebarGroups: SidebarGroup[] = sortBy(
  Object.entries(groupBy(componentDefinitions, (definition) => definition.category)).map(([category, items]) => ({
    category: category as SidebarGroup['category'],
    label: CATEGORY_CONFIG[category as SidebarGroup['category']].label,
    icon: CATEGORY_CONFIG[category as SidebarGroup['category']].icon,
    items: sortBy(items, compareDefinitions),
  })),
  (left, right) => CATEGORY_CONFIG[left.category].order - CATEGORY_CONFIG[right.category].order,
);
