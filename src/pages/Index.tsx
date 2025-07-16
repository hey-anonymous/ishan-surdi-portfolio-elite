
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Code2, TrendingUp, Database, Lightbulb, Target, Zap, Brain, Rocket, Star, Sparkles, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import TechVisualization from "@/components/TechVisualization";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedCounter from "@/components/AnimatedCounter";
import SkillCard from "@/components/SkillCard";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <FloatingParticles />
        
        {/* Additional decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium border border-primary/20 group hover:from-primary/20 hover:to-accent/20 transition-all duration-300">
                    <Sparkles className="h-3 w-3 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Available for opportunities
                    <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="block">I'm</span>
                    <span className="text-gradient relative block group">
                      Ishan Surdi
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-25 animate-pulse group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 -translate-y-2 translate-x-2">
                        <Zap className="h-6 w-6 text-accent animate-bounce" style={{ animationDelay: '1s' }} />
                      </div>
                    </span>
                  </h1>
                  
                  {/* Enhanced tagline with typing effect */}
                  <div className="relative">
                    <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
                      <span className="text-primary">Tech.</span>{" "}
                      <span className="text-accent">Data.</span>{" "}
                      <span className="text-gradient">Impact.</span>
                    </p>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
                  </div>
                  
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    An aspiring tech and finance professional crafting{" "}
                    <span className="text-primary font-medium">elegant solutions</span> for{" "}
                    <span className="text-accent font-medium">complex systems</span>.
                    I bridge the gap between data insights and strategic decision-making.
                  </p>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/projects">
                    <span className="relative z-10 flex items-center">
                      <Rocket className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Projects
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <Link to="/contact">
                    <Users className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-primary transition-colors">Get In Touch</span>
                  </Link>
                </Button>
              </div>

              {/* Enhanced Stats with icons */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Code2 className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-accent group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={8} suffix="+" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={3} suffix="+" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={24} suffix="/7" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Visualization */}
            <div className="relative h-96 lg:h-[500px] animate-slide-in-right">
              <TechVisualization />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 animate-float">
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2 group hover-lift cursor-pointer border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative">
                      <BarChart3 className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Data Analytics</div>
                    <div className="text-xs text-muted-foreground">Advanced Insights</div>
                  </div>
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2 group hover-lift cursor-pointer border border-accent/10 hover:border-accent/30 transition-all duration-300">
                    <div className="relative">
                      <Code2 className="h-8 w-8 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm font-medium group-hover:text-accent transition-colors duration-300">Development</div>
                    <div className="text-xs text-muted-foreground">Full-Stack Solutions</div>
                  </div>
                  <div className="glassmorphism p-6 rounded-xl text-center space-y-2 col-span-2 group hover-lift cursor-pointer border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Strategic Impact</div>
                    <div className="text-xs text-muted-foreground">Business Transformation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Brain className="h-3 w-3 mr-2" />
              Core Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">What I Bring to the Table</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with business acumen to deliver impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={Database}
              title="Data Science"
              description="Transform raw data into actionable insights using advanced analytics and machine learning techniques."
              color="from-blue-500 to-cyan-500"
              delay={0}
            />
            <SkillCard
              icon={Code2}
              title="Full-Stack Development"
              description="Build scalable web applications with modern frameworks and best practices."
              color="from-purple-500 to-pink-500"
              delay={100}
            />
            <SkillCard
              icon={TrendingUp}
              title="Financial Analysis"
              description="Analyze market trends and financial data to drive strategic business decisions."
              color="from-green-500 to-emerald-500"
              delay={200}
            />
            <SkillCard
              icon={Lightbulb}
              title="Innovation Strategy"
              description="Identify opportunities for technological advancement and process optimization."
              color="from-yellow-500 to-orange-500"
              delay={300}
            />
            <SkillCard
              icon={Target}
              title="Project Management"
              description="Lead cross-functional teams to deliver complex projects on time and within budget."
              color="from-red-500 to-pink-500"
              delay={400}
            />
            <SkillCard
              icon={Rocket}
              title="Business Intelligence"
              description="Design and implement BI solutions that empower data-driven decision making."
              color="from-indigo-500 to-blue-500"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Rocket className="h-3 w-3 mr-2" />
              Latest Work
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
                gradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                title: "Automated Trading Bot",
                description: "Machine learning-powered algorithmic trading system",
                tech: ["Python", "TensorFlow", "API"],
                type: "FinTech",
                gradient: "from-green-500/10 to-emerald-500/10"
              },
              {
                title: "Business Intelligence Suite",
                description: "Comprehensive BI solution for enterprise decision-making",
                tech: ["Excel", "Tableau", "Power BI"],
                type: "Analytics",
                gradient: "from-purple-500/10 to-pink-500/10"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover-lift cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {project.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-2 py-1 rounded-md group-hover:bg-primary/10 transition-colors duration-300"
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
                <span className="group-hover:text-primary transition-colors">View All Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
