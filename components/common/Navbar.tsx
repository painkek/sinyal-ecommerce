import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gothicFont } from "@/app/fonts"

export default function Navbar () {
  return (
    <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between h-20">
            {/* left nav links */}
            <div className="flex items-end-safe space-x-8 mb-1.5">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href='/products'>Products</Link>
            </div>

            {/* centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
              <Link href="/" className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest ${gothicFont.className}`}>
                SINYAL
              </Link>
            </div>

            {/* right icons */}
            <div className="flex items-baseline-last gap-4">
              <Button variant="ghost" size="icon">
                  <Search className="w-5 h-5" /> 
              </Button>
              <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-5 h-5"/>
              </Button>
              <Button variant="ghost" size="icon">
                  <User className="w-5 h-5"/>
              </Button>
            </div>
          </div>
        </div>
    </nav>
  )
    
}