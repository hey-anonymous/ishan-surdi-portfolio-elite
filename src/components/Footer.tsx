
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp, Sparkles } from "lucide-react";
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
    { href: "https://github.com", icon: Github, label: "GitHub", color: "hover:text-purple-400" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { href: "mailto:ishan@example.com", icon: Mail, label: "Email", color: "hover:text-green-400" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link
              to="/"
              className="group inline-flex items-center space-x-3 text-2xl font-bold text-foreground hover:text-primary transition-all duration-300"
            >
              <div className="relative">
                <Code2 className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="relative">
                Ishan Surdi
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              An aspiring tech and finance professional crafting elegant solutions for complex systems. 
              Building the future, one line of code at a time.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 text-muted-foreground transition-all duration-300 hover:bg-primary/5 rounded-xl border border-transparent hover:border-primary/20 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Navigation</span>
            </h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group relative text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 rounded-full bg-primary/50 transition-all duration-300 group-hover:bg-primary group-hover:scale-150" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Back to Top Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Quick Actions</span>
            </h3>
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="group w-full justify-start space-x-3 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              <span>Back to Top</span>
            </Button>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Ishan Surdi. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
