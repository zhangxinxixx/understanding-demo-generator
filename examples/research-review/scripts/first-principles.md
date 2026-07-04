# RAG 评测不能只问答对没有，还要问证据链是否可靠 - First Principles

## Input type
report

## Audience
research-review, analytical, dense

## Core thesis
RAG 系统的评测要同时检查检索、证据、生成和拒答边界，否则高分答案可能掩盖错误证据链。

## Primitive concepts
- Query
- Retrieval
- Evidence
- Answer
- Faithfulness
- Abstention

## Causal mechanism
把答案质量拆成检索覆盖、证据相关性、忠实生成、引用可追踪和不确定性处理。

## Hidden assumptions
- The audience needs a teaching sequence, not a feature inventory.
- Each page should carry one decision, mechanism, contrast, risk, or action.
- Visual structure should explain the idea before the presenter adds detail.

## Failure points
- Turning the deck into repeated card grids.
- Letting subtitle or controls cover the primary visual module.
- Using a catchy title without explaining the mechanism.

## Examples to emphasize
- 单一准确率会把四种错误混在一起
- RAG 质量要拆成检索、证据和生成三层
- 证据链的核心不是有引用，而是引用能支撑断言
- 指标要覆盖召回、相关、忠实和拒答

## What to avoid
不要把研究解读做成指标名词表，也不要只讲单一准确率。
