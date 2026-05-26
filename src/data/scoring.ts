import { Path, PathMatch, Answer } from './types';
import { paths } from './paths';

export type PathScores = Record<string, number>;

export function initializePathScores(): PathScores {
  const scores: PathScores = {};
  paths.forEach(path => {
    scores[path.id] = 0;
  });
  return scores;
}

export function applyAnswerDelta(
  currentScores: PathScores,
  answer: Answer
): PathScores {
  const newScores = { ...currentScores };
  
  for (const [pathId, delta] of Object.entries(answer.path_delta)) {
    if (newScores[pathId] !== undefined) {
      newScores[pathId] += delta;
    }
  }
  
  return newScores;
}

export function calculatePathResults(scores: PathScores): PathMatch[] {
  const matches: PathMatch[] = paths.map(path => ({
    path,
    score: scores[path.id] || 0
  }));
  
  return matches.sort((a, b) => b.score - a.score);
}

export function getPathById(id: string): Path | undefined {
  return paths.find(path => path.id === id);
}
