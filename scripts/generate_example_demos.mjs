import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const examplesRoot = join(root, "examples");

const demos = [
  {
    slug: "technical-framework",
    title: "Agent 框架选型不是选 API，而是选系统组织方式",
    subtitle: "技术框架讲解 demo",
    sourceType: "technical-doc",
    audience: { target: "technical-sharing", density: "standard", tone: "teaching" },
    style: "blueprint-system",
    thesis: "Agent 框架的差异来自组织方式：对话、消息、角色和状态图会把同一个 Loop 变成完全不同的系统。",
    primitives: ["Loop", "State", "Tool", "Message", "Runtime", "Trace"],
    mechanism: "任务复杂度上升后，框架需要接管状态、工具、回放、错误恢复和协作边界。",
    avoid: "不要把框架比较写成 API 功能表，也不要只堆 logo。",
    slides: [
      ["FRAMEWORK LENS", "你不是在选框架，而是在选 Agent 系统的组织方式", "AutoGen、AgentScope、CAMEL、LangGraph 的差异，根上是协作、状态和控制权的分配。", "cover-centered", "#a78bfa", ["对话组织", "工程运行时", "角色协作", "状态图控制"], "先把问题换一个角度。我们不是在背框架名字，而是在判断系统应该怎样组织多个 Agent、状态、工具和反馈。"],
      ["WHY FRAMEWORK", "框架的价值是把 Loop 变成可维护系统", "手写 Loop 能教学，框架要负责长期运行、调试和恢复。", "mechanism-equation", "#22c55e", ["Loop", "State", "Tools", "Trace"], "有了这个视角，框架不再只是少写几行代码。它把思考、行动、观察这个 Loop，升级成能记录状态、调用工具、追踪错误的系统层。"],
      ["BREAKPOINTS", "手写 Loop 最先坏在看不见的系统层", "复杂度不是突然出现，而是从状态漂移、工具失败和停止模糊开始累积。", "xray-stack", "#f59e0b", ["状态漂移", "工具失败", "停止模糊", "回放困难", "观测缺口"], "继续往下看，手写 Loop 最容易坏的地方不是 while 循环本身，而是循环周围的系统层。历史越来越长，工具会失败，终止条件也会变得含糊。"],
      ["FOUR MODELS", "四类框架其实是四种控制哲学", "对话涌现、消息平台、角色提示、状态图控制，对应四种不同工程取舍。", "decision-matrix", "#06b6d4", ["AutoGen: 对话涌现", "AgentScope: 消息平台", "CAMEL: 角色提示", "LangGraph: 状态图"], "把四类框架放在一张矩阵里，差异会更清楚。AutoGen 让角色通过对话推进，AgentScope 先搭消息和运行平台，CAMEL 依赖角色设定，LangGraph 则把控制权写进状态图。"],
      ["AUTOGEN", "对话型框架适合开放协作，但流程会涌现", "当任务像专家会议，群聊式 Agent 很自然；当任务要强审计，涌现就会变成风险。", "role-orbit", "#60a5fa", ["Planner", "Coder", "Reviewer", "User Proxy"], "先看对话型路线。它很适合专家分工和互相审查，因为每个角色都能接力推进。但代价是流程从消息里长出来，不像流程图那样稳定。"],
      ["RUNTIME", "工程平台型框架先解决系统能不能上线", "消息、运行时、部署和观测，是从 demo 到生产必须补上的底座。", "route-map", "#34d399", ["MsgHub", "Pipeline", "Runtime", "Studio", "Deploy"], "工程平台型框架关注的不是角色聊得多聪明，而是系统能不能稳定运行。消息分发、运行时、观测和部署，决定它能不能走出 notebook。"],
      ["STATE GRAPH", "状态图路线用结构换可靠性", "显式状态、节点和条件边，让重试、审核、回退和终止变成可检查规则。", "state-graph", "#8b5cf6", ["State", "Node", "Edge", "Condition", "Human Review"], "如果项目最怕不可控，状态图就有优势。它把状态放在中心，让节点读写状态，让条件边决定下一步，复杂流程因此可以回放和审计。"],
      ["SELECTION", "选型先问最不能接受哪一种失败", "怕协作不开放、怕流程不可控、怕上不了线，会导向不同框架。", "takeaway-field", "#fb7185", ["开放讨论: AutoGen / CAMEL", "生产运行: AgentScope", "审计回退: LangGraph"], "所以选型不要先问谁最流行，而要先问项目最不能接受什么失败。不同恐惧，会把你推向不同的组织方式。"]
    ]
  },
  {
    slug: "product-demo",
    title: "客服 Copilot 的价值不在回答更快，而在问题闭环更短",
    subtitle: "产品方案演示 demo",
    sourceType: "raw-ideas",
    audience: { target: "product-demo", density: "standard", tone: "practical" },
    style: "compact-dark-grid",
    thesis: "客服 Copilot 的核心价值是缩短从用户问题到知识修复、流程改进和运营反馈的闭环。",
    primitives: ["Ticket", "Knowledge", "Intent", "Action", "Feedback", "Metric"],
    mechanism: "把问题识别、知识检索、操作建议、人工接管和复盘指标接到同一条服务链路上。",
    avoid: "不要把产品演示做成单点功能炫技，也不要只展示聊天框。",
    slides: [
      ["PRODUCT DEMO", "客服 Copilot 不是替人聊天，而是缩短问题闭环", "一个好 Copilot 要把工单、知识、动作和复盘接成一条服务链路。", "cover-centered", "#38bdf8", ["识别意图", "调用知识", "建议动作", "修复知识"], "这套产品 demo 不从聊天框开始，而从服务闭环开始。客服 Copilot 的价值不是回答更像人，而是让问题更快被定位、处理和沉淀。"],
      ["PAIN", "传统客服慢在问题被拆散到多个系统", "用户问题、知识库、订单系统和复盘指标分散，导致响应和改进都变慢。", "xray-stack", "#fb923c", ["工单入口", "知识库", "订单系统", "人工经验", "复盘指标"], "传统客服最慢的地方，往往不是客服打字慢，而是问题被拆散在多个系统里。客服要在工单、知识库、订单系统和经验之间来回跳。"],
      ["FLOW", "Copilot 把一次问答变成可执行服务流", "它先识别问题，再找证据，最后给出可操作建议和接管点。", "route-map", "#22c55e", ["理解意图", "召回证据", "生成建议", "执行动作", "人工接管"], "Copilot 的第一层价值，是把问答变成服务流。它先理解用户意图，再召回证据，最后给客服可执行建议，而不是只生成一段看似流畅的话。"],
      ["PROOF", "可信回答必须带着证据一起出现", "答案、来源、置信度和风险提示要同时展示，客服才敢使用。", "evidence-chain", "#60a5fa", ["答案草稿", "引用来源", "置信度", "风险提示"], "对客服来说，可信比流畅更重要。系统必须把答案和证据放在一起，标出来源、置信度和风险，客服才敢在真实场景里使用。"],
      ["HUMAN LOOP", "人工接管不是失败，而是训练系统的入口", "低置信度、敏感问题和流程异常都应该进入人工回路，并反哺模型和知识库。", "decision-matrix", "#f59e0b", ["低置信度", "敏感投诉", "流程异常", "高价值客户"], "人工接管不是产品失败，而是系统学习的入口。低置信度、敏感投诉、流程异常都应该被标记出来，进入人工回路。"],
      ["OPS", "每一次回答都应该反向修复知识库", "高频问题、错误引用和客服改写，是知识运营最直接的信号。", "mechanism-equation", "#a78bfa", ["高频问题", "错误引用", "客服改写", "知识修复"], "当 Copilot 被用起来后，真正的增长来自运营闭环。每次客服改写、每次错误引用、每个高频问题，都是知识库应该修复的信号。"],
      ["METRICS", "评价 Copilot 要看闭环指标，而不是只看命中率", "响应时间、一次解决率、人工接管率和知识修复速度，才说明产品是否有效。", "metric-radar", "#34d399", ["响应时间", "一次解决率", "接管率", "知识修复速度"], "所以评价这个产品，不能只看检索命中率或满意度单点。要看响应时间、一次解决率、人工接管率，以及知识修复速度。"],
      ["ROLLOUT", "先从高频低风险场景上线，再扩到复杂流程", "从 FAQ 辅助开始，逐步进入订单、售后和主动运营。", "takeaway-field", "#fb7185", ["FAQ 辅助", "订单查询", "售后流程", "主动运营"], "落地路线要收敛。先从高频低风险的 FAQ 辅助开始，验证证据链和接管机制，再逐步扩到订单、售后和主动运营。"]
    ]
  },
  {
    slug: "research-review",
    title: "RAG 评测不能只问答对没有，还要问证据链是否可靠",
    subtitle: "研究/论文解读 demo",
    sourceType: "report",
    audience: { target: "research-review", density: "dense", tone: "analytical" },
    style: "minimal-evidence",
    thesis: "RAG 系统的评测要同时检查检索、证据、生成和拒答边界，否则高分答案可能掩盖错误证据链。",
    primitives: ["Query", "Retrieval", "Evidence", "Answer", "Faithfulness", "Abstention"],
    mechanism: "把答案质量拆成检索覆盖、证据相关性、忠实生成、引用可追踪和不确定性处理。",
    avoid: "不要把研究解读做成指标名词表，也不要只讲单一准确率。",
    slides: [
      ["RESEARCH REVIEW", "RAG 评测不能只问答对没有", "一个答案可能看起来正确，却来自错误证据、断裂引用或应该拒答的问题。", "cover-centered", "#93c5fd", ["检索覆盖", "证据相关", "忠实生成", "拒答边界"], "这组研究解读的核心问题是：RAG 评测不能只问答案对不对。因为答案表面正确，证据链也可能是错的。"],
      ["PROBLEM", "单一准确率会把四种错误混在一起", "检索没找对、证据不相关、生成幻觉、拒答失败，都会落到同一个分数里。", "xray-stack", "#f59e0b", ["检索漏召", "证据偏题", "生成幻觉", "引用断裂", "拒答失败"], "如果只看准确率，很多错误会被混在一起。检索可能漏掉关键材料，证据可能偏题，生成可能改写过度，系统也可能在应该拒答时强行回答。"],
      ["DECOMPOSE", "RAG 质量要拆成检索、证据和生成三层", "每一层都能独立失败，也会把错误传给下一层。", "layer-stack", "#8b5cf6", ["Retrieval", "Evidence", "Generation", "Citation"], "更合理的方式是分层评测。检索层决定材料是否回来，证据层决定材料是否相关，生成层决定答案是否忠实，引用层决定结果能否追踪。"],
      ["EVIDENCE", "证据链的核心不是有引用，而是引用能支撑断言", "引用数量多不代表可靠，关键是每个主张是否能被对应证据支持。", "evidence-chain", "#22c55e", ["Claim", "Passage", "Support", "Trace"], "证据链评测的关键，不是答案后面有没有引用，而是每个断言是否能被对应证据支撑。引用数量多，反而可能掩盖证据质量差。"],
      ["METRICS", "指标要覆盖召回、相关、忠实和拒答", "不同指标回答不同问题，不能互相替代。", "decision-matrix", "#38bdf8", ["Recall", "Relevance", "Faithfulness", "Abstention"], "所以指标要成组出现。召回回答材料是否找齐，相关性回答材料是否对题，忠实度回答生成是否越界，拒答指标回答系统是否知道自己不知道。"],
      ["FAILURE", "最危险的失败是自信地引用错误证据", "用户看到引用会降低警惕，因此错误证据比没有证据更有欺骗性。", "risk-board", "#fb7185", ["错引", "过度概括", "证据拼接", "伪确定性"], "最危险的失败不是没有答案，而是自信地引用错误证据。用户看到引用会放松警惕，所以错引比普通幻觉更难被发现。"],
      ["EVAL SET", "评测集要故意包含边界问题", "可答、部分可答、不可答、证据冲突，四类样本都要出现。", "route-map", "#fbbf24", ["可答", "部分可答", "不可答", "证据冲突"], "一个好的评测集，要故意包含边界问题。不只是可答问题，还要有部分可答、不可答和证据冲突的样本。"],
      ["CONCLUSION", "RAG 评测的目标是暴露证据链，而不是美化答案", "当证据、引用和拒答边界被看见，系统才真正可改进。", "takeaway-field", "#a78bfa", ["分层评测", "主张对齐", "边界样本", "拒答能力"], "结论是，RAG 评测的目标不是让答案看起来更漂亮，而是把证据链暴露出来。只有看见错误在哪一层，系统才有办法改进。"]
    ]
  },
  {
    slug: "executive-briefing",
    title: "SaaS 增长瓶颈从获客成本，转向价值兑现速度",
    subtitle: "业务策略简报 demo",
    sourceType: "report",
    audience: { target: "executive-briefing", density: "dense", tone: "decision" },
    style: "executive-radar",
    thesis: "当获客成本上升时，SaaS 增长要从流量效率转向价值兑现速度和留存质量。",
    primitives: ["CAC", "Activation", "Time to Value", "Retention", "Expansion", "Churn"],
    mechanism: "缩短新用户从签约到第一次价值的时间，同时用产品行为信号识别扩张和流失风险。",
    avoid: "不要做成市场宣传稿，也不要只给增长口号。",
    slides: [
      ["EXEC BRIEF", "SaaS 增长瓶颈正在从获客转向价值兑现", "当 CAC 上升，真正的增长杠杆会从流量端转到留存和扩张端。", "cover-centered", "#94a3b8", ["CAC 上升", "激活变慢", "留存分层", "扩张机会"], "这份策略简报的判断很直接：SaaS 增长瓶颈正在从获客端，转向客户价值兑现的速度。"],
      ["SHIFT", "获客效率下降时，留存质量会决定增长上限", "更多线索不能自动变成更多收入，除非用户更快进入高价值使用。", "mechanism-equation", "#38bdf8", ["CAC", "Activation", "Retention", "Expansion"], "当获客成本上升，继续加预算不一定有效。增长上限会被留存质量决定，尤其是用户能不能快速进入高价值使用。"],
      ["FUNNEL", "传统漏斗看见转化，却看不见价值延迟", "签约、开通、首次使用、关键行为之间的时间差，才暴露真实阻力。", "route-map", "#22c55e", ["签约", "开通", "首次使用", "关键行为", "续费"], "传统漏斗能看到转化率，但看不到价值延迟。签约到开通、开通到首次使用、首次使用到关键行为，每一段时间差都是阻力。"],
      ["SEGMENT", "客户不是按规模分层，而是按价值兑现速度分层", "同样的 ARR，使用深度和关键行为完全不同，续费风险也不同。", "decision-matrix", "#a78bfa", ["快速兑现", "慢速兑现", "高潜沉默", "低值噪声"], "客户分层不能只看规模。同样的 ARR，如果一个客户很快进入关键行为，另一个长期停在浅层使用，它们的续费风险完全不同。"],
      ["SIGNALS", "行为信号比满意度调查更早暴露风险", "使用频率、关键功能覆盖、协作人数和工单类型，会提前显示流失或扩张。", "metric-radar", "#60a5fa", ["使用频率", "功能覆盖", "协作人数", "工单类型"], "满意度调查通常太晚。更早的信号来自行为：使用频率、关键功能覆盖、协作人数和工单类型，都会提前暴露风险。"],
      ["RISK", "流失不是突然发生，而是价值链路连续断裂", "无人完成初始化、没人进入关键功能、团队没有形成协作，续费风险会逐步放大。", "risk-board", "#fb7185", ["初始化失败", "关键功能缺席", "协作未形成", "价值不可见"], "流失不是最后一天突然发生的。它通常从初始化失败开始，然后关键功能缺席，团队协作没有形成，价值也就无法被看见。"],
      ["ACTIONS", "增长动作要围绕缩短 Time to Value 排序", "优先做能压缩价值兑现时间的 onboarding、模板、触发器和 CSM 动作。", "evidence-chain", "#f59e0b", ["Onboarding", "模板", "触发器", "CSM Playbook"], "因此增长动作要重新排序。优先级最高的不是新增入口，而是能缩短 Time to Value 的 onboarding、模板、触发器和 CSM 动作。"],
      ["DECISION", "下一阶段增长要用留存运营替代单纯获客加码", "管理层要把指标从线索数量，切到激活速度、健康分和扩张率。", "takeaway-field", "#34d399", ["激活速度", "健康分", "扩张率", "流失预警"], "最后的决策建议是，把下一阶段增长从单纯获客加码，转向留存运营。核心指标也要从线索数量，切到激活速度、健康分和扩张率。"]
    ]
  }
];

