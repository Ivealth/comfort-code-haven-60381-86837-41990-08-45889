import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Coming Soon</h1>
          <p className="text-muted-foreground max-w-md">
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
        </div>
        
        <Button 
          onClick={() => navigate(-1)}
          className="bg-[hsl(20,100%,50%)] text-white hover:bg-[hsl(20,100%,45%)] px-8"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
