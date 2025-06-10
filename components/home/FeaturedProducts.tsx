import { gothicFont } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="min-h-screen">
      <div
        className={`flex flex-col  items-center justify-center py-18 pb-0.5`}
      >
        <h1 className={`text-5xl text-center m-4 ${gothicFont.className}`}>
          FEATURED PRODUCT
        </h1>
        <p className="text-center px-40 m-5 text-gray-500">
          Discover our standout selection! Explore premium quality,
          best-selling, and exclusive products handpicked just for you.
          Limited-time offers and top-rated favorites—shop now before they're
          gone!
        </p>
      </div>

      {/* Featured Products Grid Card */}
      <div className="relative flex flex-row items-center justify-center gap-6">
        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              fill
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
            </div>
            <Button className="w-full">
              <span className="text-white">Add to Cart</span>
            </Button>
          </div>
        </div>

        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              fill
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
            </div>
            <Button className="w-full">
              <span className="text-white">Add to Cart</span>
            </Button>
          </div>
        </div>

        <div className=" relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
            <Image
              src="/products/Refocus.jpg"
              alt="Refocus Shirt"
              fill
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                Apple AirPods
              </p>
              <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
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
