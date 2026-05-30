import { X, Check, Target, Video, TrendingUp } from 'lucide-react';

const dontDoList = [
  { text: 'Gestione account social', icon: X },
  { text: 'Post a caso senza strategia', icon: X },
  { text: 'Feed estetici che non convertono', icon: X },
  { text: 'Promesse di follower milionari', icon: X },
];

const doList = [
  { text: 'Pubblicità sponsorizzata mirata', icon: Target, color: 'text-novira-purple' },
  { text: 'Video pubblicitari per ADS', icon: Video, color: 'text-novira-blue' },
  { text: 'Campagne con targeting preciso', icon: TrendingUp, color: 'text-novira-green' },
  { text: 'Acquisizione clientela reale', icon: Check, color: 'text-white' },
];

export default function WhatWeDo() {
  return (
    <section id="cosa-facciamo" className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-novira-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-novira-blue/5 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-purple text-sm font-semibold tracking-wider uppercase mb-4 block">
            Cosa facciamo davvero
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Non siamo social media manager
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La differenza tra gestire un profilo e creare pubblicità che porta clienti
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* NON facciamo */}
          <div className="glass rounded-2xl p-8 card-hover border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <X size={24} className="text-red-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-red-400">
                  NON facciamo
                </h3>
              </div>
              <ul className="space-y-4">
                {dontDoList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-400 group transition-colors hover:text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <item.icon size={14} className="text-red-400" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facciamo */}
          <div className="glass rounded-2xl p-8 card-hover border-novira-green/20 relative overflow-hidden neon-glow-green">
            <div className="absolute top-0 right-0 w-32 h-32 bg-novira-green/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-novira-green/20 flex items-center justify-center">
                  <Check size={24} className="text-novira-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-novira-green">
                  Invece facciamo
                </h3>
              </div>
              <ul className="space-y-4">
                {doList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white group transition-colors hover:text-novira-blue"
                  >
                    <div className="w-6 h-6 rounded-full bg-novira-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-novira-green/30 transition-colors">
                      <item.icon size={14} className={item.color} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Se cerchi chi ti gestisce i post, non siamo noi.
            <br />
            Se cerchi pubblicità che porta clienti, parliamone.
          </p>
          <a href="#prenota" className="btn-secondary">
            Scopri come possiamo aiutarti
          </a>
        </div>
      </div>
    </section>
  );
}
