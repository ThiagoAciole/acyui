export function sortBy<TItem>(
  items: readonly TItem[],
  compare: (left: TItem, right: TItem) => number,
): TItem[] {
  return [...items].sort(compare);
}
