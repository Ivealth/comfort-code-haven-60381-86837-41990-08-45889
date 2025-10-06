import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="mt-6 bg-card rounded-2xl p-6 shadow-blue-glow">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-heading font-bold text-primary leading-tight">
          Streamline Your Team,
          <br />
          Supercharge Your Workflow
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          All-in-one platform to plan, collaborate, and deliver — faster and smarter.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <button 
            onClick={() => navigate('/feature/collaboration')}
            className="px-4 py-2 rounded-full border-2 border-secondary text-secondary text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors">
            Learn more
          </button>
          <button
            onClick={scrollToWaitlist}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get early access
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto py-4">
        <div className="flex gap-3 items-end px-3 pb-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-24 md:w-32 flex-shrink-0 rounded-xl bg-card shadow-md overflow-hidden"
              style={{ transform: `rotate(${(i - 3) * 2}deg)` }}
            >
              <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
