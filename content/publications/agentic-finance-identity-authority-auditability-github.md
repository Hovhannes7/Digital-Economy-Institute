---
title: "Agentic Finance: Identity, Authority and Auditability for the Next Stage of Open Finance"
slug: "agentic-finance-identity-authority-auditability"
date: "2026-07-15"
author: "Hovhannes Adajyan"
type: "Report"
issueArea: "AI Governance"
summary: "This report explains why agentic finance requires a new authority layer for AI agents: identity, delegated authorization, bounded autonomy, auditability, evidence packs, finality receipts and safe synthetic-data pilots for small economies such as Armenia."
image: "/images/agentic-finance-visual.webp"
tags:
  - Agentic Finance
  - AI Governance
  - Open Finance
  - Fintech
  - Digital Economy
  - Armenia
readingTime: "18 min read"
---

![Agentic Finance: Identity, Authority and Auditability](/images/agentic-finance-visual.webp)

# Agentic Finance: Identity, Authority and Auditability for the Next Stage of Open Finance

## Executive Summary

Finance is moving from digital access to delegated digital action. Open banking and open finance are mainly about access: how a customer, bank, fintech or authorised third party can connect to financial data or financial services through secure channels. Agentic finance introduces a more difficult question: what happens when an AI agent does not merely analyse financial information, but prepares, recommends, negotiates, initiates or even executes financial actions on behalf of a person, company or institution?

In this environment, the central governance question changes from **“Who is the customer?”** to **“Who or what acted, on whose behalf, under what authority, within what limits, and with what evidence?”**

Agentic finance is not simply another name for chatbots in banking. A chatbot answers questions. An agentic financial system can plan steps, call tools, use APIs, interact with other agents, request approvals, modify workflows, initiate payments, update records, prepare compliance files, escalate exceptions or negotiate terms. The higher the degree of autonomy, the stronger the need for authority infrastructure.

This is especially important in finance because even small execution errors can create real losses, regulatory breaches, privacy violations, fraud exposure or systemic correlations across institutions. Banks and financial institutions are already experimenting with digital assistants and agent-like systems in areas such as onboarding, trading, treasury, wealth management and internal productivity. Most current deployments still retain human oversight, but the direction is clear: financial institutions want systems that can move from passive assistance to controlled execution.

The missing layer is not only artificial intelligence safety. It is **authority**. Traditional identity and access management was designed around humans logging in, service accounts running scripts and static roles being assigned to applications. Agentic workflows do not fit neatly into that model. Agents may operate at machine speed, create sub-tasks, use tools, coordinate with other agents, change plans and act across systems. A user may want to delegate one narrow task, not grant a permanent identity. A company may want an agent to prepare payment to a recurring supplier below a threshold, but block payment to new beneficiaries. A regulator may later need to reconstruct why a transaction was allowed, denied or escalated.

A new technical stack is therefore emerging around agent identity, non-human identity management, delegated authorization, capability tokens, policy-as-code, continuous authorization monitoring, runtime policy enforcement, human-in-the-loop checkpoints, cryptographic attestation, evidence packs, finality receipts, audit trails and revocation mechanisms.

For small economies such as Armenia, the opportunity is not to copy a large-country model or launch a national-scale agentic-finance system immediately. Armenia can treat agentic finance as a controlled innovation topic. A synthetic-data pilot could model how an AI payment assistant for an Armenian SME would read invoices, match purchase orders, prepare routine payments, request human approval for exceptions, reject unauthorized actions and produce evidence records for audit. This can be tested without live bank integration, without real customer data and without government involvement in the first phase.

The practical recommendation is simple: small countries should not begin with a broad national open-banking proposal. They should begin with a narrow agentic-finance governance sprint. The first question should not be whether the country can become a fintech hub. The first question should be whether one simple SME financial workflow can be safely represented, governed, audited and explained when an AI agent acts under bounded authority.



## 1. From Digital Finance to Agentic Finance

