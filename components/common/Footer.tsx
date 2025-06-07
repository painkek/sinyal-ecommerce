// components/Navbar.tsx

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full px-20 py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left nav links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-gray-700">
            Home
          </Link>
          <Link href="/product" className="text-sm hover:text-gray-700">
            Product
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-7xl font-bold tracking-widest">
            SINYAL
          </Link>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
