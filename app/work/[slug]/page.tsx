import { notFound } from 'next/navigation';
import {
  CaseStudyLayout,
  ProblemSection,
  EvidenceSection,
  InsightSection,
  GoalsSection,
  ConstraintsSection,
  OptionsSection,
  PrioritizationSection,
  SolutionSection,
  MVPSection,
  ExperimentationSection,
  LearningsSection,
  ReflectionSection,
  SectionHeader,
  DecisionCard,
} from '@/components/case-study';
import {
  ProductQuestion,
  TheTradeoff,
  TheDecision,
  WhatICut,
  StillThinkingAbout,
  BuildersNote,
} from '@/components/personality';
import { Body, Caption } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { linkedInJobNavigator } from '@/lib/case-studies/linkedin-job-navigator';
import { notionAiForesight } from '@/lib/case-studies/notion-ai-foresight';
import { replitPricingDiagnostic } from '@/lib/case-studies/replit-pricing-diagnostic';
import { whoopDataTrust } from '@/lib/case-studies/whoop-data-trust';
import { coinbaseRestrictionTransparency } from '@/lib/case-studies/coinbase-restriction-transparency';
import { feedbackLens } from '@/lib/case-studies/feedbacklens';

// Render function for product projects (different from case studies)
function renderProductProject(project: any) {
  const { product } = project;
  
  return (
    <CaseStudyLayout
      name={project.name}
      tagline={project.tagline}
      overview={product.overview}
    >
      {/* GitHub & Live Links Banner */}
      <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
              {project.status}
            </Caption>
            <Body size="sm" className="text-charcoal-700">
              Full PRD, working prototype, and source code available
            </Body>
          </div>
          <div className="flex gap-3">
            <Button 
              href={project.githubLink}
              variant="secondary"
              size="sm"
              className="flex items-center gap-2"
            >
              View on GitHub →
            </Button>
            {project.liveLink && (
              <Button 
                href={project.liveLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                Try Live Demo →
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <ProblemSection problem={{
        who: product.overview.product + ' users',
        what: product.problem.context,
        whyItMatters: product.problem.costOfInaction,
        currentExperience: product.problem.currentSolution
      }} />
      
      <ProductQuestion question="How do you turn 200+ weekly feedback items into defensible priorities without manual synthesis?" />
      
      {/* Product Solution */}
      <SolutionSection solution={{
        description: product.solution.vision,
        keyFeatures: product.solution.coreCapabilities,
        visuals: []
      }} />
      
      <TheDecision decision={product.overview.productThesis} />
      
      {/* Product Decisions Made */}
      <div className="mb-16">
        <SectionHeader
          number="05"
          title="Key Product Decisions"
          description="Trade-offs and rationale for major design choices"
          id="decisions"
        />
        <div className="space-y-6">
          {product.productDecisions.map((decision: any, index: number) => (
            <DecisionCard
              key={index}
              title={decision.decision}
              label={decision.tradeoff ? 'Trade-off Made' : undefined}
            >
              <Body size="sm" className="text-charcoal-700 mb-3">
                <span className="font-semibold">Rationale:</span> {decision.rationale}
              </Body>
              {decision.tradeoff && (
                <Body size="sm" className="text-charcoal-600 italic">
                  {decision.tradeoff}
                </Body>
              )}
            </DecisionCard>
          ))}
        </div>
      </div>
      
      {/* Technical Highlights */}
      <div className="mb-16">
        <SectionHeader
          number="06"
          title="Technical Implementation"
          description="How engineering background informed product decisions"
          id="technical"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.technicalHighlights.map((highlight: any, index: number) => (
            <div key={index} className="bg-warmth-100 border-l-4 border-charcoal-900 p-6 rounded-r-lg">
              <Body className="font-semibold text-charcoal-900 mb-3">{highlight.category}</Body>
              <ul className="space-y-2">
                {highlight.details.map((detail: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent-600 mt-1.5 flex-shrink-0">•</span>
                    <Body size="sm" className="text-charcoal-700">{detail}</Body>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* PRD Highlights */}
      <div className="mb-16">
        <SectionHeader
          number="07"
          title="PRD Process & Documentation"
          description="How product requirements were structured and validated"
          id="prd"
        />
        <div className="space-y-6">
          {product.prdHighlights.map((section: any, index: number) => (
            <div key={index} className="bg-accent-50 border-l-4 border-accent-600 p-6 rounded-r-lg">
              <Body className="font-semibold text-charcoal-900 mb-3">{section.section}</Body>
              <ul className="space-y-2">
                {section.keyPoints.map((point: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent-600 mt-1.5 flex-shrink-0">→</span>
                    <Body size="sm" className="text-charcoal-700">{point}</Body>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <GoalsSection goals={{
        product: 'Automate feedback synthesis and make prioritization auditable',
        user: 'Spend less time gathering evidence, more time deciding what to do with it',
        business: 'Cut manual triage hours, build institutional memory that survives turnover',
        leadingIndicators: product.metrics.supporting,
        note: `North Star: ${product.metrics.northStar}`
      }} />
      
      <LearningsSection learnings={{
        whatILearned: [...product.learnings.productLearning, ...product.learnings.technicalLearning],
        whatSurprisedMe: 'That external review caught scope contradictions and missing requirements I completely missed after weeks of writing',
        whatIWouldChange: product.learnings.whatIWouldDoDifferently,
        nextInvestigation: 'Run a two-week shadow period with real PMs to validate scoring model weights against actual judgment'
      }} />
      
      <BuildersNote note="This project taught me that building a product and documenting it as a PM are different skills. Writing the PRD after building the prototype revealed gaps in my original thinking (like PII redaction, which wasn't in the initial spec) that a PM-first approach would have caught earlier. The external review process made that lesson concrete: every piece of feedback traced directly to a change in the document, which is exactly how product decisions should work." />
    </CaseStudyLayout>
  );
}

// All case studies and product projects
const caseStudies = [linkedInJobNavigator, notionAiForesight, replitPricingDiagnostic, whoopDataTrust, coinbaseRestrictionTransparency];
const productProjects = [feedbackLens];
const allProjects = [...caseStudies, ...productProjects];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p: any) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | ${project.type || 'Case Study'}`,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return allProjects.map((project: any) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Check if it's a product project first
  const productProject = productProjects.find((p: any) => p.slug === slug);
  if (productProject) {
    return renderProductProject(productProject);
  }
  
  // Otherwise, render as case study
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  // Render Notion AI Foresight case study
  if (slug === 'notion-ai-foresight') {
    // Create overview object for CaseStudyLayout
    const overview = {
      product: caseStudy.title || '',
      myRole: caseStudy.role || '',
      projectType: caseStudy.type || '',
      timeline: caseStudy.timeline || '',
      skillsDemonstrated: caseStudy.competencies || [],
      productThesis: caseStudy.executiveSummary?.overview || ''
    };
    
    // Transform goals to match the expected structure
    const transformedGoals = {
      product: caseStudy.goals?.product?.join('; ') || '',
      user: caseStudy.goals?.user?.join('; ') || '',
      business: caseStudy.goals?.business?.join('; ') || '',
      leadingIndicators: caseStudy.goals?.metrics?.leading || [],
      guardrailMetrics: caseStudy.goals?.guardrails || []
    };
    
    // Transform MVP to match expected structure
    const transformedMVP = {
      mvpFeatures: caseStudy.mvp?.scope?.included || [],
      futureIterations: caseStudy.mvp?.futureIterations || [],
      explicitlyRejected: caseStudy.mvp?.explicitlyRejected || []
    };
    
    // Transform experimentation to match expected structure
    const firstExperiment = caseStudy.experimentation?.experiments?.[0];
    const transformedExperimentation = firstExperiment ? {
      hypothesis: caseStudy.experimentation?.hypothesis || '',
      experiment: caseStudy.experimentation?.approach || '',
      successCriteria: [firstExperiment.successCriteria].filter(Boolean),
      expectedBehavior: firstExperiment.learnings || '',
      rolloutApproach: caseStudy.experimentation?.experiments?.map((e: any) => e.name).join(' → ') || ''
    } : undefined;
    
    // Transform learnings to match expected structure
    const transformedLearnings = {
      whatILearned: caseStudy.learnings?.whatWentWell || [],
      whatSurprisedMe: caseStudy.learnings?.whatSurprisedMe?.[0] || '',
      whatIWouldChange: caseStudy.learnings?.whatWasHard?.[0] || '',
      nextInvestigation: caseStudy.learnings?.["whatI'dDoNextTime"]?.[0] || ''
    };
    
    // Transform solution to match expected structure
    const transformedSolution = {
      description: caseStudy.solution?.overview || '',
      keyFeatures: caseStudy.solution?.keyFeatures?.map((f: any) => `${f.name}: ${f.description}`) || [],
      userFlow: caseStudy.solution?.vision || ''
    };
    
    return (
      <CaseStudyLayout
        name={caseStudy.title}
        tagline={caseStudy.subtitle}
        overview={overview}
      >
        {/* Prototype Link Banner */}
        {caseStudy.liveLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Interactive Prototype
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Experience the proposed solution through a working prototype
                </Body>
              </div>
              <Button 
                href={caseStudy.liveLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                Try Prototype →
              </Button>
            </div>
          </div>
        )}
        
        {/* Notion Link Banner */}
        {caseStudy.notionLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Full Case Study
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Read the complete case study with all details in Notion
                </Body>
              </div>
              <Button 
                href={caseStudy.notionLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                View in Notion →
              </Button>
            </div>
          </div>
        )}
        
        <ProblemSection problem={caseStudy.problem} />
        
        <ProductQuestion question="What would need to be true for Notion to win the AI OS category without out-integrating Glean?" />
        
        <EvidenceSection evidence={caseStudy.problem.evidence} />
        
        <TheDecision decision="Notion's advantage is reasoning over content it already owns, not out-integrating competitors or out-executing ClickUp on task management." />
        
        <GoalsSection goals={transformedGoals} />
        
        <ConstraintsSection constraints={caseStudy.constraints} />
        
        <BuildersNote note="Having built with LLMs, I know the hardest part isn't the model; it's the reasoning scaffold. Notion's databases already store structured fields alongside unstructured content in one graph. Most competitors have one or the other, rarely both natively linked. That's the architectural advantage." />
        
        <OptionsSection options={caseStudy.prioritization?.options || []} />
        
        <TheTradeoff 
          chose="Trust before autonomy: explainable signals first"
          overThis="Autonomous Re-plan Agent (the exciting feature)"
          because="The most exciting feature scored lowest in RICE by design. Foresight signals are worthless if users don't trust them. F4 (Explainable Signal Trace) had to come before F10 (Autonomous Actions)."
        />
        
        <PrioritizationSection prioritization={caseStudy.prioritization} />
        
        <SolutionSection solution={transformedSolution} />
        
        <MVPSection mvp={transformedMVP} />
        
        <WhatICut items={[
          {
            what: "Schedule-conflict detection in MVP",
            why: "Ship one signal type (status-language) well with airtight explainability before adding a second. Precision over breadth."
          },
          {
            what: "All autonomous actions (F10)",
            why: "Autonomous re-planning is the most exciting feature to imagine and the worst one to build first. Trust must be earned."
          },
          {
            what: "Cross-app integrations (Slack, GitHub)",
            why: "Compete on owned-content advantage first. Don't race Glean's connector breadth in v1."
          }
        ]} />
        
        <ExperimentationSection experimentation={transformedExperimentation} />
        
        <LearningsSection learnings={transformedLearnings} />
        
        <StillThinkingAbout questions={[
          "What's the right false-positive tolerance before team leads start ignoring badges entirely?",
          "How should Foresight behave in sparse workspaces—degrade gracefully or suppress signals?",
          "Could 'risk flagging' be perceived as workplace surveillance even when unintended?",
          "Would the unit economics (scan cost vs. Business tier pricing) actually work at scale?"
        ]} />
        
        <ReflectionSection reflection={caseStudy.reflection?.statement || ''} />
      </CaseStudyLayout>
    );
  }

  // Render WHOOP Data Trust case study
  if (slug === 'whoop-data-trust') {
    const { caseStudy: content } = caseStudy;
    
    return (
      <CaseStudyLayout
        name={caseStudy.name}
        tagline={caseStudy.tagline}
        overview={content.overview}
      >
        {/* Notion Link Banner */}
        {caseStudy.notionLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Full Case Study
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Read the complete case study with all details in Notion
                </Body>
              </div>
              <Button 
                href={caseStudy.notionLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <span>View in Notion</span>
                <span>→</span>
              </Button>
            </div>
          </div>
        )}
        
        <ProblemSection problem={content.problem} />
        
        <ProductQuestion question="When users reverse-engineer their own hardware instead of complaining, what structural thing is missing?" />
        
        <EvidenceSection evidence={content.evidence} />
        
        <InsightSection insight={content.insight} />
        
        <TheDecision decision="Install a structural checkpoint that forces the question: 'Does this make data access feel conditional?' before any pricing, hardware, or data decision ships." />
        
        <GoalsSection goals={content.goals} />
        
        <ConstraintsSection constraints={content.constraints} />
        
        <BuildersNote note="Understanding Goose (the Bluetooth workaround tool) required technical fluency. It's not just user frustration—it's a signal that the cost of reverse-engineering became lower than the cost of trusting the company. That's a PM insight disguised as an engineering hack." />
        
        <OptionsSection options={content.optionsConsidered} />
        
        <TheTradeoff 
          chose="Controlled, visible costs ($15-25M near-term revenue risk)"
          overThis="Deferred, recurring costs (fourth trust crisis in 18 months)"
          because="Option B (decouple data from subscription) has upfront costs you can plan for. Option A (status quo) has compounding trust erosion that shows up unpredictably. Controlled beats deferred."
        />
        
        <PrioritizationSection prioritization={content.prioritization} />
        
        <SolutionSection solution={content.solution} />
        
        <MVPSection mvp={content.mvp} />
        
        <WhatICut items={[
          {
            what: "Status quo (Option A)",
            why: "Three incidents in three years means the gap isn't closing, it's widening. Costs are recurring and compounding, not one-time."
          },
          {
            what: "Half-measures like 'grandfathering' only after backlash",
            why: "Doesn't fix the root cause (missing checkpoint). Users already learned this pattern doesn't work."
          },
          {
            what: "Pure PR response without structural change",
            why: "Trust failures aren't communication problems. They're architectural ones."
          }
        ]} />
        
        <ExperimentationSection experimentation={content.experimentation} />
        
        <LearningsSection learnings={content.learnings} />
        
        <StillThinkingAbout questions={[
          "How good does WHOOP's coaching product need to be to genuinely justify $199-359/year on insight alone?",
          "What's the right way to model seasonal churn risk when you're removing the main retention lever?",
          "Could this policy change actually make the subscription feel more valuable (because data is unconditional)?",
          "How would Oura or Garmin respond if WHOOP announced permanent data access?"
        ]} />
        
        <ReflectionSection reflection={content.pmReflection} />
      </CaseStudyLayout>
    );
  }
  
  // Render Replit Pricing Diagnostic case study
  if (slug === 'replit-pricing-diagnostic') {
    const { caseStudy: content } = caseStudy;
    
    return (
      <CaseStudyLayout
        name={caseStudy.name}
        tagline={caseStudy.tagline}
        overview={content.overview}
      >
        {/* Notion Link Banner */}
        {caseStudy.notionLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Full Case Study
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Read the complete case study with all details in Notion
                </Body>
              </div>
              <Button 
                href={caseStudy.notionLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <span>View in Notion</span>
                <span>→</span>
              </Button>
            </div>
          </div>
        )}
        
        <ProblemSection problem={content.problem} />
        
        <ProductQuestion question="Users aren't churning because AI is expensive—they're churning because they can't predict what they'll pay before clicking 'run'. How do you fix predictability when the architecture genuinely makes it harder than competitors?" />
        
        <EvidenceSection evidence={content.evidence} />
        
        <InsightSection insight={content.insight} />
        
        <TheDecision decision="Replit's churn problem isn't a pricing problem—it's a trust problem disguised as a billing spike." />
        
        <GoalsSection goals={content.goals} />
        
        <ConstraintsSection constraints={content.constraints} />
        
        <BuildersNote note="Understanding Agent 3's sub-agent fan-out architecture helped me see why this is genuinely harder for Replit than competitors. Cursor counts tokens. Bolt runs one script. Replit spawns recursive sub-agents that decide mid-task whether to keep going. That's not a cop-out—it's an engineering constraint that shapes what solutions are even possible." />
        
        <OptionsSection options={content.optionsConsidered} />
        
        <TheTradeoff 
          chose="Pre-task cost ceiling (even if imperfect)"
          overThis="Post-task cost explanations (even if detailed)"
          because="Users will tolerate approximate estimates before they click. They won't tolerate perfect explanations after the bill arrives. Trust requires control at decision time, not clarity after the fact."
        />
        
        <PrioritizationSection prioritization={content.prioritization} />
        
        <SolutionSection solution={content.solution} />
        
        <MVPSection mvp={content.mvp} />
        
        <WhatICut items={[
          {
            what: "Retrospective cost breakdowns (Option A)",
            why: "Perfect explanations after the bill doesn't solve the trust problem. Users need control before they commit, not clarity after."
          },
          {
            what: "Pure usage-based pricing with no ceiling",
            why: "Optimizes for margin but makes the product unbudgetable for the core user (bootstrapped founders, students)."
          },
          {
            what: "Exact pre-task estimates",
            why: "Agent 3's architecture makes this genuinely impossible without killing the product's core capability (adaptive sub-agent reasoning)."
          }
        ]} />
        
        <ExperimentationSection experimentation={content.experimentation} />
        
        <LearningsSection learnings={content.learnings} />
        
        <StillThinkingAbout questions={[
          "What's the right ceiling tolerance before power users feel constrained by artificial limits?",
          "How should Replit handle the edge case where task value genuinely exceeds the ceiling midway?",
          "Could 'ceiling breach warnings' restore agency without killing the task entirely?",
          "Would this model work for enterprise customers who care less about predictability and more about capability?"
        ]} />
        
        <ReflectionSection reflection={content.pmReflection} />
      </CaseStudyLayout>
    );
  }
  
  // Render Coinbase Restriction Transparency case study
  if (slug === 'coinbase-restriction-transparency') {
    const { caseStudy: content } = caseStudy;
    
    return (
      <CaseStudyLayout
        name={caseStudy.name}
        tagline={caseStudy.tagline}
        overview={content.overview}
      >
        {/* Prototype Link Banner */}
        {caseStudy.liveLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Interactive Prototype
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Experience the proposed solution through a working prototype
                </Body>
              </div>
              <Button 
                href={caseStudy.liveLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                Try Prototype →
              </Button>
            </div>
          </div>
        )}
        
        {/* Notion Link Banner */}
        {caseStudy.notionLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Full Case Study
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Read the complete case study with all details in Notion
                </Body>
              </div>
              <Button 
                href={caseStudy.notionLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                View in Notion →
              </Button>
            </div>
          </div>
        )}
        
        <ProblemSection problem={content.problem} />
        
        <ProductQuestion question="When Coinbase cut resolution times by 90% but complaints stayed the same, what layer of the problem did they miss?" />
        
        <EvidenceSection evidence={content.evidence} />
        
        <InsightSection insight={content.insight} />
        
        <TheDecision decision="Coinbase has the data users need (queue type, expected duration, exact blocker) but doesn't surface it. The fix isn't faster processing—it's closing the information asymmetry." />
        
        <GoalsSection goals={content.goals} />
        
        <ConstraintsSection constraints={content.constraints} />
        
        <BuildersNote note="Understanding the regulatory floor matters. Coinbase can't just remove friction—certain compliance triggers are legally non-negotiable. That constraint shapes what solutions are even possible: you can't eliminate the wait, but you can explain it while it happens." />
        
        <OptionsSection options={content.optionsConsidered} />
        
        <TheTradeoff 
          chose="Phase 1 (Instant SLA Disclosure) before Phase 4 (AI-predicted ETA)"
          overThis="Shipping the flashy AI feature first"
          because="The AI-predicted ETA is more product-exciting but scores lowest on RICE. It requires data foundation from Phases 1-2 that doesn't exist yet. Sequencing for confidence and impact, not narrative appeal, is what separates a shippable roadmap from a pitch deck."
        />
        
        <PrioritizationSection prioritization={content.prioritization} />
        
        <SolutionSection solution={content.solution} />
        
        <MVPSection mvp={content.mvp} />
        
        <WhatICut items={[
          {
            what: "Touching the compliance engine itself",
            why: "This is communication layer only. The constraint is real (regulatory floor), but the communication layer sits on top of it."
          },
          {
            what: "Reducing actual case resolution time",
            why: "That was the May 2026 AI investment. This plan changes what users are told about a restriction, not how fast it resolves."
          },
          {
            what: "Shipping AI-predicted ETA before data foundation exists",
            why: "Would be another opaque black box. Phase 4 only ships if it clears transparency bar and explains its own uncertainty."
          }
        ]} />
        
        <ExperimentationSection experimentation={content.experimentation} />
        
        <LearningsSection learnings={content.learnings} />
        
        <StillThinkingAbout questions={[
          "What does the legal/compliance review actually look like for queue label disclosure? Is 'standard review' vs 'extended review' safe?",
          "Would users trust an AI-predicted ETA, or would it feel like another promise the system can't keep?",
          "How do you measure 'understood what was happening' satisfaction when that metric doesn't exist yet?",
          "Could exposing queue-specific timelines create new gaming behavior where users try to trigger faster queues?"
        ]} />
        
        <ReflectionSection reflection={content.pmReflection} />
      </CaseStudyLayout>
    );
  }

  // Render LinkedIn Job Navigator case study (original)
  const { name, tagline, caseStudy: content } = caseStudy;

  return (
    <CaseStudyLayout
      name={name}
      tagline={tagline}
      overview={content.overview}
    >
      {/* Prototype Link Banner */}
      {caseStudy.liveLink && (
        <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                Interactive Prototype
              </Caption>
              <Body size="sm" className="text-charcoal-700">
                Experience the solution through a working prototype
              </Body>
            </div>
            <Button 
              href={caseStudy.liveLink}
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
            >
              Try Prototype →
            </Button>
          </div>
        </div>
      )}
      
      {/* Notion Link Banner */}
      {caseStudy.notionLink && (
        <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                Full Case Study
              </Caption>
              <Body size="sm" className="text-charcoal-700">
                Read the complete case study with all details in Notion
              </Body>
            </div>
            <Button 
              href={caseStudy.notionLink}
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
            >
              <span>View in Notion</span>
              <span>→</span>
            </Button>
          </div>
        </div>
      )}
      
      <ProblemSection problem={content.problem} />
      
      <ProductQuestion question="What would need to be true for this to work at LinkedIn scale?" />
      
      <EvidenceSection evidence={content.evidence} />
      
      <InsightSection insight={content.insight} />
      
      <TheDecision decision="Focus on relevance over volume — show fewer jobs, but make sure they actually fit." />
      
      <GoalsSection goals={content.goals} />
      
      <ConstraintsSection constraints={content.constraints} />
      
      <BuildersNote note="As someone who has built recommendation systems, I know relevance is harder than it looks. You need training data, user behavior signals, and constant tuning. LinkedIn has all of this. The question isn't technical feasibility — it's whether their business model allows it." />
      
      <OptionsSection options={content.optionsConsidered} />
      
      <TheTradeoff 
        chose="Strategic depth over working code"
        overThis="Browser extension I could ship"
        because="The goal was to demonstrate product thinking, not engineering execution. A working extension would be impressive but wouldn't show the depth of PM skills recruiters look for."
      />
      
      <PrioritizationSection prioritization={content.prioritization} />
      
      <SolutionSection solution={content.solution} />
      
      <MVPSection mvp={content.mvp} />
      
      <WhatICut items={[
        {
          what: "Automated apply-to-all feature",
          why: "Would increase application volume but decrease quality. Goes against the core insight of relevance over volume."
        },
        {
          what: "Endless scroll feed",
          why: "Infinite scroll optimizes for engagement, not outcomes. Wanted to respect user time with a defined daily set."
        }
      ]} />
      
      <ExperimentationSection experimentation={content.experimentation} />
      
      <LearningsSection learnings={content.learnings} />
      
      <StillThinkingAbout questions={[
        "How would users react to seeing only 15 jobs when they're used to hundreds? Would it feel limiting or liberating?",
        "What if the algorithm gets it wrong? How do you build trust when you're filtering out 95% of options?",
        "Could this work for senior roles where there are naturally fewer openings anyway?"
      ]} />
      
      <ReflectionSection reflection={content.pmReflection} />
    </CaseStudyLayout>
  );
}
