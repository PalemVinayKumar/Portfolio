import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileAvatar from '../../assets/profile-avatar.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Python Developer', 'Data Analyst', 'Software Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/5 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Palem Vinay
              <span className="gradient-text block">Kumar</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground">
              <span className="inline-block min-w-[300px] text-left">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Dedicated Operations professional with 3+ years of experience, recently completed MCA 
            and now pursuing opportunities in software development and data analytics.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="animate-glow group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              <Mail className="mr-2 h-4 w-4" />
              Let's Talk
            </Button>
          </div>

          {/* Social Links */}
          {/* Social Links */}
<div className="flex space-x-4">
  <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110" asChild>
    <a href="https://github.com/PalemVinayKumar" target="_blank" rel="noopener noreferrer">
      <Github className="h-5 w-5" />
    </a>
  </Button>
  <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110" asChild>
    <a href="https://www.linkedin.com/in/palemvinaykumar/" target="_blank" rel="noopener noreferrer">
      <Linkedin className="h-5 w-5" />
    </a>
  </Button>
  <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110" asChild>
    <a href="mailto:palemvinaykumar01@gmail.com" target="_blank" rel="noopener noreferrer">
      <Mail className="h-5 w-5" />
    </a>
  </Button>
</div>

        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow"></div>
            <div className="relative card-glass rounded-full p-2">
              <img
                src={profileAvatar}
                alt="Palem Vinay Kumar"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;