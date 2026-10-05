import { Container } from './Container';
import { Link } from '../ui/Link';

/**
 * Minimal, elegant footer
 * Clean ending to the portfolio with essential links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-charcoal-900">
      <Container>
        <div className="py-12 md:py-16">
          {/* Name and positioning */}
          <div className="text-center mb-8">
            <div className="text-base font-semibold text-warmth-100 mb-1">
              Soumi Ghosh
            </div>
            <div className="text-sm text-charcoal-400">
              Aspiring Product Manager
            </div>
          </div>

          {/* Contact links - horizontal on all sizes */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link 
              href="mailto:soumi4717@gmail.com" 
              variant="subtle"
              className="text-sm text-warmth-100 hover:text-accent-300 transition-colors"
              aria-label="Email"
            >
              Email
            </Link>
            <Link 
              href="https://www.linkedin.com/in/soumi-ghosh-sep" 
              variant="subtle"
              className="text-sm text-warmth-100 hover:text-accent-300 transition-colors"
              external
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/soumiblink/" 
              variant="subtle"
              className="text-sm text-warmth-100 hover:text-accent-300 transition-colors"
              external
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
            <Link 
              href="/Soumi_Ghosh_PM_CV.pdf" 
              variant="subtle"
              className="text-sm text-warmth-100 hover:text-accent-300 transition-colors"
              aria-label="Resume"
            >
              Resume
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-charcoal-500">
            © {currentYear} · Built with thought
          </div>
        </div>
      </Container>
    </footer>
  );
}
