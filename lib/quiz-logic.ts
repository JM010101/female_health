import { MenopauseStage, QuizAnswer, QuizResult } from './types';
import { stageDefinitions } from '@/data/stages';

export function calculateMenopauseStage(answers: Record<string, QuizAnswer>): QuizResult {
  const age = answers.age?.value as string;
  const cycleStatus = answers['cycle-status']?.value as string;
  const cycleChanges = answers['cycle-changes']?.value as string;
  const hotFlashes = answers['hot-flashes']?.value as string;
  const sleepQuality = answers['sleep-quality']?.value as string;
  const moodChanges = answers['mood-changes']?.value as string;
  const vaginalDryness = answers['vaginal-dryness']?.value as string;

  let stage: MenopauseStage = 'pre-menopause';
  let confidence = 0;
  let score = 0;

  // Age-based scoring
  if (age === 'under-35') {
    score += 0;
  } else if (age === '35-40') {
    score += 1;
  } else if (age === '41-45') {
    score += 3;
  } else if (age === '46-50') {
    score += 5;
  } else if (age === '51-55') {
    score += 7;
  } else if (age === '56-60') {
    score += 8;
  } else if (age === 'over-60') {
    score += 9;
  }

  // Cycle status is the strongest indicator
  if (cycleStatus === 'regular') {
    score -= 2;
  } else if (cycleStatus === 'irregular') {
    score += 4;
  } else if (cycleStatus === 'missed') {
    score += 7;
  } else if (cycleStatus === 'none') {
    score += 10;
  } else if (cycleStatus === 'medical') {
    // Medical reasons need special handling - assume post-menopause if over 50
    if (age === '51-55' || age === '56-60' || age === 'over-60') {
      score += 9;
    } else {
      score += 5;
    }
  }

  // Cycle changes
  if (cycleChanges === 'none') {
    score -= 1;
  } else if (cycleChanges === 'slight') {
    score += 2;
  } else if (cycleChanges === 'moderate') {
    score += 4;
  } else if (cycleChanges === 'significant') {
    score += 6;
  }

  // Hot flashes
  if (hotFlashes === 'never') {
    score += 0;
  } else if (hotFlashes === 'rarely') {
    score += 2;
  } else if (hotFlashes === 'occasionally') {
    score += 3;
  } else if (hotFlashes === 'frequently') {
    score += 4;
  } else if (hotFlashes === 'daily') {
    score += 5;
  }

  // Sleep quality
  if (sleepQuality === 'excellent' || sleepQuality === 'good') {
    score += 0;
  } else if (sleepQuality === 'fair') {
    score += 1;
  } else if (sleepQuality === 'poor' || sleepQuality === 'very-poor') {
    score += 2;
  }

  // Mood changes
  if (moodChanges === 'none') {
    score += 0;
  } else if (moodChanges === 'mild') {
    score += 1;
  } else if (moodChanges === 'moderate') {
    score += 2;
  } else if (moodChanges === 'severe') {
    score += 3;
  }

  // Vaginal dryness
  if (vaginalDryness === 'never' || vaginalDryness === 'rarely') {
    score += 0;
  } else if (vaginalDryness === 'sometimes') {
    score += 1;
  } else if (vaginalDryness === 'often' || vaginalDryness === 'always') {
    score += 2;
  }

  // Determine stage based on score
  if (cycleStatus === 'none' && age !== 'under-35' && age !== '35-40') {
    // 12+ months without period = menopause or post-menopause
    if (age === 'over-60' || age === '56-60') {
      stage = 'post-menopause';
      confidence = 0.9;
    } else {
      stage = 'menopause';
      confidence = 0.85;
    }
  } else if (score <= 5) {
    stage = 'pre-menopause';
    confidence = Math.min(0.7 + (5 - score) * 0.05, 0.9);
  } else if (score <= 12) {
    stage = 'perimenopause';
    confidence = Math.min(0.65 + (score - 5) * 0.02, 0.85);
  } else if (score <= 20) {
    stage = 'menopause';
    confidence = Math.min(0.7 + (score - 12) * 0.015, 0.9);
  } else {
    stage = 'post-menopause';
    confidence = Math.min(0.75 + (score - 20) * 0.01, 0.95);
  }

  // Age-based override for very young users
  if (age === 'under-35' && stage !== 'pre-menopause') {
    stage = 'pre-menopause';
    confidence = 0.8;
  }

  // Age-based override for older users
  if ((age === '56-60' || age === 'over-60') && stage === 'pre-menopause') {
    stage = 'post-menopause';
    confidence = 0.85;
  }

  const stageDefinition = stageDefinitions[stage];
  
  const summary = `Based on your responses, you appear to be in the ${stageDefinition.name} stage. ${stageDefinition.description}`;

  return {
    stage,
    confidence: Math.round(confidence * 100) / 100,
    stageDefinition,
    summary,
  };
}
