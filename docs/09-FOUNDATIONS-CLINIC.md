# M012: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

A test is an experiment that can disagree with a plausible implementation. A passing assertion about its own fixture does not become useful because the runner prints green. Ask what wrong behavior each test would detect, then deliberately supply that behavior in a disposable candidate. This is a small, concrete introduction to reviewing test quality.

## Start from one visible behavior

Read this contract slowly: The handwritten runner invokes every case and records each pass or failure without stopping the exhibit. assertEqual uses Object.is for scalar equality; it is not a deep-equality library or an async runner. The sample intentionally contains a wrong expected value and a fixture-only assertion, so a green label alone is not treated as proof of meaningful coverage.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Assertion

A comparison that fails when an expected relation is violated.

**Small experiment:** Compare right-type wrong-value inputs.

Find the part of `runCases` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **assertion** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare right-type wrong-value inputs.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Case isolation

Recording one failure without preventing later cases from running.

**Small experiment:** Put a passing case after a throwing case.

Find the part of `runCases` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **case isolation** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Put a passing case after a throwing case.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Test oracle

An independent source of the expected result.

**Small experiment:** Derive the free-shipping boundary from the product rule.

Find the part of `runCases` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **test oracle** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Derive the free-shipping boundary from the product rule.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Mutation probe

A deliberately wrong candidate used to challenge a test.

**Small experiment:** Replace the boundary condition in a scratch function and predict which assertion rejects it.

Find the part of `runCases` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **mutation probe** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Replace the boundary condition in a scratch function and predict which assertion rejects it.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
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
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `runCases`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
