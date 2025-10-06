const CampusNeeds = () => {
  return (
    <section className="mt-8">
      <h3 className="text-center text-lg font-heading font-bold">
        Everything Your Campus Needs to Run Smooth
      </h3>
      <p className="mt-2 text-center text-sm text-muted-foreground max-w-lg mx-auto">
        From ordering food to landing side hustles and managing your cash — Trovii brings the tools students actually use into one place.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="rounded-xl overflow-hidden shadow-md bg-card">
          <div className="p-4 md:p-6 flex items-center gap-4">
            <div className="flex-1">
              <h4 className="font-heading text-primary font-semibold">Grub on Demand</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Forget long queues or dodgy deliveries. Order hot, local food and focus on your studies — we'll handle the rest.
              </p>
            </div>
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-primary">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="h-28 rounded-xl bg-orange-50 p-4 border-l-4 border-secondary">
            <h5 className="font-heading text-primary text-sm font-semibold">Hustle Central</h5>
            <p className="mt-1 text-xs text-muted-foreground">
              Quick gigs, internships, and direct employer connects — your next payday could be one swipe away.
            </p>
          </div>
          <div className="h-28 rounded-xl bg-card p-4">
            <h5 className="font-heading text-primary text-sm font-semibold">Squad Up</h5>
            <p className="mt-1 text-xs text-muted-foreground">
              Build or join groups for your faculty, hobbies, or study sessions. Safer, smarter group interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusNeeds;
