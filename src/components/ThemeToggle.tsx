
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
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
          <div className="flex items-center gap-2 px-2 py-1 rounded-full border hover:bg-muted cursor-pointer transition-all" onClick={toggleTheme}>
            <Sun className={`h-4 w-4 transition-opacity duration-300 ${theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground opacity-50'}`} />
            <Switch 
              checked={theme === "dark"}
              className="data-[state=checked]:bg-indigo-600"
            />
            <Moon className={`h-4 w-4 transition-opacity duration-300 ${theme === 'dark' ? 'text-indigo-400' : 'text-muted-foreground opacity-50'}`} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-foreground">{theme === "light" ? "Alternar para modo escuro" : "Alternar para modo claro"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
