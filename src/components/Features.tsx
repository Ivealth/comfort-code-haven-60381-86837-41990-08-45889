const Features = () => {
  const features = [
    {
      title: "Real-Time Collaboration",
      description: "Sync with teammates, share updates, and collaborate instantly within projects.",
    },
    {
      title: "Task & Project Tracking",
      description: "Assign tasks, monitor progress, and ensure projects stay on track.",
    },
    {
      title: "Performance Insights",
      description: "Make data-driven decisions with analytics that show team productivity.",
    },
  ];

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card rounded-2xl p-7 shadow-md border border-border/50 text-center hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-heading text-primary text-xl font-bold tracking-tight">
              {feature.title}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