Digital finance has already passed through several stages. The first stage placed traditional financial services online: internet banking, mobile banking, digital payments, card platforms and online lending. The second stage connected financial services through APIs and third-party providers: open banking, embedded finance and fintech ecosystems. The third stage, now emerging, is agentic finance: financial workflows in which autonomous or semi-autonomous AI systems perceive information, plan actions, use tools, interact with counterparties, request approvals and generate execution records.

The difference is not cosmetic. In ordinary digital banking, a human normally initiates the final action, even if software supports the process. In open banking, a licensed or authorised third party may access data or initiate services under customer consent, but the consent and regulatory perimeter are usually defined through known institutional categories.

In agentic finance, a software agent may decide that an invoice is due, compare suppliers, detect an anomaly, request a payment, negotiate a discount or propose moving funds. Even when a human remains in the loop, the agent may structure the options, sequence the workflow and call technical tools before a human sees the final request.

This creates a new governance object: **delegated autonomous action**. The agent is not simply a user, an employee, an application or a bank. It is a technical actor whose authority comes from a person, company or institution and whose behavior may be shaped by model outputs, external tools, policies, APIs and changing context.

Governance must therefore be able to answer a chain of questions:

- Who created the agent?
- Who owns or controls it?
- What task was delegated?
- What evidence supports the action?
- What policies applied at the time?
- Did the agent act within its mandate?
- Was a human required?
- Was human approval obtained?
- Can the authority be revoked?
- Can the event be audited later?

This is why the term agentic finance should be used carefully. It should not describe every use of generative AI in a bank. A model that summarizes a loan file is AI in finance. A model that drafts a customer email is AI in finance. An agent that can gather data, call services, choose an operational path, request approval and prepare a consequential financial action is agentic finance.

The practical line is not whether the system uses a large language model. The practical line is whether the system can initiate or meaningfully shape actions in a financial workflow.



## 2. The Missing Authority Layer

The core thesis of this paper is that agentic finance needs an **authority layer**.

Identity answers who or what an actor is. Authorization answers what that actor is allowed to do. Authority goes further: it links the actor, the principal, the task, the permitted scope, the policy basis, the context, the evidence and the responsibility chain.

In finance, this distinction is crucial. A payment agent may authenticate successfully but still lack authority to pay a new supplier. A treasury agent may have access to account data but lack authority to initiate a cross-border transfer. A compliance agent may inspect files but lack authority to modify a customer's risk rating without review.

Traditional systems often rely on standing privileges. A user account or service account has a role; the role grants access; the application uses that access until revoked. This model is already problematic for non-human identities such as API keys, service accounts and bots. Agentic systems make it more fragile because agents can combine tools, alter plans, delegate sub-tasks and operate across services.

If an agent receives broad permissions at the start of a session, later actions may remain technically permitted even after the agent's goal has shifted. This is the standing-privilege problem.

An authority layer should enforce least privilege at the level of action, not only at the level of account. Instead of giving a payment agent a permanent credential that can pay any supplier, the system should issue a time-limited, scope-limited execution authority for a specific transaction or class of transactions.

For example:

> Pay Supplier A, invoice 889, amount 4,200 USD, before 17:00, from account X, only if the purchase order matches and no bank detail has changed.

This authority should be auditable and revocable.

Research on authenticated delegation and authorized AI agents proposes adapting mature identity protocols such as OAuth 2.0 and OpenID Connect to the agentic context. Research on authorization propagation studies how authority travels through multi-agent systems and how transitive delegation, temporal validity and aggregation risks must be governed. Intent-governed authorization further argues that user intent should narrow the authority of an agent but never expand it.

These research directions converge on the same point: agentic systems need verifiable, scoped and context-aware authority rather than broad, static permissions.

Authority also has a legal and organizational dimension. A company may decide that only a finance manager can delegate payment-preparation authority, only a CFO can approve high-value transfers and only a compliance officer can authorize exceptions for sanctioned jurisdictions. These are not merely technical roles. They are organizational authority matrices. Agentic finance systems must respect them.

A robust authority layer should therefore have six properties:

1. It identifies the agent as a first-class actor.
2. It binds the agent to a human or organizational principal.
3. It defines the exact delegated task and permitted scope.
4. It checks the policy basis at runtime.
5. It creates evidence that can be inspected later.
6. It supports revocation and containment.

