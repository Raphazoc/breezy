
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

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
      onClick={toggleTheme} 
      className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-muted"
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-5 w-5" />
          <span className="hidden sm:inline text-sm">Modo escuro</span>
        </>
      ) : (
        <>
          <Sun className="h-5 w-5" />
          <span className="hidden sm:inline text-sm">Modo claro</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
