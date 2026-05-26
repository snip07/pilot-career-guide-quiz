// Core types for the Pilot Career Roadmap Builder

export interface Path {
  id: string;
  name: string;
  description: string;
  why_it_fits: string;
  estimated_timeline: string;
  next_steps: string[];
}

export type QuestionType = 'multiple_choice' | 'this_or_that';

export interface Question {
  id: string;
  question_text: string;
  question_type: QuestionType;
  order_index: number;
}

export interface Answer {
  id: string;
  question_id: string;
  answer_text: string;
  path_delta: Record<string, number>;
}

export interface PathMatch {
  path: Path;
  score: number;
}