Without these properties, agentic finance will remain difficult to trust.



## 3. What Makes Financial Agents Different from Ordinary Automation

Financial automation is not new. Banks and companies already use rule engines, robotic process automation, fraud-scoring systems, algorithmic trading systems, credit models, reconciliation tools and workflow software. The question is why agentic systems are different.

The answer lies in flexibility, tool use, language interaction and goal-directed planning.

Traditional automation is usually narrow and deterministic. A rule engine may say: if amount is below X and vendor is approved, process the invoice. A robot may copy values from one system into another. An algorithmic trading system may execute a pre-defined strategy. These systems can still be risky, but their action space is usually known in advance.

Agentic systems may have a broader action space. They can interpret natural language, retrieve information, plan steps, call different tools, adapt to incomplete data, interact with other agents and propose actions not explicitly enumerated by a programmer.

This flexibility is valuable. An SME payment agent could understand invoices in different formats, compare them with purchase orders, notice that a supplier's bank details changed, ask the owner whether to proceed and prepare the payment file. A treasury agent could monitor receivables, account balances, currency exposure and supplier discounts. A compliance agent could review adverse media, match customer profiles, draft risk narratives and escalate suspicious cases.

However, flexibility also expands the failure surface. An agent may misunderstand a document, be manipulated by prompt injection, over-rely on stale data, use a tool incorrectly, delegate to another agent, hallucinate a justification or optimize a narrow objective while ignoring legal or reputational risk.

In finance, an action may be difficult to reverse. Even a blocked payment can create commercial harm if it delays a supplier. A wrongly executed payment can create direct loss. A wrong customer-risk classification can produce legal and fairness issues. A group of similar agents using similar models may react to the same event in correlated ways.

Therefore, agentic finance should not be judged only by model accuracy. A very accurate model can still be dangerous if it has excessive authority. A less accurate model can be useful if it is limited to low-risk suggestions and strong human review.

The central design problem is matching autonomy to authority. The more consequential the action, the narrower and more evidence-backed the authority should be.



## 4. The Emerging Technical Stack

The technical stack for agentic finance can be understood as seven layers. These layers do not need to be implemented by one vendor, but they must exist in some form if agentic finance is to be trustworthy.

### 4.1 Agent Identity

Every agent that can access tools, data or workflows should be registered as a distinct actor. It should not hide behind a generic service account. It should have an owner or custodian, a purpose, a lifecycle, a credential and a record of its permissions.

Large identity platforms are already moving in this direction. Microsoft Entra Agent ID extends identity-management capabilities to agents and connects agent identity to lifecycle, access governance and logs. Ping Identity, SecureAuth and Okta are also positioning AI agents as first-class identities rather than invisible software components.

### 4.2 Delegated Authorization

The agent's authority should be traceable to a human, organization or system principal. The delegation should be explicit, scoped and revocable. User-controlled authorization network tokens, capability tokens, OAuth-based delegation, token exchange and related protocols are being explored for this purpose.

The important concept is **attenuation**: downstream agents or tools should receive less authority than the original principal, never more.

### 4.3 Policy-as-Code

Financial rules, approval thresholds, counterparty restrictions, data-handling requirements and risk tiers should be represented in machine-readable policies. These policies should be versioned. An audit record should show which policy version was used at the time of a decision.

Policy-as-code does not replace human legal interpretation, but it allows operational rules to be enforced consistently at runtime.

### 4.4 Runtime Enforcement

A governance layer must decide whether an action is allowed, denied or requires approval at the moment the agent attempts it. This is the practical difference between pre-deployment governance and operational control.

### 4.5 Continuous Authorization Monitoring

An agent's authority should not be checked once and forgotten. If the agent's behavior changes, if the risk level rises, if a new beneficiary appears, if a time window expires or if a human revokes consent, the authorization state should change.

Continuous monitoring converts governance from a static permission table into a dynamic decision process.

### 4.6 Evidence Generation

