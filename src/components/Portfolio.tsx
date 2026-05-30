import { Target, Users, TrendingUp, Zap } from 'lucide-react';

const campaignExamples = [
  {
    id: 1,
    title: 'Ristorante Romano - Trastevere',
    type: 'Settore: Ristorazione',
    icon: '🍝',
    scenario: 'Attività con ottimo food ma poca visibilità sul territorio. Il locale è sempre vuoto a pranzo.',
    approach: [
      'Analisi del target: turisti e lavoratori della zona interessati alla cucina romana autentica',
      'Creazione di video brevi che mostrano i piatti signature e l\'atmosfera del locale',
      'Campagna ADS geolocalizzata su Trastevere + dintorni 1-2km radius',
      'Budget pubblicitario mirato sulle fasce orarie pranzo/cena',
    ],
    outcome: 'Aumento prenotazioni nelle fasce orarie deboli. Piuttosto che postare foto di piatti senza strategia, abbiamo creato pubblicità che fa venire voglia di venire subito.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Palestra Centro Storico',
    type: 'Settore: Fitness',
    icon: '💪',
    scenario: 'Palestra con buoni macchinari ma difficile attrarre nuovi iscritti. La concorrenza è forte.',
    approach: [
      'Target giovani professionisti 25-40 anni che lavorano in centro e vogliono rimettersi in forma',
      'Video testimonianze di chi ha ottenuto risultati, environment moderno, orario flessibile',
      'ADS during lunch break e post-lavoro, catturando chi cerca "palestra vicino a me"',
      'Landing page specifica con offerta trial gratuito',
    ],
    outcome: 'Isizioni mirate di profili che davvero cercano una palestra in zona. Non sparare nel mucchio, ma raggiungere chi già cerca.',
    gradient: 'from-novira-purple to-novira-blue',
  },
  {
    id: 3,
    title: 'Centro Estetico - Quartiere Residenziale',
    type: 'Settore: Beauty',
    icon: '💅',
    scenario: 'Centro estetico con servizi qualità ma l\'agenda ha buchi. Difficile fidelizzare clienti nuovi.',
    approach: [
      'Analisi del quartiere: donne 25-50 interessate a trattamenti viso/corpo e benessere',
      'Video brevi che mostrano trattamenti in azione, risultati prima/dopo, ambiente rilassante',
      'Campagna stagionale basata sui periodi chiave (estate, prenatalizio, etc.)',
      'Retargeting su chi ha visitato il sito ma non ha prenotato',
    ],
    outcome: 'Agenda riempita con clienti del quartiere che diventano clienti fissi. Pubblicità che ragiona per stagioni e abitudini.',
    gradient: 'from-pink-500 to-novira-purple',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-novira-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-novira-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-blue text-sm font-semibold tracking-wider uppercase mb-4 block">
            Esempi concreti
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Cosa faremmo per te
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Questi sono esempi dimostrativi del tipo di strategia che applichiamo.
            <br />
            Ogni attività è diversa: il nostro lavoro è capire il tuo caso specifico.
          </p>
        </div>

        {/* Campaign examples */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {campaignExamples.map((campaign) => (
            <div
              key={campaign.id}
              className="glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{campaign.icon}</div>
                  <div className="flex-1">
                    <div className={`text-xs font-semibold text-transparent bg-gradient-to-r ${campaign.gradient} bg-clip-text mb-2`}>
                      {campaign.type}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold">{campaign.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Scenario */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center">
                      <Target size={14} className="text-red-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Il problema</span>
                  </div>
                  <p className="text-gray-300 pl-8">
                    {campaign.scenario}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-novira-blue/20 flex items-center justify-center">
                      <Zap size={14} className="text-novira-blue" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Il nostro approccio</span>
                  </div>
                  <ul className="space-y-2 pl-8">
                    {campaign.approach.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-novira-purple font-bold text-sm mt-0.5">{index + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-novira-green/5 border border-novira-green/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-novira-green/20 flex items-center justify-center">
                      <TrendingUp size={14} className="text-novira-green" />
                    </div>
                    <span className="text-xs font-semibold text-novira-green uppercase tracking-wider">Cosa otterresti</span>
                  </div>
                  <p className="text-gray-200 pl-8 text-sm leading-relaxed">
                    {campaign.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <div className="inline-block glass rounded-xl px-6 py-4 max-w-2xl">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">Nota:</span>{' '}
              Questi sono esempi dimostrativi. I risultati reali dipendono dal tuo mercato,
              dal tuo prodotto, e dalla strategia che definiremo insieme.
              Niente promesse vuote, solo un approccio concreto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
