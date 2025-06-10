// import home component
import HeroSection from "@/components/home/HeroSection"
import About from "@/components/home/About"
import FeaturedProduct from "@/components/home/FeaturedProducts"
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"

// landing page

export default function Home(){
  return (
      <main>
        <Navbar/>
        <HeroSection />
        <About />
        <FeaturedProduct/>
      </main>
  );
}