Every consequential action should create an evidence object: what action was requested, what context was observed, which policy applied, what risk score was assigned, who approved it if approval was required, what execution authority was issued and what happened afterward.

KYE Protocol calls this kind of record an Evidence Pack and emphasizes proof of who or what acted, on behalf of whom, under what authority and with what audit trail. Other approaches use similar language: proof-derived authorization, audit trails, provenance, receipts and attestations.

### 4.7 Review, Revocation and Learning

The system must support after-the-fact audits, dispute resolution, incident response, policy updates and decommissioning. Agents should not become permanent invisible actors. They should have lifecycle management: registration, approval, operation, monitoring, suspension, revocation and retirement.



## 5. Evidence Packs, Finality Receipts and Auditability

Auditability is the bridge between technical control and institutional trust. In ordinary finance, an auditor may inspect approvals, logs, bank statements, invoices, contracts and system records. In agentic finance, those artifacts may be fragmented across models, prompts, tool calls, APIs, identity systems, approval chats and business applications.

If records are incomplete, reconstructing responsibility becomes difficult. Evidence packs are proposed as a way to consolidate the decision lifecycle into a structured, verifiable record.

An evidence pack should not be a transcript of the model's private reasoning. Instead, it should record the facts needed to justify and verify the action. A practical evidence pack for an SME payment might include:

- agent identity;
- owner or principal;
- delegated task;
- invoice number;
- matched purchase order;
- supplier status;
- bank-detail check;
- amount;
- applicable policy version;
- risk classification;
- approval requirement;
- human approval if needed;
- time-limited execution boundary;
- final outcome;
- cryptographic signature or hash;
- revocation status.

A finality receipt is the closing artifact. It says, in effect:

> This action ended under this authority, with this evidence, at this time, with this outcome.

For an auditor, it converts a complex agentic workflow into a replayable event. For a regulator, it provides a basis for asking whether the institution's controls were adequate. For an SME owner, it provides a simple answer to why a payment was made, blocked or escalated.

Evidence packs matter because agentic finance creates multi-stakeholder accountability. Legal teams need defensible facts. Compliance teams need proof of policy application. Finance teams need audit readiness. Cybersecurity teams need tamper-evident logs. AI teams need feedback about agent behavior. Regulators need reconstructable evidence. Customers and counterparties need dispute resolution.

A single evidence rail can serve all these stakeholders if it is designed properly.

Evidence packs are also important for small economies. If many firms depend on the same model providers or cloud infrastructure, regulators may need to detect correlated behavior. Evidence records could help supervisors see whether many agents are reacting to the same signal in the same way, using the same model version or applying similar assumptions.

This does not eliminate systemic risk, but it improves observability. In a small financial system, observability may be as important as automation.



## 6. Main Use Cases in Agentic Finance

The first generation of realistic agentic-finance use cases should be narrow, bounded and reviewable. The most promising use cases are not those where an agent receives unlimited authority. They are those where the action space can be defined, the data can be verified, the value at risk can be capped and the evidence record can be inspected.

### 6.1 SME Payment Assistance

SME payment assistance is a strong first use case. Small companies often spend time matching invoices, checking purchase orders, tracking due dates, preparing utility payments and confirming supplier details.

An agent could automate much of the preparation while preserving human control for exceptions:

- existing supplier below threshold: prepare or execute;
- new beneficiary: require approval;
- large payment: require approval;
- cross-border payment: enhanced review;
- expired authority: reject;
- revoked authority: stop future actions.

This use case is attractive because it is concrete, understandable and easy to simulate with synthetic data.

### 6.2 Corporate Treasury

Corporate treasury is another important use case. Agents can monitor cash balances, receivables, payables, currency exposures and short-term liquidity needs. They can suggest payment timing, identify discount opportunities, flag unusual outflows, prepare hedging recommendations or escalate liquidity stress.

However, treasury is sensitive. Even small decisions can affect liquidity, counterparties and risk management. Treasury agents should therefore begin as recommendation and preparation tools before moving to bounded execution.

### 6.3 Open Finance and Account Aggregation

