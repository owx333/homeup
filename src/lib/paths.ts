/** Prefix public asset paths for subdirectory deploy (e.g. /homeup). */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith(base + "/")) {
    return path;
  }
  return `${base}${path}`;
}

/** Use for next/image src — Next 16 unoptimized + basePath does not always auto-prefix. */
export function asset(path: string): string {
  return withBase(path);
}