const layoutMeta = {
  "cover-centered": {
    semanticFit: "A centered cover focuses the deck around one core thesis before moving into mechanisms.",
    depthMoves: ["premise", "framing"],
    fitStrategy: "centered-cover"
  },
  "mechanism-equation": {
    semanticFit: "An equation-like composition shows how separate factors combine into one operating mechanism.",
    depthMoves: ["mechanism", "implication"],
    fitStrategy: "compact-equation"
  },
  "xray-stack": {
    semanticFit: "A layered x-ray makes hidden causes and breakpoints visible without turning them into a long list.",
    depthMoves: ["decomposition", "failure"],
    fitStrategy: "two-column-xray"
  },
  "decision-matrix": {
    semanticFit: "A matrix separates choices by criteria so the audience can compare trade-offs quickly.",
    depthMoves: ["contrast", "boundary"],
    fitStrategy: "compact-matrix"
  },
  "role-orbit": {
    semanticFit: "An orbit diagram shows how roles exchange responsibility around a shared objective.",
    depthMoves: ["mechanism", "example"],
    fitStrategy: "hub-spoke"
  },
  "route-map": {
    semanticFit: "A route map turns a process into ordered stations with clear movement and handoffs.",
    depthMoves: ["sequence", "practice"],
    fitStrategy: "diagonal-route"
  },
  "state-graph": {
    semanticFit: "A state graph shows how control moves between state, rules, and human review.",
    depthMoves: ["mechanism", "control"],
    fitStrategy: "loop-ring"
  },
  "takeaway-field": {
    semanticFit: "A takeaway field compresses the lesson into practical decisions and memory hooks.",
    depthMoves: ["summary", "application"],
    fitStrategy: "split-band"
  },
  "evidence-chain": {
    semanticFit: "An evidence chain makes the support path between claim, proof, and decision explicit.",
    depthMoves: ["evidence", "causality"],
    fitStrategy: "chain"
  },
  "metric-radar": {
    semanticFit: "A radar-like field groups metrics around one evaluation center.",
    depthMoves: ["measurement", "contrast"],
    fitStrategy: "constellation"
  },
  "layer-stack": {
    semanticFit: "A layer stack separates independent failure surfaces and their downstream effects.",
    depthMoves: ["decomposition", "mechanism"],
    fitStrategy: "layer-stack"
  },
  "risk-board": {
    semanticFit: "A risk board groups failure modes so boundaries and mitigations are easy to scan.",
    depthMoves: ["failure", "boundary"],
    fitStrategy: "compact-matrix"
  }
};

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slideObject(raw, index, demo) {
  const [kicker, title, lead, layoutType, accent, points, speakerText] = raw;
  const meta = layoutMeta[layoutType];
  const subtitle = lead.replace(/[。；;]$/, "");
  return {
    id: `scene-${String(index + 1).padStart(2, "0")}`,
    kicker,
    title,
    lead,
    layoutType,
    accent,
    semanticFit: meta.semanticFit,
    contentBudget: {
      pointCount: points.length,
      fitStrategy: points.length > 4 ? meta.fitStrategy : "compact-balanced"
    },
    subtitle,
    durationSec: Math.max(10, Math.ceil(speakerText.length / 7)),
    narrative: {
      fromPrevious: index === 0 ? "Open with the deck thesis." : "Continue from the previous slide's mechanism.",
      currentPoint: lead,
      toNext: index === demo.slides.length - 1 ? "Close with the deck memory hook." : "Set up the next mechanism or decision."
    },
    visualPlan: {
      structure: `${layoutType} composition for ${demo.slug} slide ${index + 1}`,
      depthMoves: index === 0 ? ["premise", "framing"] : meta.depthMoves,
      accentUsage: "Use accent on the primary claim, connector line, and selected glow surfaces.",
      backgroundGlow: "Use the visual-zone radial glow and accent-tinted glow-card / glow-node surfaces.",
      symbols: points.slice(0, 4)
    },
    onSlideText: points,
    speakerText
  };
}