Open finance and account aggregation are natural environments for agents. An agent can help a person or SME understand accounts across banks, cards, wallets, loans and payment platforms. It can identify fees, forecast cash flow, find better products or prepare switching recommendations.

But open-finance agents must be carefully governed because they may access sensitive data across institutions. Consent, data minimization, purpose limitation and revocation are central.

### 6.4 AML, KYC and Compliance

AML, KYC and compliance workflows are promising. Agents can review documents, search adverse media, compare customer information, draft risk narratives and propose escalation decisions.

But human oversight remains essential because false positives, false negatives, bias, source quality and legal defensibility are serious issues. A compliance agent should assist analysts, not silently replace them in high-stakes determinations.

### 6.5 Financial Advice and Investment Support

Financial advice and investment support are more difficult. A general-purpose agent that recommends investments, insurance, loans or pension decisions can influence consumer behavior. Regulators are rightly concerned about suitability, disclosure, conflicts of interest, explainability and liability.

For this reason, customer-facing autonomous advice should be treated as a higher-risk application. Near-term use should focus on education, scenario explanation and human-reviewed recommendations rather than unsupervised decision-making.

### 6.6 Agent-to-Agent Negotiation

Agent-to-agent negotiation is a future-facing use case. A buyer's agent and supplier's agent might negotiate payment timing, early-payment discounts, delivery schedules or financing terms within pre-approved policies.

This could reduce transaction costs for SMEs. It could also create new risks: collusion, unfair pressure, information leakage, hidden optimization objectives and accountability gaps. Agent-to-agent negotiation should therefore be tested first with synthetic data and clear authority boundaries.



## 7. Risk Landscape

The risk landscape of agentic finance can be grouped into seven categories: authority risk, identity risk, execution risk, data risk, model risk, systemic risk and legal-liability risk.

### Authority Risk

Authority risk is the risk that an agent acts beyond its mandate. This may happen because permissions are too broad, policies are unclear, a sub-agent receives excessive authority, a human approval is missing or revocation is not enforced.

Authority risk is the defining risk of agentic finance. It cannot be solved only by better prompts. It requires technical controls that prevent execution outside the authorized boundary.

### Identity Risk

Identity risk is the risk that an agent is not properly identified, owned or governed. Shadow agents may be created outside central oversight. Generic service accounts may hide the actor. Credentials may be reused. API keys may persist after the agent's task ends.

Non-human identity platforms argue that service accounts, tokens, bots, MCP servers and AI agents must be discovered and governed because traditional human IAM does not provide sufficient visibility.

### Execution Risk

Execution risk is the risk that the agent performs the wrong action even if its general task is legitimate. It may pay the wrong amount, choose the wrong beneficiary, misread an invoice, call the wrong API, fail to notice changed bank details or trigger a workflow twice.

Controls should include transaction-specific evidence, idempotency checks, duplicate detection, confirmation steps and post-action receipts.

### Data Risk

Data risk is the risk of exposing sensitive financial, personal or commercial data. Agents may retrieve more data than necessary, include confidential data in prompts, send data to external tools or combine data in ways that violate purpose limitation.

Data minimization and source-level permissions are essential. Access should be inherited from the user's legitimate permissions but narrowed by task, purpose and risk.

### Model Risk

Model risk includes hallucination, prompt injection, tool misuse, goal drift, hidden bias and overconfidence. Agentic workflows increase these risks because model outputs may become operational steps.

A model's natural-language explanation should not be treated as proof of authority. The proof should be the policy-bound decision object and evidence record.

### Systemic Risk

Systemic risk arises when many institutions use similar agents, model providers, data sources or infrastructure. If agents respond to market news, sanctions signals, liquidity stress or fraud alerts in correlated ways, they may amplify instability.

Agentic finance intensifies existing AI concentration concerns because agents may not only analyse information but also initiate operational responses.

### Legal and Liability Risk

Legal-liability risk concerns responsibility. If an AI agent executes a payment outside the expected scope, who is responsible: the customer, the company, the bank, the software provider, the model provider, the agent operator or the person who delegated authority?

