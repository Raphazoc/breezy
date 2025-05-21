
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-background border-b py-3">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <MapPin className="h-5 w-5 text-airbnb-primary" />
          <span className="text-lg font-medium ml-1">hospedabem</span>
        </Link>

        {/* Search Bar - Center */}
        <form onSubmit={handleSearch} className="max-w-md w-full mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar destinos, propriedades..."
              className="w-full py-2 px-4 pr-10 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-airbnb-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-airbnb-primary text-white p-1.5 rounded-full hover:bg-red-600 transition-colors"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>

        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden md:flex text-xs hover:bg-muted"
            asChild
          >
            <Link to="/host">Anuncie seu espaço</Link>
          </Button>
          
          <ThemeToggle />
          
          <Button
            variant="outline"
            className="flex items-center gap-1 rounded-full border-gray-300 p-1.5"
            size="sm"
            onClick={() => setIsAuthModalOpen(true)}
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
