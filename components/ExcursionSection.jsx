function ExcursionSection({ description, image }) {
  return (
    <section className="mt-6 px-6 py-12 bg-white rounded-3xl max-w-4xl mx-auto shadow-sm">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Excursions
      </h2>

      <div className="grid gap-6">
        {image && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md">
            <img
              src={`/${image.path}`}
              alt="Excursion"
              width={500}
              height={500}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <div
              className="prose prose-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
export default ExcursionSection;