The answer will depend on law, contract, regulation and facts. But without evidence records, even determining the facts becomes difficult. Agentic finance governance should therefore be designed to support legal reconstruction, not only technical debugging.



## 8. Product and Market Landscape

The market around agentic finance is still early, but several product categories are already visible.

**KYE Protocol** focuses on authority infrastructure and evidence for agentic workflows. Its public whitepaper frames the problem as proving who or what acted, on behalf of whom, under what authority, with what state and audit trail. This framing is highly relevant to finance because the financial sector is built on authorization, records, delegated roles and accountability.

**Arcade.dev** is one of the closest developer-platform examples. It presents a layer for secure agent authorization, tool execution and governance, emphasizing the need to know which action an agent took, on behalf of which user and in which system.

Large identity providers are entering the field. **Microsoft Entra Agent ID** extends identity management to AI agents and links agent identities to lifecycle, access governance, logs and modern protocols such as OAuth, MCP and A2A. **Ping Identity**, **SecureAuth** and **Okta** are also treating AI agents as first-class identities rather than invisible software components.

Enterprise AI governance platforms are also moving toward agent control. **Credal** emphasizes access control, auditing and human-in-the-loop governance, especially for agents that can mutate data or take actions. Compliance platforms such as **Drata** are beginning to frame AI-agent governance as an auditor and compliance problem, not only a developer problem.

Non-human identity security platforms such as **Token Security**, **Oasis Security** and **Astrix/Cisco** approach the same issue from the cybersecurity side: discover non-human identities, map their permissions, reduce excessive privilege, monitor behavior and manage lifecycle.

Payments and agentic-commerce infrastructure is another emerging category. **Kite** and related projects explore agent-native payments, programmable constraints and authenticated agent settlement. **AgentWorth** and proof-of-enforcement concepts focus on making a money-moving agent's compliance with disclosed rules verifiable by counterparties.

The market signal is clear: the agentic-finance governance stack is forming from several directions at once. Identity companies are solving agent identity. Developer platforms are solving tool authorization. Cybersecurity companies are solving non-human identity risk. Compliance companies are solving auditability. Fintech and payment infrastructure companies are solving agent payments.

KYE's differentiated position appears to be the authority-and-evidence narrative: not just identity, not just access control, but a chain of authority that can be explained and verified.



## 9. Scientific and Patent Landscape

The scientific literature confirms that agentic finance is part of a larger research transition. The field is moving from model-centric AI governance to system-level governance. Researchers increasingly argue that the AI model should not be the only trusted component. Instead, organizations should build external controls around identity, authorization, tool access, monitoring, evidence and containment.

This is particularly relevant for finance, where mistakes have direct operational and legal consequences.

Authenticated delegation research proposes that agents should act through accountable delegation relationships, often by adapting existing web identity standards such as OAuth and OpenID Connect. AI identity research argues that agents create new identity gaps because they lack bodies, ordinary legal standing and stable human-like authentication patterns. Authorization propagation research examines how authority moves through multi-agent systems, including transitive delegation and temporal limits. Agent Identity Protocol research proposes invocation-bound capability tokens that combine identity, attenuated authorization and provenance across MCP and A2A contexts.

Finance-specific research is also emerging. Studies of AI agents in financial markets describe layered architectures in which agents perceive data, reason, execute and interact with market infrastructure. Surveys of agentic AI in finance highlight applications across trading, risk management, credit, compliance and customer operations, while warning that governance and systemic implications remain underdeveloped. Secure autonomous payment research explores how agents can prove authenticity and intent through decentralized identifiers, verifiable credentials, trusted execution and audit trails.

The patent landscape shows similar movement. Okta's patent application on managing AI agents using user-controlled authorization network tokens is directly relevant to scoped agent authority. Finance-oriented agentic AI patents mention AML, KYC, regulatory reports and audit trails. Other filings refer to federated compliance-token inheritance, revocation pointers, digital agent governance and cryptographic audit trails.

These patents should not be treated as proof of product maturity, but they are useful signs that the intellectual-property landscape is forming around agent identity, delegated authority and auditability.



