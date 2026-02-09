import { QuizContainer } from '@/components/Quiz/QuizContainer';

export default function QuizPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Menopause Stage Assessment
          </h1>
          <p className="text-lg text-gray-600">
            Answer the following questions to help us understand your current stage
          </p>
        </div>
        <QuizContainer />
      </div>
    </div>
  );
}
