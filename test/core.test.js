import test from 'node:test';
import assert from 'node:assert/strict';

import { assertEqual, runCases, shippingCost, exhibit } from '../public/core.js';
test('value equality rejects a right-type wrong-value result', () => {
  assert.throws(() => assertEqual(7, 5), /expected 5, received 7/);
  assert.throws(() => assertEqual('5', 5)); assert.doesNotThrow(() => assertEqual(5, 5));
});
test('runner catches individual failures and continues', () => {
  const results = runCases([{ name: 'bad', run: () => { throw 'broken'; } }, { name: 'good', run: () => assertEqual(1, 1) }]);
  assert.deepEqual(results.map(x => x.passed), [false, true]); assert.equal(results[0].detail, 'broken');
});
test('shipping contract has independent boundary expectations', () => {
  assert.deepEqual([0, 1, 2, 3, 4].map(shippingCost), [0, 5, 5, 0, 0]);
  for (const x of [-1, 1.5, '2', NaN]) assert.throws(() => shippingCost(x));
});
test('a strong assertion rejects a constant wrong candidate', () => {
  const wrong = () => 5;
  assert.equal(runCases([{ name: 'boundary', run: () => assertEqual(wrong(3), 0) }])[0].passed, false);
});
test('exhibit exposes intentional failure and weak-test limitation', () => {
  assert.deepEqual(exhibit().map(x => x.passed), [true, true, false, true]);
});