## 10. Regulation, Standards and Public-Policy Implications

Regulation of agentic finance will not be a single law. It will cut across financial supervision, payment services, consumer protection, data protection, cybersecurity, AI governance, outsourcing, operational resilience, electronic signatures, audit standards and corporate accountability.

This complexity is why pilot-based learning is more realistic than immediate national deployment.

A useful starting point is the governance of agentic AI systems in general. OpenAI's practices paper emphasizes constraining action space, requiring approvals, making agent behavior legible, monitoring activity, maintaining attributability and preserving interruptibility. These principles translate directly into finance.

A financial agent should have a constrained action space. High-impact actions should require approval. The system should be legible to operators. Activities should be monitored. Actions should be attributable to an agent, principal and policy. Interruptibility should exist through revocation, pause and kill-switch mechanisms.

Financial regulators are beginning to ask similar questions from the sector perspective. AI in financial services raises concerns about advice, consumer outcomes, accountability, model concentration, operational resilience and systemic effects. Agentic systems add a specific problem: execution.

A chatbot that gives poor advice is risky. An agent that can act on that advice is riskier. Regulatory frameworks will therefore need to distinguish between AI that informs, AI that recommends, AI that prepares actions and AI that executes actions.

Standards are likely to matter. Identity and authorization standards such as OAuth, OpenID Connect, token exchange, rich authorization requests, client-initiated backchannel authentication, SPIFFE workload identity, decentralized identifiers and verifiable credentials are all being discussed or adapted for agentic contexts. Agent communication standards such as MCP and A2A are also relevant because they define how agents connect to tools and to each other.

A country or regulator does not need to invent all standards locally, but it should understand which standards are being used and where accountability gaps remain.

For small economies like Armenia, public policy should focus on safe experimentation. A regulatory sandbox or innovation hub can allow limited trials with synthetic data, simulated transactions or shadow-mode governance. The Central Bank of Armenia's 2026 consultation on innovation in the financial system explicitly asked market participants and experts about barriers, innovative services, innovation hubs and regulatory sandboxes.

Agentic finance governance is a strong candidate for such discussion because it is not merely a product; it is a cross-cutting infrastructure question.

The policy objective should not be to allow unsupervised AI agents to move money freely. The objective should be to develop local competence in governing delegated autonomous action. That competence would help Armenian banks, fintechs, SMEs, regulators and technology providers understand future open-finance risks before they become urgent. It would also position Armenia as a small-state laboratory for practical, risk-proportionate AI governance.


## Conclusion

Agentic finance is likely to become one of the most important next steps in digital finance. Open banking and open finance created the infrastructure for controlled access to financial data and services. Agentic finance goes further: it introduces systems that may prepare, recommend, negotiate, initiate or execute financial actions on behalf of people and organizations.

This shift creates a new governance challenge. The key question is no longer only whether a user has consented or whether an application has access. The key question is whether a specific agent acted under valid authority, within defined limits, with sufficient evidence and with clear accountability.

The future of agentic finance will therefore depend less on impressive AI interfaces and more on invisible governance infrastructure: agent identity, delegated authorization, policy-as-code, continuous authorization monitoring, evidence packs, finality receipts, revocation and auditability.

For financial institutions, this means that AI adoption should not be judged only by productivity gains. It should also be judged by whether the institution can explain, limit, interrupt and audit the actions of its agents. For regulators, it means that the supervision of AI in finance will need to distinguish between systems that merely inform, systems that recommend, systems that prepare actions and systems that execute actions. For SMEs, it means that agentic finance could reduce operational burdens, but only if authority boundaries are clear and human control is preserved where risk is high.

For small economies, the opportunity is practical rather than rhetorical. The country does not need to copy the most complex models of larger jurisdictions. It can begin with a controlled, synthetic-data pilot that tests one narrow SME workflow and asks whether delegated autonomous action can be governed safely. Such a pilot would not require live bank integration or real customer data. It would require clear problem definition, technical experimentation, legal and regulatory review, and cooperation between domain experts and technology specialists.

