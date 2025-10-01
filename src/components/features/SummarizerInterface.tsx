import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { summarizeText } from "@/lib/api";
import { Loader2, FileText } from "lucide-react";

const SummarizerInterface = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) return;

    setIsLoading(true);
    setSummary(null);
    setError(null);

    try {
      const result = await summarizeText(text);
      setSummary(result.summary);
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
          <label htmlFor="text" className="block text-sm font-medium mb-2">
            Paste your text or article
          </label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a long article or text here and get a concise summary..."
            className="min-h-[200px] resize-y"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !text.trim()}
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Summarizing...
            </>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" />
              Generate Summary
            </>
          )}
        </Button>
      </form>

      {error && (
        <Card className="p-4 border-destructive bg-destructive/10">
          <p className="text-sm text-destructive">{error}</p>
        </Card>
      )}

      {summary && (
        <Card className="p-6 shadow-elegant animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">{summary}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SummarizerInterface;
