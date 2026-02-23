export interface UserData {
  age: number;
  weight: number;
  height: number;
  stepsLevel: 'basic' | 'medium' | 'advanced';
  healthStatus: 'excellent' | 'average' | 'needs-improvement';
  mainObjective: 'reduce-stress' | 'gain-muscle' | 'improve-resistance' | 'lose-weight' | 'improve-flexibility' | 'general-health';
}

export interface Exercise {
  name: string;
  description: string;
  duration: string;
  frequency: string;
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
