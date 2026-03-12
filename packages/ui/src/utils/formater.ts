export function LabelFormater(text: string): string {
  if (!text) return '';

  return text
    .toLowerCase()
    .replace(/^\p{L}/u, (char) => char.toUpperCase());
}


