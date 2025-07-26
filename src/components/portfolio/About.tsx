import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Shield, 
  Globe, 
  Briefcase, 
  GraduationCap,
  Award
} from 'lucide-react';

const About = () => {
  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    databases: ['Oracle SQL'],
    tools: ['MS Office', 'React.js', 'Git'],
    domains: ['Cybersecurity', 'Web Development', 'Data Operations']
  };

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Projects Completed', value: '4+', icon: Code },
    { label: 'Certifications', value: '3', icon: Award },
    { label: 'GPA (MCA)', value: '7.95', icon: GraduationCap }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming from operations excellence to software development innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in multinational operations, I specialized in 
                data validation, process optimization, and cross-functional collaboration. 
                My passion for technology led me to complete my Master of Computer Applications (MCA) 
                with a focus on AI, Cybersecurity, and Web Technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now I'm actively pursuing opportunities to leverage my analytical mindset and 
                technical skills in Python development, data analysis, and software engineering. 
                I bring a unique perspective combining operational excellence with cutting-edge 
                technical capabilities.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="card-glass p-4 text-center hover:scale-105 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold">Technical Skills</h3>
            
            <div className="space-y-6">
              {/* Programming Languages */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Programming Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tools & Frameworks */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Tools & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Domains */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Specialization Areas</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.domains.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
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