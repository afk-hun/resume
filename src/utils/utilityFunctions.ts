export function useDefaultIfUnknown(text: string, replacement: string) {
  return text !== "unknown" ? text : replacement;
}
