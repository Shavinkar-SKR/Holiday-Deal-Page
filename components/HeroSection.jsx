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

        <div className="text-gray-700 text-base">
          {dealDestinations &&
            dealDestinations.map((d, index) => (
              <p key={index}>{d.noOfNights} Nights</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
