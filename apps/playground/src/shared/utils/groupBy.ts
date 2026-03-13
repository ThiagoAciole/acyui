export function groupBy<TItem, TKey extends PropertyKey>(
  items: readonly TItem[],
  getKey: (item: TItem) => TKey,
): Record<TKey, TItem[]> {
  return items.reduce<Record<TKey, TItem[]>>((groups, item) => {
    const key = getKey(item);
    const bucket = groups[key];

    if (bucket) {
      bucket.push(item);
      return groups;
    }

    groups[key] = [item];
    return groups;
  }, {} as Record<TKey, TItem[]>);
}
