// app/page.tsx or pages/index.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gothicFont } from "@/app/fonts";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className=" relative h-screen w-full overflow-hidden">
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
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* centered content */}
      <div className="relative z-10 h-full flex flex-col justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        {/* text content */}
        <div className={`mb-6 sm:mb-8 md:mb-12 ${gothicFont.className}`}>
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 
                          text-center sm:text-left 
                          sm:ml-0 md:ml-8 lg:ml-16"
          >
            EMBODY
          </h1>
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 
                          text-center sm:text-left 
                          sm:ml-8 md:ml-24 lg:ml-48 xl:ml-72"
          >
            YOUR
          </h1>
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
                          text-center sm:text-left 
                          sm:ml-4 md:ml-16 lg:ml-32 xl:ml-50"
          >
            JOURNEY
          </h1>
        </div>

        <div className="flex justify-center sm:justify-start sm:ml-8 md:ml-24 lg:ml-48 xl:ml-98">
          <Link href="/products">
            <Button className="text-black px-10 py-6 rounded-3xl font-medium bg-gray-200 hover:bg-gray hover:text-gray transition-colors duration-300">
              Shop now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
