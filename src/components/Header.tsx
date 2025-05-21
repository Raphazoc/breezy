
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, MapPin } from "lucide-react";
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
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo atualizado */}
        <Link to="/" className="flex items-center">
          <MapPin className="h-6 w-6 text-airbnb-primary stroke-2" />
          <span className="text-lg font-bold ml-2">hospedabem</span>
        </Link>

        {/* Search Bar (Medium and Large Screens) */}
        <div className="hidden md:flex items-center border rounded-full p-1 px-2 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-[400px]">
          <Button variant="link" className="text-xs font-medium">
            Em qualquer lugar
          </Button>
          <div className="h-4 w-px bg-gray-300"></div>
          <Button variant="link" className="text-xs font-medium">
            Qualquer semana
          </Button>
          <div className="h-4 w-px bg-gray-300"></div>
          <Button variant="link" className="text-xs font-medium">
            Hóspedes
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-airbnb-primary text-white h-7 w-7"
          >
            <Search className="h-3 w-3" />
          </Button>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden md:flex items-center hover:bg-muted text-xs"
            asChild
          >
            <Link to="/host">Anuncie seu espaço</Link>
          </Button>
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-1 rounded-full border-gray-300"
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

        {/* Mobile Menu - Simplificado */}
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
