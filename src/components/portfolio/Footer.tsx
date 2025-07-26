import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Palem Vinay Kumar
            </div>
            <p className="text-muted-foreground">
              Transforming ideas into innovative software solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-center">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:text-right">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex space-x-3 md:justify-end">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:text-gray-400" asChild>
                <a href="https://github.com/PalemVinayKumar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Palem Vinay Kumar. Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>and React</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-20"></div>
    </footer>
  );
};

export default Footer;