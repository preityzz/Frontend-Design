"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden font-['Inter',sans-serif]">
      <Head>
        <title>Kyptronix LLP - The Next Thing in Digital Industry</title>
        <meta
          name="description"
          content="Kyptronix LLP - Your trusted digital partner"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-40"
        >
          <source src="/0_Abstract_3d_1920x1080.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/God rays.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10">
        <Navigation />

        <div className="container mx-auto px-6 py-16 md:py-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide text-cyan-50">
              Kyptronix LLP –
            </h2>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight leading-tight">
              THE NEXT THING IN
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                DIGITAL INDUSTRY
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              At Kyptronix LLP, we&apos;re not just building websites, apps, or
              marketing strategies—we&apos;re creating business success. Based
              in Delaware, we help companies across the U.S. scale rapidly,
              increase conversions, and dominate their industries. Whether you
              need a custom-built website that drives traffic, a mobile app that
              wows, or a blockchain solution that disrupts your industry,
              Kyptronix is your trusted digital partner.
            </p>

            <p className="text-xl mb-12 font-medium">
              Don&apos;t just compete—lead. Ready to see what Kyptronix can do
              for you?
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-8">
              <Link
                href="/get-started"
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white px-10 py-4 rounded-full flex items-center justify-center transition duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-fuchsia-500/25 font-medium text-lg"
              >
                <span>Get Started Today</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="text-white hover:text-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 flex items-center justify-center transition duration-300 w-full md:w-auto group"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 group-hover:text-transparent group-hover:bg-clip-text text-lg font-medium">
                  View Our Work
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:text-fuchsia-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 md:py-12 relative">
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
      </div>
    </div>
  );
}
