'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuizAnswer, QuizResult } from '@/lib/types';
import { calculateMenopauseStage } from '@/lib/quiz-logic';
import { ResultsDisplay } from '@/components/Results/ResultsDisplay';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get answers from sessionStorage
    const storedAnswers = sessionStorage.getItem('quizAnswers');
    
    if (!storedAnswers) {
      // No answers found, redirect to quiz
      router.push('/quiz');
      return;
    }

    try {
      const answers: Record<string, QuizAnswer> = JSON.parse(storedAnswers);
      const quizResult = calculateMenopauseStage(answers);
      setResult(quizResult);
    } catch (error) {
      console.error('Error processing quiz results:', error);
      router.push('/quiz');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your results...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="min-h-screen py-8">
      <ResultsDisplay result={result} />
    </div>
  );
}
