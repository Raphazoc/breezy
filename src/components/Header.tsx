
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./AuthModal";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [authReason, setAuthReason] = useState<"general" | "hostListing">("general");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleHostClick = () => {
    // Check if user is logged in (in a real app, you would check auth state)
    const isLoggedIn = false; // This would be from your auth context/state
    
    if (!isLoggedIn) {
      setAuthReason("hostListing");
      setIsAuthModalOpen(true);
    } else {
      navigate("/host");
    }
  };

  return (
    <header className="bg-background border-b py-2 sticky top-0 z-20">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <MapPin className="h-5 w-5 text-airbnb-primary" />
          <span className="text-lg font-medium ml-1">hospedabem</span>
        </Link>

        {/* Search Bar - Center */}
        <form onSubmit={handleSearch} className="max-w-xs w-full mx-4 relative flex items-center">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Buscar destinos, propriedades..."
              className="w-full py-1.5 px-4 pr-10 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-airbnb-primary text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-airbnb-primary text-white p-1.5 rounded-full hover:bg-red-600 transition-colors"
            >
              <Search className="h-3 w-3" />
            </button>
          </div>
        </form>

        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden md:flex text-xs hover:bg-muted"
            onClick={handleHostClick}
          >
            Anuncie seu espaço
          </Button>
          
          <ThemeToggle />
          
          <Button
            variant="outline"
            className="flex items-center gap-1 rounded-full border-gray-300 p-1.5"
            size="sm"
            onClick={() => {
              setAuthReason("general");
              setIsAuthModalOpen(true);
            }}
          >
            Entrar
          </Button>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        reason={authReason}
      />
    </header>
  );
};

export default Header;
