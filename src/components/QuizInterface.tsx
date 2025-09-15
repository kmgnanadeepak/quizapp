import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Question } from "@/data/questions";

interface QuizInterfaceProps {
  questions: Question[];
  onQuizComplete: (score: number, total: number) => void;
  onBack: () => void;
  topicName: string;
  subcategoryName: string;
}

export const QuizInterface = ({ 
  questions, 
  onQuizComplete, 
  onBack, 
  topicName, 
  subcategoryName 
}: QuizInterfaceProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    // Auto advance after 1.5 seconds
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      onQuizComplete(score, questions.length);
    }
  };

  const getButtonVariant = (optionIndex: number) => {
    if (!answered) return "outline";
    
    if (optionIndex === currentQuestion.correctAnswer) {
      return "default"; // Will be styled as correct
    }
    
    if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.correctAnswer) {
      return "destructive";
    }
    
    return "outline";
  };

  const getButtonIcon = (optionIndex: number) => {
    if (!answered) return null;
    
    if (optionIndex === currentQuestion.correctAnswer) {
      return <CheckCircle className="w-4 h-4 ml-2" />;
    }
    
    if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.correctAnswer) {
      return <XCircle className="w-4 h-4 ml-2" />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-3xl animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="hover:bg-quiz-hover"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="text-right">
            <p className="text-sm text-muted-foreground capitalize">
              {topicName} • {subcategoryName}
            </p>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="bg-gradient-card border-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {currentQuestion.question}
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={getButtonVariant(index)}
                className={`p-6 text-left justify-start h-auto text-wrap ${
                  getButtonVariant(index) === "default" && answered 
                    ? "bg-quiz-correct hover:bg-quiz-correct" 
                    : ""
                } ${
                  answered ? "pointer-events-none" : "hover:bg-quiz-hover"
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="mr-4 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="flex-1">{option}</span>
                {getButtonIcon(index)}
              </Button>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground">
            Score: {score}/{questions.length}
          </p>
        </div>
      </div>
    </div>
  );
};