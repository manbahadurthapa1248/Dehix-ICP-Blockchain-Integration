import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { AboutICP } from '../components/sections/AboutICP';
import { Roadmap } from '../components/sections/Roadmap';
import { CTA } from '../components/sections/CTA';
export function HomePage() {
    return (<>
      <Hero />
      <Features />
      <AboutICP />
      <Roadmap />
      <CTA />
    </>);
}
