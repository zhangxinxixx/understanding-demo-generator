# Content Density and Coherence

The first generated version must not be visually polished but intellectually thin. A teaching deck should feel like a complete explanation compressed into pages, not scattered labels placed on a decorative layout.

## Core rule

For every normal content slide, design content around one organizing idea plus enough supporting material to teach it.

A content slide must include:

1. a central claim that advances the deck argument;
2. a mechanism, structure, comparison, route, or evidence relationship;
3. at least one concrete support element such as example, boundary, failure mode, implication, evidence, or decision rule;
4. a visible information architecture that shows how the pieces relate;
5. a bridge that explains why this page follows the previous page and why the next page is needed.

Avoid pages that contain only:

- a title plus three short labels;
- scattered chips with no relationship;
- a decorative diagram with no explanation;
- disconnected cards where each card could be removed without changing the argument;
- beautiful but under-explained visuals.

## Minimum visible density

Use compact density, not sparse density, unless the user explicitly asks for a very minimal deck.

For each content slide, target:

- 1 headline claim;
- 1 short lead or page thesis;
- 3-6 visible semantic units;
- 1 relationship layer: arrows, grouping, axis, stages, proof path, dependency links, evidence weights, or route order;
- 2-5 small tags / labels / markers that clarify status, role, type, or relation.

This does not mean adding paragraphs. It means creating enough structured information for the slide to teach something by itself.

## Information architecture

Before visual design, write an `informationArchitecture` plan:

```text
Central claim:
Visible units:
Relationship between units:
Support element:
What goes into speakerText instead of visible text:
Why the page is not scattered:
```

Then convert that plan into layout. Do not place modules first and fill them later.

## Coherence rule

Every slide should have a clear local argument:

```text
Because A is true,
B becomes the key mechanism,
so C is the practical implication or next question.
```

If the page only says `A / B / C` without explaining the relationship, it is too scattered.

## Density by domain

Academic:
- include claim, assumption, derivation/proof step, and conclusion;
- avoid isolated theorem labels with no logical path.

Architecture:
- include components, flows, interface boundaries, and responsibility split;
- avoid just listing layers without connections.

Engineering:
- include step, input/output, validation gate, failure or rollback;
- avoid generic process cards without operational detail.

Research:
- include thesis, evidence, variable relationship, scenario or risk;
- avoid unsupported conclusion cards.

Product:
- include pain, capability, workflow, value, and proof/outcome;
- avoid marketing slogans without transformation path.

Strategy:
- include decision question, options, tradeoff criteria, implication;
- avoid decorative roadmap with no choice logic.

Interview-learning:
- include question, answer structure, example, pitfall, follow-up;
- avoid a concept list that does not help answer an interviewer.

## Required slide fields

Each content slide in `slides.json.visualPlan` should include:

```json
{
  "informationArchitecture": "central claim, visible units, and relationships",
  "contentDensity": "visible unit count, support element, and density level",
  "coherenceLinks": "how this slide connects previous/current/next ideas"
}
```

These fields are required because shallow first drafts usually fail before visual design begins.

## Failure examples

Weak:

```text
Headline: Agent 记忆
Cards: 短期记忆 / 长期记忆 / 向量库
```

Better:

```text
Headline: 记忆不是越多越好，而是把状态放到正确层级
Visible units: working context, durable memory, retrieval index, write policy, failure boundary
Relationship: state moves from immediate context to durable storage only when it passes a write rule
Support: example of hallucinated memory caused by writing unverified facts
```

Weak:

```text
Headline: 系统架构
Cards: 前端 / 后端 / 模型 / 数据库
```

Better:

```text
Headline: 架构图要说明责任边界，而不是堆组件名称
Visible units: user input, orchestration, tool gateway, memory service, model route, observability
Relationship: request enters orchestration, branches through tools/memory/model, then logs feedback for evaluation
Support: failure point at gateway timeout and state mismatch
```
