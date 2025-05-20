
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
        {/* Logo atualizado */}
        <Link to="/" className="flex items-center">
          <svg
            className="h-8 w-8 text-airbnb-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.0327 0.52002C11.8577 0.740509 11.6843 0.960999 11.5125 1.18149C10.621 2.33547 9.8077 3.54328 9.09008 4.84954C8.67788 5.58139 8.29355 6.35592 7.9658 7.1713C7.63195 7.85379 7.34998 8.56471 7.12608 9.29831C6.9236 9.92921 6.73278 10.5687 6.55059 11.2082L6.47859 11.4829C6.09531 13.0968 5.92454 14.7473 5.97012 16.3981C6.02912 18.1652 6.39404 19.8091 7.2319 21.27C8.00617 22.6331 9.21204 23.4624 10.5698 23.787C10.9762 23.8899 11.3938 23.9405 11.8125 23.938C12.7704 23.938 13.7068 23.6845 14.5561 23.1876C15.7901 22.4534 16.7955 21.3278 17.6285 19.9263C18.1186 19.075 18.5336 18.1792 18.8674 17.2528C19.1624 16.2788 19.3995 15.2824 19.5508 14.263C19.6782 13.3404 19.7691 12.4119 19.8185 11.4814C19.8317 11.2635 19.8404 11.045 19.8448 10.8264V10.6992C19.8448 8.73737 19.3696 6.87892 18.4303 5.26968C17.8083 4.20246 16.922 3.31255 15.8511 2.68739C14.9597 2.15875 13.9327 1.88512 12.8907 1.88512C12.4956 1.88512 12.1037 1.92588 11.7265 2.00571C11.0639 2.11494 10.5508 1.94009 10.0541 1.45339C9.83539 1.23375 9.64383 0.992796 9.48035 0.736573C9.35946 0.53446 9.21777 0.339383 9.05609 0.154995C9.02522 0.103596 8.99582 0.0507243 8.96791 0C10.3389 0.517586 11.2827 1.38495 12.0327 2.38432C12.7827 1.38495 13.7266 0.517586 15.0968 0C14.916 0.217867 14.759 0.451779 14.5593 0.685691C14.0992 1.24574 13.6168 1.82592 12.9379 2.09878C13.4417 2.04347 13.9366 2.12701 14.3833 2.34167C15.6291 2.92633 16.6858 3.76361 17.517 4.82119C18.6321 6.26404 19.2251 8.02109 19.251 9.84961C19.2577 10.3138 19.2233 10.7772 19.1639 11.235C19.0376 12.2737 18.8412 13.3022 18.5763 14.3131C18.3356 15.2323 18.0481 16.1374 17.7138 17.0183C17.3824 17.9362 16.9831 18.8298 16.5182 19.6913C15.8795 20.8061 15.1147 21.7406 14.1946 22.3464C13.5281 22.7934 12.8 23.0158 12.0363 23.0158C11.29 23.0158 10.5636 22.7948 9.89266 22.3612C8.9577 21.7316 8.18711 20.7759 7.55511 19.6458C7.09411 18.8136 6.72194 17.9291 6.44887 16.9948C6.11033 15.8142 5.91399 14.5986 5.86083 13.373C5.8197 12.238 5.9019 11.103 6.10591 9.98717C6.29203 8.9924 6.57071 8.01288 6.93547 7.0618C7.25713 6.22885 7.63017 5.41979 8.05432 4.6464C8.6969 3.4414 9.41764 2.31859 10.2351 1.27032C10.5751 0.832316 10.9381 0.418136 11.3227 0.02832C11.3673 0.0207715 11.4127 0.000732422 11.4667 0.000732422H11.5517C11.6027 0.000732422 11.6482 0.0207715 11.6922 0.02832C11.7862 0.19372 11.8898 0.356572 12.0327 0.52002Z" />
          </svg>
          <span className="text-xl font-bold ml-2">hospedabem</span>
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
