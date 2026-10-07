# Building Handwritten Test Exhibit, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

The handwritten runner invokes every case and records each pass or failure without stopping the exhibit. assertEqual uses Object.is for scalar equality; it is not a deep-equality library or an async runner. The sample intentionally contains a wrong expected value and a fixture-only assertion, so a green label alone is not treated as proof of meaningful coverage.

The smallest useful result answers this user need: A junior wants a small report that proves a function works for more than its favorite example. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Write shipping examples independently

Read shippingCost and its stated quantity rule: zero items and three or more cost zero; one or two cost five. Draw a table for zero through four before opening test/core.test.js. The important edge is two versus three. An implementation that always returns five appears plausible for one item but fails at that edge.

**Pause and produce evidence:** shippingCost(3). Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Build one useful assertion

Read assertEqual and manually trace actual five against expected ninety-nine. The comparison must fail despite equal types. The resulting message gives both values. In a practice branch, try a type-only check and identify exactly which wrong candidate now slips through it.

**Pause and produce evidence:** shippingCost(2). Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Keep failures as data

Follow runCases from a thrown Error to a result object. The UI chooses how to print that object; the core does not know about a pre element. Run a failed case followed by a passing case to establish continuation. An empty suite is permitted and returns an empty result list; it does not establish any coverage.

**Pause and produce evidence:** shippingCost(2). Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Review the tests themselves

Open the Node tests and find the deliberately wrong candidate. It exists only inside the regression test, not the shipped shippingCost implementation. Explain why a fixture that disagrees with that candidate is stronger than a screenshot showing several green lines. Keep the intentional exhibit failure separate from the reference suite result.

**Pause and produce evidence:** assert fixture equals fixture. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose one plausible wrong implementation and a test that catches it.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
