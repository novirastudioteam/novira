import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-novira-dark-light border-t border-white/5">
      <div className="container-custom section-padding !py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-display font-bold gradient-text inline-block mb-4">
              Novira
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Partner pubblicitario per attività locali a Roma.
              <br />
              Pubblicità verticale che converte.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigazione</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#cosa-facciamo" className="text-gray-400 hover:text-white transition-colors">
                  Cosa facciamo
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-gray-400 hover:text-white transition-colors">
                  Metodo Novira
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-white transition-colors">
                  Per chi lavoriamo
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#prenota" className="text-gray-400 hover:text-white transition-colors">
                  Prenota consulenza
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/novira__studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  <span>@novira__studio</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:novirastudio.team@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>novirastudio.team@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} Novira Studio. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Note Legali
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Made with love */}
      <div className="py-4 bg-novira-dark border-t border-white/5">
        <div className="container-custom text-center">
          <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
            Creato con <Heart size={12} className="text-novira-purple" /> a Roma
          </p>
        </div>
      </div>
    </footer>
  );
}
