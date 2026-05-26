import { Question, Answer } from './types';

export const questions: Question[] = [
  { id: 'q1_goal', question_text: 'What is your long-term goal as a pilot?', question_type: 'multiple_choice', order_index: 1 },
  { id: 'q2_time', question_text: 'How much time can you realistically dedicate to flight training?', question_type: 'multiple_choice', order_index: 2 },
  { id: 'q3_speed', question_text: 'How important is completing training as quickly as possible?', question_type: 'multiple_choice', order_index: 3 },
  { id: 'q4_relocate', question_text: 'Are you able and willing to relocate for training?', question_type: 'multiple_choice', order_index: 4 },
  { id: 'q5_obligations', question_text: 'Do you have work or family obligations that limit flexibility?', question_type: 'multiple_choice', order_index: 5 },
  { id: 'q6_style', question_text: 'Which training style do you prefer?', question_type: 'this_or_that', order_index: 6 },
  { id: 'q7_degree', question_text: 'Do you currently have or want to earn a college degree?', question_type: 'multiple_choice', order_index: 7 },
  { id: 'q8_funding', question_text: 'How do you plan to fund your flight training?', question_type: 'multiple_choice', order_index: 8 }
];

export const answers: Answer[] = [
  // Q1: Long-term goal
  { id: 'a1_airline', question_id: 'q1_goal', answer_text: 'Airline pilot', path_delta: { part_141: 3, hybrid: 2 } },
  { id: 'a1_other', question_id: 'q1_goal', answer_text: 'Corporate / Charter / Still exploring', path_delta: { part_61: 2, hybrid: 2 } },
  
  // Q2: Time availability
  { id: 'a2_full', question_id: 'q2_time', answer_text: 'Full-time (5+ days/week)', path_delta: { part_141: 3 } },
  { id: 'a2_part', question_id: 'q2_time', answer_text: 'Part-time (evenings/weekends)', path_delta: { part_61: 3, hybrid: 2 } },
  
  // Q3: Speed importance
  { id: 'a3_fast', question_id: 'q3_speed', answer_text: 'Extremely important', path_delta: { part_141: 3 } },
  { id: 'a3_flex', question_id: 'q3_speed', answer_text: 'Flexibility matters more', path_delta: { part_61: 3 } },
  
  // Q4: Relocation
  { id: 'a4_yes', question_id: 'q4_relocate', answer_text: 'Yes, I can relocate', path_delta: { part_141: 2 } },
  { id: 'a4_no', question_id: 'q4_relocate', answer_text: 'No, I need to train locally', path_delta: { part_61: 3 } },
  
  // Q5: Obligations
  { id: 'a5_yes', question_id: 'q5_obligations', answer_text: 'Yes, significant obligations', path_delta: { part_61: 3 } },
  { id: 'a5_no', question_id: 'q5_obligations', answer_text: 'No major constraints', path_delta: { part_141: 2 } },
  
  // Q6: Training style (this_or_that)
  { id: 'a6_structured', question_id: 'q6_style', answer_text: 'Structured and syllabus-driven', path_delta: { part_141: 6 } },
  { id: 'a6_flexible', question_id: 'q6_style', answer_text: 'Flexible and instructor-paced', path_delta: { part_61: 2, hybrid: 1 } },
  
  // Q7: Degree
  { id: 'a7_degree', question_id: 'q7_degree', answer_text: 'I want or need a degree', path_delta: { part_141: 2 } },
  { id: 'a7_none', question_id: 'q7_degree', answer_text: 'No degree needed', path_delta: { part_61: 2 } },
  
  // Q8: Funding
  { id: 'a8_paygo', question_id: 'q8_funding', answer_text: 'Pay as I go', path_delta: { part_61: 3 } },
  { id: 'a8_finance', question_id: 'q8_funding', answer_text: 'Financing / scholarships', path_delta: { part_141: 2, hybrid: 2 } }
];