function firstPrinciples(demo) {
  return `# ${demo.title} - First Principles

## Input type
${demo.sourceType}

## Audience
${demo.audience.target}, ${demo.audience.tone}, ${demo.audience.density}

## Core thesis
${demo.thesis}

## Primitive concepts
${demo.primitives.map((item) => `- ${item}`).join("\n")}

## Causal mechanism
${demo.mechanism}

## Hidden assumptions
- The audience needs a teaching sequence, not a feature inventory.
- Each page should carry one decision, mechanism, contrast, risk, or action.
- Visual structure should explain the idea before the presenter adds detail.

## Failure points
- Turning the deck into repeated card grids.
- Letting subtitle or controls cover the primary visual module.
- Using a catchy title without explaining the mechanism.

## Examples to emphasize
${demo.slides.slice(1, 5).map((slide) => `- ${slide[1]}`).join("\n")}

## What to avoid
${demo.avoid}
`;
}

function deckMarkdown(demo, slides) {
  return `# ${demo.title} - Deck Manuscript

${slides.map((slide, index) => {
    const points = slide.onSlideText.map((item) => `- ${item}`).join("\n");
    return `## Slide ${String(index + 1).padStart(2, "0")}
Kicker: ${slide.kicker}
Headline: ${slide.title}
Lead: ${slide.lead}
Page thesis: ${index === 0 ? demo.thesis : slide.lead}
Teaching move: ${slide.visualPlan.depthMoves.join(" + ")}
Visual metaphor: ${slide.layoutType}
Layout type: ${slide.layoutType}
Composition sketch: ${slide.semanticFit}
Primary DOM regions: slide head, visual-zone, subtitle, progress, page switcher, navigation dots
Unique CSS classes: ${demo.slug}-${slide.id}, ${demo.slug}-${slide.layoutType}
On-slide text:
${points}
Speaker text: ${slide.speakerText}
Transition from previous: ${index === 0 ? "Open with the deck thesis." : "Carry forward the previous page's mechanism into this page's specific view."}
Transition to next: ${index === slides.length - 1 ? "Close with a practical memory hook." : "Use this page to set up the next mechanism or decision."}
`;
  }).join("\n")}
`;
}

