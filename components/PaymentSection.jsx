import { useEffect, useState } from "react";
import Image from "next/image";

export default function PaymentSection({
  payment,
  paymentImg,
  dealExpirationDate,
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date("2025-06-17T12:00").getTime();
      //console.log(end);
      const now = new Date().getTime();
      const diff = end - now;
      // console.log(diff);

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [dealExpirationDate]);

  return (
    <section className="mt-6 px-6 py-12 bg-white rounded-3xl shadow-sm max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Payment
      </h2>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md">
        <Image
          src={`/${paymentImg?.path}`}
          alt="Payment"
          width={500}
          height={500}
          className="w-full max-h-80 object-cover rounded-xl shadow mb-6"
        />

        <div
          className="prose prose-base text-gray-700 mx-auto"
          dangerouslySetInnerHTML={{ __html: payment }}
        />

        <p className="mt-6 text-center text-lg font-semibold text-red-600">
          Offer ends in: {timeLeft}
        </p>
      </div>
    </section>
  );
}
