import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Shield, Database, Bot, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Scanner",
      description: "A comprehensive cybersecurity tool that identifies web application and network vulnerabilities. Features automated scanning logic, detailed reporting, and an intuitive user interface for proactive system security assessment.",
      icon: Shield,
      technologies: ["Python", "Cybersecurity", "Network Security", "Web Security"],
      highlights: [
        "Automated vulnerability detection",
        "Comprehensive security reports",
        "User-friendly interface",
        "Network and web app scanning"
      ],
      status: "Completed",
      category: "Cybersecurity"
    },
    {
      title: "Data Handling Platform (Aegis)",
      description: "Enterprise-grade data management platform for importing, validating, and updating client data from multiple sources. Ensures data integrity through comprehensive validation and provides seamless client collaboration tools.",
      icon: Database,
      technologies: ["Python", "Data Validation", "ETL", "Client Integration"],
      highlights: [
        "Multi-source data import",
        "Real-time data validation",
        "Client collaboration tools",
        "Data integrity assurance"
      ],
      status: "Completed",
      category: "OpTool"
    },
    {
      title: "Inmian - AI Assistant",
      description: "Next-generation AI assistant that combines advanced natural language processing with intuitive design. Provides smart, personalized, and secure user interactions while solving the problem of unreliable web searches with accurate, context-aware answers.",
      icon: Bot,
      technologies: ["AI/ML", "NLP", "JavaScript", "React", "API Integration"],
      highlights: [
        "Advanced NLP capabilities",
        "Context-aware responses",
        "Secure user interactions",
        "Personalized experience"
      ],
      status: "Completed",
      category: "AI/ML"
    },
    {
      title: "LIFE OS – Personal AI Copilot",
      description: "Comprehensive life management platform that helps users manage daily tasks, reminders, expenses, and real-time information. Replaces multiple apps with a single smart interface for enhanced productivity and personal support.",
      icon: Smartphone,
      technologies: ["React", "AI Integration", "Task Management", "Expense Tracking"],
      highlights: [
        "Unified life management",
        "AI-powered assistance",
        "Task and expense tracking",
        "Real-time information"
      ],
      status: "Completed",
      category: "AI Assistant"
    }
  ];

  const categoryColors = {
    "Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/20",
    "OpTool": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "AI/ML": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "AI Assistant": "bg-green-500/10 text-green-400 border-green-500/20"
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing technical expertise across cybersecurity, AI, and data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass p-8 hover:scale-[1.02] transition-all duration-300 group animate-fade-in">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className={categoryColors[project.category]} variant="outline">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">
                    {project.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-muted/20 hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button size="lg" className="animate-glow">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;