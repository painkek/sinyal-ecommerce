import { gothicFont } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="min-h-screen mb-12">
      <div
        className={`flex flex-col  items-center justify-center py-18 pb-0.5`}
      >
        <h1 className={`text-5xl text-center m-4 ${gothicFont.className}`}>
          FEATURED PRODUCT
        </h1>
        <p className="text-center px-40 m-5 text-gray-500">
          Discover our standout selection! Explore premium quality,
          best-selling, and exclusive products handpicked just for you.
          Limited-time offers and top-rated favorites—shop now before
          they&apos;re gone!
        </p>
      </div>

      {/* Featured Products Grid Card */}
      <div className="relative flex flex-wrap items-center justify-center px-6 py-4 gap-6">
        {/* Product Card */}
        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
          <div className="relative p-2.5 h-80 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              height={320}
              width={320}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">P699</p>
            </div>
            <Button className="w-full">
              <span className="text-white">Add to Cart</span>
            </Button>
          </div>
        </div>

        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
          <div className="relative p-2.5 h-80 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              height={320}
              width={320}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">P699</p>
            </div>
            <Button className="w-full">
              <span className="text-white">Add to Cart</span>
            </Button>
          </div>
        </div>

        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
          <div className="relative p-2.5 h-80 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              height={320}
              width={320}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">P699</p>
            </div>
            <Button className="w-full">
              <span className="text-white">Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
