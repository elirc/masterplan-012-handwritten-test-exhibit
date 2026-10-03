# M012: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain assertion through this project

A comparison that fails when an expected relation is violated.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain case isolation through this project

Recording one failure without preventing later cases from running.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain test oracle through this project

An independent source of the expected result.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain mutation probe through this project

A deliberately wrong candidate used to challenge a test.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: shippingCost(2)

5, so comparing it to 99 must fail

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: shippingCost(3)

0 at the free-shipping boundary

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: assert fixture equals fixture

Passes even if shippingCost is broken; it never calls the behavior

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What does this helper do with two distinct objects containing the same properties?

The helper includes expected and received values in its error. That makes an ordinary wrong-value result visible without using a debugger first. Object.is deliberately gives identity semantics for objects; only scalar teaching examples are promised. Extending equality requires a new contract, not an assumption that printed JSON is a correct comparator.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** How would you prove the case after a failure really ran?

A try/catch inside map isolates cases. Putting one catch outside the complete loop would stop after the first failure and hide later evidence. The runner also converts non-Error throws into readable detail because JavaScript can throw arbitrary values.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Which changed implementation would your proposed assertion detect?

One case compares a fixture with itself. It intentionally receives PASS from the assertion machinery, while the UI explains its limitation. The independent Node suite supplies a wrong constant candidate to show that a meaningful boundary assertion rejects it. The distinction is between a working runner and a test that asks a useful question.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Would your test still pass if the implementation always returned the same answer?

A test is an experiment that can disagree with a plausible implementation. A passing assertion about its own fixture does not become useful because the runner prints green. Ask what wrong behavior each test would detect, then deliberately supply that behavior in a disposable candidate. This is a small, concrete introduction to reviewing test quality.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add an assertThrows helper

**First hint:** The desired improvement is “Express expected failure behavior clearly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Invoke a supplied function; distinguish no throw from a matching error; return a useful mismatch message.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A nonthrowing candidate fails the assertion and the correct error passes.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose type-only or message matching. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add skipped-case metadata

**First hint:** The desired improvement is “Represent an intentionally unrun case honestly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add an explicit skip field; bypass invocation for skipped cases; derive separate pass, fail and skip counts.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A skipped case is never reported as a pass.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the skip-reason requirement. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add unique case names

**First hint:** The desired improvement is “Make reports unambiguous.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Validate case names before execution; detect duplicates; explain setup errors separately from product failures.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Two identical labels cannot hide which case failed.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose rejection or disambiguation policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a deterministic case order

**First hint:** The desired improvement is “Teach that report order is part of readability.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep declared order; add a fixture with mixed outcomes; test output ordering without relying on wall-clock timing.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A failure does not reorder later cases or erase them.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how the UI numbers cases. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a compare-candidates exhibit

**First hint:** The desired improvement is “Run the same useful suite against two implementations.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Inject a shipping function into a tiny suite factory; supply reference and wrong candidates; compare failures.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A constant-five candidate is rejected at the free boundary.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose another plausible wrong candidate. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a suite-empty warning

**First hint:** The desired improvement is “Avoid interpreting no tests as coverage.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Detect an empty result set; show a clear no-cases message; keep it distinct from all passed.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Zero cases never displays a success claim about shipping behavior.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose warning placement. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Report thrown objects readably

**First hint:** The desired improvement is “Handle JavaScript's unusual throw values.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Test string, Error and plain-object throws; choose safe formatting; keep runner continuation intact.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Report generation itself does not crash on the supplied throw fixtures.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how much object detail to expose. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a test-review worksheet

**First hint:** The desired improvement is “Help learners critique an assertion before running it.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Record behavior called, expected-result source and rejected candidate; include one weak fixture-only example.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Every claimed useful test names a concrete defect it can detect.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a three-question rubric. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Document async limits explicitly

**First hint:** The desired improvement is “Prevent accidental false passes for promises.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Supply a returning Promise in a scratch case; observe the synchronous runner's limit; either reject thenables or design a separate async contract.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide never claims the current runner awaits asynchronous work.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose rejection versus a separate future runner. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
