import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Plus, Minus, RotateCcw, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const DAILY_GOAL = 8; // 8 glasses

const tips = [
  'Bebe un vaso de agua al despertar para activar tu metabolismo.',
  'Lleva siempre una botella de agua contigo durante el dia.',
  'Bebe agua antes de cada comida para ayudar a la digestion.',
  'Si sientes hambre entre comidas, primero bebe agua.',
  'Agrega limon o pepino al agua para darle sabor natural.',
  'Bebe un vaso de agua por cada taza de cafe que consumas.',
  'El agua fria puede ayudar a quemar calorias extra.',
  'Bebe mas agua en dias de ejercicio intenso.',
];

export function WaterTracker() {
  const [glasses, setGlasses] = useState(0);
  const percentage = Math.min((glasses / DAILY_GOAL) * 100, 100);

  const addGlass = () => setGlasses(prev => Math.min(prev + 1, 15));
  const removeGlass = () => setGlasses(prev => Math.max(prev - 1, 0));
  const reset = () => setGlasses(0);

  const tipIndex = glasses % tips.length;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-5xl font-black mb-2 text-foreground">
            Control de Hidratacion
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Lleva un seguimiento de tu consumo de agua diario
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Tracker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-card border-border h-full">
              <CardContent className="p-6 sm:p-8">
                {/* Water Visualization */}
                <div className="flex flex-col items-center">
                  {/* Water Glass */}
                  <div className="relative w-40 h-52 sm:w-48 sm:h-64 mb-6">
                    {/* Glass outline */}
                    <div className="absolute inset-0 rounded-b-3xl rounded-t-xl border-2 border-border overflow-hidden bg-muted/20">
                      {/* Water fill */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-primary/30 rounded-b-2xl"
                        animate={{ height: `${percentage}%` }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      >
                        {/* Wave effect */}
                        <div className="absolute top-0 left-0 right-0 h-3">
                          <svg viewBox="0 0 200 10" className="w-full h-full" preserveAspectRatio="none">
                            <path
                              d="M0,5 C30,0 70,10 100,5 C130,0 170,10 200,5 L200,10 L0,10 Z"
                              fill="hsl(172, 100%, 41%, 0.4)"
                            >
                              <animate
                                attributeName="d"
                                values="M0,5 C30,0 70,10 100,5 C130,0 170,10 200,5 L200,10 L0,10 Z;M0,5 C30,10 70,0 100,5 C130,10 170,0 200,5 L200,10 L0,10 Z;M0,5 C30,0 70,10 100,5 C130,0 170,10 200,5 L200,10 L0,10 Z"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </path>
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Percentage text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <span className="text-4xl sm:text-5xl font-black text-foreground">
                        {Math.round(percentage)}%
                      </span>
                      <span className="text-xs text-muted-foreground font-medium mt-1">
                        {glasses} de {DAILY_GOAL} vasos
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeGlass}
                      disabled={glasses === 0}
                      className="w-12 h-12 rounded-full bg-muted text-foreground hover:bg-muted/80 disabled:opacity-30"
                    >
                      <Minus size={20} />
                    </Button>

                    <Button
                      onClick={addGlass}
                      className="w-16 h-16 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                    >
                      <Plus size={28} />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={reset}
                      className="w-12 h-12 rounded-full bg-muted text-foreground hover:bg-muted/80"
                    >
                      <RotateCcw size={18} />
                    </Button>
                  </div>

                  {/* Quick Add */}
                  <div className="flex gap-2 mt-4">
                    {[1, 2, 3].map(n => (
                      <Button
                        key={n}
                        variant="ghost"
                        size="sm"
                        onClick={() => setGlasses(prev => Math.min(prev + n, 15))}
                        className="text-xs bg-muted/50 text-muted-foreground hover:text-foreground"
                      >
                        +{n} vaso{n > 1 ? 's' : ''}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {/* Progress */}
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={16} className="text-primary" />
                  <h4 className="text-sm font-bold text-foreground">Meta Diaria</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-bold text-foreground">{glasses}/{DAILY_GOAL}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {glasses >= DAILY_GOAL
                      ? 'Has alcanzado tu meta diaria. Excelente hidratacion!'
                      : `Te faltan ${DAILY_GOAL - glasses} vaso${DAILY_GOAL - glasses !== 1 ? 's' : ''} para completar tu meta.`
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Glass Grid */}
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h4 className="text-sm font-bold text-foreground mb-4">Vasos de Hoy</h4>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: DAILY_GOAL }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        scale: i < glasses ? 1 : 0.9,
                        opacity: i < glasses ? 1 : 0.3,
                      }}
                      className={`flex items-center justify-center h-14 rounded-xl transition-colors ${
                        i < glasses ? 'bg-primary/20' : 'bg-muted/50'
                      }`}
                    >
                      <Droplets
                        size={20}
                        className={i < glasses ? 'text-primary' : 'text-muted-foreground/40'}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tip */}
            <Card className="bg-card border-primary/20 glow-border">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <TrendingUp size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-1">Consejo de Hidratacion</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {tips[tipIndex]}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Benefits */}
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h4 className="text-sm font-bold text-foreground mb-3">Beneficios de la Hidratacion</h4>
                <div className="space-y-2">
                  {[
                    'Mejora la concentracion y energia mental',
                    'Regula la temperatura corporal',
                    'Ayuda a la digestion y absorcion de nutrientes',
                    'Mejora el rendimiento deportivo',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