function visualHtml(demo, slide) {
  const points = slide.onSlideText;
  const cls = `${demo.slug}-${slide.id} ${demo.slug}-${slide.layoutType}`;
  const indexed = points.map((p, i) => ({ text: p, index: i + 1, letter: String.fromCharCode(65 + i) }));
  if (slide.layoutType === "cover-centered") {
    return `<div class="visual-zone cover-zone ${cls}">
      <div class="cover-field ${demo.slug}-cover">
        <div class="cover-ghost">${esc(demo.slug).replace(/-/g, " ")}</div>
        <div class="kicker">${esc(slide.kicker)}</div>
        <h1>${esc(slide.title)}</h1>
        <p class="lead">${esc(slide.lead)}</p>
        <div class="tag-row">${points.map((p) => `<span>${esc(p)}</span>`).join("")}</div>
      </div>
    </div>`;
  }

  if (demo.slug === "technical-framework") {
    if (slide.layoutType === "role-orbit" || slide.layoutType === "state-graph") {
      return `<div class="visual-zone ${cls}">
        <div class="blueprint-orbit">
          <div class="bp-core glow-card"><b>${esc(slide.kicker)}</b><span>${esc(slide.lead)}</span></div>
          ${indexed.map((p) => `<div class="bp-satellite bp-${p.index} glow-node"><i>${String(p.index).padStart(2, "0")}</i><b>${esc(p.text)}</b></div>`).join("")}
          <i class="bp-ring ring-a"></i><i class="bp-ring ring-b"></i>
        </div>
      </div>`;
    }
    return `<div class="visual-zone ${cls}">
      <div class="blueprint-system">
        <div class="bp-axis"><span>emergent</span><span>controlled</span></div>
        <div class="bp-backbone"></div>
        <div class="bp-rail">${indexed.map((p) => `<div class="bp-pin glow-node"><i>${String(p.index).padStart(2, "0")}</i><b>${esc(p.text)}</b><small>${slide.layoutType.replace("-", " / ")}</small></div>`).join("")}</div>
        <div class="bp-note glow-card"><b>${esc(slide.kicker)}</b><span>${esc(slide.lead)}</span></div>
      </div>
    </div>`;
  }

  if (demo.slug === "product-demo") {
    if (slide.layoutType === "route-map" || slide.layoutType === "evidence-chain") {
      return `<div class="visual-zone ${cls}">
        <div class="product-journey">
          <div class="journey-screen glow-card"><b>${esc(slide.kicker)}</b><span>${esc(slide.lead)}</span><em>live service flow</em></div>
          <div class="journey-rail">${indexed.map((p) => `<div class="journey-stop"><i>${String(p.index).padStart(2, "0")}</i><b>${esc(p.text)}</b></div>`).join("")}</div>
        </div>
      </div>`;
    }
    return `<div class="visual-zone ${cls}">
      <div class="product-console">
        <div class="ticket-thread">
          <div class="thread-head"><span>customer signal</span><b>${esc(slide.kicker)}</b></div>
          ${indexed.slice(0, 3).map((p) => `<p><i>${p.letter}</i>${esc(p.text)}</p>`).join("")}
        </div>
        <div class="copilot-core glow-card"><b>${esc(slide.title)}</b><span>${esc(slide.lead)}</span></div>
        <div class="ops-stack">${indexed.slice(3).map((p) => `<div class="ops-row glow-node"><i>${p.letter}</i><b>${esc(p.text)}</b></div>`).join("")}</div>
      </div>
    </div>`;
  }

  if (demo.slug === "research-review") {
    if (slide.layoutType === "evidence-chain" || slide.layoutType === "route-map") {
      return `<div class="visual-zone ${cls}">
        <div class="evidence-desk">
          <article class="paper-sheet"><h2>${esc(slide.kicker)}</h2><p>${esc(slide.lead)}</p><ol>${indexed.map((p) => `<li><b>${esc(p.text)}</b><span>checked against source</span></li>`).join("")}</ol></article>
          <div class="citation-spine">${indexed.map((p) => `<span>${String(p.index).padStart(2, "0")}</span>`).join("")}</div>
        </div>
      </div>`;
    }
    return `<div class="visual-zone ${cls}">
      <div class="research-board">
        <div class="abstract-block"><b>${esc(slide.kicker)}</b><span>${esc(slide.lead)}</span></div>
        <div class="margin-notes">${indexed.map((p) => `<div class="note-line"><i>[${p.index}]</i><b>${esc(p.text)}</b></div>`).join("")}</div>
        <div class="method-strip">${["question", "evidence", "boundary"].map((p) => `<span>${p}</span>`).join("")}</div>
      </div>
    </div>`;
  }

  if (demo.slug === "executive-briefing") {
    if (slide.layoutType === "metric-radar" || slide.layoutType === "decision-matrix") {
      return `<div class="visual-zone ${cls}">
        <div class="exec-radar">
          <div class="radar-core glow-card"><b>${esc(slide.kicker)}</b><span>${esc(slide.lead)}</span></div>
          ${indexed.map((p) => `<div class="radar-label r${p.index}"><i>${p.letter}</i><b>${esc(p.text)}</b></div>`).join("")}
          <i class="radar-ring r-a"></i><i class="radar-ring r-b"></i><i class="radar-ring r-c"></i>
        </div>
      </div>`;
    }
    return `<div class="visual-zone ${cls}">
      <div class="briefing-wall">
        <div class="brief-number"><span>${String(points.length).padStart(2, "0")}</span><b>${esc(slide.kicker)}</b></div>
        <div class="brief-thesis glow-card"><b>${esc(slide.title)}</b><span>${esc(slide.lead)}</span></div>
        <div class="brief-bars">${indexed.map((p) => `<div class="brief-bar"><span style="width:${52 + p.index * 8}%"></span><b>${esc(p.text)}</b></div>`).join("")}</div>
      </div>
    </div>`;
  }

  return `<div class="visual-zone ${cls}">
    <div class="takeaway-field">
      <div class="glow-card takeaway-core"><b>${esc(slide.title)}</b><span>${esc(slide.lead)}</span></div>
      <div class="takeaway-grid">${points.map((p) => `<div class="glow-node takeaway-node">${esc(p)}</div>`).join("")}</div>
    </div>
  </div>`;
}

