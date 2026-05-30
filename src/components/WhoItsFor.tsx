import { Coffee, Dumbbell, Scissors, ShoppingCart, Briefcase, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';

const businesses = [
  {
    icon: UtensilsCrossed,
    title: 'Ristoranti',
    benefit: 'Porta clienti al tuo tavolo, non solo like al tuo profilo',
    description: 'Pubblicità che fa venire l\'acquolina e porta prenotazioni reali.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Coffee,
    title: 'Bar e Cafetterie',
    benefit: 'Diventa il posto dove tutti vogliono fare colazione',
    description: 'Pubblicità che racconta l\'atmosfera unica del tuo locale e porta clienti al bancone.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Dumbbell,
    title: 'Palestre',
    benefit: 'Trasforma curiosi in iscritti',
    description: 'Mostra risultati reali e ambiente per attrarre nuovi membri.',
    gradient: 'from-novira-purple to-novira-blue',
  },
  {
    icon: Scissors,
    title: 'Centri Estetici',
    benefit: 'Riempi l\'agenda, non solo il profilo',
    description: 'Pubblicità che mostra risultati tangibili e genera prenotazioni.',
    gradient: 'from-pink-500 to-novira-purple',
  },
  {
    icon: ShoppingCart,
    title: 'Negozi Locali',
    benefit: 'Porta clienti in negozio, non solo like',
    description: 'Pubblicità che fa venire voglia di visitarti di persona.',
    gradient: 'from-novira-blue to-novira-green',
  },
  {
    icon: Briefcase,
    title: 'Imprenditori',
    benefit: 'Posiziona la tua expertise davanti ai clienti giusti',
    description: 'Pubblicità che dimostra competenza e genera contatti qualificati.',
    gradient: 'from-novira-green to-novira-blue',
  },
];

export default function WhoItsFor() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="chi-siamo" className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-novira-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-novira-blue/10 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-green text-sm font-semibold tracking-wider uppercase mb-4 block">
            Il nostro target
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Per chi lavoriamo
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aiutiamo attività locali a Roma che vogliono crescere con pubblicità mirata
          </p>
        </div>

        {/* Business cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`glass rounded-2xl p-8 h-full card-hover border-2 transition-all duration-500 ${
                    isHovered ? 'border-white/20' : 'border-transparent'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${business.gradient} flex items-center justify-center mb-6 transition-transform duration-500 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-2">{business.title}</h3>
                  <p className={`font-medium mb-3 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-novira-blue'}`}>
                    {business.benefit}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {business.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`absolute bottom-6 right-6 w-2 h-2 rounded-full bg-gradient-to-r ${business.gradient} transition-all duration-300 ${
                      isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Non trovi la tua attività?{' '}
            <a href="#prenota" className="text-novira-purple hover:text-novira-blue transition-colors">
              Parliamone
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
