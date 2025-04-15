"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="container mx-auto px-6 py-3 flex items-center justify-between font-['Inter',sans-serif]">
        <div className="flex items-center">
          <Image
            src="/logo k.jpg"
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
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Package & Pricing
          </Link>
          <Link
            href="/reviews"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Reviews
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:flex border-2 border-cyan-300 text-white px-6 py-2 rounded-full items-center justify-center transition duration-300 hover:shadow-lg hover:shadow-fuchsia-500/25 font-medium text-base hover:bg-cyan-900/30"
        >
          Contact Us
        </Link>

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

      {isMobile && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm px-4 py-2 absolute top-16 left-0 right-0 z-20 font-['Inter',sans-serif]">
          <div className="flex flex-col space-y-3 py-2">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Package & Pricing
            </Link>
            <Link
              href="/reviews"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Reviews
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="border-2  border-cyan-400 text-white px-6 py-2 rounded-full flex items-center justify-center transition duration-300 w-full hover:bg-cyan-900/30 font-medium text-base mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
