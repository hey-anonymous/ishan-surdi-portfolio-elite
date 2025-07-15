
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { Sun, Moon, Contrast, Menu, X } from "lucide-react";

export default function AccessibilityBar() {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const [highContrast, setHighContrast] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast", !highContrast);
  };

  return (
    <div className="bg-muted/50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Desktop Version */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-muted-foreground font-medium">Accessibility:</span>
            
            {/* Unique Font Size Controls */}
            <div className="flex items-center bg-background border rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("small")}
                className={`h-7 px-3 rounded-md transition-all ${
                  fontSize === "small" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-muted"
                }`}
                aria-label="Small font size"
              >
                <span className="text-xs font-medium">Small</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("medium")}
                className={`h-7 px-3 rounded-md transition-all ${
                  fontSize === "medium" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-muted"
                }`}
                aria-label="Normal font size"
              >
                <span className="text-sm font-medium">Normal</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("large")}
                className={`h-7 px-3 rounded-md transition-all ${
                  fontSize === "large" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-muted"
                }`}
                aria-label="Large font size"
              >
                <span className="text-base font-medium">Large</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-8 px-3"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="ml-2 text-sm">
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleHighContrast}
              className={`h-8 px-3 ${highContrast ? "bg-primary/10" : ""}`}
              aria-label="Toggle high contrast"
            >
              <Contrast className="h-4 w-4" />
              <span className="ml-2 text-sm">Contrast</span>
            </Button>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-sm text-muted-foreground font-medium">Accessibility</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0"
              aria-label="Toggle accessibility menu"
            >
              {isExpanded ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {isExpanded && (
          <div className="md:hidden py-3 border-t">
            <div className="flex flex-wrap gap-2">
              {/* Mobile Font Size Controls */}
              <div className="flex items-center bg-background border rounded-lg p-1 w-full">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("small")}
                  className={`flex-1 h-8 rounded-md ${
                    fontSize === "small" 
                      ? "bg-primary text-primary-foreground" 
                      : ""
                  }`}
                >
                  Small
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("medium")}
                  className={`flex-1 h-8 rounded-md ${
                    fontSize === "medium" 
                      ? "bg-primary text-primary-foreground" 
                      : ""
                  }`}
                >
                  Normal
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("large")}
                  className={`flex-1 h-8 rounded-md ${
                    fontSize === "large" 
                      ? "bg-primary text-primary-foreground" 
                      : ""
                  }`}
                >
                  Large
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-8"
              >
                {theme === "light" ? <Moon className="h-4 w-4 mr-1" /> : <Sun className="h-4 w-4 mr-1" />}
                {theme === "light" ? "Dark" : "Light"}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleHighContrast}
                className={`h-8 ${highContrast ? "bg-primary/10" : ""}`}
              >
                <Contrast className="h-4 w-4 mr-1" />
                Contrast
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
