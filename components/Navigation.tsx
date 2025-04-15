"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileDevice(isMobile);

      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo k.jpg"
            alt="Kyptronix LLP"
            width={150}
            height={50}
            className="mr-4"
          />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Package & Pricing
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Reviews
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-base font-medium tracking-wide"
          >
            Contact
          </Link>
        </div>
        <Link
          href="#"
          className="hidden md:flex border-2 border-cyan-300 text-white px-6 py-2 rounded-full items-center justify-center transition duration-300 hover:shadow-lg hover:shadow-fuchsia-500/25 font-medium text-base hover:bg-cyan-900/30"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>

      {isMobileDevice && isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm px-4 py-2 fixed top-0 left-0 right-0 z-40 font-['Inter',sans-serif] pt-6 pb-4">
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white transition p-2"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="h-7 w-7" />
          </button>
          <div className="flex flex-col space-y-3 py-2 mt-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Package & Pricing
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 font-medium text-base text-center"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="border-2 border-cyan-400 text-white px-4 py-1.5 rounded-full flex items-center justify-center transition duration-300 w-auto mx-auto hover:bg-cyan-900/30 font-medium text-base mt-2"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
