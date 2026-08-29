// Notion AI Foresight uses a custom structure different from FullCaseStudy
export const notionAiForesight: any = {
  // Basic metadata
  title: 'Notion AI Foresight',
  subtitle: 'Reimagining Notion AI as the AI Operating System for Modern Teams',
  description: 'Defining the next major product evolution of Notion AI from market research through PRD, MVP, and rollout strategy',
  role: 'Aspiring Product Manager (AI)',
  timeline: 'July 2026',
  type: 'Portfolio Case Study',
  liveLink: 'https://notion-ai-prototype.vercel.app/',
  notionLink: ' https://app.notion.com/p/Reimagining-Notion-AI-as-the-AI-Operating-System-for-Modern-Teams-3b7d02fd354f804d920dd07a547f0b7e?source=copy_link', // Add your actual Notion link here
  
  // Hero section
  hero: {
    tagline: 'I live in Notion 5+ hours a day for docs, specs, and meeting notes. What kept bothering me was that it could tell me everything about what my team had written, but nothing about whether the work behind it was actually on track. This case study is my attempt to work through what closing that gap would actually take.',
    context: 'Prepared by Soumi • Aspiring Product Manager (AI) - Portfolio Case Study • July 2026'
  },

  // Executive Summary
  executiveSummary: {
    atAGlance: [
      "The bet: the raw signal for delivery foresight already sits inside Notion's content; no new integrations needed to surface it.",
      'The MVP: one signal type (status-language detection), full explainability on every flag, an auto-generated status digest, unified pricing. No autonomous actions.',
      'The north star: % of Business tier workspaces where Foresight measurably cuts duplicated status work, without a drop in engagement.',
      'Short on time? Sections 4 (vision), 5 (RICE), and 6 (PRD) carry the core argument; everything else is supporting depth.'
    ],
    overview: `Notion AI today is excellent at helping people write, drafting, summarising, and rewriting content inside a page. It is not yet able to tell a team whether its work is actually on track. That gap is costing Notion real revenue: teams that need delivery foresight are paying for a second tool (ClickUp Brain, at $7-9/user/month) or, at the enterprise level, for Glean's enterprise search (roughly $45-50/user/month), more than double what Notion Business costs.

This case study proposes Notion Foresight: a new capability that reasons across the docs, comments, and database fields a team already keeps in Notion to surface delivery risk and decision drift before they become a crisis, with every signal traceable back to its source.

The MVP is deliberately narrow: one signal type (status language detection), full explainability on every flag, an auto-generated status digest, and unified Business tier pricing with autonomous actions explicitly held back until trust is earned.

The core bet: Notion's advantage isn't out-integrating Glean or out-executing ClickUp; it's that the raw signal for foresight is already sitting inside content Notion already owns.`
  },

  // Problem section
  problem: {
    statement: "Notion's AI can help you write about your work, but can't tell you whether your work is on track",
    context: `Notion AI currently competes in three categories at once: all-in-one workspace (docs + wiki + light PM), AI-native task and PM execution, and enterprise "Work AI" / knowledge OS. This ambiguity is itself the strategic problem.

Notion's strongest wedge remains writing: users can select between GPT-5.2, Claude Opus 4.5, and Gemini 3. Where it stays thin is anything requiring Notion to reason across a workspace rather than one page.`,
    evidence: [
      {
        type: 'data',
        description: 'Teams actively paying for a second tool',
        details: 'Teams on Notion Business are paying an additional $7-9/user/month for ClickUp Brain, or enterprises paying $45-50/user/month for Glean - revenue actively flowing to competitors.',
        source: 'Market research & competitive analysis',
        credibility: 'illustrative'
      },
      {
        type: 'user',
        description: 'The delivery-owning team lead pain point',
        details: "Engineering managers manually rebuild status docs every Friday from three tools plus Slack DMs because Notion can't warn them that a project is slipping before the deadline.",
        source: 'Persona research synthesis',
        credibility: 'illustrative'
      },
      {
        type: 'competitive',
        description: 'Strategic whitespace validation',
        details: "Glean proves the AI OS category is real and enterprises will pay 2.5x Notion's Business price for it. Notion's unclaimed position is reasoning over content it already owns.",
        source: 'Competitive positioning analysis',
        credibility: 'real'
      }
    ],
    rootCause: `Notion has built general-purpose AI infrastructure (Custom Agents, Enterprise Search) without a specific, high-conviction bet on which job it should serve first. That ambiguity is costing it the exact persona whose adoption would justify Business-tier pricing.`
  },

  // Goals section
  goals: {
    business: [
      "Close the execution intelligence gap that's pushing teams to adopt ClickUp Brain",
      "Defend against Glean's enterprise AI OS positioning by claiming \"foresight from owned content\"",
      'Create a compelling Business-tier upgrade story beyond writing assistance'
    ],
    user: [
      'Surface at-risk projects using signals already present in workspace content',
      'Make every risk signal explainable and independently verifiable in under 10 seconds',
      'Eliminate the recurring manual status-doc workflow for pilot teams'
    ],
    product: [
      'Ship one signal type (status-language detection) with high precision',
      'Establish trust through full explainability before adding autonomous actions',
      'Simplify AI pricing into one comprehensible Business tier line item'
    ],
    metrics: {
      primary: '% of Business-tier workspaces where Foresight measurably reduces manual status work without dropping engagement',
      leading: [
        'Signal dismissal-as-inaccurate rate',
        'Trace panel click-through rate on risk badges',
        '% of eligible projects generating at least one signal within 30 days'
      ],
      lagging: [
        'Reduction in manually-created status pages vs. control',
        'Business-tier renewal and expansion rate vs. control',
        'Net new Business-tier upgrades citing Foresight'
      ]
    },
    guardrails: [
      'Total content creation and collaboration activity must not decline',
      'Zero instances of trace panel surfacing content across permission boundaries',
      'No measurable page-load or workspace performance regression'
    ]
  },

  // Constraints section
  constraints: [
    {
      category: 'technical',
      description: 'Must respect existing page-level permissions',
      impact: "Every signal must be permission-checked at query time - a trace panel surfacing content a user can't access is a security incident, not just a bug."
    },
    {
      category: 'business',
      description: 'Cannot require new integrations in MVP',
      impact: 'Foresight must work on Notion-native content only; cross-app signal ingestion (Slack, GitHub) is explicitly out of scope for v1.'
    },
    {
      category: 'time',
      description: 'Trust must be earned before autonomy',
      impact: 'No autonomous actions (auto-rescheduling, auto-sending) in MVP. F10 (Autonomous Re-plan Agent) deferred until sustained precision track record.'
    },
    {
      category: 'resource',
      description: 'Model cost must fit bundled Business pricing',
      impact: 'Default to cost-efficient model tier for routine scans, escalate only for ambiguous cases to avoid straining margins.'
    }
  ],

  // User research & personas
  users: {
    primaryPersona: 'The Delivery-Owning Team Lead',
    personas: [
      {
        name: 'The Overloaded IC',
        role: 'Mid-level PM, designer, or engineer',
        context: 'Lives in Notion 4+ hours a day for docs, specs, and meeting notes',
        functionalJTBD: 'Turn fragmented meeting notes into a finished, shareable artifact without starting from a blank page',
        emotionalJTBD: 'Feel like a high-output contributor, not buried in admin work',
        currentWorkaround: 'Copies into ChatGPT and pastes back - a context-switch tax she resents',
        painLevel: 'medium',
        insight: "This job is already well-served by Notion's current AI. Not the priority persona."
      },
      {
        name: 'The Delivery-Owning Team Lead',
        role: 'Engineering manager or ops/product lead',
        context: 'Runs 2-4 concurrent projects across a team of 5-12; uses Notion for docs but a separate tool for task tracking',
        functionalJTBD: 'Get warned that a project is slipping before the deadline, not after',
        emotionalJTBD: 'Walk into stakeholder updates already ahead of the bad news, not surprised by it',
        currentWorkaround: 'Manually rebuilds a status doc every Friday from three tools plus Slack DMs',
        painLevel: 'high',
        insight: 'This is the persona actively pushing teams toward a second tool - the clearest signal in the research.'
      },
      {
        name: 'The Workspace Admin / Economic Buyer',
        role: 'Ops or IT lead',
        context: 'Owns the Notion renewal decision at Business or Enterprise tier',
        functionalJTBD: 'A clear, defensible story for what AI-in-Notion is actually saving the company',
        emotionalJTBD: 'Avoid championing a tool whose value is "vibes-based" when finance asks for numbers',
        currentWorkaround: 'Notion now bills workspace plan, AI features, and Custom Agent credits as three separate line items',
        painLevel: 'medium-high',
        insight: "Her job depends on closing Persona B's gap. Renewal conversation gets harder without delivery foresight story.",
      }
    ],
    keyInsights: [
      "Persona A's job is already well-served. Persona B's job is actively pushing teams to competitors.",
      "Persona C's renewal depends on solving Persona B's problem, not deepening Persona A's.",
      'Execution and cross-workspace intelligence is the higher-leverage bet.'
    ]
  },

  // Solution section
  solution: {
    overview: 'Notion Foresight: a new capability that reasons across workspace docs, comments, and database fields to surface delivery risk and decision drift before they become a crisis',
    vision: 'Notion becomes the AI Operating System for modern teams by turning the content teams already create inside it into foresight about the work itself - not just better writing, but earlier warning.',
    strategicBet: "Notion's advantage isn't out-integrating Glean or out-executing ClickUp; it's that the raw signal for foresight is already sitting inside content Notion already owns. Foresight turns that owned content into an early warning system.",
    strategicPillars: [
      {
        title: 'Cross-object reasoning, not cross-app retrieval',
        description: 'Link a doc, a database row, a comment thread, and a meeting note that reference the same project to surface what a human would only notice by re-reading all four.'
      },
      {
        title: 'Foresight, not just assistance',
        description: 'Shift from reactive (you ask, it answers) to proactive signals - the way a good chief of staff would flag risk before being asked.'
      },
      {
        title: 'Packaging that matches the value story',
        description: 'Fix the three-layer pricing confusion alongside the feature, not after it.'
      },
      {
        title: 'Earn trust before autonomy',
        description: 'Start with visible, explainable signals with a traceable "why," and graduate to autonomous action only after trust is established.'
      }
    ],
    keyFeatures: [
      {
        name: 'Risk Radar',
        description: 'Surfaces at-risk projects from status/date fields plus linked unstructured content',
        priority: 'MVP Core'
      },
      {
        name: 'Explainable Signal Trace',
        description: 'Every flag links back to its exact source - clicking a badge opens a trace panel with direct links to source content',
        priority: 'MVP Core'
      },
      {
        name: 'Auto-Synthesized Status Digest',
        description: 'Generates weekly status doc live from linked content, replacing manual Friday rebuilds',
        priority: 'MVP Core'
      },
      {
        name: 'Unified AI Pricing',
        description: 'Folds Foresight into one coherent Business tier line item, no separate credit metering',
        priority: 'MVP Core'
      }
    ]
  },

  // Prioritization section
  prioritization: {
    framework: 'RICE (Reach × Impact × Confidence / Effort)',
    approach: `Scored 11 candidate features using RICE, where Reach is % of Business-tier active teams per quarter, Impact is 0.25-3, Confidence is decimal (0.9 = 90%), and Effort is person-months.

Key insight: F4 (Explainable Signal Trace) tops the list not because it's flashy, but because trust features are cheap and foundational; foresight signals are worthless if users don't trust them.`,
    options: [
      {
        name: 'F4: Explainable Signal Trace',
        description: 'Every flag links back to its exact source',
        reach: '70%',
        impact: '2 (High)',
        confidence: '90%',
        effort: '3 person-months',
        score: 42.0,
        chosen: true,
        solves: ['Trust foundation', 'User verification', 'False positive management'],
        tradeoffs: ['Requires UI polish', 'Permission-checking overhead'],
        risks: ["Must never expose content user can't access"]
      },
      {
        name: 'F9: Unified AI Pricing',
        description: 'Fold Foresight into one Business tier line item',
        reach: '40%',
        impact: '2 (High)',
        confidence: '90%',
        effort: '2 person-months',
        score: 36.0,
        chosen: true,
        solves: ['Renewal conversation clarity', 'Economic buyer pain', 'Packaging confusion'],
        tradeoffs: ['Packaging decision, not ML work'],
        risks: ['Future features may still need credit metering']
      },
      {
        name: 'F3: Auto-Synthesized Status Digest',
        description: 'Weekly status doc generated from linked content',
        reach: '50%',
        impact: '3 (Very High)',
        confidence: '80%',
        effort: '5 person-months',
        score: 24.0,
        chosen: true,
        solves: ['Manual Friday status doc workflow', 'Persona B core pain'],
        tradeoffs: ['Complex multi-source synthesis', 'Output quality risk'],
        risks: ['May be used once as novelty then abandoned']
      },
      {
        name: 'F1: Risk Radar',
        description: 'Surfaces at-risk projects from status/date signals',
        reach: '60%',
        impact: '3 (Very High)',
        confidence: '70%',
        effort: '6 person-months',
        score: 21.0,
        chosen: true,
        solves: ['Core delivery foresight job', 'ClickUp Brain gap'],
        tradeoffs: ['Genuine ML challenge', 'False positive risk'],
        risks: ['Status-language detection may misread ambiguous phrasing']
      },
      {
        name: 'F10: Autonomous Re-plan Agent',
        description: 'Proposes/executes schedule changes on detected risk',
        reach: '15%',
        impact: '3 (Very High)',
        confidence: '30%',
        effort: '9 person-months',
        score: 1.5,
        chosen: false,
        solves: ['Ultimate foresight promise'],
        tradeoffs: ['Most exciting to imagine', 'Worst to build first'],
        risks: ['Requires trust not yet earned', 'Workplace surveillance perception']
      }
    ],
    resultingPriority: [
      'NOW (MVP Core): F4 → F1 → F9 → F3',
      'NEXT: F6 (Meeting Note Linker) → F8 (ROI Dashboard) → F5 (Stakeholder Digest)',
      'LATER: F2 (Decision Drift) → F7 (Custom Rules) → F11 (Enterprise Search)',
      'FUTURE (trust-gated): F10 (Autonomous Actions)'
    ]
  },

  // MVP & Experimentation
  mvp: {
    scope: {
      included: [
        'Risk Radar limited to status-language detection only',
        'Explainable Signal Trace shipped simultaneously',
        'Manual-only Status Digest generation',
        'Foresight included in Business tier at launch'
      ],
      excluded: [
        'Schedule-conflict detection (held for post-launch iteration)',
        'Scheduled/recurring digest generation',
        'All autonomous actions (auto-rescheduling, auto-sending)',
        'Cross-app signal ingestion (Slack, Gmail, GitHub)'
      ]
    },
    coreRisks: [
      'Precision risk: Will status-language detection produce too many false positives?',
      'Behavior-change risk: Will team leads actually retire manual status docs?',
      'Packaging risk: Does bundling into Business tier move renewal/upgrade needle?'
    ],
    whatWeWouldBuild: [
      'Risk badge component that appears on database rows and project pages',
      'Trace panel UI that links every signal to source content with permission checks',
      'Status digest generator that pulls from underlying signals into editable draft',
      'Recurring scan service (6-hour cadence) that detects status-language patterns'
    ],
    futureIterations: [
      'Schedule-conflict signal detection (once status-language precision proven)',
      'Scheduled digest generation with human review before sending',
      'Meeting Note → Risk/Task auto-linker',
      'Foresight ROI Dashboard for renewal conversations'
    ],
    explicitlyRejected: [
      'Autonomous Re-plan Agent in v1  -  trust must be earned first',
      'Cross-app integrations in MVP  -  compete on owned content advantage',
      'Admin-configurable risk rules in v1  -  ship sensible default first'
    ]
  },

  // Experimentation plan
  experimentation: {
    approach: 'Three-phase gated rollout with control groups and guardrail metrics at each stage',
    hypothesis: 'Foresight-enabled workspaces will show measurable reduction in manually-created status pages versus control, without dropping overall engagement',
    experiments: [
      {
        name: 'Phase A: Internal Dogfooding',
        duration: '2 weeks',
        setup: "Enable Risk Radar and trace panel across Notion's own product/eng teamspaces",
        metrics: 'Log every dismissed signal with reason; measure false-positive rate',
        successCriteria: 'False-positive dismissal rate under internal threshold; zero permission-boundary bugs',
        learnings: 'Gate to Phase B: precision must be proven internally before external exposure'
      },
      {
        name: 'Phase B: Closed Design-Partner Pilot',
        duration: '4-6 weeks, ~15-25 workspaces',
        setup: 'Cohort A/B: half get Foresight live, half get "coming soon" placebo',
        metrics: 'Reduction in manual status pages (Foresight vs control); time-in-app guardrail',
        successCriteria: 'Measurable status-doc reduction; no engagement drop',
        learnings: 'Isolates effect from pilot-attention novelty; validates core behavior change'
      },
      {
        name: 'Phase C: Phased Business-Tier Rollout',
        duration: '6-8 weeks staged',
        setup: 'Roll out in waves (10% → 30% → 100%) with held-out control at each',
        metrics: 'Renewal/expansion rate vs control; adoption + engagement',
        successCriteria: 'Improved renewal rates; organic spread beyond pilot',
        learnings: 'Proves or disproves packaging hypothesis at scale'
      }
    ],
    guardrails: [
      'Signal dismissal-as-inaccurate rate stays below Phase A threshold',
      'Zero instances of trace panel surfacing content user lacks access to (release-blocking)',
      'No measurable page-load or workspace performance regression',
      'Total content creation and collaboration activity does not decline'
    ],
    killCriteria: [
      "If Phase A false-positive rate stays high after one tuning pass → rework detection, don't proceed",
      "If Phase B shows no reduction in manual status docs → invest in explainability, don't accelerate",
      "If Phase C shows adoption but no renewal effect → diagnose as packaging problem, not product failure"
    ]
  },

  // Learnings & Reflection
  learnings: {
    whatWentWell: [
      'Category framing was sharp: identified the exact whitespace Notion could own (foresight from owned content) that neither Glean nor ClickUp could replicate',
      'Persona research created a falsifiable hypothesis: Persona B is actively pushing teams to competitors, making her the priority',
      'RICE prioritization put trust (F4) ahead of flashiness (F10), resisting the temptation to over-scope MVP',
      "Experimentation plan had real teeth: kill criteria weren't just box-checking, they were decision gates"
    ],
    whatWasHard: [
      'Resisting scope creep even against my own spec: shipping one signal type well teaches more than shipping two signal types with murkier attribution',
      "The packaging problem (three-layer AI pricing confusion) felt like a distraction at first, but turned out to be central to Persona C's renewal job",
      'Balancing "this is how I\'d build it" with "this is a portfolio case study"  -  had to explicitly flag what\'s primary research vs. synthesized hypothesis'
    ],
    whatSurprisedMe: [
      'How much of the competitive threat came from pricing/packaging confusion, not just missing features',
      "That the highest-RICE feature (Explainable Signal Trace) wasn't the most exciting one  -  a useful reminder that trust is infrastructure",
      'The "autonomous actions" feature I wanted to build first scored lowest by design  -  and that was the right call'
    ],
    "whatI'dDoNextTime": [
      'Run 8-10 structured interviews before writing the PRD instead of synthesizing from public reviews  -  would have caught blind spots earlier',
      'Prototype the trace panel UI earlier to pressure-test whether "explainable" actually felt trustworthy to users',
      'Model out the unit economics of the scan service earlier  -  "bundled in Business tier" is a pricing bet that needs margin validation'
    ]
  },

  // Reflection
  reflection: {
    statement: `Every feature, metric, and rollout decision in this case study traces back to a single bet: Notion's advantage is reasoning over content it already owns, not out-integrating Glean or out-executing ClickUp.

The MVP is intentionally narrow - one signal type, no autonomy - not because the vision is small, but because trust before autonomy means the roadmap's most ambitious items are only unlocked by proving the boring, trustworthy version works first.`,
    honestLimitations: [
      'This is a portfolio case study, not a shipped product  -  the personas are synthesized from public reviews and competitor positioning, not primary user interviews I ran myself.',
      'The RICE scores are directional judgment calls ahead of real telemetry, not data-backed certainty.',
      "The experimentation plan is what I'd propose, but real rollout decisions would depend on internal Notion data I don't have access to.",
      'The unit economics (scan cost vs. Business tier pricing) are estimated, not modeled with actual infrastructure costs.'
    ],
    whatThisDemonstrates: [
      'Category framing: identifying strategic whitespace through competitive analysis',
      'Persona-driven prioritization: falsifiable hypotheses about who to serve first',
      "Ruthless MVP scoping: cutting features I wanted to build because they'd break the trust model",
      'Experimentation rigor: real kill criteria, not box-checking',
      'Strategic clarity: every decision traces back to one core bet'
    ]
  },

  // Metadata for display
  competencies: [
    'Product Strategy',
    'AI Product Thinking',
    'Market Research',
    'Prioritization (RICE)',
    'Experimentation Design',
    'PRD Writing'
  ],

  tags: ['AI', 'Enterprise', 'B2B', 'SaaS', 'Productivity', 'Platform Strategy'],
  
  keyInsight: "The highest-leverage PM bet isn't always the most exciting feature - it's the one that unlocks trust for everything else. Explainable Signal Trace scored highest in RICE not because it was flashy, but because foresight signals are worthless if users don't trust them.",
  
  slug: 'notion-ai-foresight'
};

