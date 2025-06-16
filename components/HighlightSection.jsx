function HighlightsSection({ highlight }) {
  if (!highlight) return null;
  return (
    <section className="px-6 py-12 bg-orange-50 rounded-3xl max-w-6xl mx-auto shadow-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Highlights
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <img
          src={`/${highlight.image}`}
          alt="Highlights"
          width={500}
          height={500}
          className="w-full lg:w-1/2 max-h-[400px] object-cover rounded-2xl shadow-lg"
        />

        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: highlight.content }}
        />
      </div>
    </section>
  );
}

export default HighlightsSection;
