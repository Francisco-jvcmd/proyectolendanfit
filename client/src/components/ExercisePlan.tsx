import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download, Play, Pause, RotateCcw, Clock, Zap, ChevronRight, Target, Repeat, Timer, CheckCircle2, Dumbbell, Heart, X, Volume2, VolumeX, Trophy, SkipForward, Flame, TrendingUp, Info } from 'lucide-react';
import { UserData, Exercise } from '@/types';
import { exerciseData } from '@/data/exerciseData';
import { PDFGenerator } from './PDFGenerator';
import { motion, AnimatePresence } from 'framer-motion';

interface ExercisePlanProps {
  userData: UserData;
}

const levelLabels: Record<string, string> = {
  basic: 'Basico',
  medium: 'Intermedio',
  advanced: 'Avanzado'
};

const levelColors: Record<string, string> = {
  basic: 'text-emerald-400',
  medium: 'text-primary',
  advanced: 'text-secondary'
};

const difficultyConfig: Record<string, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  facil: { label: 'Facil', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30', icon: <TrendingUp size={12} /> },
  moderado: { label: 'Moderado', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30', icon: <Flame size={12} /> },
  intenso: { label: 'Intenso', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30', icon: <Zap size={12} /> },
};

const muscleGroupIcons: Record<string, string> = {
  'Piernas': '🦵',
  'Pecho': '💪',
  'Core': '🎯',
  'Gluteos': '🍑',
  'Espalda': '🔙',
  'Brazos': '💪',
  'Hombros': '🏋️',
  'Cuerpo Completo': '⚡',
  'Cardio': '❤️',
  'Flexibilidad': '🧘',
};

/* ------------------------------------------------------------------ */
/*  Animated Exercise Figure with Glowing Effect                        */
/* ------------------------------------------------------------------ */
function ExerciseFigure({ exerciseName, isAnimating, size = 'md' }: { exerciseName: string; isAnimating: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const name = exerciseName.toLowerCase();
  let figureType: 'squat' | 'pushup' | 'plank' | 'lunge' | 'bridge' | 'cardio' | 'stretch' = 'squat';

  if (name.includes('flexion') || name.includes('push') || name.includes('archer') || name.includes('diamante') || name.includes('pike') || name.includes('handstand')) figureType = 'pushup';
  else if (name.includes('plancha') || name.includes('plank') || name.includes('planche') || name.includes('l-sit') || name.includes('dragon')) figureType = 'plank';
  else if (name.includes('zancada') || name.includes('lunge') || name.includes('bulgara')) figureType = 'lunge';
  else if (name.includes('puente') || name.includes('bridge') || name.includes('superman') || name.includes('bird')) figureType = 'bridge';
  else if (name.includes('marcha') || name.includes('mountain') || name.includes('burpee') || name.includes('salto') || name.includes('hiit') || name.includes('circuito') || name.includes('cardio') || name.includes('potencia')) figureType = 'cardio';
  else if (name.includes('estiramiento') || name.includes('movilidad') || name.includes('recuperacion') || name.includes('flexibilidad')) figureType = 'stretch';
  else if (name.includes('sentadilla') || name.includes('squat') || name.includes('pistol') || name.includes('pantorrilla') || name.includes('elevacion')) figureType = 'squat';

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto`}>
      {/* Glow effect */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
      )}
      
      <div className={`relative w-full h-full flex items-center justify-center ${isAnimating ? 'animate-exercise' : ''}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" aria-hidden="true">
          {/* Background gradient circle */}
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(172, 100%, 41%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(220, 16%, 12%)" stopOpacity="0.8" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <circle cx="50" cy="50" r="48" fill="url(#bgGrad)" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" opacity="0.4" />

          <g filter={isAnimating ? "url(#glow)" : undefined}>
            {figureType === 'squat' && (
              <g className={isAnimating ? 'figure-squat' : ''} style={{ transformOrigin: '50px 50px' }}>
                <circle cx="50" cy="18" r="7" fill="hsl(172, 100%, 50%)" />
                <line x1="50" y1="25" x2="50" y2="48" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="32" x2="36" y2="42" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="32" x2="64" y2="42" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="48" x2="38" y2="68" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="48" x2="62" y2="68" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="38" y1="68" x2="36" y2="85" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="62" y1="68" x2="64" y2="85" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            {figureType === 'pushup' && (
              <g className={isAnimating ? 'figure-pushup' : ''} style={{ transformOrigin: '50px 60px' }}>
                <circle cx="22" cy="38" r="6" fill="hsl(172, 100%, 50%)" />
                <line x1="28" y1="42" x2="65" y2="50" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="32" y1="44" x2="28" y2="62" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="28" y1="62" x2="30" y2="70" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="65" y1="50" x2="82" y2="55" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="82" y1="55" x2="85" y2="68" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
              </g>
            )}

            {figureType === 'plank' && (
              <g className={isAnimating ? 'figure-plank' : ''}>
                <circle cx="20" cy="45" r="6" fill="hsl(172, 100%, 50%)" />
                <line x1="26" y1="48" x2="72" y2="48" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="30" y1="48" x2="28" y2="62" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="28" y1="62" x2="35" y2="65" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="72" y1="48" x2="85" y2="55" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="85" y1="55" x2="88" y2="65" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
                {isAnimating && (
                  <circle cx="50" cy="48" r="6" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="1" strokeDasharray="2,2" opacity="0.5">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )}

            {figureType === 'lunge' && (
              <g className={isAnimating ? 'figure-lunge' : ''} style={{ transformOrigin: '50px 45px' }}>
                <circle cx="50" cy="15" r="6" fill="hsl(172, 100%, 50%)" />
                <line x1="50" y1="21" x2="50" y2="45" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="28" x2="40" y2="40" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="28" x2="60" y2="40" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="45" x2="35" y2="62" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="62" x2="30" y2="85" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="45" x2="65" y2="62" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="65" y1="62" x2="78" y2="80" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            {figureType === 'bridge' && (
              <g className={isAnimating ? 'figure-bridge' : ''}>
                <path d="M25 65 Q50 35 75 65" fill="none" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="23" cy="62" r="5" fill="hsl(172, 100%, 50%)" />
                <line x1="23" y1="67" x2="28" y2="72" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="75" y1="65" x2="72" y2="72" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="65" x2="68" y2="72" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                {isAnimating && (
                  <path d="M50 50 L50 42 L46 46 M50 42 L54 46" stroke="hsl(172, 100%, 50%)" strokeWidth="1.5" fill="none" opacity="0.7">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
                  </path>
                )}
              </g>
            )}

            {figureType === 'cardio' && (
              <g className={isAnimating ? 'figure-cardio' : ''}>
                <circle cx="50" cy="15" r="6" fill="hsl(172, 100%, 50%)" />
                <line x1="50" y1="21" x2="50" y2="45" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="28" x2="38" y2="38" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="28" x2="65" y2="25" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="45" x2="35" y2="65" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="65" x2="28" y2="82" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="45" x2="65" y2="60" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="65" y1="60" x2="72" y2="80" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                {isAnimating && (
                  <>
                    <line x1="15" y1="30" x2="22" y2="30" stroke="hsl(172, 100%, 50%)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0;0.8;0" dur="0.6s" repeatCount="indefinite" />
                    </line>
                    <line x1="12" y1="40" x2="20" y2="40" stroke="hsl(172, 100%, 50%)" strokeWidth="1.5" opacity="0.3">
                      <animate attributeName="opacity" values="0;0.6;0" dur="0.6s" repeatCount="indefinite" begin="0.2s" />
                    </line>
                  </>
                )}
              </g>
            )}

            {figureType === 'stretch' && (
              <g className={isAnimating ? 'figure-stretch' : ''} style={{ transformOrigin: '45px 45px' }}>
                <circle cx="40" cy="28" r="6" fill="hsl(172, 100%, 50%)" />
                <line x1="40" y1="34" x2="50" y2="55" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="40" y1="38" x2="25" y2="48" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="25" y1="48" x2="18" y2="55" stroke="hsl(172, 100%, 50%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="50" y1="55" x2="75" y2="58" stroke="hsl(172, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="75" y1="58" x2="88" y2="55" stroke="hsl(172, 100%, 50%)" strokeWidth="2.5" strokeLinecap="round" />
                {isAnimating && (
                  <circle cx="40" cy="42" r="12" fill="none" stroke="hsl(172, 100%, 50%)" strokeWidth="0.5" opacity="0">
                    <animate attributeName="r" values="12;25;40" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.2;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Beautiful Exercise Card                                             */
/* ------------------------------------------------------------------ */
function ExerciseCard({ exercise, index, onClick }: { exercise: Exercise; index: number; onClick: () => void }) {
  const diff = difficultyConfig[exercise.difficulty];
  const muscleIcon = muscleGroupIcons[exercise.muscleGroup] || '💪';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card 
        onClick={onClick}
        className="group relative overflow-hidden cursor-pointer bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-4 sm:p-5">
          <div className="flex gap-4">
            {/* Exercise Figure */}
            <div className="flex-shrink-0 relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-muted/80 to-muted/30 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <ExerciseFigure exerciseName={exercise.name} isAnimating={false} size="sm" />
              </div>
              {/* Floating number badge */}
              <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-black text-primary-foreground shadow-lg">
                {index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-foreground text-sm sm:text-base leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {exercise.name}
                </h3>
                <ChevronRight size={18} className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Muscle group with emoji */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-base">{muscleIcon}</span>
                <span className="text-xs text-muted-foreground font-medium">{exercise.muscleGroup}</span>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={`${diff.bg} ${diff.color} border text-[10px] px-2 py-0.5 font-semibold flex items-center gap-1`}>
                  {diff.icon}
                  {diff.label}
                </Badge>
                <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-border/50 text-[10px] px-2 py-0.5">
                  <Repeat size={10} className="mr-1" />
                  {exercise.sets}x{exercise.reps}
                </Badge>
                <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-border/50 text-[10px] px-2 py-0.5">
                  <Clock size={10} className="mr-1" />
                  {exercise.duration}
                </Badge>
              </div>
            </div>
          </div>

          {/* Bottom info bar - appears on hover */}
          <div className="mt-3 pt-3 border-t border-border/30 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
            <p className="text-xs text-muted-foreground line-clamp-2">{exercise.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exercise Timer                                                      */
/* ------------------------------------------------------------------ */
function ExerciseTimer({ defaultSeconds = 60 }: { defaultSeconds?: number }) {
  const [seconds, setSeconds] = useState(defaultSeconds);
  const [initialSeconds, setInitialSeconds] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setSeconds(defaultSeconds);
    setInitialSeconds(defaultSeconds);
    setIsRunning(false);
    setIsComplete(false);
  }, [defaultSeconds]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const reset = useCallback(() => {
    setSeconds(initialSeconds);
    setIsRunning(false);
    setIsComplete(false);
  }, [initialSeconds]);

  const progress = ((initialSeconds - seconds) / initialSeconds) * 100;
  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        {/* Glow effect */}
        <div className={`absolute inset-2 rounded-full transition-opacity duration-500 ${isRunning ? 'bg-primary/20 blur-xl' : 'opacity-0'}`} />
        
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="hsl(220, 16%, 10%)" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(220, 16%, 18%)" strokeWidth="6" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke={isComplete ? 'hsl(142, 70%, 45%)' : 'hsl(172, 100%, 41%)'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-2xl font-black ${isComplete ? 'text-emerald-400' : 'text-foreground'}`}>
            {formatTime(seconds)}
          </span>
          {isComplete && <span className="text-[10px] text-emerald-400 font-bold mt-1">Completado</span>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={reset} className="text-muted-foreground hover:text-foreground h-10 w-10 rounded-full">
          <RotateCcw size={18} />
        </Button>
        <Button
          onClick={() => { if (isComplete) { reset(); } else { setIsRunning(!isRunning); } }}
          className={`rounded-full w-14 h-14 ${isRunning ? 'bg-secondary hover:bg-secondary/80' : 'bg-primary hover:bg-primary/80'} text-primary-foreground shadow-lg`}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </Button>
      </div>

      {/* Preset buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[20, 30, 45, 60, 90, 120].map(p => (
          <button
            key={p}
            onClick={() => { setInitialSeconds(p); setSeconds(p); setIsRunning(false); setIsComplete(false); }}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
              initialSeconds === p 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {p < 60 ? `${p}s` : `${p/60}m`}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exercise Detail Modal                                               */
/* ------------------------------------------------------------------ */
function ExerciseDetailModal({ exercise, isOpen, onClose }: { exercise: Exercise | null; isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
  }, [exercise]);

  if (!exercise) return null;

  const diff = difficultyConfig[exercise.difficulty];
  const muscleIcon = muscleGroupIcons[exercise.muscleGroup] || '💪';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-card to-background border-border max-w-2xl p-0 max-h-[90vh] overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`${diff.bg} ${diff.color} border font-semibold`}>
                    {diff.icon}
                    <span className="ml-1">{diff.label}</span>
                  </Badge>
                  <Badge variant="outline" className="bg-muted/30 text-muted-foreground border-border/50">
                    {muscleIcon} {exercise.muscleGroup}
                  </Badge>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-foreground mb-1">{exercise.name}</h2>
                <p className="text-sm text-muted-foreground">{exercise.description}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full -mr-2 -mt-2">
                <X size={20} />
              </Button>
            </div>

            {/* Animation and Timer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/20 rounded-2xl p-4 flex items-center justify-center">
                <ExerciseFigure exerciseName={exercise.name} isAnimating={true} size="lg" />
              </div>
              <div className="bg-muted/20 rounded-2xl p-4 flex items-center justify-center">
                <ExerciseTimer defaultSeconds={60} />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[
                { icon: <Repeat size={16} />, label: 'Series', value: exercise.sets },
                { icon: <Target size={16} />, label: 'Reps', value: exercise.reps },
                { icon: <Clock size={16} />, label: 'Descanso', value: exercise.restBetweenSets.replace(' segundos', 's') },
                { icon: <Timer size={16} />, label: 'Tempo', value: exercise.tempoSeconds.split(' ')[0] },
              ].map((stat, i) => (
                <div key={i} className="bg-muted/30 rounded-xl p-3 text-center">
                  <div className="text-primary mb-1 flex justify-center">{stat.icon}</div>
                  <p className="text-xs text-muted-foreground mb-0.5">{stat.label}</p>
                  <p className="text-sm font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="mb-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Info size={16} className="text-primary" />
                Como Realizar el Ejercicio
              </h3>
              
              {/* Step progress */}
              <div className="flex gap-1 mb-4">
                {exercise.steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStep(i)}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      i === currentStep ? 'bg-primary' : i < currentStep ? 'bg-primary/40' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Current step */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-gradient-to-br from-primary/10 to-muted/30 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-black text-primary-foreground">
                      {currentStep + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">Paso {currentStep + 1} de {exercise.steps.length}</span>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{exercise.steps[currentStep].instruction}</p>
                  {exercise.steps[currentStep].duration && (
                    <p className="mt-2 text-sm text-primary font-semibold flex items-center gap-1">
                      <Clock size={14} />
                      {exercise.steps[currentStep].duration}
                    </p>
                  )}
                  {exercise.steps[currentStep].tip && (
                    <p className="mt-2 text-sm text-amber-400 bg-amber-400/10 rounded-lg px-3 py-2">
                      💡 {exercise.steps[currentStep].tip}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Step navigation */}
              <div className="flex gap-2 mt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  Anterior
                </Button>
                <Button
                  size="sm"
                  onClick={() => setCurrentStep(Math.min(exercise.steps.length - 1, currentStep + 1))}
                  disabled={currentStep === exercise.steps.length - 1}
                  className="flex-1 bg-primary hover:bg-primary/80"
                >
                  Siguiente
                </Button>
              </div>
            </div>

            {/* Benefits & Mistakes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Beneficios
                </h4>
                <ul className="space-y-1.5">
                  {exercise.benefits.map((b, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                  <X size={16} />
                  Errores Comunes
                </h4>
                <ul className="space-y-1.5">
                  {exercise.commonMistakes.map((m, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/*  Workout Mode                                                        */
/* ------------------------------------------------------------------ */
function WorkoutMode({ exercises, onClose }: { exercises: Exercise[]; onClose: () => void }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [phase, setPhase] = useState<'exercise' | 'rest' | 'complete'>('exercise');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const currentExercise = exercises[currentExerciseIndex];
  const totalExercises = exercises.length;
  const totalSets = currentExercise?.sets || 3;

  const getRestSeconds = (restStr: string): number => {
    const match = restStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 45;
  };

  const playSound = useCallback((type: 'beep' | 'complete') => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.value = type === 'complete' ? 800 : 600;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch {
      // Audio context not available
    }
  }, [soundEnabled]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            playSound('beep');
            return 0;
          }
          if (prev === 4) playSound('beep');
          return prev - 1;
        });
      }, 1000);
    } else if (isRunning && timeLeft === 0 && phase === 'rest') {
      if (currentSet < totalSets) {
        setCurrentSet(prev => prev + 1);
        setPhase('exercise');
      } else {
        setCompletedExercises(prev => [...prev, currentExerciseIndex]);
        if (currentExerciseIndex < totalExercises - 1) {
          setCurrentExerciseIndex(prev => prev + 1);
          setCurrentSet(1);
          setPhase('exercise');
        } else {
          setPhase('complete');
          playSound('complete');
        }
      }
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, phase, currentSet, totalSets, currentExerciseIndex, totalExercises, playSound]);

  const startRest = () => {
    const restTime = getRestSeconds(currentExercise.restBetweenSets);
    setTimeLeft(restTime);
    setPhase('rest');
    setIsRunning(true);
  };

  const skipExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCompletedExercises(prev => [...prev, currentExerciseIndex]);
      setCurrentExerciseIndex(prev => prev + 1);
      setCurrentSet(1);
      setPhase('exercise');
      setIsRunning(false);
    } else {
      setPhase('complete');
    }
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((currentExerciseIndex + (currentSet / totalSets)) / totalExercises) * 100;

  if (phase === 'complete') {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="bg-gradient-to-b from-card to-background border-border max-w-md p-0">
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-2xl shadow-primary/30"
            >
              <Trophy size={56} className="text-primary-foreground" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-black text-foreground mb-2"
            >
              Entrenamiento Completado!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-6"
            >
              Has completado {completedExercises.length + 1} ejercicios. Excelente trabajo!
            </motion.p>
            <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3">
              Finalizar Sesion
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-card to-background border-border max-w-lg p-0 max-h-[90vh] overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Dumbbell size={16} className="text-primary" />
                </div>
                <span className="font-bold text-foreground">Modo Entrenamiento</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X size={18} />
                </Button>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-muted-foreground">
                  Ejercicio {currentExerciseIndex + 1} de {totalExercises}
                </span>
                <span className="text-xs text-primary font-bold">{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </div>

            {/* Exercise dots */}
            <div className="flex gap-1.5 justify-center mb-5">
              {exercises.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    completedExercises.includes(i) ? 'w-2 bg-emerald-400' :
                    i === currentExerciseIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/20'
                  }`}
                />
              ))}
            </div>

            {phase === 'rest' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-36 h-36 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
                  <svg className="w-full h-full transform -rotate-90 relative" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="hsl(220, 16%, 10%)" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(220, 16%, 18%)" strokeWidth="6" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="hsl(172, 100%, 41%)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 42}
                      strokeDashoffset={2 * Math.PI * 42 * (1 - timeLeft / getRestSeconds(currentExercise.restBetweenSets))}
                      className="transition-all duration-1000 ease-linear"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-foreground">{formatTime(timeLeft)}</span>
                    <span className="text-xs text-muted-foreground">Descanso</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Descansa</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Siguiente: Serie {currentSet < totalSets ? currentSet + 1 : 1}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setIsRunning(false); setPhase('exercise'); }}
                  className="text-muted-foreground"
                >
                  Saltar Descanso
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={currentExerciseIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="bg-muted/20 rounded-2xl p-5 mb-4">
                  <ExerciseFigure exerciseName={currentExercise.name} isAnimating={true} size="lg" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-black text-foreground mb-1">{currentExercise.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentExercise.muscleGroup}</p>
                </div>

                <div className="flex items-center justify-center gap-3 mb-5">
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-bold px-3 py-1">
                    Serie {currentSet} de {totalSets}
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground border-border px-3 py-1">
                    {currentExercise.reps}
                  </Badge>
                </div>

                <div className="bg-muted/30 rounded-xl p-3 mb-5 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Tempo por repeticion</p>
                  <p className="text-sm font-bold text-primary">{currentExercise.tempoSeconds}</p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={skipExercise}
                    variant="outline"
                    className="flex-1 border-border"
                  >
                    <SkipForward size={16} className="mr-1.5" />
                    Saltar
                  </Button>
                  <Button
                    onClick={startRest}
                    className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground font-bold"
                  >
                    <CheckCircle2 size={16} className="mr-1.5" />
                    Serie Completada
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stats */}
            <div className="mt-5 pt-4 border-t border-border/30 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xl font-black text-foreground">{completedExercises.length}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Completados</p>
              </div>
              <div>
                <p className="text-xl font-black text-primary">{currentSet}/{totalSets}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Serie</p>
              </div>
              <div>
                <p className="text-xl font-black text-foreground">{totalExercises - currentExerciseIndex - 1}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Restantes</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/*  Month Selector                                                      */
/* ------------------------------------------------------------------ */
function MonthSelector({ selectedMonth, onChange }: { selectedMonth: number; onChange: (m: number) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {[1, 2, 3, 4, 5, 6].map(month => (
        <button
          key={month}
          onClick={() => onChange(month)}
          className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
            selectedMonth === month
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          Mes {month}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main ExercisePlan Component                                         */
/* ------------------------------------------------------------------ */
export function ExercisePlan({ userData }: ExercisePlanProps) {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [showPDFGenerator, setShowPDFGenerator] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showWorkoutMode, setShowWorkoutMode] = useState(false);

  const currentExercises = exerciseData[userData.stepsLevel]?.[selectedMonth] || exerciseData[userData.stepsLevel]?.[1] || [];

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl sm:text-3xl font-black mb-1 text-foreground"
              >
                Plan de Ejercicio
              </motion.h2>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <Zap size={14} className={levelColors[userData.stepsLevel]} />
                Nivel {levelLabels[userData.stepsLevel]} - Programa de 6 Meses
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowWorkoutMode(true)}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold shadow-lg shadow-primary/20"
              >
                <Play className="mr-1.5" size={16} />
                Entrenar
              </Button>
              <Button
                onClick={() => setShowPDFGenerator(true)}
                variant="outline"
                className="border-border hover:bg-muted"
              >
                <Download className="mr-1.5" size={16} />
                PDF
              </Button>
            </div>
          </div>

          {/* Month Selector */}
          <div className="mb-6">
            <MonthSelector selectedMonth={selectedMonth} onChange={setSelectedMonth} />
          </div>

          {/* Exercise Grid */}
          {currentExercises.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {currentExercises.map((exercise, index) => (
                <ExerciseCard
                  key={`${selectedMonth}-${index}`}
                  exercise={exercise}
                  index={index}
                  onClick={() => setSelectedExercise(exercise)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/20 rounded-2xl">
              <Dumbbell size={48} className="mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No hay ejercicios disponibles para este mes.</p>
            </div>
          )}

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-muted/30 rounded-2xl border border-primary/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Recuerda calentar antes de cada sesion</p>
                <p className="text-xs text-muted-foreground">5-10 minutos de movilidad articular y ejercicios de activacion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <ExerciseDetailModal
        exercise={selectedExercise}
        isOpen={!!selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />

      {showPDFGenerator && (
        <PDFGenerator userData={userData} onClose={() => setShowPDFGenerator(false)} />
      )}

      {showWorkoutMode && (
        <WorkoutMode exercises={currentExercises} onClose={() => setShowWorkoutMode(false)} />
      )}
    </>
  );
}
