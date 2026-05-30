import { Camera, Lightbulb, Eye, Zap } from 'lucide-react';

const principles = [
  {
    icon: Camera,
    title: 'Attrezzatura professionale di alto livello',
    description: 'Mirrorless professionali, obiettivi di qualità superiore, luci professionali. Tutto il necessario per pubblicità visivamente perfetta sui social.',
    highlight: 'Top qualità per i social. Non siamo un set cinematografico, ma abbiamo tutto per fare video che convertono.',
  },
  {
    icon: Lightbulb,
    title: 'Strategia prima di tutto',
    description: 'Ogni video nasce da un obiettivo chiaro. Non giriamo per bellezza, giriamo per conversione.',
    highlight: 'Il messaggio è più importante del montaggio.',
  },
  {
    icon: Eye,
    title: 'Visibilita per chi interessa davvero',
    description: 'Non miriamo alle masse. Miriamo al tuo pubblico di nicchia, quello che vuole comprare.',
    highlight: 'Pubblicità fatta per essere vista da chi conta.',
  },
  {
    icon: Zap,
    title: 'Velocita e adattabilita',
    description: 'Adattiamo la pubblicità in base ai risultati. Testiamo, misuriamo, ottimizziamo.',
    highlight: 'Niente piani fissi, solo strategia che evolve.',
  },
];

export default function StileNovira() {
  return (
    <section className="relative py-24 bg-novira-dark-light overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-novira-purple/20 to-transparent"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-novira-blue/20 to-transparent"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-purple text-sm font-semibold tracking-wider uppercase mb-4 block">
            Il nostro approccio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Stile <span className="gradient-text">Novira</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Crediamo che la semplicità sia la forma più alta di strategia.
            Niente sovrapproduzione, niente promesse vuote.
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          {/* Intro text */}
          <div className="text-center mb-16">
            <div className="glass rounded-3xl p-8 sm:p-12 inline-block">
              <p className="text-xl sm:text-2xl font-display leading-relaxed">
                Non siamo una casa di produzione.
                <br />
                <span className="text-gray-400">
                  Siamo un partner pubblicitario che crea visibilità
                </span>
                <br />
                <span className="gradient-text font-bold">
                  semplici, strategici e che convertono
                </span>
                .
              </p>
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-novira-purple/20 flex items-center justify-center flex-shrink-0 group-hover:bg-novira-purple/30 transition-colors">
                      <Icon size={24} className="text-novira-purple" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-400 mb-3 text-sm">
                        {principle.description}
                      </p>
                      <p className="text-sm text-novira-blue font-medium italic">
                        &ldquo;{principle.highlight}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call out */}
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-3 rounded-full glass">
              <p className="text-gray-300 text-sm">
                <span className="text-white font-semibold">Trasparenza:</span>{' '}
                abbiamo attrezzatura professionale top per i social. Non cinema, non Hollywood,
                ma qualità superiore per pubblicità che funziona online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
