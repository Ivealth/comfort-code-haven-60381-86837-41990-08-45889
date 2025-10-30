import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="mt-6 bg-card rounded-2xl p-8 md:p-10 shadow-blue-glow">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-[1.1] tracking-tight">
          Streamline Your Team,
          <br />
          Supercharge Your Workflow
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          All-in-one platform to plan, collaborate, and deliver — faster and smarter.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate('/feature/collaboration')}
            className="px-6 py-3 rounded-full border-2 border-secondary text-secondary text-base font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 hover:shadow-lg">
            Learn more
          </button>
          <button
            onClick={scrollToWaitlist}
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
          >
            Get early access
          </button>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto py-6">
        <div className="flex gap-4 items-end px-3 pb-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-28 md:w-40 flex-shrink-0 rounded-2xl bg-card shadow-lg overflow-hidden border border-border/50"
              style={{ transform: `rotate(${(i - 3) * 2}deg)` }}
            >
              <div className="w-full h-32 md:h-40 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
