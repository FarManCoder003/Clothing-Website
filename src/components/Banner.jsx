import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import Slider from "react-slick";
import Ad1 from "../assets/Ad 1.png";
import Ad2 from "../assets/Ad 2.png";
import Ad3 from "../assets/Ad 3.png";
import Ad4 from "../assets/Ad 4.png";
import Product1 from "../assets/Product 1.png";
import Product2 from "../assets/Product 2.png";
import Product3 from "../assets/Product 3.png";
import Product4 from "../assets/Product 4.png";
import Product5 from "../assets/Product 5.png";
import Product6 from "../assets/Product 6.png";
import Product7 from "../assets/Product 7.png";
import Product8 from "../assets/Product 8.png";
import SpecialOffer1 from "../assets/Special Offer 1.png";
import SpecialOffer2 from "../assets/Special Offer 2.png";
import SpecialOffer3 from "../assets/Special Offer 3.png";
import SpecialOffer4 from "../assets/Special Offer 4.png";
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
        <div className="lg:flex justify-between my-[48px] lg:my-0 lg:mt-[48px] lg:mb-[148px]">
          <div className="flex justify-between gap-2">
            <div className="w-full h-full">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product1} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative lg:mx-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product2} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-full h-full relative lg:mr-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product3} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product4} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between">
          <div className="flex justify-between gap-2">
            <div className="w-full h-full">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product5} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative lg:mx-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product6} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-full h-full relative lg:mr-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product7} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={Product8} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:my-[128px] my-[48px]">
          <img src={Ad4} alt="" />
        </div>
        <div className="text-[39px] font-bold font-sans text-[#262626] lg:mb-[48px] mb-[24px]">
          Special Offer
        </div>
        <div className="lg:flex justify-between">
          <div className="flex justify-between gap-2">
            <div className="w-full h-full">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={SpecialOffer1} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative lg:mx-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={SpecialOffer2} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-full h-full relative lg:mr-[40px] ">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={SpecialOffer3} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="relative ">
                <div className="lg:w-[92px] w-[62px] lg:h-[35px] h-[25px] lg:leading-[35px] leading-[25px] absolute lg:top-[20px] top-[15px] lg:left-[20px] left-[15px] bg-black text-white text-center font-sans lg:text-[14px] text-[8px] font-bold">
                  NEW
                </div>
                <img src={SpecialOffer4} alt="" />
                <div className="absolute bottom-0 left-0 w-full lg:h-[40%] h-[50%] opacity-0 hover:opacity-100 transition duration-700 ease-in-out bg-white lg:p-5 p-2">
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676] ">
                      Add to Wish List
                    </div>
                    <FaHeart />
                  </Flex>
                  <Flex className="justify-end items-center gap-3 py-[5px]">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px] text-[#767676]">
                      Compare
                    </div>
                    <TfiReload />
                  </Flex>
                  <Flex className="justify-end items-center gap-3">
                    <div className="font-sans font-[400] lg:text-[16px] text-[10px]">
                      Add to Cart
                    </div>
                    <FaCartShopping />
                  </Flex>
                </div>
              </div>
              <div className="lg:flex justify-between items-center lg:py-[18px] py-[8px]">
                <div className="font-sans font-bold text-[#262626] lg:text-[20px] text-[15px]">
                  Basic Crew Neck Tee
                </div>
                <div className="font-sans text-[#767676] text-[13px]">
                  $44.00
                </div>
              </div>
              <div className="font-sans text-[#767676] text-[12px] pb-5">
                Black
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
