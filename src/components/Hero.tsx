import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const headlines = [
  'Pubblicità che porta clienti. Non like.',
  'Qui non si posta a caso.',
  'Il tuo business merita di essere visto.',
];

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-novira-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-novira-blue/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-novira-green/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(155, 93, 229, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(155, 93, 229, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles size={16} className="text-novira-green" />
            <span className="text-sm text-gray-300">Advertising verticale per attività locali</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span
              className={`block transition-all duration-500 ${
                isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {headlines[currentHeadline]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            Novira crea pubblicità verticali per attività locali a Roma e le trasforma in campaign ADS mirate.
            Niente post a caso. Solo strategia che converte.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="#prenota"
              className="group btn-primary neon-glow flex items-center gap-2"
            >
              Prenota una consulenza gratuita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-novira-green animate-pulse" />
              <span>Team Roma</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-novira-blue animate-pulse" />
              <span>Advertising verticale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-novira-purple animate-pulse" />
              <span>Strategia + ADS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
