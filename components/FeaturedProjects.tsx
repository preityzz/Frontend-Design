import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <div className="container mx-auto px-6 py-20 md:py-12 relative hidden sm:block">
      <div className="relative h-[450px] md:h-[500px] flex items-center justify-center perspective-1500">
        <div className="absolute transform -rotate-20 -translate-x-[55%] md:-translate-x-[58%]  md:-translate-y-[15%] scale-85 md:scale-90 z-10 hover:z-30 transition-all duration-500 hover:scale-95 origin-right">
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 w-[280px] md:w-[320px]">
            <div className="relative">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        <div className="absolute z-15 hover:z-30 transform hover:scale-105 transition-all duration-500">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-md shadow-2xl overflow-hidden border border-cyan-500/50  md:w-[340px]">
            <div className="relative">
              <Image
                src="/project3.jpg"
                alt="Featured Project"
                width={500}
                height={350}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-black/40 transition-opacity duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-cyan-600 text-xs text-white px-2 py-1 rounded-full">
                  FEATURED
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute transform rotate-20 translate-x-[55%] md:translate-x-[58%]  md:-translate-y-[15%] scale-85 md:scale-90 z-10 hover:z-30 transition-all duration-500 hover:scale-95 origin-left">
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 w-[280px] md:w-[320px]">
            <div className="relative">
              <Image
                src="/project4.jpg"
                alt="Project 4"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
