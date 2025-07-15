
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Filter, BarChart3, Code2, Brain, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Financial Portfolio Analytics Dashboard",
    description: "Comprehensive real-time dashboard for tracking investment portfolios with advanced risk metrics and performance analytics.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Algorithmic Trading Bot",
    description: "Machine learning-powered trading system with backtesting capabilities and real-time market data integration.",
    category: "FinTech",
    technologies: ["Python", "TensorFlow", "Alpha Vantage API", "Backtrader"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Business Intelligence Suite",
    description: "Enterprise-grade BI solution with interactive dashboards, automated reporting, and predictive analytics.",
    category: "Analytics",
    technologies: ["Power BI", "Excel", "DAX", "SQL Server", "Azure"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description: "Advanced clustering analysis for customer segmentation using machine learning algorithms and behavioral data.",
    category: "Data Science",
    technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations.",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 6,
    title: "Supply Chain Optimization Model",
    description: "Mathematical optimization model for supply chain management with cost reduction and efficiency improvements.",
    category: "Analytics",
    technologies: ["Python", "PuLP", "NetworkX", "Excel", "Tableau"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];

const categories = ["All", "Data Science", "FinTech", "Analytics", "Web Development"];

const categoryIcons = {
  "Data Science": BarChart3,
  "FinTech": TrendingUp,
  "Analytics": Brain,
  "Web Development": Code2
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of data science projects, web applications, and analytical solutions 
            that demonstrate technical expertise and business impact.
          </p>
        </div>

        {/* Featured Projects */}
        {selectedCategory === "All" && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <Badge variant="secondary">Highlighted</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover-lift animate-fade-in group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        {React.createElement(categoryIcons[project.category as keyof typeof categoryIcons], { 
                          className: "h-3 w-3 mr-1" 
                        })}
                        {project.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Filter */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover-lift animate-fade-in group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {React.createElement(categoryIcons[project.category as keyof typeof categoryIcons], { 
                      className: "h-3 w-3 mr-1" 
                    })}
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
