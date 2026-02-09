export type MenopauseStage = 
  | 'pre-menopause'
  | 'perimenopause'
  | 'menopause'
  | 'post-menopause';

export interface QuestionOption {
  id: string;
  label: string;
  value: string | number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'range' | 'text';
  options?: QuestionOption[];
  required: boolean;
  category: 'age' | 'cycle' | 'symptoms' | 'mood' | 'sleep' | 'other';
}

export interface QuizAnswer {
  questionId: string;
  value: string | number | string[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, QuizAnswer>;
  isComplete: boolean;
}

export interface StageDefinition {
  id: MenopauseStage;
  name: string;
  description: string;
  guidance: string[];
  recommendations: string[];
  color: string;
  icon: string;
}

export interface QuizResult {
  stage: MenopauseStage;
  confidence: number;
  stageDefinition: StageDefinition;
  summary: string;
}

export interface EmailData {
  email: string;
  stage: MenopauseStage;
  summary: string;
  recommendations: string[];
}
