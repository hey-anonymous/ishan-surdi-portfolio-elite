
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphism shadow-xl border-b border-border/50"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      {/* Dynamic background gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-5 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)), transparent 40%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="group relative text-2xl font-bold text-foreground hover:text-primary transition-all duration-300"
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Code2 className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <Sparkles className="h-3 w-3 text-accent absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="relative">
                Ishan Surdi
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className={`relative py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Animated background */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-all duration-300 ${
                    isActive(link.href) ? "opacity-100 scale-100" : "group-hover:opacity-100 group-hover:scale-105"
                  }`} />
                  
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${
                    isActive(link.href) ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`} />
                </Link>
              </div>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-background/95 backdrop-blur">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-3 text-base font-medium transition-all duration-300 rounded-lg transform ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "bg-primary scale-100" : "bg-transparent scale-0"
                  }`} />
                  <span>{link.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
