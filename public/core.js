export function assertEqual(actual, expected, message = 'Values differ') {
  // This helper deliberately compares scalar values, not deep object structures.
  if (!Object.is(actual, expected)) {
    throw new Error(`${message}: expected ${String(expected)}, received ${String(actual)}`);
  }
}
export function runCases(cases) {
  return cases.map(({ name, run }) => {
    try { run(); return { name, passed: true, detail: 'PASS' }; }
    catch (error) { return { name, passed: false, detail: error instanceof Error ? error.message : String(error) }; }
  });
}
export function shippingCost(count) {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('Count must be a non-negative integer.');
  return count === 0 || count >= 3 ? 0 : 5;
}
export function exhibit() {
  return runCases([
    { name: 'One item costs 5', run: () => assertEqual(shippingCost(1), 5) },
    { name: 'Three items reach the free boundary', run: () => assertEqual(shippingCost(3), 0) },
    { name: 'Intentional wrong value, same type', run: () => assertEqual(shippingCost(2), 99) },
    { name: 'Weak test: fixture checks itself', run: () => { const fixture = 5; assertEqual(fixture, 5); } },
  ]);
}
