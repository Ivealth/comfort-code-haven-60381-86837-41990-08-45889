import { useNavigate } from "react-router-dom";

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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-background rounded-3xl overflow-hidden shadow-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-white transition-colors"
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
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
        <div className="relative h-72 overflow-visible rounded-t-3xl">
          <div className="relative h-full overflow-hidden" style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }}>
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trovii Housing"
              className="w-full h-full object-cover"
            />
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-[10px] font-heading font-bold text-foreground tracking-wider">TROVII</div>
                  <div className="text-[8px] text-muted-foreground">Dream House</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-8 text-center space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-heading font-bold text-foreground tracking-wide">
              WELCOME
            </h2>
            <div className="text-xs text-muted-foreground space-y-0.5">
              <p>Find your next space, feel at home</p>
              <p>Where comfort meets convenience</p>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            <button
              onClick={handleLogin}
              className="w-full px-6 py-3 rounded-full bg-secondary text-secondary-foreground text-sm font-body font-semibold hover:bg-secondary/90 transition-colors"
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="w-full px-6 py-3 rounded-full border-2 border-input bg-background text-foreground text-sm font-body font-semibold hover:bg-accent/50 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
