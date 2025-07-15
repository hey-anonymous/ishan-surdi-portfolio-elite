
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  Heart,
  TrendingUp,
  BarChart3,
  Code2,
  Users
} from "lucide-react";

export default function About() {
  const skills = [
    { category: "Programming", items: ["Python", "R", "SQL", "JavaScript", "TypeScript"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter"] },
    { category: "Visualization", items: ["Tableau", "Power BI", "Plotly", "D3.js", "Excel"] },
    { category: "Cloud & Tools", items: ["AWS", "Azure", "Git", "Docker", "Linux"] },
    { category: "Finance", items: ["Financial Modeling", "Valuation", "Risk Analysis", "Portfolio Management"] }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Advanced Certifications",
      description: "Completed AWS Solutions Architect and Google Data Analytics certifications",
      icon: GraduationCap
    },
    {
      year: "2023",
      title: "Data Science Specialization",
      description: "Deep dive into machine learning and statistical analysis with real-world projects",
      icon: BarChart3
    },
    {
      year: "2022",
      title: "Financial Technology Focus",
      description: "Developed expertise in algorithmic trading and financial data analysis",
      icon: TrendingUp
    },
    {
      year: "2021",
      title: "Programming Foundation",
      description: "Started with Python and web development, building first portfolio projects",
      icon: Code2
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every analysis and solution"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous learning and adaptation to new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building bridges between technical and business teams"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Creating solutions that make a meaningful difference"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging data and technology to drive strategic business decisions 
            in the intersection of finance and technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Photo & Bio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="w-64 h-64 mx-auto md:mx-0 flex-shrink-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary opacity-50">IS</div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Hi, I'm Ishan Surdi</h2>
                  <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm an aspiring tech and finance professional with a passion for transforming complex data 
                      into actionable insights. My journey combines technical expertise in data science and 
                      programming with a deep understanding of financial markets and business strategy.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing opportunities in top-tier technology and finance companies, I focus on 
                      creating elegant solutions that bridge the gap between technical innovation and business impact. 
                      My work spans algorithmic trading, business intelligence, and data-driven decision making.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not analyzing data or building applications, I enjoy staying current with fintech 
                      innovations, exploring new programming frameworks, and contributing to open-source projects.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Current Focus */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Machine Learning in Finance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cloud Architecture (AWS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Advanced Data Visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Full-Stack Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["FinTech", "AI/ML", "Data Science", "Cloud Computing", "Algorithmic Trading", "Business Intelligence"].map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Learning Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
