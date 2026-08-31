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
      'Integrated sequential backend APIs in a React Native + Expo app for enterprise onboarding workflows, reducing API execution failures by 35%',
      'Optimized app stability using Gradle, Metro bundler, and Android runtime issues, reducing build time by 40%'
    ],
    learnings: 'API integration and mobile app optimization require deep understanding of runtime behavior and build processes.',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Jabsz Gaming Studio',
    period: 'August - November 2025',
    highlights: [
      'Developed a multi-game web application (12+ games) with optimized state management and modular architecture, achieving 40% faster load times',
      'Designed a 3-tier difficulty system with dynamic logic and scoring, increasing average session time by 30%',
      'Built an AI-powered smart farming platform integrating weather, soil analysis, crop recommendations, LLM chatbot, and 6-month price forecasting, improving decision efficiency by 35%'
    ],
    learnings: 'User engagement comes from thoughtful feature design. Performance optimization and architecture decisions directly impact user experience.',
  },
  {
    role: 'Product Manager ',
    company: 'Zesframe',
    period: 'March - September 2025',
    highlights: [
      'Owned product planning from requirements to delivery, working with clients to understand business needs, translate them into product requirements, and prioritize features based on impact, scope, and technical feasibility',
      'Defined roadmaps and made prioritization trade-offs across features, balancing client priorities, user experience, development effort, and delivery timelines',
      'Bridged product and engineering execution, collaborating with design and development while also contributing hands-on to the build through React/Next.js, backend integrations, and technical implementation',
      'Drove products through launch and iteration, managing scope and deployment while monitoring reliability and using implementation feedback to refine the product'
    ],
    learnings: 'Product management is about making trade-offs. Understanding both user needs and technical limitations helps ship the right solution.',
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
