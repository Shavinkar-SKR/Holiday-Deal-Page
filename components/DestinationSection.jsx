import { useState } from "react";

function DestinationSection({ destinations }) {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section className="mt-6 px-6 py-12 bg-white rounded-3xl max-w-6xl mx-auto shadow-sm">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Destinations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations?.map((d, index) => (
          <div
            key={index}
            className="bg-orange-50 p-5 rounded-2xl shadow hover:shadow-md transition"
          >
            <img
              src={d.destination.image}
              alt={d.destination.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />

            <h3 className="text-lg font-semibold text-gray-800">
              {d.destination.name}, {d.destination.country}
            </h3>

            <a
              href={`/destinations/${
                d.destination.continent
              }/${d.destination.country.toLowerCase()}/${d.destination.name.toLowerCase()}`}
              className="text-sm text-blue-600 font-medium underline hover:text-blue-800"
            >
              View Destination
            </a>

            <div
              className="mt-3 text-sm text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: d.destination.description }}
            />

            <button
              onClick={() => setSelectedDestination(d)}
              className="mt-3 text-sm text-blue-600 underline hover:text-blue-800 font-medium"
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      {selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-2xl shadow-lg relative overflow-auto max-h-[80vh]">
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>

            <img
              src={`/${selectedDestination.destination.image.path}`}
              alt={selectedDestination.destination.name}
              width={500}
              height={500}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedDestination.destination.name},{" "}
              {selectedDestination.destination.country}
            </h3>

            <div
              className="prose prose-base text-gray-700"
              dangerouslySetInnerHTML={{
                __html: selectedDestination.destination.description,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default DestinationSection;

// For each destination, display:

// Destination Name

// Country

// Image

// Formatted URL (e.g., /destinations/asia/thailand/phuket)

// Description (with “Read more” option)
