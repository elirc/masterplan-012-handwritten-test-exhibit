# Build journal: Handwritten Test Exhibit

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A junior wants a small report that proves a function works for more than its favorite example.

The main temptation was to make the project larger than its learning target. The useful boundary is **assertions and regression thinking**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

The handwritten runner invokes every case and records each pass or failure without stopping the exhibit. assertEqual uses Object.is for scalar equality; it is not a deep-equality library or an async runner. The sample intentionally contains a wrong expected value and a fixture-only assertion, so a green label alone is not treated as proof of meaningful coverage.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Make the assertion state the difference

The helper includes expected and received values in its error. That makes an ordinary wrong-value result visible without using a debugger first. Object.is deliberately gives identity semantics for objects; only scalar teaching examples are promised. Extending equality requires a new contract, not an assumption that printed JSON is a correct comparator.

**What a learner should challenge:** What does this helper do with two distinct objects containing the same properties?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Catch per case

A try/catch inside map isolates cases. Putting one catch outside the complete loop would stop after the first failure and hide later evidence. The runner also converts non-Error throws into readable detail because JavaScript can throw arbitrary values.

**What a learner should challenge:** How would you prove the case after a failure really ran?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Demonstrate a weak green test

One case compares a fixture with itself. It intentionally receives PASS from the assertion machinery, while the UI explains its limitation. The independent Node suite supplies a wrong constant candidate to show that a meaningful boundary assertion rejects it. The distinction is between a working runner and a test that asks a useful question.

**What a learner should challenge:** Which changed implementation would your proposed assertion detect?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `runCases`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
