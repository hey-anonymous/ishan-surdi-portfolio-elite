
import { createContext, useContext, useState, useEffect } from "react";

type FontSize = "small" | "medium" | "large";

type FontSizeContextType = {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontSize, setFontSize] = useState<FontSize>("medium");

  useEffect(() => {
    const stored = localStorage.getItem("font-size") as FontSize;
    if (stored && ["small", "medium", "large"].includes(stored)) {
      setFontSize(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("font-size", fontSize);
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};
