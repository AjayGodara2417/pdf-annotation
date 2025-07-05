"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative md:mt-24 my-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
            No Signup Needed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Annotate PDFs Instantly in Your Browser
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
            Highlight, comment, and collaborate on PDFs with your team — all in real-time. No downloads. No hassle.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/editor"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300"
            >
              Try Sample PDF
            </Link>
            <Link
              href="/editor"
              className="border border-indigo-600 text-indigo-700 hover:bg-indigo-100 px-6 py-3 rounded-xl font-medium transition-all duration-300"
            >
              Upload Your PDF
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 animate-slide-in">
          <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:scale-[1.01] transition-transform duration-300">
            <Image
              src="/heroImg.png"
              alt="PDF Annotation Interface"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Animations */}
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
