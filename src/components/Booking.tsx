import { useState } from 'react';
import { Calendar, Mail, Instagram, Send, Check, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    business: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('booking_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            instagram: formData.instagram,
            business_type: formData.business,
            message: formData.message,
          },
        ]);

      if (dbError) throw dbError;

   // Send email via Supabase Edge Function
console.log("Dati inviati alla Edge Function:", formData);

const response = await fetch(
  `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      test: "HELLO",
      name: formData.name,
      email: formData.email,
      instagram: formData.instagram,
      business: formData.business,
      message: formData.message,
    }),
  }
);

console.log("EDGE RESPONSE:", await response.json());
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', instagram: '', business: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setIsSubmitting(false);
      alert('Errore durante l\'invio. Riprova.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="prenota" className="relative py-24 bg-novira-dark-light overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-novira-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-novira-green/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(155, 93, 229, 0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-novira-green text-sm font-semibold tracking-wider uppercase mb-4 block">
            Parliamone
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Prenota una <span className="gradient-text">consulenza gratuita</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Niente impegno, niente vendita aggressiva.
            Parliamo della tua attività e vediamo se possiamo aiutarti.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Il tuo nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-novira-purple focus:ring-1 focus:ring-novira-purple outline-none transition-all"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  {/* Email and Instagram */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-novira-purple focus:ring-1 focus:ring-novira-purple outline-none transition-all"
                          placeholder="mario@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-2">
                        Instagram Handle
                      </label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="text"
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-novira-purple focus:ring-1 focus:ring-novira-purple outline-none transition-all"
                          placeholder="@attività"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business type */}
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                      Tipo di attività
                    </label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-novira-purple focus:ring-1 focus:ring-novira-purple outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-novira-dark">Seleziona il tuo settore</option>
                      <option value="ristorante" className="bg-novira-dark">Ristorante</option>
                      <option value="bar" className="bg-novira-dark">Bar / Caffetteria</option>
                      <option value="palestra" className="bg-novira-dark">Palestra</option>
                      <option value="estetica" className="bg-novira-dark">Centro Estetico</option>
                      <option value="negozio" className="bg-novira-dark">Negozio Locale</option>
                      <option value="professionista" className="bg-novira-dark">Professionista</option>
                      <option value="altro" className="bg-novira-dark">Altro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Come possiamo aiutarti? (opzionale)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-novira-purple focus:ring-1 focus:ring-novira-purple outline-none transition-all resize-none"
                      placeholder="Raccontaci del tuo business..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full btn-primary flex items-center justify-center gap-2 ${
                      isSubmitted ? 'bg-green-600 hover:bg-green-600' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Invio in corso...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check size={18} />
                        Richiesta inviata!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Prenota consulenza gratuita
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-novira-purple/20 flex items-center justify-center">
                    <Calendar size={20} className="text-novira-purple" />
                  </div>
                  <h3 className="font-display font-bold">Come funziona</h3>
                </div>
                <ol className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-novira-purple font-bold">1.</span>
                    <span>Compili il form</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-novira-purple font-bold">2.</span>
                    <span>Ti contattiamo in 24-48h</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-novira-purple font-bold">3.</span>
                    <span>Call di 15-20 minuti per capire il tuo caso</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-novira-purple font-bold">4.</span>
                    <span>Se serve, ti mandiamo una proposta chiara</span>
                  </li>
                </ol>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-novira-blue/20 flex items-center justify-center">
                    <Instagram size={20} className="text-novira-blue" />
                  </div>
                  <h3 className="font-display font-bold">Contatti diretti</h3>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/novira__studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={18} />
                    <span>@novira__studio</span>
                  </a>
                  <a
                    href="mailto:novirastudio.team@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span>novirastudio.team@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="glass rounded-2xl p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check size={16} className="text-novira-green" />
                    <span>Nessun costo per la consulenza</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check size={16} className="text-novira-green" />
                    <span>Nessun impegno</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check size={16} className="text-novira-green" />
                    <span>Zero vendite aggressive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
