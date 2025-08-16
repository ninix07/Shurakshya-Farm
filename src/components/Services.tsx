import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Droplets, Leaf, Users } from "lucide-react";
import farmLandscape from "@/assets/farm-landscape.jpg";
import greenhouse from "@/assets/greenhouse.jpg";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Smart Farming",
      description: "Advanced IoT sensors and AI-driven analytics optimize crop yields while minimizing resource usage.",
      image: greenhouse,
      features: ["Precision Agriculture", "Data Analytics", "Automated Systems"]
    },
    {
      icon: Droplets,
      title: "Water Management", 
      description: "Innovative irrigation systems that conserve water while ensuring optimal plant hydration.",
      image: farmLandscape,
      features: ["Drip Irrigation", "Smart Sensors", "Water Conservation"]
    },
    {
      icon: Leaf,
      title: "Organic Certification",
      description: "Comprehensive organic farming practices certified by leading agricultural authorities.",
      image: greenhouse,
      features: ["USDA Organic", "Natural Methods", "Soil Health"]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Supporting local communities through education, employment, and sustainable practices.",
      image: farmLandscape,
      features: ["Local Jobs", "Education Programs", "Fair Trade"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-natural-beige/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-primary">Advanced Agriculture</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Agri-Tech Advancements Notwithstanding,
            <br />
            <span className="text-primary">Conventional Labor-Intensive Farming Reveals</span>
            <br />
            Persistent Inefficiencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge agricultural technology combined with traditional farming wisdom 
            creates the perfect balance for sustainable, high-yield organic production.
          </p>
          <Button className="bg-primary hover:bg-accent text-primary-foreground">
            Get Started Right Away
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-natural transition-all duration-300 border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 space-y-6 order-2 md:order-1">
                    <div className="space-y-4">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 md:h-full order-1 md:order-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Next-Gen Services for Modern Farming
              </h3>
              <p className="text-lg text-white/90">
                Revolutionizing agriculture through technology while preserving traditional values. 
                Join us in creating a sustainable future for farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Explore Our Technology
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Schedule a Farm Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;