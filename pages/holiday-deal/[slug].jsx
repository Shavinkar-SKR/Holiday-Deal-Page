import DestinationSection from "@/components/DestinationSection";
import ExcursionSection from "@/components/ExcursionSection";
import FinePrintSection from "@/components/FinePrintSection";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightSection";
import HotelSection from "@/components/HotelSection";
import ItinerarySection from "@/components/ItinerarySection";
import OverviewSection from "@/components/OverviewSection";
import PaymentSection from "@/components/PaymentSection";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function HolidayDeal() {
  const router = useRouter();
  const { slug } = router.query;

  const [dealInfo, setDealInfo] = useState(null);

  useEffect(() => {
    if (slug) {
      axios
        .get(
          `https://api.techneapp-staging.site/api/deals/public/all/whv/${slug}`
        )
        .then((res) => {
          console.log(res.data);
          // console.log(res.data.dealDestinations.noOfNights);
          setDealInfo(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [slug]);
  return (
    <>
      <div>
        <HeroSection data={dealInfo} />
        <OverviewSection
          overview={dealInfo?.overview?.content}
          video={dealInfo?.secondaryVideoYoutubelink}
        />
        <HighlightsSection highlight={dealInfo?.highlight} />
        <ItinerarySection itineraries={dealInfo?.itineraries} />
        <HotelSection hotels={dealInfo?.hotels} />
        <DestinationSection destinations={dealInfo?.dealDestinations} />
        <ExcursionSection
          description={dealInfo?.excursions}
          image={dealInfo?.excursionImage}
        />
        <FinePrintSection finePrint={dealInfo?.finePrint} />
        <PaymentSection
          payment={dealInfo?.payment}
          paymentImg={dealInfo?.paymentImage}
          dealExpirationDate={dealInfo?.dealExpirationDate}
        />
      </div>
    </>
  );
}

export default HolidayDeal;
