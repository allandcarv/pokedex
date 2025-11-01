import { z } from 'zod';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { safeParseSchema } from './safeParseJson';

describe('safeParseSchema', () => {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
  });

  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return parsed data when input is valid', () => {
    const input = { id: 1, name: 'Pikachu' };
    const result = safeParseSchema(schema, input);
    expect(result).toEqual(input);
  });

  it('should throw an error when input is invalid', () => {
    const input = { id: 'not-a-number', name: 'Bulbasaur' };
    expect(() => safeParseSchema(schema, input)).toThrow('Invalid data structure');
  });

  it('should include name in the error message if provided', () => {
    const input = { id: 'x' };
    expect(() => safeParseSchema(schema, input, { name: 'Pokemons API' })).toThrow(
      'Invalid data structure (Pokemons API)',
    );
  });

  it('should use custom message if provided', () => {
    const input = { id: 'x' };
    expect(() => safeParseSchema(schema, input, { message: 'Bad response format' })).toThrow(
      'Bad response format',
    );
  });

  it('should log the error to console.error when parsing fails', () => {
    const input = { id: 'x' };

    try {
      safeParseSchema(schema, input);
    } catch {
      // ignore
    }

    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('safeParseSchema: Invalid data structure'),
    );
  });
});
