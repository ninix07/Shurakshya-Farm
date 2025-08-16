import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Shurakshya Krishi Farm</span>
          </div>

         <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("products")} className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>


          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-accent">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
               <button onClick={() => {scrollToSection("home"); setIsMenuOpen(false);}} className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => {scrollToSection("about"); setIsMenuOpen(false);}} className="text-muted-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => {scrollToSection("services"); setIsMenuOpen(false);}} className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => {scrollToSection("products"); setIsMenuOpen(false);}} className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </button>
              <button onClick={() => {scrollToSection("contact"); setIsMenuOpen(false);}} className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <Button variant="default" className="bg-primary hover:bg-accent w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;