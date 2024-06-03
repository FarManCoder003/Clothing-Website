import Ads from "../components/Ads";
import Arrivals from "../components/Arrivals";
import Arrivals2 from "../components/Arrivals2";
import Banner from "../components/Banner";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <div className="lg:pt-[130px]">
        <Banner />
        <Ads />
        <Arrivals />
        <Arrivals2 />
      </div>
    </>
  );
};

export default Home;
