# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Run button and printing of result rows, followed by the weak-test warning. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `runCases`. Use this trace as a map: Click Run → exhibit creates four named case functions → runCases invokes each in a separate try/catch → assertEqual compares actual and expected scalar values → a thrown assertion becomes one failure row → later cases still execute.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding a small pure function.

## Decision: Make the assertion state the difference

The helper includes expected and received values in its error. That makes an ordinary wrong-value result visible without using a debugger first. Object.is deliberately gives identity semantics for objects; only scalar teaching examples are promised. Extending equality requires a new contract, not an assumption that printed JSON is a correct comparator.

**Review question:** What does this helper do with two distinct objects containing the same properties?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Catch per case

A try/catch inside map isolates cases. Putting one catch outside the complete loop would stop after the first failure and hide later evidence. The runner also converts non-Error throws into readable detail because JavaScript can throw arbitrary values.

**Review question:** How would you prove the case after a failure really ran?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Demonstrate a weak green test

One case compares a fixture with itself. It intentionally receives PASS from the assertion machinery, while the UI explains its limitation. The independent Node suite supplies a wrong constant candidate to show that a meaningful boundary assertion rejects it. The distinction is between a working runner and a test that asks a useful question.

**Review question:** Which changed implementation would your proposed assertion detect?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), wording and interaction in the browser adapter (`public/app.js`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
