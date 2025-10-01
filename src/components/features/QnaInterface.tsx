import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { askQuestion } from "@/lib/api";
import { Loader2, MessageSquare } from "lucide-react";

const QnaInterface = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);
    setError(null);

    try {
      const result = await askQuestion(question);
      setAnswer(result.answer);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium mb-2">
            Ask me anything
          </label>
          <Textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="min-h-[120px] resize-none"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !question.trim()}
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Thinking...
            </>
          ) : (
            <>
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask Question
            </>
          )}
        </Button>
      </form>

      {error && (
        <Card className="p-4 border-destructive bg-destructive/10">
          <p className="text-sm text-destructive">{error}</p>
        </Card>
      )}

      {answer && (
        <Card className="p-6 shadow-elegant animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Answer</h3>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default QnaInterface;
