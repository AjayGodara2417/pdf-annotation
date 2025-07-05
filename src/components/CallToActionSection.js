export default function CallToActionSection() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Annotating Today
        </h2>
        <p className="text-gray-600 mb-6">
          Upload a PDF or start annotating directly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Upload PDF
          </button>
          <button className="bg-gray-100 px-5 py-3 rounded hover:bg-gray-200 transition">
            Start Annotating
          </button>
        </div>
      </div>
    </section>
  );
}
