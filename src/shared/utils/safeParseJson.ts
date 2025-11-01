import { z, type ZodType } from 'zod';

export type SafeParseOptions = {
  /** Friendly name used in the error message (e.g. "Pokemons API response") */
  name?: string;
  /** Custom error message (overrides name-based message) */
  message?: string;
};

/**
 * Generic safe parser for Zod schemas.
 * - Returns `z.infer<T>` on success
 * - Logs a treeified error and throws on failure
 */
export function safeParseSchema<T extends ZodType>(
  schema: T,
  data: unknown,
  opts: SafeParseOptions = {},
): z.infer<T> {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const treeified = z.treeifyError(parsed.error);
    const namePart = opts.name ? ` (${opts.name})` : '';
    const message = opts.message ?? `Invalid data structure${namePart}`;

    console.error(`safeParseSchema: ${message}`);
    console.error(JSON.stringify(treeified, null, 2));

    throw new Error(message);
  }

  return parsed.data;
}