The safest path is gradual. Agentic finance should begin with preparation, recommendation, escalation and bounded execution. Only after authority, auditability and liability questions are addressed should more autonomous financial agents be considered.

If designed well, agentic finance can become more than another fintech trend. It can become a framework for safer digital delegation, stronger auditability and more accessible financial operations for small businesses. If designed poorly, it may create invisible actors with excessive authority inside highly sensitive financial systems.

The difference between these futures will depend on whether countries, companies and institutions build the missing authority layer before agentic finance becomes widespread.



## References and Further Reading

1. OpenAI. *Practices for Governing Agentic AI Systems*. 2025.  
   https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf

2. Reuters. *Wall Street banks ramp up digital assistants in bid to win productivity race*. 2026.  
   https://www.reuters.com/business/finance/wall-street-banks-ramp-up-digital-assistants-bid-to-win-productivity-race-2026-07-13/

3. Reuters. *AI could upend financial advice, UK regulator-linked review warns*. 2026.  
   https://www.reuters.com/business/finance/

4. Central Bank of Armenia. *Public Consultation: Innovation in the Financial System, PC-2026-02*. 2026.  
   https://www.cba.am/file_manager/Financial%20System/Public-consultation/Public-consultation-eng.pdf

5. KYE Protocol. *KYE Protocol Whitepaper: Authority Infrastructure for the Agentic Economy*. 2026.  
   https://kyeprotocol.com/whitepaper.html

6. Hicks et al. *Authenticated Delegation and Authorized AI Agents*. 2025.  
   https://arxiv.org/abs/2501.09674

7. OpenID Foundation AI Identity Management Community Group. *Identity Management for Agentic AI*. 2026.  
   https://arxiv.org/abs/2510.25819

8. Academic preprint. *AI Identity: Standards, Gaps, and Research Directions for AI Agents*. 2026.  
   https://arxiv.org/abs/2604.23280

9. Academic preprint. *Authorization Propagation in Multi-Agent AI Systems*. 2026.  
   https://arxiv.org/abs/2605.05440

10. Academic preprint. *AIP: Agent Identity Protocol for Verifiable Delegation Across MCP and A2A*. 2026.  
    https://arxiv.org/abs/2603.24775

11. Academic preprint. *Intent-Governed Tool Authorization for AI Agents*. 2026.  
    https://arxiv.org/abs/2605.03573

12. Academic preprint. *AI Agents in Financial Markets: Architecture, Applications and Systemic Implications*. 2026.  
    https://arxiv.org/html/2603.13942v1

13. Academic preprint. *Agentic Artificial Intelligence in Finance: A Comprehensive Survey*. 2026.  
    https://arxiv.org/abs/2604.21672

14. Academic preprint. *Secure Autonomous Agent Payments: Verifying Authenticity and Intent in a Trustless Environment*. 2025.  
    https://arxiv.org/abs/2511.15712

15. Cloud Security Alliance. *Agentic Identity Governance Framework*. 2026.  
    https://labs.cloudsecurityalliance.org/agentic/agentic-identity-governance-framework-v1/

16. Microsoft. *Microsoft Entra Agent ID*. 2026.  
    https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id

17. Arcade.dev. *Infrastructure for secure AI-agent authorization, tools and governance*. 2026.  
    https://www.arcade.dev/

18. Ping Identity. *Agent Governance*. 2026.  
    https://www.pingidentity.com/en/product/agent-governance.html

19. SecureAuth. *AI Agent Identity and Access Management*. 2026.  
    https://secureauth.com/solutions/use-cases/ai-agent-access

20. Credal. *What is Governance for AI and AI Agents?* 2026.  
    https://www.credal.ai/blog/what-is-governance-for-ai-and-ai-agents

21. Token Security. *The Ultimate Non-Human Identity Security Guide*. 2026.  
    https://www.token.security/assets/the-ultimate-non-human-identity-security-guide

22. Reuters. *UN digital tech agency launches initiative to improve trust in AI agents*. 2026.  
    https://www.reuters.com/legal/litigation/un-digital-tech-agency-launches-initiative-improve-trust-ai-agents-2026-07-09/
