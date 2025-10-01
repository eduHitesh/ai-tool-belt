import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Wallet, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Q&A Bot",
      description: "Ask any question and get intelligent answers powered by AI",
      path: "/qna",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Text Summarizer",
      description: "Transform long articles into concise 3-sentence summaries",
      path: "/summarizer",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wallet,
      title: "Expense Tracker",
      description: "Chat-based expense tracking with natural language commands",
      path: "/tracker",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="gradient-subtle py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Powered by Advanced AI
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Personal
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI Assistant</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
            Three powerful AI tools in one place. Ask questions, summarize content, and track expenses with natural language.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Button size="lg" asChild className="shadow-glow">
              <Link to="/qna">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/qna">Try Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from three intelligent tools designed to make your life easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={feature.path} className="block">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium">
                      Try it now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
