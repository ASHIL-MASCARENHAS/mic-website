import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Portfolio } from './components/Portfolio';
import { Events } from './components/Events';
import { News } from './components/News';
import { Footer } from './components/Footer';
// Corrected the import from './components/helpers/CustomCursor' to match the actual file name
import { CustomCursor } from './components/helpers/customCursor';
import { useLoading } from './components/helpers/LoadingScreen';
import { BackgroundController } from './components/helpers/BackgroundController';
import { useSectionObserver } from './components/helpers/useSectionObserver';
import { ChatbotWidget } from './components/helpers/ChatbotWidget';

function App() {
  const { isLoading, LoadingScreen } = useLoading();
  const scrollRef = useRef(null); 

  const { scrollYProgress } = useScroll({ container: scrollRef });

  const sectionIds = ['hero', 'about', 'programs', 'portfolio', 'events', 'news', 'footer'];
  const { refs: sectionRefs, activeSection } = useSectionObserver(sectionIds);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-transparent text-slate-200 font-sans antialiased">
      <CustomCursor />
      <Header />
      <ChatbotWidget />

      <div className="fixed inset-0 z-0">
        <BackgroundController
          activeSection={activeSection}
          scrollProgress={scrollYProgress}
        />
      </div>

      <main ref={scrollRef} className="scroll-smooth relative z-20 h-screen overflow-y-auto overflow-x-hidden">
        <Hero ref={sectionRefs.hero} />
        <About ref={sectionRefs.about} />
        <Programs ref={sectionRefs.programs} />
        <Portfolio ref={sectionRefs.portfolio} />
        <Events ref={sectionRefs.events} />
        <News ref={sectionRefs.news} />
        <Footer ref={sectionRefs.footer} />
      </main>
    </div>
  );
}

export default App;