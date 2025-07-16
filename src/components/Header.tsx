
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/projects", label: "Projects", icon: "💼" },
    { href: "/certifications", label: "Certifications", icon: "🏆" },
    { href: "/about", label: "About", icon: "👨‍💻" },
    { href: "/contact", label: "Contact", icon: "📧" },
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
          ? "glassmorphism shadow-lg border-b border-primary/10"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="relative group flex items-center space-x-2"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="h-6 w-6 text-primary relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
              Ishan Surdi
            </span>
            <Zap className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform transition-transform duration-300 origin-left ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t glassmorphism">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center space-x-3 px-3 py-3 text-base font-medium transition-all duration-300 rounded-xl group ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                  <span className="flex-1">{link.label}</span>
                  {isActive(link.href) && (
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
