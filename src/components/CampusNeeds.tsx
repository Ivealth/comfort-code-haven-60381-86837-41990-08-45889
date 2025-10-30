const CampusNeeds = () => {
  return (
    <section className="mt-12">
      <h3 className="text-center text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight">
        Everything Your Campus Needs to Run Smooth
      </h3>
      <p className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        From ordering food to landing side hustles and managing your cash — Trovii brings the tools students actually use into one place.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border/50">
          <div className="p-6 md:p-8 flex items-center gap-5">
            <div className="flex-1">
              <h4 className="font-heading text-primary text-lg md:text-xl font-bold tracking-tight">Grub on Demand</h4>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                Forget long queues or dodgy deliveries. Order hot, local food and focus on your studies — we'll handle the rest.
              </p>
            </div>
            <div className="w-28 h-20 rounded-xl overflow-hidden border-2 border-primary/30">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/15" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 p-6 border-l-4 border-secondary shadow-md">
            <h5 className="font-heading text-primary text-base md:text-lg font-bold tracking-tight">Hustle Central</h5>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Quick gigs, internships, and direct employer connects — your next payday could be one swipe away.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 border border-border/50 shadow-md">
            <h5 className="font-heading text-primary text-base md:text-lg font-bold tracking-tight">Squad Up</h5>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Build or join groups for your faculty, hobbies, or study sessions. Safer, smarter group interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusNeeds;
