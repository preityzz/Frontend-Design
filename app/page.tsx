// pages/index.js
"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Kyptronix LLP - The Next Thing in Digital Industry</title>
        <meta
          name="description"
          content="Kyptronix LLP - Your trusted digital partner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Video */}
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

      {/* God Rays Overlay */}
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kyptronix LLP"
              width={150}
              height={50}
              className="mr-4"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Package & Pricing
            </Link>
            <Link
              href="/reviews"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Reviews
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:block border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobile(!isMobile)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-sm px-4 py-2 absolute top-20 left-0 right-0 z-20">
            <div className="flex flex-col space-y-3 py-2">
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Package & Pricing
              </Link>
              <Link
                href="/reviews"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Reviews
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Kyptronix LLP –
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              THE NEXT THING IN
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                DIGITAL INDUSTRY
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              At Kyptronix LLP, were not just building websites, apps, or
              marketing strategies—were creating business success. Based in
              Delaware, we help companies across the U.S. scale rapidly,
              increase conversions, and dominate their industries. Whether you
              need a custom-built website that drives traffic, a mobile app that
              wows, or a blockchain solution that disrupts your industry,
              Kyptronix is your trusted digital partner.
            </p>

            <p className="text-xl mb-10">
              Dont just compete—lead. Ready to see what Kyptronix can do for
              you?
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/get-started"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center transition duration-300 w-full md:w-auto"
              >
                Get Started Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="text-white hover:text-blue-400 flex items-center justify-center transition duration-300 w-full md:w-auto"
              >
                View Our Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {/* Project Images */}
              <div className="w-full md:w-1/3 p-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/3 p-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/3 p-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/project3.jpg"
                  alt="Project 3"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/3 p-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/project4.jpg"
                  alt="Project 4"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/3 p-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/project5.jpg"
                  alt="Project 5"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
