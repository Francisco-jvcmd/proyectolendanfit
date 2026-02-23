import { useState } from 'react';
import { Dumbbell } from 'lucide-react';

export function Logo() {
  const [isGlowing, setIsGlowing] = useState(true);

  const toggleGlow = () => {
    setIsGlowing(!isGlowing);
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={toggleGlow}
        className="focus:outline-none relative"
        data-testid="button-logo-toggle"
        aria-label="Toggle logo glow"
      >
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isGlowing ? 'bg-primary/20 blur-xl scale-150' : 'bg-transparent'
        }`} />
        <Dumbbell 
          className={`relative transition-all duration-500 ${
            isGlowing 
              ? 'text-primary logo-glow' 
              : 'text-muted-foreground logo-dim'
          }`}
          size={32}
        />
      </button>
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground leading-none">
          Lendanfit
        </h1>
        <span className="text-[10px] sm:text-xs font-medium text-primary tracking-widest uppercase">
          Tu Plan Fitness
        </span>
      </div>
    </div>
  );
}
