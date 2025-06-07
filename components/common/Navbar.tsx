import Link from "next/link"

export default function Navbar () {
  return (
    <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Left nav links */}
            <div className="">
              <Link href="/"></Link>
            <Link href={''}></Link>
            </div>
          </div>
        </div>
    </nav>
  )
    
}