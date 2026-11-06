import { Hero } from '@/components/sections/Hero';
import { ProductSnapshot } from '@/components/sections/ProductSnapshot';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { HowIThink } from '@/components/sections/HowIThink';
import { TechnicalProductThinking } from '@/components/sections/TechnicalProductThinking';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { CurrentlyExploring } from '@/components/sections/CurrentlyExploring';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSnapshot />
      <Skills />
      <SelectedWork />
      <HowIThink />
      <TechnicalProductThinking />
      <Experience />
      <CurrentlyExploring />
      <About />
      <Contact />
    </>
  );
}
