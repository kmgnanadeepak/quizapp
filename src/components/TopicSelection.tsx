import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopicSelectionProps {
  onTopicSelect: (topic: string) => void;
}

const topics = [
  { 
    id: "sports", 
    name: "Sports", 
    description: "Test your sports knowledge",
    icon: "⚽"
  },
  { 
    id: "movies", 
    name: "Movies", 
    description: "Cinema and entertainment",
    icon: "🎬"
  },
  { 
    id: "currentAffairs", 
    name: "Current Affairs", 
    description: "World events and news",
    icon: "📰"
  },
  { 
    id: "technology", 
    name: "Technology", 
    description: "Tech trends and innovations",
    icon: "💻"
  },
  { 
    id: "technical", 
    name: "Programming", 
    description: "Programming languages",
    icon: "👨‍💻"
  }
];

export const TopicSelection = ({ onTopicSelect }: TopicSelectionProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            QuizMaster
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your topic and test your knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.id} 
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer group"
              onClick={() => onTopicSelect(topic.id)}
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-glow">
                  {topic.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {topic.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {topic.description}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Start Quiz
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};