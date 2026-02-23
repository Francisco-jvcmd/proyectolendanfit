import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Play, Pause, RotateCcw, Clock, Zap, CalendarDays, ChevronRight, Target, Repeat, Timer, AlertTriangle, CheckCircle2, Dumbbell, Heart, ArrowRight, X } from 'lucide-react';
import { UserData, Exercise, ExerciseStep } from '@/types';
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

const difficultyConfig: Record<string, { label: string; color: string; bg: string }> = {
  facil: { label: 'Facil', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  moderado: { label: 'Moderado', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  intenso: { label: 'Intenso', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
};

/* ------------------------------------------------------------------ */
/*  Animated exercise figure                                           */
/* ------------------------------------------------------------------ */
function ExerciseFigure({ exerciseName, isAnimating }: { exerciseName: string; isAnimating: boolean }) {
  const name = exerciseName.toLowerCase();
  let figureType: 'squat' | 'pushup' | 'plank' | 'lunge' | 'bridge' | 'cardio' | 'stretch' = 'squat';

  if (name.includes('flexion') || name.includes('push') || name.includes('archer') || name.includes('diamante') || name.includes('pike') || name.includes('handstand')) figureType = 'pushup';
  else if (name.includes('plancha') || name.includes('plank') || name.includes('planche') || name.includes('l-sit') || name.includes('dragon')) figureType = 'plank';
  else if (name.includes('zancada') || name.includes('lunge') || name.includes('bulgara')) figureType = 'lunge';
  else if (name.includes('puente') || name.includes('bridge') || name.includes('superman') || name.includes('bird')) figureType = 'bridge';
  else if (name.includes('marcha') || name.includes('mountain') || name.includes('burpee') || name.includes('salto') || name.includes('hiit') || name.includes('circuito') || name.includes('cardio') || name.includes('potencia')) figureType = 'cardio';
  else if (name.includes('estiramiento') || name.includes('movilidad') || name.includes('recuperacion') || name.includes('flexibilidad')) figureType = 'stretch';
  else if (name.includes('sentadilla') || name.includes('squat') || name.includes('pistol') || name.includes('pantorrilla') || name.includes('elevacion')) figureType = 'squat';

  const animClass = isAnimating ? 'animate-exercise' : '';

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      <div className={`w-full h-full flex items-center justify-center ${animClass}`}>
        <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
          {/* Background circle */}
          <circle cx="60" cy="60" r="56" fill="hsl(220, 16%, 12%)" stroke="hsl(172, 100%, 41%)" strokeWidth="1" opacity="0.3" />

          {figureType === 'squat' && (
            <g className={isAnimating ? 'figure-squat' : ''}>
              {/* Head */}
              <circle cx="60" cy="22" r="8" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body */}
              <line x1="60" y1="30" x2="60" y2="58" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms */}
              <line x1="60" y1="38" x2="42" y2="52" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="60" y1="38" x2="78" y2="52" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Legs */}
              <line x1="60" y1="58" x2="44" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="60" y1="58" x2="76" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Lower legs */}
              <line x1="44" y1="82" x2="42" y2="100" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="76" y1="82" x2="78" y2="100" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Down arrow indicator */}
              <path d="M94 50 L94 70 L88 64 M94 70 L100 64" stroke="hsl(0, 85%, 60%)" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M94 75 L94 55 L88 61 M94 55 L100 61" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" fill="none" opacity="0.6" />
            </g>
          )}

          {figureType === 'pushup' && (
            <g className={isAnimating ? 'figure-pushup' : ''}>
              {/* Head */}
              <circle cx="28" cy="44" r="7" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body - horizontal */}
              <line x1="35" y1="48" x2="75" y2="55" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms */}
              <line x1="38" y1="50" x2="32" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="32" y1="72" x2="32" y2="80" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Legs */}
              <line x1="75" y1="55" x2="95" y2="60" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="95" y1="60" x2="98" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Ground line */}
              <line x1="20" y1="82" x2="105" y2="82" stroke="hsl(220, 16%, 25%)" strokeWidth="1" strokeDasharray="4,3" />
              {/* Arrow */}
              <path d="M50 38 L50 30 L44 36 M50 30 L56 36" stroke="hsl(0, 85%, 60%)" strokeWidth="1.5" fill="none" opacity="0.6" />
            </g>
          )}

          {figureType === 'plank' && (
            <g className={isAnimating ? 'figure-plank' : ''}>
              {/* Head */}
              <circle cx="25" cy="50" r="7" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body - horizontal */}
              <line x1="32" y1="53" x2="80" y2="53" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms - forearms on ground */}
              <line x1="35" y1="53" x2="30" y2="68" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="30" y1="68" x2="40" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Legs */}
              <line x1="80" y1="53" x2="95" y2="60" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="95" y1="60" x2="100" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Ground line */}
              <line x1="20" y1="74" x2="105" y2="74" stroke="hsl(220, 16%, 25%)" strokeWidth="1" strokeDasharray="4,3" />
              {/* Core activation indicator */}
              <circle cx="55" cy="53" r="8" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="1" strokeDasharray="3,2" opacity="0.5">
                {isAnimating && <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />}
              </circle>
            </g>
          )}

          {figureType === 'lunge' && (
            <g className={isAnimating ? 'figure-lunge' : ''}>
              {/* Head */}
              <circle cx="50" cy="18" r="7" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body */}
              <line x1="50" y1="25" x2="50" y2="52" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms on hips */}
              <line x1="50" y1="35" x2="42" y2="46" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="35" x2="58" y2="46" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Front leg - bent */}
              <line x1="50" y1="52" x2="36" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="36" y1="72" x2="32" y2="98" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Back leg */}
              <line x1="50" y1="52" x2="70" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="70" y1="72" x2="82" y2="90" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* 90 degree indicators */}
              <path d="M36 72 L42 72 L42 78" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="1" opacity="0.5" />
            </g>
          )}

          {figureType === 'bridge' && (
            <g className={isAnimating ? 'figure-bridge' : ''}>
              {/* Body - arched */}
              <path d="M30 75 Q60 40 90 75" fill="none" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Head */}
              <circle cx="28" cy="72" r="6" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Shoulders on ground */}
              <line x1="28" y1="78" x2="35" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Legs - bent */}
              <line x1="90" y1="75" x2="85" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="80" y1="75" x2="75" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Feet */}
              <line x1="85" y1="82" x2="90" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              <line x1="75" y1="82" x2="80" y2="82" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Ground */}
              <line x1="15" y1="84" x2="105" y2="84" stroke="hsl(220, 16%, 25%)" strokeWidth="1" strokeDasharray="4,3" />
              {/* Up arrow */}
              <path d="M60 55 L60 40 L54 46 M60 40 L66 46" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" fill="none" opacity="0.6" />
            </g>
          )}

          {figureType === 'cardio' && (
            <g className={isAnimating ? 'figure-cardio' : ''}>
              {/* Head */}
              <circle cx="55" cy="16" r="7" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body */}
              <line x1="55" y1="23" x2="55" y2="50" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms - running pose */}
              <line x1="55" y1="32" x2="40" y2="42" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="55" y1="32" x2="72" y2="28" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Legs - running */}
              <line x1="55" y1="50" x2="38" y2="72" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="38" y1="72" x2="30" y2="90" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="55" y1="50" x2="72" y2="68" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="72" y1="68" x2="80" y2="90" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Movement lines */}
              {isAnimating && (
                <>
                  <line x1="18" y1="35" x2="28" y2="35" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" opacity="0.4">
                    <animate attributeName="opacity" values="0;0.6;0" dur="0.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="15" y1="45" x2="25" y2="45" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" opacity="0.3">
                    <animate attributeName="opacity" values="0;0.4;0" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
                  </line>
                  <line x1="20" y1="55" x2="30" y2="55" stroke="hsl(172, 100%, 41%)" strokeWidth="1.5" opacity="0.2">
                    <animate attributeName="opacity" values="0;0.5;0" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
                  </line>
                </>
              )}
              {/* Heart rate pulse */}
              <path d="M88 25 L92 25 L94 18 L97 32 L100 25 L104 25" fill="none" stroke="hsl(0, 85%, 60%)" strokeWidth="1.5" opacity="0.6">
                {isAnimating && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />}
              </path>
            </g>
          )}

          {figureType === 'stretch' && (
            <g className={isAnimating ? 'figure-stretch' : ''}>
              {/* Head */}
              <circle cx="45" cy="30" r="7" fill="hsl(172, 100%, 41%)" opacity="0.9" />
              {/* Body - leaning forward */}
              <line x1="45" y1="37" x2="55" y2="60" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              {/* Arms reaching forward */}
              <line x1="45" y1="42" x2="28" y2="52" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="28" y1="52" x2="18" y2="58" stroke="hsl(172, 100%, 41%)" strokeWidth="2" strokeLinecap="round" />
              {/* Legs - seated stretch */}
              <line x1="55" y1="60" x2="80" y2="65" stroke="hsl(172, 100%, 41%)" strokeWidth="3" strokeLinecap="round" />
              <line x1="80" y1="65" x2="98" y2="62" stroke="hsl(172, 100%, 41%)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Ground */}
              <line x1="15" y1="72" x2="105" y2="72" stroke="hsl(220, 16%, 25%)" strokeWidth="1" strokeDasharray="4,3" />
              {/* Relaxation waves */}
              {isAnimating && (
                <>
                  <circle cx="45" cy="45" r="15" fill="none" stroke="hsl(172, 100%, 41%)" strokeWidth="0.5" opacity="0">
                    <animate attributeName="r" values="15;30;45" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.1;0" dur="3s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}
        </svg>
      </div>

      {/* Animated pulse */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
      )}
    </div>
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
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(220, 16%, 18%)" strokeWidth="4" />
          <circle
            cx="50" cy="50" r="45" fill="none"
            stroke={isComplete ? 'hsl(142, 70%, 45%)' : 'hsl(172, 100%, 41%)'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-xl sm:text-2xl font-black ${isComplete ? 'text-emerald-400' : 'text-foreground'}`}>
            {formatTime(seconds)}
          </span>
          {isComplete && <span className="text-[10px] text-emerald-400 font-bold mt-0.5">Listo</span>}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground hover:text-foreground h-8 w-8 p-0">
          <RotateCcw size={16} />
        </Button>
        <Button
          onClick={() => { if (isComplete) { reset(); } else { setIsRunning(!isRunning); } }}
          className={`rounded-full w-10 h-10 ${isRunning ? 'bg-secondary hover:bg-secondary/80' : 'bg-primary hover:bg-primary/80'} text-primary-foreground`}
          size="sm"
        >
          {isRunning ? <Pause size={16} /> : <Play size={16} />}
        </Button>
      </div>

      {/* Quick presets */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {[15, 20, 30, 45, 60, 90].map(p => (
          <button
            key={p}
            onClick={() => { setInitialSeconds(p); setSeconds(p); setIsRunning(false); setIsComplete(false); }}
            className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors ${
              initialSeconds === p ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {p}s
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step-by-step Exercise Guide Modal                                   */
/* ------------------------------------------------------------------ */
function ExerciseGuideModal({ exercise, isOpen, onClose }: { exercise: Exercise | null; isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setCurrentStep(0);
    setIsAnimating(false);
  }, [exercise]);

  if (!exercise) return null;

  const diff = difficultyConfig[exercise.difficulty];
  const totalSteps = exercise.steps.length;
  const step = exercise.steps[currentStep];

  // Parse a default timer from the exercise tempo or rest
  const parseSeconds = (str: string): number => {
    const match = str.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 30;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-2xl w-[calc(100vw-1rem)] sm:w-full p-0 max-h-[90vh] overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-4 sm:p-6">
            <DialogHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-lg sm:text-2xl font-black text-foreground leading-tight">
                    {exercise.name}
                  </DialogTitle>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1.5">{exercise.muscleGroup}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground hover:text-foreground -mt-1 -mr-1 shrink-0">
                  <X size={18} />
                </Button>
              </div>
            </DialogHeader>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className={`${diff.bg} ${diff.color} border text-xs`}>
                {diff.label}
              </Badge>
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary text-xs">
                <Repeat size={10} className="mr-1" /> {exercise.sets} x {exercise.reps}
              </Badge>
              <Badge variant="outline" className="bg-muted border-border text-muted-foreground text-xs">
                <Clock size={10} className="mr-1" /> Descanso: {exercise.restBetweenSets}
              </Badge>
              <Badge variant="outline" className="bg-muted border-border text-muted-foreground text-xs">
                <Timer size={10} className="mr-1" /> Tempo: {exercise.tempoSeconds}
              </Badge>
            </div>

            <Tabs defaultValue="guide" className="mt-5">
              <TabsList className="bg-muted/50 w-full grid grid-cols-3 h-9">
                <TabsTrigger value="guide" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Guia Paso a Paso
                </TabsTrigger>
                <TabsTrigger value="timer" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Temporizador
                </TabsTrigger>
                <TabsTrigger value="info" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Info y Tips
                </TabsTrigger>
              </TabsList>

              {/* ---------- GUIDE TAB ---------- */}
              <TabsContent value="guide" className="mt-4 space-y-4">
                {/* Animated figure */}
                <div className="bg-muted/30 rounded-2xl p-4">
                  <ExerciseFigure exerciseName={exercise.name} isAnimating={isAnimating} />
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAnimating(!isAnimating)}
                      className={`text-xs gap-1.5 ${isAnimating ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      {isAnimating ? <Pause size={12} /> : <Play size={12} />}
                      {isAnimating ? 'Pausar Animacion' : 'Ver Animacion'}
                    </Button>
                  </div>
                </div>

                {/* Step progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-muted-foreground">
                      Paso {currentStep + 1} de {totalSteps}
                    </span>
                    <span className="text-xs text-primary font-bold">{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
                  </div>
                  <Progress value={((currentStep + 1) / totalSteps) * 100} className="h-1.5" />
                </div>

                {/* Current step detail */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="bg-muted/30 rounded-xl p-4 border border-border/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                          {step.instruction}
                        </p>
                        {step.duration && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <Clock size={12} className="text-primary" />
                            <span className="text-xs font-bold text-primary">{step.duration}</span>
                          </div>
                        )}
                        {step.tip && (
                          <div className="flex items-start gap-1.5 mt-2 bg-amber-400/5 border border-amber-400/10 rounded-lg p-2">
                            <AlertTriangle size={12} className="text-amber-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-amber-400/90">{step.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="text-xs text-muted-foreground"
                  >
                    Anterior
                  </Button>

                  {/* Step dots */}
                  <div className="flex gap-1">
                    {exercise.steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentStep(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentStep ? 'bg-primary w-5' : i < currentStep ? 'bg-primary/40' : 'bg-muted-foreground/20'
                        }`}
                        aria-label={`Ir al paso ${i + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
                    disabled={currentStep === totalSteps - 1}
                    className="text-xs text-primary"
                  >
                    Siguiente <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>

                {/* All steps overview */}
                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Todos los pasos</h4>
                  {exercise.steps.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`w-full text-left flex items-start gap-2.5 p-2 rounded-lg transition-colors ${
                        i === currentStep ? 'bg-primary/10' : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                        i < currentStep ? 'bg-primary/20 text-primary' : i === currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {i < currentStep ? <CheckCircle2 size={10} /> : i + 1}
                      </div>
                      <span className={`text-xs leading-relaxed ${
                        i === currentStep ? 'text-foreground font-medium' : 'text-muted-foreground'
                      }`}>
                        {s.instruction.substring(0, 80)}{s.instruction.length > 80 ? '...' : ''}
                      </span>
                    </button>
                  ))}
                </div>
              </TabsContent>

              {/* ---------- TIMER TAB ---------- */}
              <TabsContent value="timer" className="mt-4">
                <Card className="bg-muted/20 border-border/50">
                  <CardContent className="p-5">
                    <h4 className="text-sm font-bold text-foreground mb-1 text-center">Temporizador para este Ejercicio</h4>
                    <p className="text-xs text-muted-foreground mb-4 text-center">
                      {exercise.sets} series x {exercise.reps} | Descanso: {exercise.restBetweenSets}
                    </p>
                    <ExerciseTimer defaultSeconds={parseSeconds(exercise.restBetweenSets)} />
                    <div className="mt-5 bg-muted/40 rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-bold text-foreground">Tempo:</span> {exercise.tempoSeconds}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ---------- INFO TAB ---------- */}
              <TabsContent value="info" className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exercise.description}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Heart size={14} className="text-emerald-400" /> Beneficios
                  </h4>
                  <div className="space-y-1.5">
                    {exercise.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={14} className="text-amber-400" /> Errores Comunes a Evitar
                  </h4>
                  <div className="space-y-1.5">
                    {exercise.commonMistakes.map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exercise details summary */}
                <Card className="bg-muted/20 border-border/50">
                  <CardContent className="p-4 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Series</p>
                      <p className="text-sm font-bold text-foreground">{exercise.sets}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Repeticiones</p>
                      <p className="text-sm font-bold text-foreground">{exercise.reps}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Descanso</p>
                      <p className="text-sm font-bold text-foreground">{exercise.restBetweenSets}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Frecuencia</p>
                      <p className="text-sm font-bold text-foreground">{exercise.frequency}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Tempo por Repeticion</p>
                      <p className="text-sm font-bold text-primary">{exercise.tempoSeconds}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/*  Main ExercisePlan Component                                         */
/* ------------------------------------------------------------------ */
export function ExercisePlan({ userData }: ExercisePlanProps) {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [showPDFGenerator, setShowPDFGenerator] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const currentExercises = exerciseData[userData.stepsLevel][selectedMonth] || exerciseData[userData.stepsLevel][1];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 gap-4">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl sm:text-4xl font-black mb-1 text-foreground"
              >
                Plan de Ejercicio
              </motion.h2>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <Zap size={14} className={levelColors[userData.stepsLevel]} />
                Nivel {levelLabels[userData.stepsLevel]} - Ejercicios Reales con Guia Paso a Paso
              </p>
            </div>
            <Button
              onClick={() => setShowPDFGenerator(true)}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2.5 px-5 w-full sm:w-auto"
            >
              <Download className="mr-2" size={16} />
              Descargar PDF
            </Button>
          </div>

          {/* Month Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                variant="ghost"
                className={`flex-shrink-0 font-bold text-sm px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedMonth === month
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                <CalendarDays size={14} className="mr-1.5" />
                Mes {month}
              </Button>
            ))}
          </div>

          {/* Month Title */}
          <div className="mb-5 flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Mes {selectedMonth}
            </h3>
            <Badge variant="outline" className={`${levelColors[userData.stepsLevel]} border-current/20 text-xs`}>
              {currentExercises.length} ejercicios
            </Badge>
          </div>

          {/* Exercise Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMonth}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {currentExercises.map((exercise, index) => {
                const diff = difficultyConfig[exercise.difficulty];
                return (
                  <motion.div key={`${selectedMonth}-${index}`} variants={item}>
                    <Card
                      className="bg-card border-border cursor-pointer group hover:border-primary/30 transition-all duration-300 h-full"
                      onClick={() => setSelectedExercise(exercise)}
                    >
                      <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                        {/* Top row: number + difficulty */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-black text-sm">
                            {index + 1}
                          </div>
                          <Badge variant="outline" className={`${diff.bg} ${diff.color} border text-[10px] px-2 py-0`}>
                            {diff.label}
                          </Badge>
                        </div>

                        {/* Exercise name */}
                        <h4 className="text-sm sm:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors mb-1.5">
                          {exercise.name}
                        </h4>

                        {/* Muscle group */}
                        <div className="flex items-center gap-1 mb-3">
                          <Target size={11} className="text-muted-foreground" />
                          <span className="text-[11px] text-muted-foreground font-medium">{exercise.muscleGroup}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
                          {exercise.description}
                        </p>

                        {/* Stats row */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-[10px] font-medium text-foreground">
                            <Repeat size={10} className="text-muted-foreground" />
                            {exercise.sets}x{exercise.reps}
                          </span>
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-[10px] font-medium text-foreground">
                            <Clock size={10} className="text-muted-foreground" />
                            {exercise.duration}
                          </span>
                          <span className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-md text-[10px] font-medium text-primary">
                            <Zap size={10} />
                            {exercise.frequency}
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-[10px] text-muted-foreground">{exercise.steps.length} pasos</span>
                          <span className="text-xs text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Ver Guia <ChevronRight size={14} />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-muted/30 border border-border/50 rounded-xl p-4 flex items-start gap-3"
          >
            <Dumbbell size={18} className="text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground mb-0.5">Toca cada ejercicio para ver la guia completa</p>
              <p className="text-xs text-muted-foreground">
                Cada ejercicio incluye animacion visual, instrucciones paso a paso, temporizador integrado, tempo de repeticion,
                beneficios y errores comunes a evitar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Exercise Guide Modal */}
      <ExerciseGuideModal
        exercise={selectedExercise}
        isOpen={!!selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />

      {showPDFGenerator && (
        <PDFGenerator userData={userData} onClose={() => setShowPDFGenerator(false)} />
      )}
    </>
  );
}
