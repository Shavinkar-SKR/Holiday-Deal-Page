function FinePrintSection({ finePrint }) {
  return (
    <section className="mt-6 px-6 py-12 max-w-4xl mx-auto bg-white rounded-3xl shadow-sm">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Fine Print
      </h2>

      <div
        className="prose prose-base text-gray-700 mx-auto bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md"
        dangerouslySetInnerHTML={{ __html: finePrint }}
      />
    </section>
  );
}

export default FinePrintSection;
