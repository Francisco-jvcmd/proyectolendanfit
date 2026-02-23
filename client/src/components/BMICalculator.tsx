import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, ArrowRight, Info } from 'lucide-react';
import { UserData } from '@/types';
import { motion } from 'framer-motion';

interface BMICalculatorProps {
  userData: UserData;
}

interface BMICategory {
  label: string;
  range: string;
  color: string;
  bgColor: string;
  description: string;
}

const bmiCategories: BMICategory[] = [
  { label: 'Bajo peso', range: '< 18.5', color: 'text-chart-3', bgColor: 'bg-chart-3/10', description: 'Puede indicar desnutricion o trastornos alimenticios. Consulta a un profesional de salud.' },
  { label: 'Normal', range: '18.5 - 24.9', color: 'text-primary', bgColor: 'bg-primary/10', description: 'Tu peso esta en un rango saludable. Manten una dieta equilibrada y ejercicio regular.' },
  { label: 'Sobrepeso', range: '25 - 29.9', color: 'text-secondary', bgColor: 'bg-secondary/10', description: 'Ligero exceso de peso. Considera ajustar tu dieta y aumentar la actividad fisica.' },
  { label: 'Obesidad I', range: '30 - 34.9', color: 'text-destructive', bgColor: 'bg-destructive/10', description: 'Obesidad grado I. Se recomienda consultar con un profesional de salud para un plan personalizado.' },
  { label: 'Obesidad II', range: '35 - 39.9', color: 'text-destructive', bgColor: 'bg-destructive/10', description: 'Obesidad grado II. Es importante buscar orientacion medica y nutricional.' },
  { label: 'Obesidad III', range: '>= 40', color: 'text-destructive', bgColor: 'bg-destructive/10', description: 'Obesidad grado III. Consulta inmediatamente con un profesional de salud.' },
];

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return bmiCategories[0];
  if (bmi < 25) return bmiCategories[1];
  if (bmi < 30) return bmiCategories[2];
  if (bmi < 35) return bmiCategories[3];
  if (bmi < 40) return bmiCategories[4];
  return bmiCategories[5];
}

export function BMICalculator({ userData }: BMICalculatorProps) {
  const [weight, setWeight] = useState(userData.weight);
  const [height, setHeight] = useState(userData.height);
  const [calculated, setCalculated] = useState(true);

  const bmi = weight && height ? weight / ((height / 100) ** 2) : 0;
  const category = getBMICategory(bmi);

  const idealWeightLow = 18.5 * ((height / 100) ** 2);
  const idealWeightHigh = 24.9 * ((height / 100) ** 2);

  // Position indicator on the bar (0-100%)
  const bmiPosition = Math.min(Math.max(((bmi - 15) / (45 - 15)) * 100, 0), 100);

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
            Calculadora de IMC
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Calcula tu Indice de Masa Corporal y conoce tu rango saludable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-card border-border h-full">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                    <Calculator className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Ingresa tus datos</h3>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-muted-foreground">Peso (kg)</Label>
                    <Input
                      type="number"
                      min="30"
                      max="300"
                      value={weight || ''}
                      onChange={(e) => { setWeight(parseFloat(e.target.value) || 0); setCalculated(true); }}
                      className="bg-muted border-border text-foreground text-lg font-bold h-12"
                      placeholder="70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-muted-foreground">Altura (cm)</Label>
                    <Input
                      type="number"
                      min="100"
                      max="250"
                      value={height || ''}
                      onChange={(e) => { setHeight(parseFloat(e.target.value) || 0); setCalculated(true); }}
                      className="bg-muted border-border text-foreground text-lg font-bold h-12"
                      placeholder="170"
                    />
                  </div>

                  {calculated && bmi > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center pt-4"
                    >
                      <p className="text-sm text-muted-foreground mb-1">Tu IMC</p>
                      <div className={`text-5xl sm:text-6xl font-black ${category.color}`}>
                        {bmi.toFixed(1)}
                      </div>
                      <div className={`inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full ${category.bgColor}`}>
                        <span className={`text-sm font-bold ${category.color}`}>{category.label}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {/* BMI Scale */}
            {bmi > 0 && (
              <Card className="bg-card border-border">
                <CardContent className="p-5 sm:p-6">
                  <h4 className="text-sm font-bold text-foreground mb-4">Escala de IMC</h4>
                  
                  {/* Visual scale */}
                  <div className="relative mb-6">
                    <div className="flex h-3 rounded-full overflow-hidden">
                      <div className="flex-1 bg-chart-3/60" />
                      <div className="flex-[2] bg-primary/60" />
                      <div className="flex-1 bg-secondary/60" />
                      <div className="flex-1 bg-destructive/60" />
                    </div>
                    {/* Indicator */}
                    <div 
                      className="absolute top-0 -translate-x-1/2 -translate-y-2"
                      style={{ left: `${bmiPosition}%` }}
                    >
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground" />
                    </div>
                    {/* Labels */}
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] text-chart-3">15</span>
                      <span className="text-[10px] text-muted-foreground">18.5</span>
                      <span className="text-[10px] text-muted-foreground">25</span>
                      <span className="text-[10px] text-muted-foreground">30</span>
                      <span className="text-[10px] text-destructive">45</span>
                    </div>
                  </div>

                  {/* Ideal Weight */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={14} className="text-primary" />
                      <span className="text-xs font-bold text-foreground">Peso Ideal para tu Altura</span>
                    </div>
                    <p className="text-lg sm:text-xl font-black text-primary">
                      {idealWeightLow.toFixed(1)} - {idealWeightHigh.toFixed(1)} kg
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Basado en tu altura de {height} cm
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Categories */}
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h4 className="text-sm font-bold text-foreground mb-4">Categorias de IMC</h4>
                <div className="space-y-2">
                  {bmiCategories.slice(0, 4).map((cat, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                        bmi > 0 && cat.label === category.label
                          ? `${cat.bgColor} border border-current/20`
                          : 'bg-muted/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          cat.color === 'text-primary' ? 'bg-primary' :
                          cat.color === 'text-chart-3' ? 'bg-chart-3' :
                          cat.color === 'text-secondary' ? 'bg-secondary' : 'bg-destructive'
                        }`} />
                        <span className={`text-sm font-medium ${
                          bmi > 0 && cat.label === category.label ? cat.color : 'text-muted-foreground'
                        }`}>
                          {cat.label}
                        </span>
                      </div>
                      <span className={`text-xs font-mono ${
                        bmi > 0 && cat.label === category.label ? cat.color : 'text-muted-foreground'
                      }`}>
                        {cat.range}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendation */}
            {bmi > 0 && (
              <Card className={`border ${category.bgColor} border-current/10`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Info size={18} className={category.color} />
                    <div>
                      <h4 className={`text-sm font-bold ${category.color} mb-1`}>Recomendacion</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
