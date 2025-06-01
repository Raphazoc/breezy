
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full w-10 h-10 hover:bg-muted transition-all duration-300 group"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <div className={`absolute inset-0 transform transition-all duration-500 ${
          theme === 'light' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 rotate-180 opacity-0'
        }`}>
          <div className="w-full h-full relative">
            {/* Sun center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full"></div>
            {/* Sun rays */}
            <div className="absolute top-0 left-1/2 w-0.5 h-1.5 bg-yellow-500 transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-1.5 bg-yellow-500 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-1.5 h-0.5 bg-yellow-500 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-1.5 h-0.5 bg-yellow-500 transform -translate-y-1/2"></div>
            <div className="absolute top-1 right-1 w-0.5 h-1 bg-yellow-500 transform rotate-45"></div>
            <div className="absolute top-1 left-1 w-0.5 h-1 bg-yellow-500 transform -rotate-45"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-1 bg-yellow-500 transform -rotate-45"></div>
            <div className="absolute bottom-1 left-1 w-0.5 h-1 bg-yellow-500 transform rotate-45"></div>
          </div>
        </div>
        
        {/* Moon Icon */}
        <div className={`absolute inset-0 transform transition-all duration-500 ${
          theme === 'dark' 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 -rotate-180 opacity-0'
        }`}>
          <div className="w-full h-full relative">
            <div className="w-5 h-5 bg-slate-300 rounded-full relative overflow-hidden">
              <div className="absolute top-1 right-1 w-4 h-4 bg-slate-800 rounded-full"></div>
            </div>
            {/* Stars */}
            <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-slate-300 rounded-full"></div>
            <div className="absolute bottom-2 right-1 w-0.5 h-0.5 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};

export default ThemeToggle;
