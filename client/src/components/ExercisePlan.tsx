import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Download, Play, Pause, RotateCcw, Clock, Zap, CalendarDays, ChevronRight } from 'lucide-react';
import { UserData, Exercise } from '@/types';
import { exerciseData } from '@/data/exerciseData';
import { PDFGenerator } from './PDFGenerator';
import { motion, AnimatePresence } from 'framer-motion';

interface ExercisePlanProps {
  userData: UserData;
}

const levelLabels = {
  basic: 'Basico',
  medium: 'Medio',
  advanced: 'Avanzado'
};

const levelColors = {
  basic: 'text-chart-3',
  medium: 'text-primary',
  advanced: 'text-secondary'
};

function ExerciseTimer() {
  const [seconds, setSeconds] = useState(60);
  const [initialSeconds, setInitialSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
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
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const presets = [30, 45, 60, 90, 120, 180];

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Clock size={18} className="text-primary" /> Temporizador de Ejercicio
        </h3>
        
        {/* Timer Display */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(220, 16%, 18%)" strokeWidth="6" />
              <circle 
                cx="60" cy="60" r="54" fill="none" 
                stroke={isComplete ? 'hsl(172, 100%, 41%)' : 'hsl(172, 100%, 41%)'} 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="timer-ring"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-2xl sm:text-3xl font-black ${isComplete ? 'text-primary' : 'text-foreground'}`}>
                {formatTime(seconds)}
              </span>
              {isComplete && <span className="text-xs text-primary font-semibold mt-1">Completado</span>}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={reset}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw size={18} />
            </Button>
            <Button
              onClick={() => {
                if (isComplete) {
                  reset();
                } else {
                  setIsRunning(!isRunning);
                }
              }}
              className={`rounded-full w-12 h-12 ${
                isRunning ? 'bg-secondary hover:bg-secondary/80' : 'bg-primary hover:bg-primary/80'
              } text-primary-foreground`}
            >
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </Button>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-2 justify-center">
            {presets.map(p => (
              <Button
                key={p}
                variant="ghost"
                size="sm"
                onClick={() => { setInitialSeconds(p); setSeconds(p); setIsRunning(false); setIsComplete(false); }}
                className={`text-xs px-3 py-1 h-auto ${
                  initialSeconds === p ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                {p >= 60 ? `${p / 60}m` : `${p}s`}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ExerciseDetailModal({ exercise, isOpen, onClose }: { exercise: Exercise | null; isOpen: boolean; onClose: () => void }) {
  if (!exercise) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-lg w-[calc(100vw-2rem)] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-bold text-foreground">{exercise.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{exercise.description}</p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Clock size={14} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{exercise.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
              <Zap size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">{exercise.frequency}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ExercisePlan({ userData }: ExercisePlanProps) {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [showPDFGenerator, setShowPDFGenerator] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const currentExercises = exerciseData[userData.stepsLevel][selectedMonth] || exerciseData[userData.stepsLevel][1];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 gap-4">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl sm:text-5xl font-black mb-2 text-foreground"
              >
                Plan de Ejercicio
              </motion.h2>
              <p className="text-muted-foreground text-sm sm:text-base flex items-center gap-2">
                <Zap size={16} className={levelColors[userData.stepsLevel]} />
                Nivel {levelLabels[userData.stepsLevel]} - 6 Meses de Progresion
              </p>
            </div>
            <Button
              onClick={() => setShowPDFGenerator(true)}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2.5 px-5 w-full sm:w-auto"
              data-testid="button-download-pdf"
            >
              <Download className="mr-2" size={16} />
              Descargar PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div>
              {/* Month Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
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
                    data-testid={`button-month-${month}`}
                  >
                    <CalendarDays size={14} className="mr-1.5" />
                    Mes {month}
                  </Button>
                ))}
              </div>

              {/* Month Title */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Mes {selectedMonth}
                  <span className={`ml-2 text-sm font-medium ${levelColors[userData.stepsLevel]}`}>
                    Nivel {levelLabels[userData.stepsLevel]}
                  </span>
                </h3>
              </div>

              {/* Exercise Cards */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedMonth}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {currentExercises.map((exercise, index) => (
                    <motion.div key={`${selectedMonth}-${index}`} variants={item}>
                      <Card 
                        className="exercise-card bg-card border-border cursor-pointer group h-full"
                        onClick={() => setSelectedExercise(exercise)}
                      >
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary font-black text-sm flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                {exercise.name}
                              </h4>
                            </div>
                            <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                            {exercise.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-md text-xs font-medium text-foreground">
                              <Clock size={12} className="text-muted-foreground" />
                              {exercise.duration}
                            </span>
                            <span className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md text-xs font-medium text-primary">
                              <Zap size={12} />
                              {exercise.frequency}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar - Timer */}
            <div className="lg:sticky lg:top-6 lg:self-start">
              <ExerciseTimer />
            </div>
          </div>
        </div>
      </div>

      <ExerciseDetailModal 
        exercise={selectedExercise} 
        isOpen={!!selectedExercise} 
        onClose={() => setSelectedExercise(null)} 
      />

      {showPDFGenerator && (
        <PDFGenerator
          userData={userData}
          onClose={() => setShowPDFGenerator(false)}
        />
      )}
    </>
  );
}
