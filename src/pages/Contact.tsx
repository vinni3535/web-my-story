import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and interesting projects. 
              Let's connect and discuss how we can work together.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>
                      Here are different ways to reach me.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>your.email@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>Your City, Your Country</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      I'm always open to discussing new projects, creative ideas, or 
                      opportunities to be part of your visions.
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;