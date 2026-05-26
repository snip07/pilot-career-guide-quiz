import { useState, useMemo } from 'react';
import { WelcomeScreen } from './WelcomeScreen';
import { QuizQuestion } from './QuizQuestion';
import { ResultsScreen } from './ResultsScreen';
import { ProgressBar } from './ProgressBar';
import { questions, answers } from '@/data/questions';
import { PathMatch, Answer } from '@/data/types';
import { 
  initializePathScores, 
  applyAnswerDelta, 
  calculatePathResults,
  PathScores 
} from '@/data/scoring';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type QuizState = 'welcome' | 'quiz' | 'results';

export function QuizContainer() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pathScores, setPathScores] = useState<PathScores>(initializePathScores());
  const [answerHistory, setAnswerHistory] = useState<Answer[]>([]);
  const [results, setResults] = useState<PathMatch[]>([]);
  
  const sortedQuestions = useMemo(() => 
    [...questions].sort((a, b) => a.order_index - b.order_index),
    []
  );
  
  const currentQuestion = sortedQuestions[currentQuestionIndex];
  const currentAnswers = useMemo(() => 
    answers.filter(a => a.question_id === currentQuestion?.id),
    [currentQuestion]
  );
  
  const handleStart = () => {
    setState('quiz');
    setCurrentQuestionIndex(0);
    setPathScores(initializePathScores());
    setAnswerHistory([]);
  };
  
  const handleAnswer = (answer: Answer) => {
    const newScores = applyAnswerDelta(pathScores, answer);
    setPathScores(newScores);
    setAnswerHistory([...answerHistory, answer]);
    
    if (currentQuestionIndex < sortedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const pathResults = calculatePathResults(newScores);
      setResults(pathResults);
      setState('results');
    }
  };
  
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      const previousAnswer = answerHistory[answerHistory.length - 1];
      const newHistory = answerHistory.slice(0, -1);
      
      // Reverse the score delta
      const newScores = { ...pathScores };
      for (const [pathId, delta] of Object.entries(previousAnswer.path_delta)) {
        if (newScores[pathId] !== undefined) {
          newScores[pathId] -= delta;
        }
      }
      
      setPathScores(newScores);
      setAnswerHistory(newHistory);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setState('welcome');
    }
  };
  
  const handleRetake = () => {
    setState('welcome');
    setCurrentQuestionIndex(0);
    setPathScores(initializePathScores());
    setAnswerHistory([]);
    setResults([]);
  };
  
  if (state === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }
  
  if (state === 'results') {
    return <ResultsScreen results={results} onRetake={handleRetake} />;
  }
  
  return (
    <div className="min-h-screen bg-plane flex flex-col">
      <div className="p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="mb-4 gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={sortedQuestions.length} 
          />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <QuizQuestion
            question={currentQuestion}
            answers={currentAnswers}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
}
