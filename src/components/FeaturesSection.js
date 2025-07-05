"use client";

import {
  Highlighter,
  MessageSquareCode,
  User,
  Share2Icon,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Highlight Text",
      description:
        "Easily highlight important sections of text with a variety of colors.",
      icon: <Highlighter className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Add Comments",
      description:
        "Leave comments and feedback anywhere in your PDF with simple inline notes.",
      icon: <MessageSquareCode className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Real-time Collaboration",
      description:
        "Work together with your team live — see annotations as they happen.",
      icon: <User className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Easy Sharing",
      description:
        "Generate shareable links so anyone can view or comment on your file instantly.",
      icon: <Share2Icon className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Powerful Annotation Tools
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto md:mx-0">
          Designed for seamless collaboration, clarity, and control — all within your browser.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
