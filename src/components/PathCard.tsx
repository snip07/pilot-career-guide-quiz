import { Path } from '@/data/types';
import { Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PathCardProps {
  path: Path;
  isPrimary?: boolean;
  matchLabel?: string;
}

export function PathCard({ path, isPrimary = false, matchLabel }: PathCardProps) {
  return (
    <div className={cn(
      "rounded-xl border-2 overflow-hidden transition-all",
      isPrimary 
        ? "border-primary bg-card shadow-glow" 
        : "border-border bg-card/50"
    )}>
      {matchLabel && (
        <div className={cn(
          "px-4 py-2 text-sm font-semibold",
          isPrimary 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        )}>
          {matchLabel}
        </div>
      )}
      
      <div className="p-6">
        <h3 className={cn(
          "font-display font-bold mb-3",
          isPrimary ? "text-2xl" : "text-xl"
        )}>
          {path.name}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {path.description}
        </p>
        
        {isPrimary && (
          <div className="bg-secondary/50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Why this path fits you:</h4>
            <p className="text-muted-foreground text-sm">{path.why_it_fits}</p>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-primary mb-4">
          <Clock className="w-5 h-5" />
          <span className="font-medium">{path.estimated_timeline}</span>
        </div>
        
        {isPrimary && (
          <div>
            <h4 className="font-semibold text-foreground mb-3">Suggested Next Steps:</h4>
            <ul className="space-y-2">
              {path.next_steps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
