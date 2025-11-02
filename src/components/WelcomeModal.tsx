import { useNavigate } from "react-router-dom";
import welcomeHero from "@/assets/welcome-hero.jpg";

interface WelcomeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WelcomeModal = ({ open, onOpenChange }: WelcomeModalProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onOpenChange(false);
    navigate('/signin');
  };

  const handleSignUp = () => {
    onOpenChange(false);
    navigate('/signup');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      <button
        onClick={() => onOpenChange(false)}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors"
        aria-label="Close"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Hero Image Section with Curved Bottom */}
      <div className="relative h-[45vh] overflow-visible">
        <div className="relative h-full overflow-hidden" style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }}>
          <img 
            src={welcomeHero} 
            alt="Trovii Housing" 
            className="w-full h-full object-cover"
          />
          {/* Logo Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
              <div className="text-center">
                <div className="text-[9px] font-heading font-bold text-foreground tracking-wide">TROVII</div>
                <div className="text-[7px] text-muted-foreground">Dream House</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 text-center">
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl font-heading font-bold text-foreground tracking-wide">
            WELCOME
          </h2>
          <div className="text-sm text-muted-foreground space-y-0.5">
            <p>Find your next space, feel at home</p>
            <p>Where comfort meets convenience</p>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-3">
          <button
            onClick={handleLogin}
            className="w-full px-5 py-3 rounded-full bg-secondary text-secondary-foreground text-sm font-body font-semibold hover:bg-secondary/90 transition-colors shadow-sm"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="w-full px-5 py-3 rounded-full border-2 border-input bg-background text-foreground text-sm font-body font-semibold hover:bg-accent/50 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
