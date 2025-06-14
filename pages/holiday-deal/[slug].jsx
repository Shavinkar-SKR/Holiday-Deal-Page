import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightSection";
import ItinerarySection from "@/components/ItinerarySection";
import OverviewSection from "@/components/OverviewSection";
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
      </div>
    </>
  );
}

export default HolidayDeal;
