
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, Code, TrendingUp, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
    { href: "mailto:ishan@example.com", icon: Mail, label: "Email", color: "hover:text-red-500" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-muted/30 border-t overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link
              to="/"
              className="group flex items-center space-x-3"
            >
              <div className="relative">
                <Sparkles className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                Ishan Surdi
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              An aspiring tech and finance professional crafting elegant solutions for complex systems. 
              Bridging innovation with strategic impact.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 group">
                <Code className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">15+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <TrendingUp className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">8+ Certifications</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Heart className="h-4 w-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Passion Driven</span>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
            </h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group flex items-center space-x-2"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Enhanced Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center space-x-2">
              <span>Connect</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
            </h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-3 p-2 text-muted-foreground transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group mt-4 hover:bg-primary/5 hover:border-primary/20"
            >
              <ArrowUp className="h-3 w-3 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Ishan Surdi. All rights reserved.
              </p>
              <span className="text-red-500 animate-pulse">❤️</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-4">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-red-500 animate-pulse" />
                <span>and</span>
                <Code className="h-3 w-3 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
