import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Utensils, CalendarDays, ChevronRight, Leaf, Drumstick, Wheat, Droplets, Apple } from 'lucide-react';
import { nutritionData } from '@/data/nutritionData';
import { NutritionRecommendation } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

const foodIcons: Record<string, React.ReactNode> = {
  'Vegetales': <Leaf size={18} className="text-chart-4" />,
  'Proteínas': <Drumstick size={18} className="text-secondary" />,
  'Proteína Completa': <Drumstick size={18} className="text-secondary" />,
  'Carbohidratos Complejos': <Wheat size={18} className="text-chart-3" />,
  'Carbohidratos de Calidad': <Wheat size={18} className="text-chart-3" />,
  'Grasas Saludables': <Droplets size={18} className="text-primary" />,
  'Agua': <Droplets size={18} className="text-primary" />,
  'Electrolitos': <Droplets size={18} className="text-chart-2" />,
  'Antioxidantes': <Apple size={18} className="text-secondary" />,
};

function getFoodIcon(type: string) {
  for (const [key, icon] of Object.entries(foodIcons)) {
    if (type.includes(key)) return icon;
  }
  return <Utensils size={18} className="text-primary" />;
}

export function NutritionPlan() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedItem, setSelectedItem] = useState<NutritionRecommendation | null>(null);

  const currentNutrition = nutritionData[selectedMonth] || nutritionData[1];

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
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-5xl font-black mb-2 text-foreground">
              Plan Nutricional
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Recomendaciones alimentarias personalizadas mes a mes
            </p>
          </motion.div>

          {/* Month Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                variant="ghost"
                className={`flex-shrink-0 font-bold text-sm px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedMonth === month 
                    ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20' 
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
                data-testid={`button-nutrition-month-${month}`}
              >
                <CalendarDays size={14} className="mr-1.5" />
                Mes {month}
              </Button>
            ))}
          </div>

          {/* Month Title */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Utensils size={20} className="text-secondary" />
              {currentNutrition.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Haz clic en cada recomendacion para ver detalles completos
            </p>
          </div>

          {/* Nutrition Cards */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedMonth}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {currentNutrition.recommendations.map((rec, index) => (
                <motion.div key={`${selectedMonth}-${index}`} variants={item}>
                  <Card 
                    className="nutrition-card bg-card border-border group h-full"
                    onClick={() => setSelectedItem(rec)}
                    data-testid={`card-nutrition-${index}`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted flex-shrink-0">
                          {getFoodIcon(rec.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm sm:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                              {rec.type}
                            </h4>
                            <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                          </div>
                          <p className="text-primary font-semibold text-xs sm:text-sm mt-1">{rec.amount}</p>
                          <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                            {rec.details.substring(0, 80)}...
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Tip Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-card border-primary/20 glow-border">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0">
                    <Leaf className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1">Consejo del Mes {selectedMonth}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedMonth <= 2
                        ? 'Comienza con cambios pequenos. Agrega una porcion extra de vegetales a cada comida y bebe un vaso de agua antes de comer.'
                        : selectedMonth <= 4
                        ? 'Tu cuerpo ya se esta adaptando. Es momento de ser mas consciente del timing de tus comidas alrededor del ejercicio.'
                        : 'Has recorrido un gran camino. Ahora enfocate en mantener estos habitos saludables a largo plazo y escuchar tu cuerpo.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-card border-border max-w-lg w-[calc(100vw-2rem)] sm:w-full max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold text-foreground flex items-center gap-3">
              {selectedItem && getFoodIcon(selectedItem.type)}
              {selectedItem?.type}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="inline-flex items-center bg-primary/10 rounded-lg px-3 py-2">
              <span className="text-sm font-bold text-primary">{selectedItem?.amount}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {selectedItem?.details}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
