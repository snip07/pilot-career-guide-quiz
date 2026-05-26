import { Button } from '@/components/ui/button';
import { Plane, Target, Clock, DollarSign } from 'lucide-react';
import ASLogo from '@/assets/AS_Logo.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-plane flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="text-center mb-8">
          
          <div className="flex items-center justify-center mb-6 animate-float">
            <img src={ASLogo} alt="AviationStart Logo" className="h-16 w-auto" />
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Your Personalized Pilot Career Roadmap
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Answer a few questions about your goals, schedule, and preferences. 
            We'll recommend a training path that fits your real-life situation.
          </p>
        </div>
        
        <div className="bg-card rounded-xl shadow-card p-6 mb-8">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">
            What we'll help you discover:
          </h2>
          
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Best training structure for your goals</p>
                <p className="text-sm text-muted-foreground">Part 61, Part 141, or a hybrid approach</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Realistic timeline estimates</p>
                <p className="text-sm text-muted-foreground">Based on your availability and commitment</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Path that fits your budget</p>
                <p className="text-sm text-muted-foreground">No sales pitch—just honest guidance</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={onStart}
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-lg transition-all"
          >
            Start Building My Roadmap
            <Plane className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Takes about 2 minutes • 8 questions
          </p>
        </div>
      </div>
    </div>
  );
}
