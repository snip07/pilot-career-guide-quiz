import { useState } from 'react';
import { Question, Answer } from '@/data/types';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: Question;
  answers: Answer[];
  onAnswer: (answer: Answer) => void;
}

export function QuizQuestion({ question, answers, onAnswer }: QuizQuestionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const handleSelect = (answer: Answer) => {
    setSelectedId(answer.id);
    setTimeout(() => {
      onAnswer(answer);
      setSelectedId(null);
    }, 300);
  };
  
  const isThisOrThat = question.question_type === 'this_or_that';
  
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-8">
        {question.question_text}
      </h2>
      
      <div className={cn(
        "grid gap-4",
        isThisOrThat ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-xl mx-auto"
      )}>
        {answers.map((answer, index) => (
          <button
            key={answer.id}
            onClick={() => handleSelect(answer)}
            disabled={selectedId !== null}
            className={cn(
              "group relative p-5 rounded-xl border-2 text-left transition-all duration-200",
              "hover:border-primary hover:shadow-card hover:scale-[1.02]",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              selectedId === answer.id
                ? "border-primary bg-primary/5 scale-[1.02]"
                : "border-border bg-card",
              isThisOrThat && "min-h-[120px] flex flex-col justify-center"
            )}
          >
            {!isThisOrThat && (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm mr-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {String.fromCharCode(65 + index)}
              </span>
            )}
            <span className={cn(
              "font-medium text-foreground",
              isThisOrThat ? "text-center text-lg" : "inline"
            )}>
              {answer.answer_text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
