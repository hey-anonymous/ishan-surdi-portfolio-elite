
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Code2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import TechVisualization from "@/components/TechVisualization";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  I'm{" "}
                  <span className="text-gradient">Ishan Surdi</span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
                  Tech. Data. Impact.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  An aspiring tech and finance professional crafting elegant solutions for complex systems.
                  I bridge the gap between data insights and strategic decision-making.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right Visualization */}
            <div className="relative h-96 lg:h-[500px] animate-slide-in-right">
              <TechVisualization />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 animate-float">
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-sm font-medium">Data Analytics</div>
                  </div>
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2">
                    <Code2 className="h-8 w-8 text-accent mx-auto" />
                    <div className="text-sm font-medium">Development</div>
                  </div>
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2 col-span-2">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-sm font-medium">Strategic Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my recent projects spanning data science, web development, and business analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Data Dashboard",
                description: "Real-time analytics dashboard for investment portfolio tracking",
                tech: ["Python", "Power BI", "SQL"],
                type: "Data Science"
              },
              {
                title: "Automated Trading Bot",
                description: "Machine learning-powered algorithmic trading system",
                tech: ["Python", "TensorFlow", "API"],
                type: "FinTech"
              },
              {
                title: "Business Intelligence Suite",
                description: "Comprehensive BI solution for enterprise decision-making",
                tech: ["Excel", "Tableau", "Power BI"],
                type: "Analytics"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover-lift cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
