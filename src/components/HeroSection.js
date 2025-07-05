"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative my-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Annotate PDFs Directly in Your Browser
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
            Collaborate on documents in real-time, highlight text, add comments, and more—all without downloads or installations.
          </p>
          <Link
            href="/editor"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 animate-slide-in">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/heroImg.png"
              alt="PDF Annotation"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
