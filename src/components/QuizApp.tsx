import { useState } from "react";
import { TopicSelection } from "./TopicSelection";
import { SubcategorySelection } from "./SubcategorySelection";
import { QuizInterface } from "./QuizInterface";
import { QuizResults } from "./QuizResults";
import { quizData, getRandomizedQuestions, Question } from "@/data/questions";

type QuizState = "topic" | "subcategory" | "quiz" | "results";

export const QuizApp = () => {
  const [state, setState] = useState<QuizState>("topic");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setState("subcategory");
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    const topicQuestions = quizData[selectedTopic]?.[subcategory] || [];
    const randomizedQuestions = getRandomizedQuestions(topicQuestions);
    setQuestions(randomizedQuestions);
    setState("quiz");
  };

  const handleQuizComplete = (finalScore: number, totalQuestions: number) => {
    setScore(finalScore);
    setTotal(totalQuestions);
    setState("results");
  };

  const handleRestart = () => {
    const topicQuestions = quizData[selectedTopic]?.[selectedSubcategory] || [];
    const randomizedQuestions = getRandomizedQuestions(topicQuestions);
    setQuestions(randomizedQuestions);
    setState("quiz");
  };

  const handleBackToTopics = () => {
    setSelectedTopic("");
    setSelectedSubcategory("");
    setQuestions([]);
    setState("topic");
  };

  const handleBackToSubcategories = () => {
    setSelectedSubcategory("");
    setQuestions([]);
    setState("subcategory");
  };

  switch (state) {
    case "topic":
      return <TopicSelection onTopicSelect={handleTopicSelect} />;
    
    case "subcategory":
      return (
        <SubcategorySelection 
          topic={selectedTopic}
          onSubcategorySelect={handleSubcategorySelect}
          onBack={handleBackToTopics}
        />
      );
    
    case "quiz":
      return (
        <QuizInterface 
          questions={questions}
          onQuizComplete={handleQuizComplete}
          onBack={handleBackToSubcategories}
          topicName={selectedTopic}
          subcategoryName={selectedSubcategory}
        />
      );
    
    case "results":
      return (
        <QuizResults 
          score={score}
          total={total}
          onRestart={handleRestart}
          onHome={handleBackToTopics}
          topicName={selectedTopic}
          subcategoryName={selectedSubcategory}
        />
      );
    
    default:
      return <TopicSelection onTopicSelect={handleTopicSelect} />;
  }
};