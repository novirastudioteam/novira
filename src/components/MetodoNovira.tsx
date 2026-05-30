import { Search, Video, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Analisi strategica',
    description: 'Capiamo il tuo business, il tuo target ideale e il tuo mercato. Definiamo chi vuoi raggiungere e come.',
    icon: Search,
    color: 'from-novira-purple to-novira-purple-dark',
  },
  {
    number: '02',
    title: 'Creazione pubblicità ADS',
    description: 'Realizziamo video pubblicitari verticali pensati per convertire. Pubblicità che parla al tuo pubblico.',
    icon: Video,
    color: 'from-novira-blue to-novira-blue-dark',
  },
  {
    number: '03',
    title: 'Distribuzione sponsorizzata',
    description: 'Lanciamo campagne ADS mirate su Meta e social per raggiungere esattamente il tuo pubblico target.',
    icon: Target,
    color: 'from-novira-green to-novira-green-dark',
  },
  {
    number: '04',
    title: 'Acquisizione clientela',
    description: 'Ottimizziamo campagne per portarti nuovi clienti reali. Monitoriamo e miglioriamo continuamente i risultati.',
    icon: Users,
    color: 'from-novira-purple to-novira-blue',
  },
];

export default function MetodoNovira() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepElements = document.querySelectorAll('[data-step]');
            stepElements.forEach((el, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodo" ref={sectionRef} className="relative py-24 bg-novira-dark-light">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(155, 93, 229, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-novira-blue text-sm font-semibold tracking-wider uppercase mb-4 block">
            Il nostro processo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Metodo <span className="gradient-text">Novira</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pubblicità sponsorizzata strategica per raggiungere il giusto target e aumentare la tua clientela
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-novira-purple via-novira-blue to-novira-green hidden md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                data-step={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className={`glass rounded-2xl p-6 card-hover ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    } max-w-md`}
                  >
                    <span className="text-6xl font-bold text-white/5 absolute top-4 right-4">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center icon */}
                <div className="flex items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
