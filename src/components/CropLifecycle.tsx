import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, TreePine, Flower, Apple } from "lucide-react";
import orangePlanting from "@/assets/orange-planting.jpg";
import orangeGrowing from "@/assets/orange-growing.jpg";
import orangeFlowering from "@/assets/orange-flowering.jpg";
import orangeHarvest from "@/assets/orange-harvest.jpg";

const CropLifecycle = () => {
  const lifecycleStages = [
    {
      id: 1,
      icon: Sprout,
      title: "Planting",
      description: "Carefully selected orange seedlings are planted in nutrient-rich, organic soil with optimal spacing for healthy growth.",
      image: orangePlanting,
      duration: "Week 1-2",
      color: "bg-earth-brown"
    },
    {
      id: 2,
      icon: TreePine,
      title: "Growing",
      description: "Young orange trees develop strong root systems and lush green foliage through sustainable irrigation and organic nutrients.",
      image: orangeGrowing,
      duration: "Month 1-12",
      color: "bg-fresh-green"
    },
    {
      id: 3,
      icon: Flower,
      title: "Flowering",
      description: "Beautiful white blossoms appear on mature trees, signaling the beginning of fruit development in the growing season.",
      image: orangeFlowering,
      duration: "Month 12-18",
      color: "bg-accent"
    },
    {
      id: 4,
      icon: Apple,
      title: "Harvesting",
      description: "Ripe, juicy oranges are hand-picked at peak freshness, ensuring maximum flavor and nutritional value for our customers.",
      image: orangeHarvest,
      duration: "Month 18+",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-natural-beige/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-primary">Farm to Table Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Orange Cultivation
            <span className="block text-primary">Lifecycle Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow the complete journey of our organic oranges from seedling to harvest, 
            showcasing our commitment to sustainable and natural growing practices.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-earth-brown via-fresh-green via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          {/* Lifecycle Cards */}
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {lifecycleStages.map((stage, index) => (
              <Card 
                key={stage.id} 
                className="group hover:shadow-natural transition-all duration-500 border-border/50 hover:border-primary/30 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  {/* Stage Number & Duration */}
                  <div className="relative">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className={`${stage.color} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}>
                        {stage.id}
                      </div>
                      <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-card-foreground">{stage.duration}</span>
                      </div>
                    </div>
                    
                    {/* Stage Icon */}
                    <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-3">
                      <stage.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {stage.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{stage.id}/4</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${stage.color}`}
                          style={{ width: `${(stage.id / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center space-y-8">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                From Seed to Success
              </h3>
              <p className="text-lg text-muted-foreground">
                Every orange in our harvest represents months of careful cultivation, 
                sustainable practices, and dedication to quality. Experience the difference 
                that organic, farm-fresh produce makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-accent text-primary-foreground"
                >
                  Visit Our Orange Grove
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn Growing Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropLifecycle;