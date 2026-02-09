'use client';

import React from 'react';
import { QuizQuestion, QuestionOption } from '@/lib/types';
import { Card } from '@/components/ui/Card';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedValue?: string | number | string[];
  onAnswer: (value: string | number | string[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedValue,
  onAnswer,
}) => {
  const handleOptionClick = (value: string | number) => {
    if (question.type === 'multiple') {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      const newValues = currentValues.includes(String(value))
        ? currentValues.filter(v => v !== String(value))
        : [...currentValues, String(value)];
      onAnswer(newValues);
    } else {
      onAnswer(value);
    }
  };

  const isSelected = (value: string | number) => {
    if (question.type === 'multiple') {
      return Array.isArray(selectedValue) && selectedValue.includes(String(value));
    }
    return selectedValue === value || String(selectedValue) === String(value);
  };

  return (
    <Card className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h2>
      
      {question.options && (
        <div className="space-y-3">
          {question.options.map((option: QuestionOption) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                isSelected(option.value)
                  ? 'border-primary-600 bg-primary-50 text-primary-900'
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    isSelected(option.value)
                      ? 'border-primary-600 bg-primary-600'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected(option.value) && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-base">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </Card>
  );
};
