
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg
            className="h-8 w-8 text-airbnb-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" />
          </svg>
          <span className="text-xl font-bold ml-2">airbnb</span>
        </Link>

        {/* Search Bar (Medium and Large Screens) */}
        <div className="hidden md:flex items-center border rounded-full p-1 px-2 shadow-sm hover:shadow-md transition-shadow duration-200">
          <Button variant="link" className="text-sm font-medium">
            Em qualquer lugar
          </Button>
          <div className="h-4 w-px bg-gray-300"></div>
          <Button variant="link" className="text-sm font-medium">
            Qualquer semana
          </Button>
          <div className="h-4 w-px bg-gray-300"></div>
          <Button variant="link" className="text-sm font-medium">
            Hóspedes
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-airbnb-primary text-white"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden md:flex items-center hover:bg-muted"
            asChild
          >
            <Link to="/host">Anuncie seu espaço</Link>
          </Button>
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-gray-300"
                size="sm"
              >
                <Menu className="h-4 w-4" />
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                Entrar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                Cadastrar
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/host">Anuncie seu espaço</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/favorites">Favoritos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile">Perfil</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                >
                  Início
                </Link>
                <Link
                  to="/host"
                  className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                >
                  Anuncie seu espaço
                </Link>
                <Link
                  to="/favorites"
                  className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                >
                  Favoritos
                </Link>
                <Link
                  to="/profile"
                  className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                >
                  Perfil
                </Link>
                <Button 
                  onClick={() => setIsAuthModalOpen(true)} 
                  className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white"
                >
                  Entrar / Cadastrar
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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
