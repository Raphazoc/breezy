
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex items-center">
            <svg 
              className="w-8 h-8 text-airbnb-primary" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12.0002 1.25C9.96143 1.24997 8.66683 2.16496 7.6855 3.42761C6.72596 4.65841 6.06243 6.29456 5.51311 7.80223C4.40736 10.8028 3.64221 14.1966 2.29833 16.8192C1.97175 17.4146 1.62538 17.9756 1.24566 18.4519C1.10304 18.6394 0.944382 18.8362 0.804177 19.0199C1.86817 19.8683 2.91542 20 3.9167 20C4.97474 20 6.07272 19.4312 6.66256 18.7767C7.98584 17.3242 8.98751 14.5834 9.58833 13.1503C9.69958 13.1908 9.82892 13.2116 9.96147 13.2116C10.0886 13.2116 10.213 13.1932 10.3202 13.1551C10.3657 13.7054 10.6232 14.216 11.9002 14.216C13.1771 14.216 13.4347 13.7054 13.4802 13.1551C13.5873 13.1932 13.7118 13.2116 13.8389 13.2116C13.9714 13.2116 14.1007 13.1908 14.212 13.1503C14.8128 14.5834 15.8144 17.3242 17.1377 18.7767C17.7276 19.4312 18.8255 20 19.8836 20C20.8849 20 21.9321 19.8683 22.9961 19.0199C22.8559 18.8362 22.6972 18.6394 22.5546 18.4519C22.1749 17.9756 21.8286 17.4146 21.502 16.8192C20.1581 14.1966 19.3929 10.8028 18.2872 7.80223C17.7379 6.29456 17.0743 4.65841 16.1148 3.42761C15.1335 2.16496 13.8389 1.24997 11.8001 1.25H12.0002Z"/>
            </svg>
            <span className="ml-2 text-xl font-bold text-airbnb-primary">airbnb</span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
          <button className="font-medium text-sm">Anywhere</button>
          <span className="mx-2 h-5 w-px bg-gray-300"></span>
          <button className="font-medium text-sm">Any week</button>
          <span className="mx-2 h-5 w-px bg-gray-300"></span>
          <button className="text-gray-500 text-sm">Add guests</button>
          <div className="ml-2 p-2 bg-airbnb-primary rounded-full text-white">
            <Search className="h-3 w-3" />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center">
          <button className="hidden md:block mr-4 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100">
            Become a Host
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 border rounded-full p-1 px-3 shadow-sm hover:shadow-md transition-shadow">
                <Menu className="h-4 w-4" />
                <User className="h-6 w-6 text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="cursor-pointer font-medium">Sign up</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Log in</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Host your home</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Host an experience</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 py-3 flex justify-center">
        <button className="flex items-center w-full justify-between border rounded-full px-4 py-2 shadow-sm">
          <div className="flex items-center">
            <Search className="h-4 w-4 mr-2" />
            <div className="text-left">
              <div className="text-sm font-medium">Anywhere</div>
              <div className="text-xs text-gray-500">Any week · Add guests</div>
            </div>
          </div>
          <div className="border rounded-full p-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 5L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
