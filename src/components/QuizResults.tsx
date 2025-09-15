import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home } from "lucide-react";

interface QuizResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
  topicName: string;
  subcategoryName: string;
}

export const QuizResults = ({ 
  score, 
  total, 
  onRestart, 
  onHome, 
  topicName, 
  subcategoryName 
}: QuizResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 60) return "Good effort! 👍";
    if (percentage >= 50) return "Not bad! 📚";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-quiz-correct";
    if (percentage >= 60) return "text-accent";
    return "text-quiz-incorrect";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl animate-scale-in">
        <Card className="bg-gradient-card border-border p-12 text-center">
          <div className="mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-primary animate-glow" />
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Quiz Complete!
            </h1>
            <p className="text-muted-foreground capitalize">
              {topicName} • {subcategoryName}
            </p>
          </div>

          <div className="mb-8">
            <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {score}/{total}
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getPerformanceColor()}`}>
              {percentage}%
            </div>
            <div className="text-xl text-muted-foreground">
              {getPerformanceMessage()}
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={onRestart}
              className="w-full bg-gradient-primary hover:opacity-90"
              size="lg"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            
            <Button 
              onClick={onHome}
              variant="outline"
              className="w-full hover:bg-quiz-hover"
              size="lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Choose New Topic
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};