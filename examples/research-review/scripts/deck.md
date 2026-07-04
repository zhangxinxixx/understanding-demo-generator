# RAG 评测不能只问答对没有，还要问证据链是否可靠 - Deck Manuscript

## Slide 01
Kicker: RESEARCH REVIEW
Headline: RAG 评测不能只问答对没有
Lead: 一个答案可能看起来正确，却来自错误证据、断裂引用或应该拒答的问题。
Page thesis: RAG 系统的评测要同时检查检索、证据、生成和拒答边界，否则高分答案可能掩盖错误证据链。
Teaching move: premise + framing
Visual metaphor: cover-centered
Layout type: cover-centered
Composition sketch: A centered cover focuses the deck around one core thesis before moving into mechanisms.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-01, research-review-cover-centered
On-slide text:
- 检索覆盖
- 证据相关
- 忠实生成
- 拒答边界
Speaker text: 这组研究解读的核心问题是：RAG 评测不能只问答案对不对。因为答案表面正确，证据链也可能是错的。
Transition from previous: Open with the deck thesis.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 02
Kicker: PROBLEM
Headline: 单一准确率会把四种错误混在一起
Lead: 检索没找对、证据不相关、生成幻觉、拒答失败，都会落到同一个分数里。
Page thesis: 检索没找对、证据不相关、生成幻觉、拒答失败，都会落到同一个分数里。
Teaching move: decomposition + failure
Visual metaphor: xray-stack
Layout type: xray-stack
Composition sketch: A layered x-ray makes hidden causes and breakpoints visible without turning them into a long list.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-02, research-review-xray-stack
On-slide text:
- 检索漏召
- 证据偏题
- 生成幻觉
- 引用断裂
- 拒答失败
Speaker text: 如果只看准确率，很多错误会被混在一起。检索可能漏掉关键材料，证据可能偏题，生成可能改写过度，系统也可能在应该拒答时强行回答。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 03
Kicker: DECOMPOSE
Headline: RAG 质量要拆成检索、证据和生成三层
Lead: 每一层都能独立失败，也会把错误传给下一层。
Page thesis: 每一层都能独立失败，也会把错误传给下一层。
Teaching move: decomposition + mechanism
Visual metaphor: layer-stack
Layout type: layer-stack
Composition sketch: A layer stack separates independent failure surfaces and their downstream effects.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-03, research-review-layer-stack
On-slide text:
- Retrieval
- Evidence
- Generation
- Citation
Speaker text: 更合理的方式是分层评测。检索层决定材料是否回来，证据层决定材料是否相关，生成层决定答案是否忠实，引用层决定结果能否追踪。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 04
Kicker: EVIDENCE
Headline: 证据链的核心不是有引用，而是引用能支撑断言
Lead: 引用数量多不代表可靠，关键是每个主张是否能被对应证据支持。
Page thesis: 引用数量多不代表可靠，关键是每个主张是否能被对应证据支持。
Teaching move: evidence + causality
Visual metaphor: evidence-chain
Layout type: evidence-chain
Composition sketch: An evidence chain makes the support path between claim, proof, and decision explicit.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-04, research-review-evidence-chain
On-slide text:
- Claim
- Passage
- Support
- Trace
Speaker text: 证据链评测的关键，不是答案后面有没有引用，而是每个断言是否能被对应证据支撑。引用数量多，反而可能掩盖证据质量差。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 05
Kicker: METRICS
Headline: 指标要覆盖召回、相关、忠实和拒答
Lead: 不同指标回答不同问题，不能互相替代。
Page thesis: 不同指标回答不同问题，不能互相替代。
Teaching move: contrast + boundary
Visual metaphor: decision-matrix
Layout type: decision-matrix
Composition sketch: A matrix separates choices by criteria so the audience can compare trade-offs quickly.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-05, research-review-decision-matrix
On-slide text:
- Recall
- Relevance
- Faithfulness
- Abstention
Speaker text: 所以指标要成组出现。召回回答材料是否找齐，相关性回答材料是否对题，忠实度回答生成是否越界，拒答指标回答系统是否知道自己不知道。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 06
Kicker: FAILURE
Headline: 最危险的失败是自信地引用错误证据
Lead: 用户看到引用会降低警惕，因此错误证据比没有证据更有欺骗性。
Page thesis: 用户看到引用会降低警惕，因此错误证据比没有证据更有欺骗性。
Teaching move: failure + boundary
Visual metaphor: risk-board
Layout type: risk-board
Composition sketch: A risk board groups failure modes so boundaries and mitigations are easy to scan.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-06, research-review-risk-board
On-slide text:
- 错引
- 过度概括
- 证据拼接
- 伪确定性
Speaker text: 最危险的失败不是没有答案，而是自信地引用错误证据。用户看到引用会放松警惕，所以错引比普通幻觉更难被发现。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 07
Kicker: EVAL SET
Headline: 评测集要故意包含边界问题
Lead: 可答、部分可答、不可答、证据冲突，四类样本都要出现。
Page thesis: 可答、部分可答、不可答、证据冲突，四类样本都要出现。
Teaching move: sequence + practice
Visual metaphor: route-map
Layout type: route-map
Composition sketch: A route map turns a process into ordered stations with clear movement and handoffs.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-07, research-review-route-map
On-slide text:
- 可答
- 部分可答
- 不可答
- 证据冲突
Speaker text: 一个好的评测集，要故意包含边界问题。不只是可答问题，还要有部分可答、不可答和证据冲突的样本。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 08
Kicker: CONCLUSION
Headline: RAG 评测的目标是暴露证据链，而不是美化答案
Lead: 当证据、引用和拒答边界被看见，系统才真正可改进。
Page thesis: 当证据、引用和拒答边界被看见，系统才真正可改进。
Teaching move: summary + application
Visual metaphor: takeaway-field
Layout type: takeaway-field
Composition sketch: A takeaway field compresses the lesson into practical decisions and memory hooks.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: research-review-scene-08, research-review-takeaway-field
On-slide text:
- 分层评测
- 主张对齐
- 边界样本
- 拒答能力
Speaker text: 结论是，RAG 评测的目标不是让答案看起来更漂亮，而是把证据链暴露出来。只有看见错误在哪一层，系统才有办法改进。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Close with a practical memory hook.

