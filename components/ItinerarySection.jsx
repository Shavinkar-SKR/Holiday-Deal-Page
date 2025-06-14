function ItinerarySection({ itineraries }) {
  return (
    <section className="mt-6 px-6 py-12 bg-white rounded-3xl max-w-5xl mx-auto shadow-sm">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Itinerary
      </h2>

      <div className="space-y-8">
        {itineraries?.map((itinerary, index) => (
          <div key={index} className="bg-orange-50 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Day {itinerary.day}
            </h3>
            <div
              className="prose prose-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: itinerary.content }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItinerarySection;
