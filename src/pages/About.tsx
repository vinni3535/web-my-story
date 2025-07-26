import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", 
    "Python", "Git", "Tailwind CSS", "Next.js", "MongoDB"
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Developed responsive web applications using React and TypeScript."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2021 - 2022",
      description: "Built user interfaces and collaborated with design teams."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h1>
            
            <div className="grid gap-8 md:gap-12">
              {/* Introduction */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Introduction</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    I'm a passionate full-stack developer with expertise in modern web technologies. 
                    I love creating beautiful, functional applications that solve real-world problems.
                  </p>
                  <p>
                    With a strong foundation in both frontend and backend development, I enjoy 
                    working on projects that challenge me to learn and grow as a developer.
                  </p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-accent pl-6 relative">
                      <div className="absolute -left-2 top-2 w-3 h-3 bg-accent rounded-full"></div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;