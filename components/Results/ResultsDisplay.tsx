'use client';

import React, { useState } from 'react';
import { QuizResult } from '@/lib/types';
import { StageCard } from './StageCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface ResultsDisplayProps {
  result: QuizResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendEmail = async () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setEmailError('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          stage: result.stage,
          summary: result.summary,
          recommendations: result.stageDefinition.recommendations,
        }),
      });

      if (response.ok) {
        setEmailSent(true);
        setEmail('');
      } else {
        setEmailError('Failed to send email. Please try again.');
      }
    } catch (error) {
      setEmailError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Assessment Results</h1>
        <p className="text-lg text-gray-600">Based on your responses, here's what we found</p>
      </div>

      <StageCard stage={result.stageDefinition} confidence={result.confidence} />

      <Card>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recommendations</h3>
        <ul className="space-y-3">
          {result.stageDefinition.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-3 font-bold">{index + 1}.</span>
              <span className="text-gray-700 flex-1">{rec}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-gradient-to-r from-primary-50 to-pink-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Your Results by Email</h3>
        <p className="text-gray-600 mb-4">
          Enter your email address to receive a summary of your results and recommendations.
        </p>
        
        {!emailSent ? (
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                error={emailError}
              />
            </div>
            <Button
              variant="primary"
              onClick={handleSendEmail}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Results'}
            </Button>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium">
              ✓ Email sent successfully! Check your inbox for your results summary.
            </p>
          </div>
        )}
      </Card>

      <div className="text-center pt-4">
        <Button
          variant="outline"
          onClick={() => window.location.href = '/'}
        >
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};
