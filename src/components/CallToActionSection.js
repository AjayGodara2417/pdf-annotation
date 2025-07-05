"use client";

import {
  Scissors,
  Unlock,
  RotateCcw,
  FilePlus,
  FileSignature,
  ShieldCheck,
  MoveVertical,
  CombineIcon,
  ArrowDownUpIcon,
  UploadCloud,
  PencilLine,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function PdfToolsAndCta() {
  const tools = [
    { icon: <CombineIcon className="w-8 h-8 text-purple-500" />, label: "Compress PDF" },
    { icon: <ArrowDownUpIcon className="w-8 h-8 text-rose-500" />, label: "Hyper-compress PDF" },
    { icon: <MoveVertical className="w-8 h-8 text-yellow-500" />, label: "Organize PDF" },
    { icon: <RotateCcw className="w-8 h-8 text-blue-500" />, label: "Rotate PDF" },
    { icon: <FilePlus className="w-8 h-8 text-amber-400" />, label: "Merge PDF" },
    { icon: <Unlock className="w-8 h-8 text-emerald-500" />, label: "Unlock PDF" },
    { icon: <Scissors className="w-8 h-8 text-violet-500" />, label: "Split PDF" },
    { icon: <FileSignature className="w-8 h-8 text-pink-500" />, label: "eSign PDF" },
    { icon: <ShieldCheck className="w-8 h-8 text-teal-500" />, label: "Protect PDF" },
  ];

  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    }, { threshold: 0.1 });

    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🔄 Infinite Slider Bar */}
      <section className="w-full overflow-hidden bg-indigo-50 py-10">
        <div className="relative">
          <div className="flex w-max animate-marquee space-x-8">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white px-5 py-4 rounded-xl min-w-[140px] shadow-md transition-transform hover:scale-105"
              >
                {tool.icon}
                <span className="text-sm font-medium mt-2 text-gray-700 text-center whitespace-nowrap">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}</style>
      </section>

      {/* 🚀 Call to Action */}
      <section
        ref={ctaRef}
        className="py-20 bg-indigo-50 text-center fade-in transition-opacity duration-700 ease-out"
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Start Annotating Today
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Upload a PDF or begin marking it up directly in your browser.
            No installation required, fully free and instant access.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300">
              <UploadCloud className="w-5 h-5" />
              Upload PDF
            </button>
            <button className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-xl border border-gray-300 shadow hover:bg-gray-100 transition-all duration-300">
              <PencilLine className="w-5 h-5" />
              Start Annotating
            </button>
          </div>
        </div>

        {/* Fade-in CSS */}
        <style jsx>{`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
          }
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </section>
    </>
  );
}
