import HeroSection from "@/components/HeroSection";
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
          setDealInfo(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [slug]);
  return (
    <>
      <div>
        <HeroSection data={dealInfo} />
      </div>
    </>
  );
}

export default HolidayDeal;
