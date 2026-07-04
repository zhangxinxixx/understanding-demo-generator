# Agent 框架选型不是选 API，而是选系统组织方式 - Deck Manuscript

## Slide 01
Kicker: FRAMEWORK LENS
Headline: 你不是在选框架，而是在选 Agent 系统的组织方式
Lead: AutoGen、AgentScope、CAMEL、LangGraph 的差异，根上是协作、状态和控制权的分配。
Page thesis: Agent 框架的差异来自组织方式：对话、消息、角色和状态图会把同一个 Loop 变成完全不同的系统。
Teaching move: premise + framing
Visual metaphor: cover-centered
Layout type: cover-centered
Composition sketch: A centered cover focuses the deck around one core thesis before moving into mechanisms.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-01, technical-framework-cover-centered
On-slide text:
- 对话组织
- 工程运行时
- 角色协作
- 状态图控制
Speaker text: 先把问题换一个角度。我们不是在背框架名字，而是在判断系统应该怎样组织多个 Agent、状态、工具和反馈。
Transition from previous: Open with the deck thesis.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 02
Kicker: WHY FRAMEWORK
Headline: 框架的价值是把 Loop 变成可维护系统
Lead: 手写 Loop 能教学，框架要负责长期运行、调试和恢复。
Page thesis: 手写 Loop 能教学，框架要负责长期运行、调试和恢复。
Teaching move: mechanism + implication
Visual metaphor: mechanism-equation
Layout type: mechanism-equation
Composition sketch: An equation-like composition shows how separate factors combine into one operating mechanism.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-02, technical-framework-mechanism-equation
On-slide text:
- Loop
- State
- Tools
- Trace
Speaker text: 有了这个视角，框架不再只是少写几行代码。它把思考、行动、观察这个 Loop，升级成能记录状态、调用工具、追踪错误的系统层。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 03
Kicker: BREAKPOINTS
Headline: 手写 Loop 最先坏在看不见的系统层
Lead: 复杂度不是突然出现，而是从状态漂移、工具失败和停止模糊开始累积。
Page thesis: 复杂度不是突然出现，而是从状态漂移、工具失败和停止模糊开始累积。
Teaching move: decomposition + failure
Visual metaphor: xray-stack
Layout type: xray-stack
Composition sketch: A layered x-ray makes hidden causes and breakpoints visible without turning them into a long list.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-03, technical-framework-xray-stack
On-slide text:
- 状态漂移
- 工具失败
- 停止模糊
- 回放困难
- 观测缺口
Speaker text: 继续往下看，手写 Loop 最容易坏的地方不是 while 循环本身，而是循环周围的系统层。历史越来越长，工具会失败，终止条件也会变得含糊。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 04
Kicker: FOUR MODELS
Headline: 四类框架其实是四种控制哲学
Lead: 对话涌现、消息平台、角色提示、状态图控制，对应四种不同工程取舍。
Page thesis: 对话涌现、消息平台、角色提示、状态图控制，对应四种不同工程取舍。
Teaching move: contrast + boundary
Visual metaphor: decision-matrix
Layout type: decision-matrix
Composition sketch: A matrix separates choices by criteria so the audience can compare trade-offs quickly.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-04, technical-framework-decision-matrix
On-slide text:
- AutoGen: 对话涌现
- AgentScope: 消息平台
- CAMEL: 角色提示
- LangGraph: 状态图
Speaker text: 把四类框架放在一张矩阵里，差异会更清楚。AutoGen 让角色通过对话推进，AgentScope 先搭消息和运行平台，CAMEL 依赖角色设定，LangGraph 则把控制权写进状态图。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 05
Kicker: AUTOGEN
Headline: 对话型框架适合开放协作，但流程会涌现
Lead: 当任务像专家会议，群聊式 Agent 很自然；当任务要强审计，涌现就会变成风险。
Page thesis: 当任务像专家会议，群聊式 Agent 很自然；当任务要强审计，涌现就会变成风险。
Teaching move: mechanism + example
Visual metaphor: role-orbit
Layout type: role-orbit
Composition sketch: An orbit diagram shows how roles exchange responsibility around a shared objective.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-05, technical-framework-role-orbit
On-slide text:
- Planner
- Coder
- Reviewer
- User Proxy
Speaker text: 先看对话型路线。它很适合专家分工和互相审查，因为每个角色都能接力推进。但代价是流程从消息里长出来，不像流程图那样稳定。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 06
Kicker: RUNTIME
Headline: 工程平台型框架先解决系统能不能上线
Lead: 消息、运行时、部署和观测，是从 demo 到生产必须补上的底座。
Page thesis: 消息、运行时、部署和观测，是从 demo 到生产必须补上的底座。
Teaching move: sequence + practice
Visual metaphor: route-map
Layout type: route-map
Composition sketch: A route map turns a process into ordered stations with clear movement and handoffs.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-06, technical-framework-route-map
On-slide text:
- MsgHub
- Pipeline
- Runtime
- Studio
- Deploy
Speaker text: 工程平台型框架关注的不是角色聊得多聪明，而是系统能不能稳定运行。消息分发、运行时、观测和部署，决定它能不能走出 notebook。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 07
Kicker: STATE GRAPH
Headline: 状态图路线用结构换可靠性
Lead: 显式状态、节点和条件边，让重试、审核、回退和终止变成可检查规则。
Page thesis: 显式状态、节点和条件边，让重试、审核、回退和终止变成可检查规则。
Teaching move: mechanism + control
Visual metaphor: state-graph
Layout type: state-graph
Composition sketch: A state graph shows how control moves between state, rules, and human review.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-07, technical-framework-state-graph
On-slide text:
- State
- Node
- Edge
- Condition
- Human Review
Speaker text: 如果项目最怕不可控，状态图就有优势。它把状态放在中心，让节点读写状态，让条件边决定下一步，复杂流程因此可以回放和审计。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Use this page to set up the next mechanism or decision.

## Slide 08
Kicker: SELECTION
Headline: 选型先问最不能接受哪一种失败
Lead: 怕协作不开放、怕流程不可控、怕上不了线，会导向不同框架。
Page thesis: 怕协作不开放、怕流程不可控、怕上不了线，会导向不同框架。
Teaching move: summary + application
Visual metaphor: takeaway-field
Layout type: takeaway-field
Composition sketch: A takeaway field compresses the lesson into practical decisions and memory hooks.
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: technical-framework-scene-08, technical-framework-takeaway-field
On-slide text:
- 开放讨论: AutoGen / CAMEL
- 生产运行: AgentScope
- 审计回退: LangGraph
Speaker text: 所以选型不要先问谁最流行，而要先问项目最不能接受什么失败。不同恐惧，会把你推向不同的组织方式。
Transition from previous: Carry forward the previous page's mechanism into this page's specific view.
Transition to next: Close with a practical memory hook.

