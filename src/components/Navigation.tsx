import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/images/Logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm hover:text-muted-foreground transition-colors">
                Books
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <Link to="/collection/novels">Novels</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/collection/self-help">Self-Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/collection/biography">Biography</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/shop" className="text-sm hover:text-muted-foreground transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm hover:text-muted-foreground transition-colors">
              About us
            </Link>
            <Link to="/contact" className="text-sm hover:text-muted-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books"
                className="pl-10 w-48 lg:w-64 rounded-full border-foreground/20"
              />
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
