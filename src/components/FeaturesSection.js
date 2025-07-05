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
      description: "Easily highlight important sections of text with a variety of colors.",
      icon: <Highlighter className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Add Comments",
      description: "Add comments and annotations to specific parts of the document.",
      icon: <MessageSquareCode className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with team members in real-time on the same document.",
      icon: <User className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Easy Sharing",
      description: "Share your annotated PDFs with others via a shareable link.",
      icon: <Share2Icon className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-left mb-4 text-gray-900">
          Powerful Annotation Tools
        </h2>
        <p className="text-left text-lg text-gray-700 mb-12 max-w-2xl">
          Our browser-based PDF annotation tool offers a range of features to enhance your document review and collaboration process.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up opacity-0 animate-delay-[200ms] animate-fill-forwards"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
