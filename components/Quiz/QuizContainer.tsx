'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuizQuestion, QuizAnswer } from '@/lib/types';
import { quizQuestions } from '@/data/questions';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { Button } from '@/components/ui/Button';

export const QuizContainer: React.FC = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuizAnswer>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  useEffect(() => {
    // Check if quiz is complete
    if (currentQuestionIndex >= quizQuestions.length) {
      setIsComplete(true);
      // Store answers in sessionStorage for results page
      sessionStorage.setItem('quizAnswers', JSON.stringify(answers));
      router.push('/results');
    }
  }, [currentQuestionIndex, answers, router]);

  const handleAnswer = (value: string | number | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        value,
      },
    }));
  };

  const handleNext = () => {
    if (currentAnswer && currentAnswer.value !== undefined && currentAnswer.value !== null && currentAnswer.value !== '') {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Last question - complete quiz
        setIsComplete(true);
        sessionStorage.setItem('quizAnswers', JSON.stringify({
          ...answers,
          [currentQuestion.id]: {
            questionId: currentQuestion.id,
            value: currentAnswer.value,
          },
        }));
        router.push('/results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const canProceed = currentAnswer && currentAnswer.value !== undefined && currentAnswer.value !== null && currentAnswer.value !== '';

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ProgressBar current={currentQuestionIndex + 1} total={quizQuestions.length} />
      
      <div className="mt-8">
        <QuestionCard
          question={currentQuestion}
          selectedValue={currentAnswer?.value}
          onAnswer={handleAnswer}
        />
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={!canProceed}
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next'}
        </Button>
      </div>
    </div>
  );
};
