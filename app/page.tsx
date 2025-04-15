"use client";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";
import FeaturedProjects from "@/components/FeaturedProjects";

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
                href="#"
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white px-10 py-2 rounded-full flex items-center justify-center transition duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-fuchsia-500/25 font-medium text-lg"
              >
                <span>Get Started Today</span>
                <span className="ml-2 flex items-center justify-center rounded-full bg-white w-9 h-9">
                  <ChevronRight className="h-6 w-6 text-cyan-500" />
                </span>
              </Link>

              <Link
                href="#"
                className="text-white hover:text-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 flex items-center justify-center transition duration-300 w-full md:w-auto group"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 group-hover:text-transparent group-hover:bg-clip-text text-lg font-medium">
                  View Our Work
                </span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <FeaturedProjects />
      </div>
    </div>
  );
}
