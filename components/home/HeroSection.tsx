// app/page.tsx or pages/index.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gothicFont } from "@/app/fonts";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-2.svg"
          alt="Hero Image"
          fill
          className="object-cover object-center z-0"
          priority
          quality={100}
          sizes="100vw"
        />
        { /* dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      { /* centered content */ } 
        <div className="relative z-10 h-full flex flex-col justify-center text-white px-4">

          { /* text content */ }
          <div className={`mb-2 ${gothicFont.className}`}>
            <h1 className="py-2 px-10 md:text-7xl lg:text-8xl font-bold">EMBODY</h1>
            <h1 className="py-2 px-72 md:text-7xl lg:text-8xl font-bold">YOUR</h1>
            <h1 className="py-2 px-50 md:text-7xl lg:text-8xl font-bold">JOURNEY</h1>
          </div>
        
        <div className="flex px-98">
          <Link  href="/products">
            <Button className="text-black px-10 py-6 rounded-3xl font-medium bg-gray-200 hover:bg-gray hover:text-gray transition-colors duration-300">Shop now</Button>
          </Link>
        </div>
                
      </div>
    </section>
  );
}
