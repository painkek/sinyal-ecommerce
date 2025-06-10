import Image from "next/image";
import { gothicFont } from "@/app/fonts";

export default function Timeless() {
  return (
    <div
      className={`bg-neutral-100 text-black min-h-screen flex flex-col items-center justify-center py-12 px-6 ${gothicFont.className}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-center space-y-2 mb-12">
        <div>TIMELESS.</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Left Image + Text */}
        <div className="text-center space-y-4">
          <div className="text-2xl md:text-3xl font-bold">CLASSIC.</div>
          <div className="relative w-full h-[500px]">
            <Image
              src="/timeless/timeless1.jpg"
              alt="Classic"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="text-center space-y-4">
          <div className="relative w-full h-[500px]">
            <Image
              src="/timeless/timeless2.jpg"
              alt="Timeless"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Right Image + Text + Button */}
        <div className="text-center space-y-4">
          <div className="text-2xl md:text-3xl font-bold">SINYAL.</div>
          <div className="relative w-full h-[500px]">
            <Image
              src="/timeless/timeless3.jpg"
              alt="Sinyal"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