function htmlForDemo(demo, slides) {
  const slideMarkup = slides.map((slide, index) => `<section class="slide${index === 0 ? " is-active" : ""}" id="${slide.id}" style="--accent:${slide.accent}">
    <div class="scene-bg"></div>
    ${slide.layoutType === "cover-centered" ? "" : `<div class="slide-head"><div class="kicker">${esc(slide.kicker)}</div><h1>${esc(slide.title)}</h1><p class="lead">${esc(slide.lead)}</p></div>`}
    ${visualHtml(demo, slide)}
    <div class="subtitle">${esc(slide.subtitle)}</div>
  </section>`).join("\n");

  const dots = slides.map((_, i) => `<button class="${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`).join("");
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(demo.title)}</title>
<style>
*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#02040a;color:#e5eefc;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.deck-shell{position:relative;width:100vw;height:100vh;overflow:hidden;background:#05070b}.deck{position:absolute;inset:0}.slide{position:absolute;inset:0;padding:5.8vh 7.2vw 14.5vh;display:grid;grid-template-rows:auto minmax(0,1fr);gap:2.4vh;opacity:0;visibility:hidden;pointer-events:none;transition:.25s ease}.slide.is-active{opacity:1;visibility:visible;pointer-events:auto}.scene-bg{position:absolute;inset:0;background:radial-gradient(circle at 28% 20%,color-mix(in srgb,var(--accent) 22%,transparent),transparent 30%),radial-gradient(circle at 76% 72%,rgba(56,189,248,.12),transparent 34%),linear-gradient(rgba(148,163,184,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.055) 1px,transparent 1px),#05070b;background-size:auto,auto,60px 60px,60px 60px,auto}.scene-bg:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at center,transparent 30%,rgba(2,6,23,.68));pointer-events:none}.slide-head{position:relative;z-index:2;max-width:1120px}.kicker{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}h1{margin:8px 0 0;font-size:clamp(34px,4.2vw,60px);line-height:1.05;max-width:1160px;letter-spacing:0}.lead{margin:12px 0 0;max-width:880px;color:#aab7ca;font-size:clamp(15px,1.25vw,19px);line-height:1.55}.visual-zone{position:relative;z-index:1;min-height:0;display:grid;place-items:center;border-radius:8px;background:radial-gradient(circle at 50% 45%,color-mix(in srgb,var(--accent) 16%,transparent),transparent 62%)}.glow-card,.glow-node,.glow-panel{border:1px solid color-mix(in srgb,var(--accent) 28%,rgba(148,163,184,.18));background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 12%,rgba(15,23,42,.82)),rgba(2,6,23,.74));box-shadow:0 0 34px color-mix(in srgb,var(--accent) 14%,transparent),inset 0 1px 0 rgba(255,255,255,.06);border-radius:8px}.cover-zone{grid-row:1 / span 2}.cover-field{position:relative;text-align:center;display:grid;gap:16px;justify-items:center;max-width:1120px}.cover-field h1{font-size:clamp(44px,5.6vw,82px);max-width:1100px}.cover-ghost{position:absolute;top:-54px;font-size:clamp(56px,9vw,150px);font-weight:900;color:rgba(148,163,184,.045);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}.tag-row{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.tag-row span{border:1px solid rgba(148,163,184,.24);background:rgba(15,23,42,.62);border-radius:999px;padding:8px 12px;color:#cbd5e1;font-size:13px}.equation-field{width:min(1040px,100%);display:grid;grid-auto-flow:column;grid-auto-columns:minmax(120px,1fr);align-items:center;gap:14px}.equation-node,.equation-result{min-height:118px;padding:18px;display:grid;align-content:center;gap:8px;text-align:center}.equation-result{grid-column:span 2}.operator{color:var(--accent);font-weight:900;font-size:30px;text-align:center}.xray-field{width:min(1060px,100%);display:grid;grid-template-columns:.8fr 1.2fr;gap:22px;align-items:stretch}.xray-core{padding:24px;display:grid;align-content:center;gap:12px}.xray-layers{display:grid;gap:10px}.xray-layer{padding:14px 16px;display:grid;grid-template-columns:44px 1fr;align-items:center}.xray-layer i,.route-step i,.orbit-node i,.risk-tile i,.matrix-cell span{color:var(--accent);font-style:normal;font-weight:900}.matrix-field,.risk-field{width:min(1040px,100%);display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.matrix-cell,.risk-tile{min-height:112px;padding:18px;display:grid;gap:8px}.matrix-cell small,.risk-tile span,.glow-node span,.glow-card span{color:#9fb0c7;line-height:1.4}.route-field{width:min(1080px,100%);display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;align-items:stretch}.route-step{min-height:138px;padding:16px;display:grid;align-content:center;gap:8px;text-align:center;position:relative}.route-step:not(:last-child):after{content:"";position:absolute;right:-12px;top:50%;width:12px;height:2px;background:var(--accent)}.orbit-field{width:min(1060px,100%);display:grid;grid-template-columns:.82fr 1.18fr;gap:22px;align-items:center}.orbit-core{padding:24px;min-height:250px;display:grid;align-content:center;gap:12px;text-align:center}.orbit-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.orbit-node{min-height:112px;padding:18px;display:grid;align-content:center;gap:8px}.takeaway-field{width:min(1040px,100%);display:grid;grid-template-columns:.95fr 1.05fr;gap:18px;align-items:stretch}.takeaway-core{padding:24px;display:grid;align-content:center;gap:12px}.takeaway-grid{display:grid;gap:12px}.takeaway-node{padding:18px;font-weight:800}.subtitle{position:absolute;z-index:8;left:7.2vw;right:7.2vw;bottom:3.2vh;min-height:58px;border-top:1px solid rgba(148,163,184,.16);display:flex;align-items:center;color:#cbd5e1;font-size:14px;line-height:1.45;background:linear-gradient(90deg,rgba(5,7,11,.94),rgba(5,7,11,.6));padding:8px 202px 10px 0}.progress{position:absolute;z-index:10;left:0;bottom:0;height:3px;width:100%;background:rgba(148,163,184,.12)}.progress span{display:block;height:100%;width:12.5%;background:var(--accent);transition:.25s ease}.page-switch{position:absolute;right:3.2vw;bottom:3.4vh;z-index:12;display:flex;gap:8px;align-items:center;color:#94a3b8;font-size:13px}.page-switch button,.audio-btn,.dots button{border:1px solid rgba(148,163,184,.24);background:rgba(15,23,42,.68);color:#e5eefc;border-radius:8px;cursor:pointer}.page-switch button,.audio-btn{width:32px;height:32px}.audio-btn.is-playing{border-color:color-mix(in srgb,var(--accent,#38bdf8) 52%,rgba(148,163,184,.24));background:color-mix(in srgb,var(--accent,#38bdf8) 18%,rgba(15,23,42,.68))}.dots{position:absolute;right:2.8vw;top:50%;transform:translateY(-50%);z-index:11;display:grid;gap:9px}.dots button{width:9px;height:9px;border-radius:50%;padding:0}.dots button.active{background:var(--accent);border-color:var(--accent);box-shadow:0 0 18px var(--accent)}@media(max-width:980px){.route-field{grid-template-columns:repeat(3,1fr)}.equation-field{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}.operator{display:none}.subtitle{font-size:13px;right:6vw}.dots{display:none}}
.theme-technical-framework .scene-bg{background:radial-gradient(circle at 20% 22%,rgba(6,182,212,.18),transparent 30%),linear-gradient(rgba(34,211,238,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.06) 1px,transparent 1px),linear-gradient(135deg,#031019,#06111d 52%,#020617);background-size:auto,44px 44px,44px 44px,auto}.theme-technical-framework .slide-head{border-left:2px solid var(--accent);padding-left:18px}.blueprint-system{position:relative;width:min(1100px,100%);height:min(420px,100%);display:grid;grid-template-rows:48px 1fr 90px;align-items:center;border-top:1px solid rgba(34,211,238,.28);border-bottom:1px solid rgba(34,211,238,.28)}.bp-axis{display:flex;justify-content:space-between;color:#67e8f9;text-transform:uppercase;letter-spacing:.18em;font-size:11px}.bp-backbone{height:2px;background:linear-gradient(90deg,transparent,var(--accent),transparent);box-shadow:0 0 28px var(--accent)}.bp-rail{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.bp-pin{clip-path:polygon(8% 0,100% 0,92% 100%,0 100%);border-radius:0;min-height:82px;padding:14px;display:grid;align-content:center}.bp-pin i,.bp-satellite i{font-style:normal;color:#67e8f9}.bp-pin small{color:#7dd3fc}.bp-note{position:absolute;right:0;top:74px;width:310px;padding:18px;border-radius:0 18px 0 18px}.blueprint-orbit{position:relative;width:min(820px,100%);height:420px}.bp-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:250px;min-height:130px;padding:22px;text-align:center}.bp-ring{position:absolute;inset:52px;border:1px dashed rgba(103,232,249,.34);border-radius:50%}.ring-b{inset:104px}.bp-satellite{position:absolute;width:165px;min-height:78px;padding:14px}.bp-1{left:50%;top:8px;transform:translateX(-50%)}.bp-2{right:18px;top:42%}.bp-3{left:50%;bottom:8px;transform:translateX(-50%)}.bp-4{left:18px;top:42%}.bp-5{right:80px;bottom:64px}
.theme-product-demo .scene-bg{background:radial-gradient(circle at 78% 18%,rgba(34,197,94,.2),transparent 30%),radial-gradient(circle at 18% 72%,rgba(14,165,233,.16),transparent 34%),linear-gradient(120deg,#07140e,#061019 52%,#080d18)}.theme-product-demo h1{max-width:1000px}.product-console{width:min(1080px,100%);display:grid;grid-template-columns:310px 1fr 250px;gap:22px;align-items:stretch}.ticket-thread{background:#e8fff4;color:#062015;border-radius:22px 22px 8px 22px;padding:22px;box-shadow:0 24px 70px rgba(34,197,94,.18);display:grid;gap:12px}.thread-head{display:grid;gap:4px}.thread-head span{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:#047857}.ticket-thread p{margin:0;padding:12px 14px;border-left:4px solid #10b981;background:rgba(255,255,255,.62);border-radius:0 14px 14px 0}.ticket-thread i,.ops-row i{font-style:normal;margin-right:8px;color:#059669}.copilot-core{align-self:center;min-height:260px;border-radius:38px;padding:30px;display:grid;place-content:center;text-align:center;background:linear-gradient(145deg,rgba(16,185,129,.2),rgba(2,6,23,.86))}.ops-stack{display:grid;gap:12px;align-content:center}.ops-row{min-height:66px;border-radius:999px;padding:14px 18px;display:flex;align-items:center}.product-journey{width:min(1100px,100%);display:grid;grid-template-columns:380px 1fr;gap:28px;align-items:center}.journey-screen{min-height:300px;border-radius:34px;padding:30px;display:grid;align-content:center;gap:12px}.journey-screen em{color:#86efac;font-style:normal;text-transform:uppercase;letter-spacing:.16em;font-size:12px}.journey-rail{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.journey-rail:before{content:"";position:absolute;left:4%;right:4%;top:50%;height:7px;border-radius:999px;background:linear-gradient(90deg,#10b981,#38bdf8,#fbbf24)}.journey-stop{position:relative;z-index:1;min-height:138px;display:grid;align-content:end;gap:10px;padding:14px;border-radius:28px;background:rgba(2,6,23,.78);border:1px solid rgba(255,255,255,.16)}.journey-stop i{font-style:normal;color:#86efac}
.theme-research-review{background:#10100d}.theme-research-review .scene-bg{background:radial-gradient(circle at 80% 20%,rgba(251,191,36,.12),transparent 28%),linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px),#11100d;background-size:auto,72px 72px,72px 72px,auto}.theme-research-review h1{font-family:Georgia,"Times New Roman",serif;font-weight:700;max-width:1040px}.theme-research-review .lead{color:#d6d0c2}.research-board{width:min(1080px,100%);display:grid;grid-template-columns:1fr 1.15fr;gap:28px;align-items:stretch}.abstract-block{background:#f3eedf;color:#1d1a14;padding:32px;border-radius:2px;box-shadow:18px 20px 0 rgba(255,255,255,.05);display:grid;align-content:center;gap:14px}.abstract-block b{font-family:Georgia,"Times New Roman",serif;font-size:30px}.abstract-block span{line-height:1.65}.margin-notes{display:grid;gap:10px;align-content:center}.note-line{display:grid;grid-template-columns:54px 1fr;gap:12px;border-bottom:1px solid rgba(243,238,223,.22);padding:12px 0}.note-line i{font-style:normal;color:#fbbf24}.method-strip{grid-column:1/-1;display:flex;gap:12px}.method-strip span{border:1px solid rgba(243,238,223,.28);padding:8px 14px;text-transform:uppercase;letter-spacing:.16em;font-size:11px;color:#e7dfce}.evidence-desk{width:min(1080px,100%);display:grid;grid-template-columns:1fr 96px;gap:22px;align-items:stretch}.paper-sheet{margin:0;background:#f7f2e4;color:#171511;padding:30px 38px;border-radius:3px;box-shadow:0 32px 80px rgba(0,0,0,.36)}.paper-sheet h2{margin:0 0 10px;font-family:Georgia,"Times New Roman",serif;font-size:34px}.paper-sheet p{margin:0 0 18px;color:#4b4638;line-height:1.55}.paper-sheet ol{margin:0;padding-left:22px;display:grid;grid-template-columns:repeat(2,1fr);gap:12px 28px}.paper-sheet li span{display:block;color:#736b59;font-size:12px;margin-top:5px}.citation-spine{display:grid;align-content:space-between;justify-items:center}.citation-spine span{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fbbf24;color:#1d1a14;font-weight:900}
.theme-executive-briefing .scene-bg{background:radial-gradient(circle at 74% 22%,rgba(245,158,11,.2),transparent 32%),linear-gradient(135deg,#0c0b08,#16130d 54%,#070707)}.theme-executive-briefing h1{font-size:clamp(34px,3.8vw,56px);max-width:1050px}.briefing-wall{width:min(1080px,100%);display:grid;grid-template-columns:210px 1fr;grid-template-rows:auto 1fr;gap:20px;align-items:stretch}.brief-number{grid-row:1/3;border-left:8px solid #f59e0b;padding-left:22px;display:grid;align-content:center;gap:10px}.brief-number span{font-size:100px;line-height:.85;font-weight:900;color:#f59e0b}.brief-number b{letter-spacing:.15em;text-transform:uppercase;color:#f8e6c1}.brief-thesis{border-radius:2px;padding:26px;background:linear-gradient(90deg,rgba(245,158,11,.18),rgba(15,23,42,.7));box-shadow:none}.brief-bars{display:grid;gap:16px;align-content:center}.brief-bar{position:relative;min-height:42px;border-bottom:1px solid rgba(248,230,193,.18);display:flex;align-items:center}.brief-bar span{position:absolute;left:0;height:10px;border-radius:999px;background:linear-gradient(90deg,#f59e0b,rgba(245,158,11,.12));opacity:.7}.brief-bar b{position:relative;margin-left:18px}.exec-radar{position:relative;width:620px;height:420px}.radar-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:250px;min-height:130px;padding:20px;text-align:center;border-radius:50%;display:grid;place-content:center}.radar-ring{position:absolute;border:1px solid rgba(245,158,11,.25);border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}.r-a{width:600px;height:390px}.r-b{width:430px;height:280px}.r-c{width:260px;height:170px}.radar-label{position:absolute;min-width:160px;border-top:2px solid #f59e0b;padding-top:8px}.radar-label i{font-style:normal;color:#f59e0b;margin-right:8px}.radar-label.r1{left:50%;top:0;transform:translateX(-50%)}.radar-label.r2{right:-150px;top:42%}.radar-label.r3{left:50%;bottom:0;transform:translateX(-50%)}.radar-label.r4{left:-150px;top:42%}
</style>
</head>
<body>
<main class="deck-shell theme-${demo.slug}" aria-label="${esc(demo.title)}">
  <div class="deck">${slideMarkup}</div>
  <div class="progress"><span></span></div>
  <div class="page-switch"><button id="prev" aria-label="Previous">‹</button><span id="pageNow">01</span><span>/</span><span>${String(slides.length).padStart(2, "0")}</span><button id="next" aria-label="Next">›</button><button id="audio" class="audio-btn" aria-label="Play narration">▶</button></div>
  <div class="dots">${dots}</div>
  <audio id="voice" preload="auto"></audio>
</main>
<script>
const slides=[...document.querySelectorAll(".slide")];
const dots=[...document.querySelectorAll(".dots button")];
const progress=document.querySelector(".progress span");
const pageNow=document.querySelector("#pageNow");
const voice=document.querySelector("#voice");
const audioBtn=document.querySelector("#audio");
let index=0;
let wantsPlay=false;
function audioSrc(i){return "audio/slide-"+String(i+1).padStart(2,"0")+".mp3";}
function updateAudioButton(playing){
  audioBtn.textContent=playing?"⏸":"▶";
  audioBtn.classList.toggle("is-playing",playing);
  audioBtn.setAttribute("aria-label",playing?"Pause narration":"Play narration");
}
function loadAudio(){
  voice.src=audioSrc(index);
  voice.currentTime=0;
}
async function playCurrent(){
  wantsPlay=true;
  if(!voice.src || !voice.src.endsWith(audioSrc(index))) loadAudio();
  try{await voice.play();}catch(error){wantsPlay=false;updateAudioButton(false);}
}
function pauseCurrent(){
  wantsPlay=false;
  voice.pause();
  updateAudioButton(false);
}
function show(next){
  index=(next+slides.length)%slides.length;
  slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===index));
  dots.forEach((dot,i)=>dot.classList.toggle("active",i===index));
  pageNow.textContent=String(index+1).padStart(2,"0");
  progress.style.width=((index+1)/slides.length*100)+"%";
  progress.style.background=getComputedStyle(slides[index]).getPropertyValue("--accent");
  const shouldResume=wantsPlay && !voice.paused;
  voice.pause();
  loadAudio();
  if(shouldResume) playCurrent();
}
document.querySelector("#prev").addEventListener("click",()=>show(index-1));
document.querySelector("#next").addEventListener("click",()=>show(index+1));
dots.forEach((dot)=>dot.addEventListener("click",()=>show(Number(dot.dataset.index))));
audioBtn.addEventListener("click",()=>{if(voice.paused) playCurrent(); else pauseCurrent();});
voice.addEventListener("play",()=>updateAudioButton(true));
voice.addEventListener("pause",()=>updateAudioButton(false));
voice.addEventListener("ended",()=>{updateAudioButton(false);if(index < slides.length - 1){wantsPlay=true;show(index+1);playCurrent();}else{wantsPlay=false;}});
addEventListener("keydown",(event)=>{if(event.key==="ArrowRight")show(index+1);if(event.key==="ArrowLeft")show(index-1);});
show(0);
</script>
</body>
</html>`;
}

function writeDemo(demo) {
  const project = join(examplesRoot, demo.slug);
  const scriptsDir = join(project, "scripts");
  const distDir = join(project, "dist");
  const sourceDir = join(project, "source");
  mkdirSync(scriptsDir, { recursive: true });
  mkdirSync(distDir, { recursive: true });
  mkdirSync(sourceDir, { recursive: true });
  const slides = demo.slides.map((raw, index) => slideObject(raw, index, demo));
  const json = {
    mode: "narrated-html",
    audienceProfile: demo.audience,
    contentDepth: "level-3-mechanism",
    styleProfile: {
      styleFamily: demo.style,
      styleFamilyReason: `The demo is a ${demo.subtitle} and benefits from ${demo.style} density and visual language.`,
      borrowedElements: ["dark grid", "semantic accents", "compact page-specific diagrams"],
      avoidedElements: ["fixed template repetition", "remote assets", "oversized slide modules"]
    },
    slides
  };
  writeFileSync(join(sourceDir, "brief.md"), `# ${demo.title}\n\n${demo.thesis}\n`, "utf8");
  writeFileSync(join(scriptsDir, "first-principles.md"), firstPrinciples(demo), "utf8");
  writeFileSync(join(scriptsDir, "deck.md"), deckMarkdown(demo, slides), "utf8");
  writeFileSync(join(scriptsDir, "slides.json"), `${JSON.stringify(json, null, 2)}\n`, "utf8");
  const ttsDir = join(scriptsDir, "tts");
  const audioDir = join(distDir, "audio");
  mkdirSync(ttsDir, { recursive: true });
  mkdirSync(audioDir, { recursive: true });
  const narration = { slides: [] };
  slides.forEach((slide, index) => {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    writeFileSync(join(ttsDir, `${stem}.txt`), `${slide.speakerText}\n`, "utf8");
    narration.slides.push({
      sceneId: slide.id,
      audio: `audio/${stem}.mp3`,
      durationMs: slide.durationSec * 1000,
      subtitle: slide.subtitle,
      text: slide.speakerText,
      ttsText: `scripts/tts/${stem}.txt`
    });
  });
  writeFileSync(join(scriptsDir, "narration.json"), `${JSON.stringify(narration, null, 2)}\n`, "utf8");
  writeFileSync(join(distDir, "index.html"), htmlForDemo(demo, slides), "utf8");
}

mkdirSync(examplesRoot, { recursive: true });
for (const demo of demos) writeDemo(demo);

writeFileSync(join(examplesRoot, "README.md"), `# Example demos

Each example is an 8-slide narrated-html project generated with the Understanding Demo Generator contract. The checked-in demos include MiMo TTS mp3 files under each dist/audio/ directory.

The demos intentionally use different visual systems instead of one repeated card template:

- \`technical-framework\`: blueprint diagrams and system-map rails
- \`product-demo\`: product journey screens and service-flow UI
- \`research-review\`: paper/evidence layouts with citation spines
- \`executive-briefing\`: executive radar and briefing-wall layouts

| Example | Type | Open locally |
| --- | --- | --- |
${demos.map((demo) => `| ${demo.title} | ${demo.subtitle} | \`examples/${demo.slug}/dist/index.html\` |`).join("\n")}

Run validation from the repository root:

\`\`\`bash
${demos.map((demo) => `python scripts/validate_demo_contract.py examples/${demo.slug} --mode narrated-html`).join("\n")}
\`\`\`
`, "utf8");

console.log(`Generated ${demos.length} example demos in ${examplesRoot}`);
