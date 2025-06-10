import { gothicFont } from "@/app/fonts";

export default function About() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-white flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-4">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left ${gothicFont.className}`}>NO RISK</h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-sm md:max-w-md text-center px-4 md:px-0 order-2 md:order-none">
            Explore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left order-3 md:order-none ${gothicFont.className}`}>NO STORY</h1>
        </div>
      </div>
    </section>
   
  ) 
  
}
