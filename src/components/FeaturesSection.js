export default function FeaturesSection() {
  const features = [
    {
      title: "Highlight Text",
      description: "Easily highlight important sections of text with a variety of colors.",
    },
    {
      title: "Add Comments",
      description: "Add comments and annotations to specific parts of the document.",
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with team members in real-time on the same document.",
    },
    {
      title: "Easy Sharing",
      description: "Share your annotated PDFs with others via a shareable link.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Powerful Annotation Tools
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our browser-based PDF annotation tool offers a range of features to enhance your document review and collaboration process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border rounded p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
