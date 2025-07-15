
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Award, Calendar } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Associate",
    platform: "Amazon Web Services",
    date: "December 2024",
    description: "Comprehensive certification covering AWS cloud architecture, security, and deployment best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    platform: "Google via Coursera",
    date: "November 2024",
    description: "Comprehensive program covering data analysis, visualization, and insights generation using industry-standard tools.",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming", "Data Visualization"],
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Microsoft Power BI Data Analyst Associate",
    platform: "Microsoft",
    date: "October 2024",
    description: "Advanced certification in data modeling, visualization, and business intelligence using Power BI.",
    skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Python for Data Science and Machine Learning",
    platform: "Udemy",
    date: "September 2024",
    description: "Comprehensive course covering Python programming for data science, machine learning, and statistical analysis.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Financial Modeling & Valuation Analyst (FMVA)",
    platform: "Corporate Finance Institute",
    date: "August 2024",
    description: "Professional certification in financial modeling, valuation techniques, and investment analysis.",
    skills: ["Financial Modeling", "Valuation", "Excel", "Investment Analysis", "Corporate Finance"],
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Tableau Desktop Specialist",
    platform: "Tableau",
    date: "July 2024",
    description: "Certification demonstrating proficiency in Tableau for data visualization and dashboard creation.",
    skills: ["Tableau", "Data Visualization", "Dashboard Design", "Analytics", "Reporting"],
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: false
  },
  {
    id: 7,
    title: "SQL for Data Science",
    platform: "IBM via Coursera",
    date: "June 2024",
    description: "Advanced SQL certification covering database design, optimization, and data analysis techniques.",
    skills: ["SQL", "Database Design", "Query Optimization", "Data Analysis", "PostgreSQL"],
    logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: false
  },
  {
    id: 8,
    title: "Agile Project Management",
    platform: "Scrum Alliance",
    date: "May 2024",
    description: "Certification in Agile methodologies, Scrum framework, and project management best practices.",
    skills: ["Agile", "Scrum", "Project Management", "Team Leadership", "Sprint Planning"],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
    certificateUrl: "#",
    verificationUrl: "#",
    featured: false
  }
];

export default function Certifications() {
  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Certifications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that demonstrate my commitment to continuous learning 
            and expertise in data science, cloud computing, and financial analysis.
          </p>
        </div>

        {/* Featured Certifications */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">Featured Certifications</h2>
            <Badge variant="secondary">Latest Achievements</Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCertifications.map((cert, index) => (
              <Card key={cert.id} className="hover-lift animate-fade-in group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img 
                        src={cert.logo} 
                        alt={cert.platform}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{cert.platform}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">{cert.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3 mr-1" />
                        Certificate
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCertifications.map((cert, index) => (
              <Card key={cert.id} className="hover-lift animate-fade-in group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img 
                        src={cert.logo} 
                        alt={cert.platform}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Award className="h-3 w-3 text-primary" />
                        <span className="text-xs text-primary font-medium truncate">{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground line-clamp-2">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 text-xs" asChild>
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-20 py-16 bg-muted/20 rounded-2xl">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold">Learning Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Skills Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">Latest Year</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
