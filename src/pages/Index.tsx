import { Link } from "react-router-dom";
import { MessageSquare, FileText, Wallet } from "lucide-react";

const Index = () => {
  const tools = [
    {
      icon: MessageSquare,
      title: "Q&A Bot",
      description: "Ask questions, get answers",
      path: "/qna"
    },
    {
      icon: FileText,
      title: "Summarizer",
      description: "Condense long text into key points",
      path: "/summarizer"
    },
    {
      icon: Wallet,
      title: "Expense Tracker",
      description: "Track spending with chat",
      path: "/tracker"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Three simple AI tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Pick one to get started
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.path}
              to={tool.path}
              className="group block p-8 rounded-lg border bg-card hover:border-primary transition-colors"
            >
              <Icon className="w-10 h-10 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">
                {tool.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {tool.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
