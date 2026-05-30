import { Calendar } from 'lucide-react';

interface FloatingCTAProps {
  isVisible: boolean;
}

export default function FloatingCTA({ isVisible }: FloatingCTAProps) {
  const handleButtonClick = () => {
    const element = document.querySelector('#prenota');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={handleButtonClick}
        className="group flex items-center gap-2 bg-gradient-to-r from-novira-purple to-novira-blue text-white font-semibold px-6 py-4 rounded-full shadow-lg neon-glow hover:scale-105 transition-all duration-300"
      >
        <Calendar size={20} className="group-hover:animate-bounce-subtle" />
        <span className="hidden sm:inline">Prenota call gratuita</span>
        <span className="sm:hidden">Prenota</span>
      </button>
    </div>
  );
}
