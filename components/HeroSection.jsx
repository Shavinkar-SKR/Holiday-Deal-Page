import Image from "next/image";

function HeroSection({ data }) {
  if (!data) return null;
  const {
    title,
    price,
    farePrice,
    saveUpto,
    noOfNights,
    destinations,
    heroImages,
  } = data;
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{farePrice}</p>
        <p>{saveUpto}</p>
      </div>
      <div>
        <p>{noOfNights}</p>
        <p>{destinations}</p>
      </div>
    </>
  );
}

export default HeroSection;
