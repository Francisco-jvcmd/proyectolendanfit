import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Calendar, ChartLine, Heart, Target, Footprints, Dumbbell, Apple, TrendingUp, Flame, Droplets } from 'lucide-react';
import { UserData } from '@/types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DashboardProps {
  userData: UserData;
  onNavigate: (section: 'exercise-plan' | 'nutrition' | 'bmi-calculator' | 'water-tracker') => void;
}

const levelLabels = {
  basic: 'Basico',
  medium: 'Medio',
  advanced: 'Avanzado'
};

const healthLabels = {
  excellent: 'Excelente',
  average: 'Promedio',
  'needs-improvement': 'Necesita Mejoras'
};

const objectiveLabels = {
  'reduce-stress': 'Reducir el estres',
  'gain-muscle': 'Ganar masa muscular',
  'improve-resistance': 'Mejorar la resistencia',
  'lose-weight': 'Perder peso',
  'improve-flexibility': 'Mejorar flexibilidad',
  'general-health': 'Mejorar salud general'
};

const stepsLabels = {
  basic: 'Menos de 4,000',
  medium: '4,000 - 6,000',
  advanced: 'Mas de 6,000'
};

const levelProgress = {
  basic: 33,
  medium: 66,
  advanced: 100
};

const healthProgress = {
  excellent: 100,
  average: 66,
  'needs-improvement': 33
};

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 16);
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setDisplayed(end);
        clearInterval(timer);
      } else {
        setDisplayed(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{displayed}{suffix}</span>;
}

export function Dashboard({ userData, onNavigate }: DashboardProps) {
  const currentDate = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const bmi = userData.weight / ((userData.height / 100) ** 2);
  const bmiCategory = bmi < 18.5 ? 'Bajo peso' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Sobrepeso' : 'Obesidad';
  const bmiColor = bmi < 18.5 ? 'text-chart-3' : bmi < 25 ? 'text-primary' : bmi < 30 ? 'text-secondary' : 'text-destructive';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-black mb-2 text-foreground text-balance">
            Mi Dashboard
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg capitalize">{currentDate}</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-10"
        >
          {/* Age */}
          <motion.div variants={item}>
            <Card className="bg-card border-border stat-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <Calendar className="text-primary" size={16} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Edad</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-foreground" data-testid="text-age">
                  <AnimatedNumber value={userData.age} />
                </div>
                <span className="text-xs text-muted-foreground">anos</span>
              </CardContent>
            </Card>
          </motion.div>

          {/* BMI */}
          <motion.div variants={item}>
            <Card className="bg-card border-border stat-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <TrendingUp className="text-primary" size={16} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">IMC</span>
                </div>
                <div className={`text-3xl sm:text-4xl font-black ${bmiColor}`}>
                  {bmi.toFixed(1)}
                </div>
                <span className={`text-xs ${bmiColor}`}>{bmiCategory}</span>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Level */}
          <motion.div variants={item}>
            <Card className="bg-card border-border stat-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <ChartLine className="text-primary" size={16} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Nivel</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-foreground mb-2" data-testid="text-level">
                  {levelLabels[userData.stepsLevel]}
                </div>
                <Progress value={levelProgress[userData.stepsLevel]} className="h-1.5" />
              </CardContent>
            </Card>
          </motion.div>

          {/* Health */}
          <motion.div variants={item}>
            <Card className="bg-card border-border stat-card h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10">
                    <Heart className="text-secondary" size={16} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Salud</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-foreground mb-2" data-testid="text-health">
                  {healthLabels[userData.healthStatus]}
                </div>
                <Progress value={healthProgress[userData.healthStatus]} className="h-1.5" />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Detail Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-10"
        >
          <motion.div variants={item}>
            <Card className="bg-card border-border glow-border h-full">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Objetivo Principal</h3>
                    <p className="text-sm text-muted-foreground">Meta de entrenamiento</p>
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-black text-primary" data-testid="text-objective">
                  {objectiveLabels[userData.mainObjective]}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-card border-border glow-border h-full">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Footprints className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Pasos Diarios</h3>
                    <p className="text-sm text-muted-foreground">Actividad promedio</p>
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-black text-primary" data-testid="text-steps">
                  {stepsLabels[userData.stepsLevel]} pasos
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Body Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6 sm:mb-10"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">Estadisticas Corporales</h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3">
                    <span className="text-xl sm:text-2xl font-black text-primary">{userData.weight}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Peso (kg)</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/10 mb-3">
                    <span className="text-xl sm:text-2xl font-black text-secondary">{userData.height}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Altura (cm)</p>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full ${
                    bmi < 25 ? 'bg-primary/10' : 'bg-secondary/10'
                  } mb-3`}>
                    <span className={`text-xl sm:text-2xl font-black ${bmiColor}`}>{bmi.toFixed(1)}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">IMC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Acceso Rapido</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Button 
              onClick={() => onNavigate('exercise-plan')}
              className="h-auto flex flex-col items-center gap-3 p-5 sm:p-6 bg-card border border-border hover:border-primary/50 hover:bg-card/80 text-foreground transition-all duration-300"
              variant="ghost"
              data-testid="button-view-exercise-plan"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <Dumbbell className="text-primary" size={24} />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Plan de Ejercicio</span>
            </Button>

            <Button 
              onClick={() => onNavigate('nutrition')}
              className="h-auto flex flex-col items-center gap-3 p-5 sm:p-6 bg-card border border-border hover:border-secondary/50 hover:bg-card/80 text-foreground transition-all duration-300"
              variant="ghost"
              data-testid="button-view-nutrition-plan"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10">
                <Apple className="text-secondary" size={24} />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Plan Nutricional</span>
            </Button>

            <Button 
              onClick={() => onNavigate('bmi-calculator')}
              className="h-auto flex flex-col items-center gap-3 p-5 sm:p-6 bg-card border border-border hover:border-chart-3/50 hover:bg-card/80 text-foreground transition-all duration-300"
              variant="ghost"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-chart-3/10">
                <Flame className="text-chart-3" size={24} />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Calculadora IMC</span>
            </Button>

            <Button 
              onClick={() => onNavigate('water-tracker')}
              className="h-auto flex flex-col items-center gap-3 p-5 sm:p-6 bg-card border border-border hover:border-chart-2/50 hover:bg-card/80 text-foreground transition-all duration-300"
              variant="ghost"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-chart-2/10">
                <Droplets className="text-chart-2" size={24} />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Control de Agua</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
