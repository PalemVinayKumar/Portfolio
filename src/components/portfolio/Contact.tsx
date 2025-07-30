import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "palemvinaykumar01@gmail.com",
      href: "mailto:palemvinaykumar01@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 799726022",
      href: "tel:+91799726022"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madanapalle, Andhra Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:palemvinaykumar01@gmail.com",
      color: "hover:text-primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or potential collaborations. Whether you're looking for a Python developer, 
                data analyst, or software engineer, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-glass p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <a href={contact.href} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="card-glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full animate-glow group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Quick Response Promise */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                ⚡ I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;