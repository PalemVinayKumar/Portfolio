import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Executive Operations Specialist",
    company: " Aegis (Startek)",
    duration: "Oct 2020 – Oct 2023",
    location: "Remote/Hybrid",
    description: [
      "Worked in a high-impact operations team, utilizing internal tools and platforms to manage, validate, and process organizational data across multiple departments.",
      "Ensured accuracy and timeliness in data handling by streamlining processing pipelines and identifying anomalies in reporting systems.",
      "Collaborated with cross-functional teams including client-facing representatives, technical support, and compliance units to maintain workflow integrity.",
      "Mentored new team members on using proprietary tools and standard operating procedures, contributing to process documentation and continuous improvement."
    ],
    skills: [
      "Data Validation", 
      "Process Optimization", 
      "Cross-functional Collaboration", 
      "Workflow Management", 
      "Team Mentoring", 
      "Documentation",
      "Client Communication",
      "Quality Assurance"
    ]
  };

  const certifications = [
    {
      title: "Full Stack Web Development with React JS",
      issuer: "Jspiders",
      date: "Feb-June 2022",
      icon: "🚀"
    },
    {
      title: "Cyber Security",
      issuer: "CISCO",
      date: "June 2023",
      icon: "🔒"
    },
    {
      title: "Google Data Analysis",
      issuer: "Coursera",
      date: "Dec 2022",
      icon: "📊"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-bold">Work Experience</h3>
            
            <Card className="card-glass p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold">{experience.title}</h4>
                      <div className="flex items-center space-x-2 text-primary">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h5 className="font-semibold">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.description.map((item, index) => (
                      <li key={index} className="text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h5 className="font-semibold">Key Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-glass p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{cert.title}</h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Education Highlight */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <Card className="card-glass p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">Master of Computer Applications (MCA)</h4>
                    <p className="text-primary font-medium">Madanapalle Institute of Technology and Science</p>
                    <p className="text-muted-foreground">2024 • GPA: 7.95/10</p>
                  </div>
                  <div>
                    <h4 className="font-bold">B.Com (Computer Applications)</h4>
                    <p className="text-primary font-medium">Siddartha College</p>
                    <p className="text-muted-foreground">2021 • GPA: 7.60/10</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;