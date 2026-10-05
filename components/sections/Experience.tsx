import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const experiences = [
  {
    role: 'Software Development Engineering Intern',
    company: 'BlackCoffer',
    period: 'May - June 2026',
    highlights: [
      'Redesigned enterprise onboarding workflows by integrating sequential backend APIs, reducing execution failures by 35% and resolving user drop-offs',
      'Optimized Gradle and Android runtime performance, cutting build times by 20% to accelerate feature release cycles for product teams'
    ],
    learnings: 'Backend integration and build optimization directly impact how fast product teams can ship. Technical decisions create or remove bottlenecks for the entire delivery pipeline.',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Jabsz Gaming Studio',
    period: 'August - November 2025',
    highlights: [
      'Identified user needs for an AI smart farming platform and translated them into a prioritized feature set integrating weather data, LLM chatbot, and price forecasting, improving decision efficiency by 35%',
      'Designed a 3-tier difficulty engine across 12+ web games based on user retention patterns, boosting average session duration by 18%'
    ],
    learnings: 'User engagement comes from understanding behavior patterns, not just building features. Retention data tells you what to prioritize when intuition does not.',
  },
  {
    role: 'Product Management Intern',
    company: 'Zesframe',
    period: 'March - September 2025',
    highlights: [
      'Led client discovery to understand business needs and translate them into PRDs, user stories, MVP scope, and delivery plans, giving engineering clear requirements to execute against',
      'Shaped roadmap and scope decisions by weighing client priorities, user impact, technical feasibility, and engineering capacity, keeping delivery focused on the highest-value requirements',
      'Managed client acceptance and post-launch iterations by combining stakeholder feedback with product telemetry to identify UX bottlenecks and drive improvements that increased website load and response performance by approximately 30%'
    ],
    learnings: 'Product management is about making trade-offs visible. Understanding both user needs and technical constraints helps you ship the right solution, not just any solution.',
  },
];

export function Experience() {
  return (
    <Section spacing="lg" id="experience">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Experience</Eyebrow>
            <Heading as="h2" className="mb-4">
              Experience
            </Heading>
            <Body size="lg" muted>
              Engineering experience that shaped how I think about product
            </Body>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={exp.role + exp.company} 
              animation="fade" 
              delay={0.1 * index}
            >
              <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border-strong">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-accent-600 border-4 border-warmth-50"></div>
                </div>

                <Caption className="mb-2 text-charcoal-500">{exp.period}</Caption>
                
                <Heading as="h3" className="mb-1">
                  {exp.role}
                </Heading>
                
                <Body size="sm" className="font-medium text-charcoal-600 mb-4">
                  {exp.company}
                </Body>
                
                {/* Bullet points for highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent-600 mt-1.5 flex-shrink-0">•</span>
                      <Body size="sm" className="text-charcoal-700 leading-relaxed">
                        {highlight}
                      </Body>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-accent-50 border-l-2 border-accent-600 pl-4 py-2">
                  <Body size="sm" className="text-charcoal-700">
                    → {exp.learnings}
                  </Body>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
