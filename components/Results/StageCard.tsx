'use client';

import React from 'react';
import { StageDefinition } from '@/lib/types';
import { Card } from '@/components/ui/Card';

interface StageCardProps {
  stage: StageDefinition;
  confidence: number;
}

export const StageCard: React.FC<StageCardProps> = ({ stage, confidence }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    purple: 'bg-purple-50 border-purple-200',
    pink: 'bg-pink-50 border-pink-200',
    rose: 'bg-rose-50 border-rose-200',
  };

  return (
    <Card className={`border-2 ${colorClasses[stage.color as keyof typeof colorClasses] || 'bg-gray-50 border-gray-200'}`}>
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">{stage.icon}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{stage.name}</h2>
        <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600">
          {Math.round(confidence * 100)}% Confidence
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">{stage.description}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What This Means:</h3>
          <ul className="space-y-2">
            {stage.guidance.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
