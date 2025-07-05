"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
        
        {/* Brand or Title */}
          <Link href="/" className="text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            PDF Annotation
          </Link>

        {/* Social */}
          <Link
            href="https://github.com/AjayGodara2417/pdf-annotation"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors md:ml-40"
          >
            <Github className="w-5 h-5" />
          </Link>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-500 text-sm">
          © 2025 <span className="font-semibold text-gray-800">PDF Annotator</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
