import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import MetodoNovira from './components/MetodoNovira';
import WhoItsFor from './components/WhoItsFor';
import StileNovira from './components/StileNovira';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-novira-dark text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />

      <main>
        <Hero />
        <WhatWeDo />
        <MetodoNovira />
        <WhoItsFor />
        <StileNovira />
        <Portfolio />
        <Booking />
        <FAQ />
      </main>

      <Footer />
      <FloatingCTA isVisible={scrollY > 300} />
    </div>
  );
}

export default App;
