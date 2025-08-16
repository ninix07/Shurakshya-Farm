import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Users, Award, Heart } from "lucide-react";
import farmLandscape from "@/assets/farm-landscape.jpg";

const About = () => {
  const features = [
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description: "We use eco-friendly farming methods that protect and nourish the environment."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting local communities with fresh, healthy produce and fair practices."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every product meets the highest standards of organic certification and quality."
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Nutrient-rich foods that promote wellness and sustainable living."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-light-green/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Cultivating a Future of
                <span className="block text-primary">Sustainable Agriculture</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over two decades, we've been pioneering sustainable farming practices 
                that prioritize environmental health, community wellness, and exceptional 
                quality. Our commitment to organic excellence drives everything we do.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-natural">
              <img
                src={farmLandscape}
                alt="Sustainable farm landscape"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Pesticide Free</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Acres Farmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;