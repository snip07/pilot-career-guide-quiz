import { PathMatch } from '@/data/types';
import { PathCard } from './PathCard';
import { Button } from '@/components/ui/button';
import { RotateCcw, Plane } from 'lucide-react';

interface ResultsScreenProps {
  results: PathMatch[];
  onRetake: () => void;
}

type ConfidenceLevel = 'strong' | 'good' | 'conditional';

interface ConfidenceInfo {
  level: ConfidenceLevel;
  emoji: string;
  label: string;
  description: string;
}

function getConfidenceLevel(primaryScore: number, alternativeScore: number): ConfidenceInfo {
  const gap = primaryScore - alternativeScore;
  
  if (gap >= 4) {
    return {
      level: 'strong',
      emoji: '🟢',
      label: 'Strong Match',
      description: 'Your answers consistently pointed toward this path with few conflicts.'
    };
  } else if (gap >= 2) {
    return {
      level: 'good',
      emoji: '🟡',
      label: 'Good Fit with Tradeoffs',
      description: 'This path fits well, but one or two factors may require flexibility or adjustment.'
    };
  } else {
    return {
      level: 'conditional',
      emoji: '🔵',
      label: 'Conditional Fit',
      description: 'This recommendation is sensitive to changes in your schedule, funding, or availability.'
    };
  }
}

function ConfidenceBadge({ confidence }: { confidence: ConfidenceInfo }) {
  const bgColor = {
    strong: 'bg-success/10 border-success/30',
    good: 'bg-warning/10 border-warning/30',
    conditional: 'bg-primary/10 border-primary/30'
  }[confidence.level];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${bgColor}`}>
      <span>{confidence.emoji}</span>
      <span className="text-sm font-medium text-foreground">{confidence.label}</span>
    </div>
  );
}

export function ResultsScreen({ results, onRetake }: ResultsScreenProps) {
  const primaryPath = results[0];
  const alternativePath = results[1];
  
  // Always show alternative path when available
  const showAlternative = !!alternativePath;
  
  // Calculate confidence based on score gap
  const primaryConfidence = getConfidenceLevel(
    primaryPath.score,
    alternativePath?.score ?? 0
  );
  
  return (
    <div className="min-h-screen bg-plane py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
            <Plane className="w-8 h-8 text-success" />
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Personalized Roadmap
          </h1>
          
          <p className="text-muted-foreground">
            Based on your answers, here's the training path we recommend
          </p>
        </div>
        
        <div className="space-y-6 animate-slide-up">
          {/* Primary Path Confidence */}
          <div className="text-center space-y-2">
            <ConfidenceBadge confidence={primaryConfidence} />
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {primaryConfidence.description}
            </p>
          </div>
          
          <PathCard 
            path={primaryPath.path} 
            isPrimary 
            matchLabel="Primary Recommended Path"
          />
          
          {showAlternative && (
            <>
              {/* Alternative Path Confidence */}
              <div className="text-center pt-4 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-primary/10 border-primary/30">
                  <span>🔵</span>
                  <span className="text-sm font-medium text-foreground">Conditional Fit</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  This option becomes more viable if your circumstances change.
                </p>
              </div>
              
              <PathCard 
                path={alternativePath.path}
                matchLabel="Alternative Path to Consider (If Circumstances Change)"
              />
              {alternativePath.path.id === 'part_141' && (
                <p className="text-sm text-muted-foreground text-center italic px-4 bg-muted/50 py-3 rounded-lg border border-border">
                  Accelerated training paths like Part 141 typically require full-time availability or relocation. 
                  This option becomes more viable if your schedule or obligations change.
                </p>
              )}
              <p className="text-sm text-muted-foreground text-center italic px-4">
                This recommendation is based on your real-life constraints, not just your end goal. 
                Many pilots successfully move between paths as their situation evolves.
              </p>
            </>
          )}
        </div>
        
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">
            Remember: This recommendation is based on your current situation. 
            Your path can evolve as your circumstances change.
          </p>
          
          <Button 
            variant="outline" 
            onClick={onRetake}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </Button>
        </div>
        
        <div className="text-center pt-8 mt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Powered by AviationStart
          </p>
        </div>
      </div>
    </div>
  );
}
