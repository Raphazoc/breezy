
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authReason, setAuthReason] = useState<"general" | "hostListing">("general");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const openAuthModal = (reason: "general" | "hostListing" = "general") => {
    setAuthReason(reason);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl text-airbnb-primary hidden sm:block">
                HospedaBem
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Busque destinos, propriedades..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-airbnb-primary focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-airbnb-primary text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />
              
              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => navigate("/search")}
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-1 border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow"
                  >
                    <Menu className="h-4 w-4" />
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => openAuthModal("general")}>
                    Cadastre-se
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openAuthModal("general")}>
                    Entrar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => openAuthModal("hostListing")}>
                    Anuncie seu espaço no HospedaBem
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openAuthModal("hostListing")}>
                    Hospede uma experiência
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/help">Central de Ajuda</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        reason={authReason}
      />
    </>
  );
};

export default Header;
