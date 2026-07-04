# Example demos

Each example is an 8-slide narrated-html project generated with the Understanding Demo Generator contract. The checked-in demos include MiMo TTS mp3 files under each dist/audio/ directory.

The demos intentionally use different visual systems instead of one repeated card template:

- `technical-framework`: blueprint diagrams and system-map rails
- `product-demo`: product journey screens and service-flow UI
- `research-review`: paper/evidence layouts with citation spines
- `executive-briefing`: executive radar and briefing-wall layouts

| Example | Type | Open locally |
| --- | --- | --- |
| Agent 框架选型不是选 API，而是选系统组织方式 | 技术框架讲解 demo | `examples/technical-framework/dist/index.html` |
| 客服 Copilot 的价值不在回答更快，而在问题闭环更短 | 产品方案演示 demo | `examples/product-demo/dist/index.html` |
| RAG 评测不能只问答对没有，还要问证据链是否可靠 | 研究/论文解读 demo | `examples/research-review/dist/index.html` |
| SaaS 增长瓶颈从获客成本，转向价值兑现速度 | 业务策略简报 demo | `examples/executive-briefing/dist/index.html` |

Run validation from the repository root:

```bash
python scripts/validate_demo_contract.py examples/technical-framework --mode narrated-html
python scripts/validate_demo_contract.py examples/product-demo --mode narrated-html
python scripts/validate_demo_contract.py examples/research-review --mode narrated-html
python scripts/validate_demo_contract.py examples/executive-briefing --mode narrated-html
```
