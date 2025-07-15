
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/ThemeProvider";
import { useFontSize } from "@/hooks/useFontSize";
import { FontSizeProvider } from "@/hooks/useFontSize";
import { Sun, Moon, Type, Contrast, Menu, X } from "lucide-react";

const AccessibilityControls = () => {
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
            
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("small")}
                className={`h-8 px-2 ${fontSize === "small" ? "bg-primary/10" : ""}`}
                aria-label="Small font size"
              >
                <Type className="h-3 w-3" />
                <span className="ml-1 text-xs">A-</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("medium")}
                className={`h-8 px-2 ${fontSize === "medium" ? "bg-primary/10" : ""}`}
                aria-label="Medium font size"
              >
                <Type className="h-4 w-4" />
                <span className="ml-1 text-sm">A</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize("large")}
                className={`h-8 px-2 ${fontSize === "large" ? "bg-primary/10" : ""}`}
                aria-label="Large font size"
              >
                <Type className="h-5 w-5" />
                <span className="ml-1 text-base">A+</span>
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
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("small")}
                  className={`h-8 px-2 ${fontSize === "small" ? "bg-primary/10" : ""}`}
                >
                  A-
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("medium")}
                  className={`h-8 px-2 ${fontSize === "medium" ? "bg-primary/10" : ""}`}
                >
                  A
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize("large")}
                  className={`h-8 px-2 ${fontSize === "large" ? "bg-primary/10" : ""}`}
                >
                  A+
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
};

export default function AccessibilityBar() {
  return (
    <FontSizeProvider>
      <AccessibilityControls />
    </FontSizeProvider>
  );
}
