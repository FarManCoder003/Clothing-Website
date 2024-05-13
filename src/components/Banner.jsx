import { IoReload } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import Slider from "react-slick";
import Ad1 from "../assets/Ad 1.png";
import Ad2 from "../assets/Ad 2.png";
import Ad3 from "../assets/Ad 3.png";
import Ad4 from "../assets/Ad 4.png";
import BanImg from "../assets/banner.png";
import ArrivalsItem from "./ArrivalsItem";
import Container from "./Container";
import { apiData } from "./ContextApi";
import Flex from "./Flex";
import { useContext } from "react";

const Banner = () => {
  let data = useContext(apiData);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "70px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="ami"
        style={{
          width: "30px",
          color: "transparent",
          padding: "10px 0",
          borderRight: "3px #fff solid",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        <div className="w-full">
          <img src={BanImg} alt="banner" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" />
        </div>
      </Slider>
      <Container>
        <Flex className="justify-between lg:py-4 py-2">
          <div className="">
            <h2 className="font-sans text-[9px]  lg:text-[16px] text-[#6D6D6D]">
              <span className="lg:mr-2 mr-[2px] text-[10px] text-[#262626] font-bold">
                2
              </span>
              Two years warranty
            </h2>
          </div>
          <div className="">
            <div className="flex items-center gap-x-2">
              <TbTruckDelivery />
              <h2 className="font-sans text-[10px]  lg:text-[16px] text-[#6D6D6D]">
                Free shipping
              </h2>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-2">
              <IoReload />
              <h2 className="font-sans text-[10px]  lg:text-[16px] text-[#6D6D6D]">
                Return policy in 30 days
              </h2>
            </div>
          </div>
        </Flex>
        <Flex className="justify-between py-[35px] lg:py-[128px]">
          <div className="w-1/2">
            <img src={Ad1} alt="" className="w-full h-full" />
          </div>
          <div className="w-1/2  lg:ml-[40px] w-fill ml-[20px]">
            <img src={Ad2} alt="" className="pb-[20px] lg:pb-[40px]" />
            <img src={Ad3} alt="" />
          </div>
        </Flex>
        <div className="font-sans font-bold text-[39px] text-[#262626]">
          New Arrivals
        </div>
        <Flex className="justify-between flex-wrap">
          {data.map((items) => (
            <ArrivalsItem item={items} />
          ))}
        </Flex>
        <div className="w-full lg:my-[128px] my-[48px]">
          <img src={Ad4} alt="" />
        </div>
      </Container>
    </>
  );
};

export default Banner;
