import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Illam Municipality-5, Illam"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+977 9999999"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "contact@Shurakshya Krishi Farm.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Everyday"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-light-green/30 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's Talk.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our organic produce or want to partner with us? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input placeholder="John" className="border-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input placeholder="Doe" className="border-input" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="border-input" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Phone Number</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="border-input" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your interest in our organic products..."
                  className="min-h-[120px] border-input"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden border-border/50">
              <div className="h-64 bg-gradient-to-br from-light-green to-natural-beige relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <div className="text-lg font-semibold text-foreground">Visit Our Farm</div>
                    <div className="text-muted-foreground">Interactive map coming soon</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;