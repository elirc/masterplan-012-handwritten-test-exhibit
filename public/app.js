import { exhibit } from './core.js';
document.querySelector('#run').onclick = () => {
  const results = exhibit();
  document.querySelector('#result').textContent = results.map(r => `${r.passed ? 'PASS' : 'FAIL'} | ${r.name} | ${r.detail}`).join('\n') + '\n\nThe fixture-only PASS proves nothing about shippingCost.';
};
