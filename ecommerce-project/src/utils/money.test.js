import { it, expect, describe } from 'vitest';
import { formatCurrency } from './money';

describe('formatCurrency', () => {
  it('formats cents to dollars', () => {
    expect(formatCurrency(1999)).toBe('$19.99');
  });
  it('displays to decimal', () => {
    expect(formatCurrency(1090)).toBe('$10.90');
    expect(formatCurrency(100)).toBe('$1.00');
  })
})

