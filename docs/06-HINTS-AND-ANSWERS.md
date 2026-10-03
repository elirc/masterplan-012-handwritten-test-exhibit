# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add result totals

**Hint 1 — ownership:** Begin from `runCases`. Derive passed and failed counts from completed result rows rather than incrementing counters in multiple places.

**Hint 2 — reasoning:** Revisit the decision “Make the assertion state the difference”. Ask yourself: What does this helper do with two distinct objects containing the same properties?

**Answer direction:** A defensible solution demonstrates this observable result: Totals match rows including an empty suite and a suite with two failures. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a descriptive assertion label

**Hint 1 — ownership:** Begin from `runCases`. Supply a domain-specific message when the shipping boundary fails.

**Hint 2 — reasoning:** Revisit the decision “Catch per case”. Ask yourself: How would you prove the case after a failure really ran?

**Answer direction:** A defensible solution demonstrates this observable result: The message names the quantity and still includes actual and expected values. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Practice rejecting a boundary mutant

**Hint 1 — ownership:** Begin from `runCases`. Write a scratch candidate using greater-than three instead of greater-than-or-equal three.

**Hint 2 — reasoning:** Revisit the decision “Demonstrate a weak green test”. Ask yourself: Which changed implementation would your proposed assertion detect?

**Answer direction:** A defensible solution demonstrates this observable result: Your new test fails for that candidate at exactly three and passes for the reference. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Describe identity comparison

**Hint 1 — ownership:** Begin from `runCases`. Add a separate example that compares two distinct objects and explains the scalar-only contract.

**Hint 2 — reasoning:** Revisit the decision “Make the assertion state the difference”. Ask yourself: What does this helper do with two distinct objects containing the same properties?

**Answer direction:** A defensible solution demonstrates this observable result: The lesson does not claim to provide deep equality or change the scalar tests silently. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Show only failed rows

**Hint 1 — ownership:** Begin from `runCases`. Add a UI filter after collecting all results; retain the full result array.

**Hint 2 — reasoning:** Revisit the decision “Catch per case”. Ask yourself: How would you prove the case after a failure really ran?

**Answer direction:** A defensible solution demonstrates this observable result: Filtering changes display, not execution or counts; intentional failure remains visible. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Detect a vacuous test in review

**Hint 1 — ownership:** Begin from `runCases`. Write two short candidate tests, one meaningful and one fixture-only, with a reviewer checklist.

**Hint 2 — reasoning:** Revisit the decision “Demonstrate a weak green test”. Ask yourself: Which changed implementation would your proposed assertion detect?

**Answer direction:** A defensible solution demonstrates this observable result: The explanation identifies which product mutation each test would detect, including none for the weak test. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Click Run → exhibit creates four named case functions → runCases invokes each in a separate try/catch → assertEqual compares actual and expected scalar values → a thrown assertion becomes one failure row → later cases still execute.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
