import { AnimatePresence, MotionConfig } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Intro } from './components/layout/Intro';
import { LegalModal, type LegalDoc } from './components/layout/LegalModal';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Download } from './components/sections/Download';
import { Ecosystem } from './components/sections/Ecosystem';
import { Faq } from './components/sections/Faq';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Marquee } from './components/sections/Marquee';
import { Stats } from './components/sections/Stats';
import { IntroContext, markIntroSeen, shouldPlayIntro } from './lib/intro';

const INTRO_DURATION_MS = 1900;

export default function App() {
  const [showIntro, setShowIntro] = useState(shouldPlayIntro);
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null);
  const closeLegal = useCallback(() => setLegalDoc(null), []);

  useEffect(() => {
    if (!showIntro) return;
    const t = window.setTimeout(() => {
      markIntroSeen();
      setShowIntro(false);
    }, INTRO_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [showIntro]);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={!showIntro}>
        <div className="grain">
          <AnimatePresence>{showIntro && <Intro key="intro" />}</AnimatePresence>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Features />
            <HowItWorks />
            <Ecosystem />
            <Stats />
            <Download />
            <Faq />
          </main>
          <Footer onOpenLegal={setLegalDoc} />
          <LegalModal doc={legalDoc} onChange={setLegalDoc} onClose={closeLegal} />
        </div>
      </IntroContext.Provider>
    </MotionConfig>
  );
}
