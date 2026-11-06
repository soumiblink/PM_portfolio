import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const skillCategories = [
  {
    category: 'Product Strategy & Execution',
    description: 'How I frame problems and ship solutions',
    skills: [
      'Product Strategy',
      'Product Discovery',
      'User Research',
      'PRDs',
      'User Stories',
      'Roadmapping',
      'Scope Management',
      'Feature Prioritization (RICE/ICE)',
      'Wireframing (Figma)',
      'User Journey Mapping',
      'Stakeholder Management',
      'Sprint Planning',
      'Backlog Grooming',
      'Competitive Analysis',
    ],
  },
  {
    category: 'Product Analytics & Growth',
    description: 'How I measure what matters',
    skills: [
      'SQL',
      'A/B Testing',
      'Funnel Optimization',
      'Cohort Analysis',
      'User Retention',
      'Product Metrics',
      'DAU/MAU',
      'Churn',
    ],
  },
  {
    category: 'AI & Technical Tools',
    description: 'How I build and understand constraints',
    skills: [
      'AI Product Strategy',
      'LLM Evaluation',
      'Prompt Strategy',
      'Python',
      'React',
      'Next.js',
      'REST APIs',
      'Git',
      'Jira',
    ],
  },
];

export function Skills() {
  return (
    <Section spacing="lg" id="skills">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-3">Skills</Eyebrow>
            <Heading as="h2" className="mb-4">
              Product Skills Backed by Technical Execution
            </Heading>
            <Body size="lg" muted>
              I think like a PM and build like an engineer. That combination shows up in how I frame problems, prioritize under constraints, and bridge product vision with technical reality.
            </Body>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl space-y-12">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.category}
              animation="fade"
              delay={0.1 * index}
            >
              <div className="border-l-4 border-accent-600 pl-8 py-6 bg-gradient-to-r from-accent-50/50 to-transparent rounded-r-lg">
                <div className="mb-6">
                  <Heading as="h3" className="mb-2 text-2xl">
                    {category.category}
                  </Heading>
                  <Body size="sm" className="text-charcoal-600 italic">
                    {category.description}
                  </Body>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2.5 text-sm font-semibold bg-warmth-100 text-charcoal-900 rounded-md border-2 border-border hover:border-accent-600 hover:bg-accent-50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={0.4}>
          <div className="mt-16 max-w-3xl">
            <div className="bg-charcoal-900 text-warmth-100 p-8 rounded-lg border-l-4 border-accent-600">
              <Body size="sm" className="leading-relaxed">
                <span className="font-semibold text-accent-300">Why the technical background matters:</span> I've shipped production code, debugged backend APIs, and optimized build pipelines. That means I know when "it's technically impossible" is real vs. when it's "this will take more effort than planned." I speak both PRD language and engineering constraint language which means I can bridge product vision with what's actually shippable.
              </Body>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
