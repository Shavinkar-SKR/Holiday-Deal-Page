import { useState } from "react";

function HotelSection({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <section className="mt-6 px-6 py-12 bg-white rounded-3xl max-w-6xl mx-auto shadow-sm">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Hotels
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels?.map((hotel, index) => (
          <div key={index} className="bg-orange-50 p-5 rounded-2xl shadow-md ">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {hotel.name}
            </h3>
            <p className="text-yellow-500 font-medium mb-2">
              <p className="text-yellow-500 font-medium mb-2">
                {"⭐".repeat(hotel.rating)}
              </p>
            </p>

            <button
              className="text-sm text-blue-600 font-medium underline hover:text-blue-800"
              onClick={() => setSelectedHotel(hotel)}
            >
              Read more
            </button>

            {hotel.images?.length ? (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {hotel.images.map((img, unique) => (
                  <img
                    key={unique}
                    src={img.path}
                    alt="Hotel"
                    className="w-28 h-20 object-cover rounded-lg shadow-sm"
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-2">No images available</p>
            )}
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-2xl shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setSelectedHotel(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedHotel.name}
            </h2>

            <div
              className="prose prose-base text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: selectedHotel.description }}
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Amenities
            </h3>
            {selectedHotel?.amenities ? (
              <div
                className="prose prose-sm text-gray-700 list-disc list-inside"
                dangerouslySetInnerHTML={{ __html: selectedHotel.amenities }}
              />
            ) : (
              <p className="text-sm text-gray-500">No amenities available</p>
            )}

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              Room Amenities
            </h3>
            {selectedHotel?.roomAmenities ? (
              <div
                className="prose prose-sm text-gray-700 list-disc list-inside"
                dangerouslySetInnerHTML={{
                  __html: selectedHotel.roomAmenities,
                }}
              />
            ) : (
              <p className="text-sm text-gray-500">
                No room amenities available
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default HotelSection;
