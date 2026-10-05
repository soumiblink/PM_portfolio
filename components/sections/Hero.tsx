import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function Hero() {
  return (
    <Section spacing="xl" className="pt-32 md:pt-40">
      <Container>
        {/* Editorial hero - clean, sophisticated, readable */}
        <div className="max-w-[900px]">
          {/* Small editorial label */}
          <div className="section-label mb-6">
            Product Manager
          </div>
          
          {/* Large editorial headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-charcoal-900 mb-16 md:mb-20 pb-[15px]">
            Product Manager with a builder's background.
          </h1>
          
          {/* Supporting text - comfortable reading width */}
          <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed mb-16 md:mb-20 max-w-[680px] pb-[15px]">
            Before product, I built software. Now I use that to ask sharper questions, make faster tradeoffs, 
            and turn ambiguous problems into decisions worth shipping.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-[15px]">
            <Button 
              variant="primary" 
              size="lg"
              href="#work"
            >
              See my work
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              href="/Soumi_Ghosh_PM_CV.pdf"
            >
              Download resume
            </Button>
          </div>
          
          {/* Competency markers - subtle editorial detail */}
          <div className="pt-8 border-t border-border">
            <div className="text-sm text-charcoal-700 mb-3 leading-relaxed">
              Discovery → Strategy → Prioritization → Experimentation → AI-native thinking
            </div>
            <div className="text-sm text-charcoal-500">
              How I move from a messy problem to a shipped decision.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
