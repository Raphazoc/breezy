
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, User, Globe } from "lucide-react";
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
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const openAuthModal = (mode: "login" | "register") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-[60px] md:h-[53px]">
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
            <div className="hidden md:flex items-center">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-l-full border-r border-gray-300"
                  >
                    {t('navigation.anywhere')}
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 border-r border-gray-300"
                  >
                    {t('navigation.anyWeek')}
                  </button>
                  <div className="flex items-center">
                    <Input
                      type="text"
                      placeholder={t('navigation.addGuests')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 focus-visible:ring-0 text-sm text-muted-foreground bg-transparent placeholder:text-muted-foreground px-4 py-2 w-32"
                    />
                    <button
                      type="submit"
                      className="bg-airbnb-primary text-white p-2 rounded-full mr-2 hover:bg-red-600 transition-colors"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
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
                  <DropdownMenuItem onClick={() => openAuthModal("register")}>
                    Cadastre-se
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openAuthModal("login")}>
                    Entrar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/host">Anuncie seu espaço no HospedaBem</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/host">Hospede uma experiência</Link>
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
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;
