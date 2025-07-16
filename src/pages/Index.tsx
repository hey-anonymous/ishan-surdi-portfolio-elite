
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Code2, TrendingUp, Sparkles, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import TechVisualization from "@/components/TechVisualization";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/70 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>Welcome to my digital space</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  I'm{" "}
                  <span className="text-gradient relative">
                    Ishan Surdi
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-50 animate-pulse" />
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl font-medium text-muted-foreground flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <span>Tech. Data. Impact.</span>
                  </p>
                  
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    An aspiring tech and finance professional crafting elegant solutions for complex systems.
                    I bridge the gap between data insights and strategic decision-making.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group relative overflow-hidden">
                  <Link to="/projects">
                    <span className="relative z-10 flex items-center">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact">
                    <span className="flex items-center">
                      <Target className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Get In Touch
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Enhanced Right Visualization */}
            <div className="relative h-96 lg:h-[500px] animate-slide-in-right">
              <TechVisualization />
              
              {/* Enhanced Floating Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 animate-float">
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-3 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <BarChart3 className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="text-sm font-medium">Data Analytics</div>
                    <div className="text-xs text-muted-foreground">Insights & Intelligence</div>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-3 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <Code2 className="h-8 w-8 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="text-sm font-medium">Development</div>
                    <div className="text-xs text-muted-foreground">Modern Solutions</div>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-3 col-span-2 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="text-sm font-medium">Strategic Impact</div>
                    <div className="text-xs text-muted-foreground">Driving Business Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Work Preview */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Portfolio Highlights</span>
            </div>
            
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
                type: "Data Science",
                gradient: "from-blue-500/10 to-purple-500/10"
              },
              {
                title: "Automated Trading Bot",
                description: "Machine learning-powered algorithmic trading system",
                tech: ["Python", "TensorFlow", "API"],
                type: "FinTech",
                gradient: "from-green-500/10 to-teal-500/10"
              },
              {
                title: "Business Intelligence Suite",
                description: "Comprehensive BI solution for enterprise decision-making",
                tech: ["Excel", "Tableau", "Power BI"],
                type: "Analytics",
                gradient: "from-orange-500/10 to-red-500/10"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover-lift cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {project.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted/80 px-2 py-1 rounded-md border border-border/50 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300"
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
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/projects">
                <span className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
