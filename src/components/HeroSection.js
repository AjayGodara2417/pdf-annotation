"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Annotate PDFs directly in your browser
        </h1>
        <p className="text-gray-600 mb-6">
          Collaborate on documents in real-time, highlight text, add comments, and more — all within your browser. No downloads or installations required.
        </p>
        <Link
          href="/editor"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
