import Image from "next/image";

function HeroSection({ data }) {
  if (!data) return null;
  const { title, price, farePrice, saveUpto, dealDestinations, heroImages } =
    data;
  return (
    <div className="w-[80%] mx-auto bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-lg p-8 text-center">
      <div className="m-8">
        <h1 className="w-[100%] text-4xl font-extrabold text-gray-900">
          {title}
        </h1>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-2xl font-semibold text-green-700">From ${price}</p>
        <p className="text-lg line-through text-gray-500">
          Original: ${farePrice}
        </p>
        <p className="text-xl font-medium text-red-600">
          Save up to {saveUpto}%
        </p>

        <section className="px-6 py-12 bg-white rounded-3xl shadow-sm max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Deal Destinations
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {dealDestinations?.map((d, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={d.destination.image.path}
                  alt={d.destination.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {d.destination.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  {d.destination.name}, {d.destination.country}
                </p>
                <p className="text-orange-600 font-medium">
                  {d.noOfNights} Nights
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
