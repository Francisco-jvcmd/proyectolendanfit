export interface UserData {
  age: number;
  weight: number;
  height: number;
  stepsLevel: 'basic' | 'medium' | 'advanced';
  healthStatus: 'excellent' | 'average' | 'needs-improvement';
  mainObjective: 'reduce-stress' | 'gain-muscle' | 'improve-resistance' | 'lose-weight' | 'improve-flexibility' | 'general-health';
}

export interface ExerciseStep {
  step: number;
  instruction: string;
  duration?: string;
  tip?: string;
}

export interface Exercise {
  name: string;
  description: string;
  duration: string;
  frequency: string;
  muscleGroup: string;
  sets: number;
  reps: string;
  restBetweenSets: string;
  tempoSeconds: string;
  difficulty: 'facil' | 'moderado' | 'intenso';
  steps: ExerciseStep[];
  benefits: string[];
  commonMistakes: string[];
}

export interface NutritionRecommendation {
  type: string;
  amount: string;
  details: string;
}

export interface NutritionMonth {
  title: string;
  recommendations: NutritionRecommendation[];
}

export type ExerciseLevel = 'basic' | 'medium' | 'advanced';
export type ExerciseData = Record<ExerciseLevel, Record<number, Exercise[]>>;
export type NutritionData = Record<number, NutritionMonth>;
