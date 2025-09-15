import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SubcategorySelectionProps {
  topic: string;
  onSubcategorySelect: (subcategory: string) => void;
  onBack: () => void;
}

const subcategories: Record<string, Array<{id: string, name: string, description: string}>> = {
  sports: [
    { id: "football", name: "Football", description: "Soccer knowledge" },
    { id: "cricket", name: "Cricket", description: "Cricket facts & history" },
    { id: "tennis", name: "Tennis", description: "Tennis tournaments & players" }
  ],
  movies: [
    { id: "english", name: "English", description: "Hollywood movies" },
    { id: "hindi", name: "Hindi", description: "Bollywood cinema" },
    { id: "tamil", name: "Tamil", description: "Tamil cinema" }
  ],
  technical: [
    { id: "c", name: "C", description: "C programming language" },
    { id: "java", name: "Java", description: "Java programming" },
    { id: "python", name: "Python", description: "Python programming" },
    { id: "cpp", name: "C++", description: "C++ programming" },
    { id: "javascript", name: "JavaScript", description: "JavaScript programming" }
  ],
  currentAffairs: [
    { id: "world", name: "World Events", description: "Global current affairs" }
  ],
  technology: [
    { id: "general", name: "General Tech", description: "Technology trends" }
  ]
};

const topicTitles: Record<string, string> = {
  sports: "Choose Your Sport",
  movies: "Select Movie Language",
  technical: "Pick Programming Language",
  currentAffairs: "Current Affairs Topics",
  technology: "Technology Categories"
};

export const SubcategorySelection = ({ topic, onSubcategorySelect, onBack }: SubcategorySelectionProps) => {
  const items = subcategories[topic] || [];
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4 hover:bg-quiz-hover"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {topicTitles[topic]}
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a subcategory to begin your quiz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="bg-gradient-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:scale-105 cursor-pointer group"
              onClick={() => onSubcategorySelect(item.id)}
            >
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};