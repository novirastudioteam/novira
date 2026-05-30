import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Che differenza c\'è tra voi e un social media manager?',
    answer: 'Un social media manager gestisce i tuoi profili: post, storie, interazioni. Noi creiamo pubblicità verticale e la distribuiamo tramite ADS mirate. Il nostro obiettivo è portarti clienti, non curare il feed. Niente post a caso, solo campagne strategiche.',
  },
  {
    question: 'Serve avere tanti follower per usare i vostri servizi?',
    answer: 'Assolutamente no. Anzi, spesso lavoriamo con attività che partono da zero. Le nostre campagne ADS portano il tuo contenuto davanti al pubblico giusto, indipendentemente da quanti follower hai. L\'importante è avere un prodotto o servizio valido.',
  },
  {
    question: 'Quanto costa una campagna?',
    answer: 'Ogni progetto è diverso. Dipende dal tipo di contenuto, dal numero di campagne, e dagli obiettivi. Per questo la consulenza iniziale è fondamentale: ci serve capire il tuo caso per dirti esattamente cosa serve e quanto costa. Niente sorprese.',
  },
  {
    question: 'Quanto dura una campagna pubblicitaria?',
    answer: 'Una campagna tipica dura dalle 2 alle 4 settimane. Ma il nostro lavoro non finisce lì: monitoriamo i risultati, ottimizziamo, e se serve adattiamo. Il marketing è un processo continuo, non un evento singolo.',
  },
  {
    question: 'Lavorate solo a Roma?',
    answer: 'Per adesso ci concentriamo su Roma e dintorni. Creare contenuti video richiede che possiamo visitare la tua attività. Se sei fuori Roma ma sei interessato, contattaci comunque: stiamo valutando di espanderci.',
  },
  {
    question: 'Che tipo di attrezzatura usate?',
    answer: 'Usiamo attrezzatura professionale ma semplice: buone camere, obiettivi di qualità, luci base. La nostra forza è la strategia e il messaggio, non l\'overproduction. Ogni progetto riceve una post-produzione adeguata e professionale in base alle esigenze.',
  },
  {
    question: 'Posso vedere dei risultati concreti?',
    answer: 'Durante la consulenza ti mostreremo esempi reali di campagne che abbiamo gestito e i risultati ottenuti. Non pubblichiamo numeri sensibili dei clienti sul sito, ma ti garantiamo trasparenza totale quando lavoreremo insieme.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-novira-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-novira-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-purple text-sm font-semibold tracking-wider uppercase mb-4 block">
            Domande frequenti
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Qualche risposta chiara
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Non giriamo attorno alle cose. Se hai altre domande, contattaci.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-white group-hover:text-novira-purple transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-novira-purple/20 rotate-180' : ''
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-colors ${isOpen ? 'text-novira-purple' : 'text-gray-500'}`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Hai ancora domande?
          </p>
          <a href="#prenota" className="btn-secondary">
            Parliamone direttamente
          </a>
        </div>
      </div>
    </section>
  );
}
