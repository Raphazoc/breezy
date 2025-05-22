
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 hover:bg-muted transition-all"
          >
            <div className="relative w-5 h-5">
              {/* Sun Icon with Animation */}
              <Sun className={`h-5 w-5 absolute transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Moon Icon with Animation */}
              <Moon className={`h-5 w-5 absolute transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <span className="sr-only">
              {theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === "light" ? "Modo escuro" : "Modo claro"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
