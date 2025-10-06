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
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card rounded-xl p-5 shadow-sm text-center">
            <h3 className="font-heading text-primary text-lg font-bold">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
