import { useState } from "react";
import { Accessibility, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-gray-900 text-white shadow-lg border-b border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Accessibility className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AccessibilityAnalyzer
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 border-l border-gray-800">
            <nav className="mt-10">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="block py-2 hover:text-blue-400 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="block py-2 hover:text-blue-400 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
