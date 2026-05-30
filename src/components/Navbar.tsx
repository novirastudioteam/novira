import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#cosa-facciamo', label: 'Cosa facciamo' },
    { href: '#metodo', label: 'Metodo' },
    { href: '#chi-siamo', label: 'Per chi' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#prenota', label: 'Prenota' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'glass-dark py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom section-padding !py-0 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold gradient-text">
          Novira
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="btn-primary text-sm !px-6 !py-2.5"
          >
            Consulenza Gratuita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-dark transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom section-padding flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#prenota"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Consulenza Gratuita
          </a>
        </div>
      </div>
    </nav>
  );
}
