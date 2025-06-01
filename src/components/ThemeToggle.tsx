
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
      className="relative h-9 w-9 rounded-md border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
          theme === 'light' 
            ? 'rotate-0 scale-100 opacity-100 text-yellow-500' 
            : 'rotate-90 scale-0 opacity-0'
        }`} />
        
        {/* Moon Icon */}
        <Moon className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100 opacity-100 text-blue-400' 
            : '-rotate-90 scale-0 opacity-0'
        }`} />
      </div>
      
      {/* Background animation */}
      <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100' 
          : 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-0 group-hover:opacity-100'
      }`} />
      
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};

export default ThemeToggle;
