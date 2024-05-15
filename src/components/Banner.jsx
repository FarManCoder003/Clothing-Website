import { IoReload } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import Slider from "react-slick";
import BanImg from "../assets/banner.png";
import Container from "./Container";
import Flex from "./Flex";

const Banner = () => {
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
    <section>
      <Slider {...settings}>
        <div>
          <img src={BanImg} alt="banner" className="w-full" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" className="w-full" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" className="w-full" />
        </div>
        <div className="w-full">
          <img src={BanImg} alt="banner" className="w-full" />
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
      </Container>
    </section>
  );
};

export default Banner;
