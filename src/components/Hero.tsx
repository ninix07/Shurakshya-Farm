import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroFarmer from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-green via-natural-beige to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Fresh.</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Organic.
                </span>
                <br />
                <span className="text-foreground">Sustainable.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Cultivating the future of sustainable agriculture with innovative farming practices 
                that nourish both people and planet.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-accent text-primary-foreground group"
              >
                Explore Our Farm
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary">96%</div>
                <div className="text-sm text-muted-foreground">Organic Certified</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural Growth</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary">420+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-natural">
              <img
                src={heroFarmer}
                alt="Professional farmer in greenhouse"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soil-brown/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-organic max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">100% Organic</div>
                  <div className="text-sm text-muted-foreground">Farm to Table</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;