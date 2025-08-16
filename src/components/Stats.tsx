const Stats = () => {
  const stats = [
    {
      number: "96%",
      label: "Organic Certified",
      description: "All our products meet strict organic certification standards"
    },
    {
      number: "100%",
      label: "Natural Growth",
      description: "No synthetic pesticides or artificial growth enhancers"
    },
    {
      number: "420+",
      label: "Happy Customers",
      description: "Satisfied families trust our organic produce"
    },
    {
      number: "100%",
      label: "Sustainable",
      description: "Environmentally responsible farming practices"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results from our commitment to sustainable, organic farming practices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-organic transition-shadow">
                <div className="space-y-3">
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;