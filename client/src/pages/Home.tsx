import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Questionnaire } from '@/components/Questionnaire';
import { Dashboard } from '@/components/Dashboard';
import { ExercisePlan } from '@/components/ExercisePlan';
import { NutritionPlan } from '@/components/NutritionPlan';
import { BMICalculator } from '@/components/BMICalculator';
import { WaterTracker } from '@/components/WaterTracker';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home as HomeIcon, User, Dumbbell, Apple, Calculator, Droplets } from 'lucide-react';
import { useUserData } from '@/hooks/useUserData';
import { UserData } from '@/types';

type Section = 'questionnaire' | 'dashboard' | 'exercise-plan' | 'nutrition' | 'bmi-calculator' | 'water-tracker';

const navigationItems = [
  { id: 'questionnaire' as Section, label: 'Inicio', icon: HomeIcon },
  { id: 'dashboard' as Section, label: 'Mi Perfil', icon: User },
  { id: 'exercise-plan' as Section, label: 'Ejercicio', icon: Dumbbell },
  { id: 'nutrition' as Section, label: 'Nutricion', icon: Apple },
  { id: 'bmi-calculator' as Section, label: 'IMC', icon: Calculator },
  { id: 'water-tracker' as Section, label: 'Agua', icon: Droplets },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('questionnaire');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userData, setUserData } = useUserData();
  const [hasCompletedQuestionnaire, setHasCompletedQuestionnaire] = useState(false);

  const handleQuestionnaireComplete = (data: UserData) => {
    setUserData(data);
    setHasCompletedQuestionnaire(true);
    setCurrentSection('dashboard');
  };

  const handleNavigate = (section: Section) => {
    if (section === 'questionnaire' || hasCompletedQuestionnaire) {
      setCurrentSection(section);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                const isDisabled = item.id !== 'questionnaire' && !hasCompletedQuestionnaire;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavigate(item.id)}
                    disabled={isDisabled}
                    className={`text-sm font-medium px-3 py-2 gap-1.5 transition-all duration-200 ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : isDisabled
                        ? 'text-muted-foreground/40 cursor-not-allowed'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    data-testid={`button-nav-${item.id}`}
                  >
                    <Icon size={16} />
                    <span className="hidden xl:inline">{item.label}</span>
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-muted-foreground hover:text-foreground"
                  data-testid="button-mobile-menu"
                  aria-label="Open navigation menu"
                >
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border w-72">
                <div className="flex flex-col gap-1 mt-8">
                  <div className="px-3 mb-4">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Navegacion</h3>
                  </div>
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentSection === item.id;
                    const isDisabled = item.id !== 'questionnaire' && !hasCompletedQuestionnaire;
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => handleNavigate(item.id)}
                        disabled={isDisabled}
                        className={`justify-start gap-3 w-full py-3 px-4 text-sm font-medium rounded-xl ${
                          isActive 
                            ? 'bg-primary/10 text-primary' 
                            : isDisabled
                            ? 'text-muted-foreground/40'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        data-testid={`mobile-button-nav-${item.id}`}
                      >
                        <Icon size={18} />
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {currentSection === 'questionnaire' && (
          <Questionnaire onComplete={handleQuestionnaireComplete} />
        )}

        {currentSection === 'dashboard' && (
          <Dashboard userData={userData} onNavigate={handleNavigate} />
        )}

        {currentSection === 'exercise-plan' && (
          <ExercisePlan userData={userData} />
        )}

        {currentSection === 'nutrition' && (
          <NutritionPlan />
        )}

        {currentSection === 'bmi-calculator' && (
          <BMICalculator userData={userData} />
        )}

        {currentSection === 'water-tracker' && (
          <WaterTracker />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Dumbbell size={16} className="text-primary" />
              <span className="text-sm font-bold text-foreground">Lendanfit</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Tu plan personalizado de ejercicio y nutricion. Sin registro necesario.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      {hasCompletedQuestionnaire && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-xl border-t border-border safe-area-bottom" aria-label="Bottom navigation">
          <div className="flex items-center justify-around py-2 px-2">
            {navigationItems.slice(1).map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
