import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, User, Footprints, Heart, Target, Ruler, Weight } from 'lucide-react';
import { UserData } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionnaireProps {
  onComplete: (data: UserData) => void;
}

const TOTAL_STEPS = 5;

export function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserData>>({});
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (formData.age && formData.weight && formData.height && formData.stepsLevel && formData.healthStatus && formData.mainObjective) {
      onComplete(formData as UserData);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.age && formData.age > 0;
      case 2: return formData.weight && formData.weight > 0 && formData.height && formData.height > 0;
      case 3: return !!formData.stepsLevel;
      case 4: return !!formData.healthStatus;
      case 5: return !!formData.mainObjective;
      default: return false;
    }
  };

  const stepIcons = [
    { icon: User, label: 'Edad' },
    { icon: Ruler, label: 'Medidas' },
    { icon: Footprints, label: 'Actividad' },
    { icon: Heart, label: 'Salud' },
    { icon: Target, label: 'Objetivo' },
  ];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-black mb-3 text-foreground text-balance">
            Crea Tu Plan Personalizado
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Responde estas preguntas para generar tu plan de 6 meses
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {stepIcons.map((s, i) => {
            const Icon = s.icon;
            const stepNum = i + 1;
            const isActive = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <div key={i} className="flex items-center gap-1 sm:gap-2">
                <div className={`flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30' 
                    : isCompleted 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon size={16} className="sm:w-5 sm:h-5" />
                </div>
                {i < stepIcons.length - 1 && (
                  <div className={`w-6 sm:w-10 h-0.5 transition-all duration-300 ${
                    isCompleted ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step Label */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Paso {step} de {TOTAL_STEPS} - {stepIcons[step - 1].label}
          </span>
        </div>

        {/* Card */}
        <Card className="bg-card border-border shadow-2xl shadow-background/50 overflow-hidden">
          <CardContent className="p-6 sm:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Step 1: Age */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <User className="text-primary" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{"?`Cual es tu edad?"}</h3>
                      <p className="text-muted-foreground text-sm mt-2">Esto nos ayuda a personalizar tu plan</p>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <Input
                        type="number"
                        min="13"
                        max="100"
                        placeholder="Ej: 25"
                        className="bg-muted border-border text-foreground text-center text-2xl font-bold py-6 h-auto"
                        value={formData.age || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) || undefined }))}
                        required
                        data-testid="input-age"
                      />
                      <p className="text-center text-muted-foreground text-xs mt-3">Entre 13 y 100 anos</p>
                    </div>
                  </div>
                )}

                {/* Step 2: Weight and Height */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Ruler className="text-primary" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">Tus Medidas</h3>
                      <p className="text-muted-foreground text-sm mt-2">Para calcular tu IMC y personalizar tu plan</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                          <Weight size={14} /> Peso (kg)
                        </Label>
                        <Input
                          type="number"
                          min="30"
                          max="300"
                          placeholder="70"
                          className="bg-muted border-border text-foreground text-center text-xl font-bold py-4 h-auto"
                          value={formData.weight || ''}
                          onChange={(e) => setFormData(prev => ({ ...prev, weight: parseFloat(e.target.value) || undefined }))}
                          data-testid="input-weight"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                          <Ruler size={14} /> Altura (cm)
                        </Label>
                        <Input
                          type="number"
                          min="100"
                          max="250"
                          placeholder="170"
                          className="bg-muted border-border text-foreground text-center text-xl font-bold py-4 h-auto"
                          value={formData.height || ''}
                          onChange={(e) => setFormData(prev => ({ ...prev, height: parseFloat(e.target.value) || undefined }))}
                          data-testid="input-height"
                        />
                      </div>
                    </div>
                    {formData.weight && formData.height && (
                      <div className="text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                          <span className="text-sm text-muted-foreground">Tu IMC:</span>
                          <span className="text-lg font-bold text-primary">
                            {(formData.weight / ((formData.height / 100) ** 2)).toFixed(1)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Steps Level */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Footprints className="text-primary" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{"?`Cuantos pasos das diariamente?"}</h3>
                    </div>
                    <RadioGroup
                      value={formData.stepsLevel}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, stepsLevel: value as UserData['stepsLevel'] }))}
                      className="space-y-3"
                    >
                      {[
                        { value: 'basic', title: 'Menos de 4,000 pasos', subtitle: 'Nivel Basico - Estilo de vida sedentario', color: 'bg-secondary/10 border-secondary/30 hover:border-secondary/60' },
                        { value: 'medium', title: '4,000 - 6,000 pasos', subtitle: 'Nivel Medio - Actividad moderada', color: 'bg-chart-3/10 border-chart-3/30 hover:border-chart-3/60' },
                        { value: 'advanced', title: 'Mas de 6,000 pasos', subtitle: 'Nivel Avanzado - Persona activa', color: 'bg-primary/10 border-primary/30 hover:border-primary/60' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            formData.stepsLevel === option.value
                              ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                              : `${option.color} bg-muted/50`
                          }`}
                        >
                          <RadioGroupItem value={option.value} data-testid={`radio-steps-${option.value}`} />
                          <div className="flex-1">
                            <div className="font-semibold text-sm sm:text-base text-foreground">{option.title}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">{option.subtitle}</div>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Step 4: Health Status */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Heart className="text-primary" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{"?`Como describes tu estado de salud?"}</h3>
                    </div>
                    <RadioGroup
                      value={formData.healthStatus}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, healthStatus: value as UserData['healthStatus'] }))}
                      className="space-y-3"
                    >
                      {[
                        { value: 'excellent', title: 'Excelente', subtitle: 'Sin limitaciones de salud', icon: '10' },
                        { value: 'average', title: 'Promedio', subtitle: 'Algunas molestias menores', icon: '7' },
                        { value: 'needs-improvement', title: 'Necesita Mejoras', subtitle: 'Problemas de salud a considerar', icon: '4' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            formData.healthStatus === option.value
                              ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                              : 'bg-muted/50 border-border hover:border-primary/40'
                          }`}
                        >
                          <RadioGroupItem value={option.value} data-testid={`radio-health-${option.value}`} />
                          <div className="flex-1">
                            <div className="font-semibold text-sm sm:text-base text-foreground">{option.title}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">{option.subtitle}</div>
                          </div>
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <span className="text-sm font-bold text-primary">{option.icon}</span>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Step 5: Main Objective */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Target className="text-primary" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{"?`Cual es tu objetivo principal?"}</h3>
                    </div>
                    <RadioGroup
                      value={formData.mainObjective}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, mainObjective: value as UserData['mainObjective'] }))}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {[
                        { value: 'reduce-stress', label: 'Reducir el estres' },
                        { value: 'gain-muscle', label: 'Ganar masa muscular' },
                        { value: 'improve-resistance', label: 'Mejorar la resistencia' },
                        { value: 'lose-weight', label: 'Perder peso' },
                        { value: 'improve-flexibility', label: 'Mejorar flexibilidad' },
                        { value: 'general-health', label: 'Mejorar salud general' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            formData.mainObjective === option.value
                              ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                              : 'bg-muted/50 border-border hover:border-primary/40'
                          }`}
                        >
                          <RadioGroupItem value={option.value} data-testid={`radio-objective-${option.value}`} />
                          <span className="font-medium text-sm text-foreground">{option.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Atras
                </Button>
              ) : (
                <div />
              )}

              {step < TOTAL_STEPS ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-8"
                  data-testid="button-next-step"
                >
                  Siguiente
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-8"
                  data-testid="button-submit-questionnaire"
                >
                  Generar Mi Plan
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
