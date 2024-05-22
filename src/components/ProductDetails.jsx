import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import ProductDetailsAccordian from "./ProductDetailsAccordian";

const ProductDetails = () => {
  let [singleData, setSingleData] = useState([]);
  let productId = useParams();
  let getData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let ratingNumber = index + 0.5;
    return singleData.rating >= index + 1 ? (
      <FaStar className="text-[#FFD881]" />
    ) : singleData.rating > ratingNumber ? (
      <FaRegStarHalfStroke className="text-[#FFD881]" />
    ) : (
      <FaRegStar className="text-[#FFD881]" />
    );
  });

  return (
    <>
      <section>
        <Container>
          <Flex className="flex-wrap justify-between mt-[64px] mb-[49px]">
            {singleData?.images?.map((item) => (
              <div className="w-[48%] my-5">
                <img src={item} alt="" className="w-full" />
              </div>
            ))}
          </Flex>
          <div className="w-1/2">
            <div className="text-[#262626] font-sans text-[39px] font-bold pb-[15px]">
              {singleData.title}
            </div>
            <div className="flex items-center text-[#767676] font-sans text-[14px] font-normal">
              {clientRating} <span className="ml-[12px]">Review</span>
            </div>
            <Flex className="gap-[15px] items-center my-[21px]">
              <div className="text-[#767676] font-sans text-[16px] font-normal">
                <del>${singleData.discountPercentage}</del>
              </div>
              <div className="text-[#262626] font-sans text-[20px] font-bold">
                ${singleData.price}
              </div>
            </Flex>
            <Flex className="items-center border-t-[1px] border-[#F0F0F0] py-[32px] ">
              <div className="text-[#262626] font-sans text-[16px] font-bold pr-[53px]">
                COLOR:
              </div>
              <div className="w-full flex items-center gap-[15px]">
                <div className="w-[20px] h-[20px] hover:scale-125 transition duration-500 ease-in-out rounded-full bg-[#000000] opacity-[0.1973]"></div>
                <div className="w-[20px] h-[20px] hover:scale-125 transition duration-500 ease-in-out rounded-full bg-[#FF8686]"></div>
                <div className="w-[20px] h-[20px] hover:scale-125 transition duration-500 ease-in-out rounded-full bg-[#7ED321] opacity-[0.1973]"></div>
                <div className="w-[20px] h-[20px] hover:scale-125 transition duration-500 ease-in-out rounded-full bg-[#B6B6B6] opacity-[0.1973]"></div>
                <div className="w-[20px] h-[20px] hover:scale-125 transition duration-500 ease-in-out rounded-full bg-[#15CBA5] opacity-[0.1973]"></div>
              </div>
            </Flex>
            <Flex className="items-center gap-[76px]">
              <div className="text-[#262626] font-sans text-[16px] font-bold">
                SIZE:
              </div>
              <select className="w-[100px] bg-[transparent] border border-[#F0F0F0] text-[#767676] font-sans font-normal py-[3px] pl-[5px]">
                <option value="S">S</option>
                <option value="S">M</option>
                <option value="S">L</option>
                <option value="S">XL</option>
              </select>
            </Flex>
            <Flex className="items-center my-[36px] gap-[29px]">
              <div className="text-[#262626] font-sans text-[16px] font-bold">
                QUANTITY:
              </div>
              <div className="flex justify-between w-[100px] border border-[#F0F0F0] px-[21px] py-[3px] text-[#767676] font-sans font-normal text-[16px]">
                <div className="">-</div>
                <div className="">1</div>
                <div className="">+</div>
              </div>
            </Flex>
            <Flex className="gap-[27px] border-y-[1px] border-[#F0F0F0] my-[29px] py-[20px]">
              <div className="text-[#262626] font-sans text-[16px] font-bold">
                Stock:
              </div>
              <div className="text-[#767676] font-sans font-normal ">
                {singleData.stock}
              </div>
            </Flex>
            <div className="flex gap-[20px] mb-[30px]">
              <button className="w-[200px] h-[50px] border border-[#262626] font-sans text-[14px] font-bold text-[#262626] bg-[#fff] hover:bg-[#262626] hover:text-[#fff] transition duration-700 ease-in-out">
                Add to Wish List
              </button>
              <button className="w-[200px] h-[50px] border border-[#262626] font-sans text-[14px] font-bold text-[#262626] bg-[#fff] hover:bg-[#262626] hover:text-[#fff] transition duration-700 ease-in-out">
                Add to Card
              </button>
            </div>
            <ProductDetailsAccordian />
            <Flex className="mt-[123px] mb-[42px] gap-[62px]">
              <div className="text-[#767676] font-sans font-normal text-[20px]">
                Description
              </div>
              <div className="text-[#262626] font-sans font-bold text-[20px]">
                Reviews (1)
              </div>
            </Flex>
            <div className="text-[#767676] font-sans font-normal text-[14px] mb-[16px]">
              1 review for Product
            </div>
          </div>
          <div className="w-full">
            <Flex className="items-center justify-between border-t-[1px] border-[#F0F0F0] pt-[23px] pb-[14px]">
              <Flex className="items-center gap-[37px]">
                <div className="text-[#262626 font-sans font-normal text-[16px]">
                  John Ford
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="12"
                    viewBox="0 0 70 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M63.2014 9.81534L59.3916 11.7586L60.0573 7.5245L57.0371 4.49139L61.2582 3.81783L63.2014 0L65.1445 3.81783L69.3656 4.49139L66.3455 7.5245L67.0111 11.7586L63.2014 9.81534Z"
                      fill="#FFD881"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.9416 9.81534L45.1319 11.7586L45.7975 7.5245L42.7773 4.49139L46.9984 3.81783L48.9416 0L50.8848 3.81783L55.1059 4.49139L52.0857 7.5245L52.7513 11.7586L48.9416 9.81534Z"
                      fill="#FFD881"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.6828 9.81534L30.8731 11.7586L31.5387 7.5245L28.5186 4.49139L32.7397 3.81783L34.6828 0L36.626 3.81783L40.8471 4.49139L37.8269 7.5245L38.4925 11.7586L34.6828 9.81534Z"
                      fill="#FFD881"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.423 9.81534L16.6133 11.7586L17.279 7.5245L14.2588 4.49139L18.4799 3.81783L20.423 0L22.3662 3.81783L26.5873 4.49139L23.5671 7.5245L24.2328 11.7586L20.423 9.81534Z"
                      fill="#FFD881"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.16426 9.81534L2.35454 11.7586L3.02016 7.5245L0 4.49139L4.2211 3.81783L6.16426 0L8.10741 3.81783L12.3285 4.49139L9.30835 7.5245L9.97397 11.7586L6.16426 9.81534Z"
                      fill="#FFD881"
                    />
                  </svg>
                </div>
              </Flex>
              <div className="text-[#767676] font-sans font-normal text-[16px]">
                6 months ago
              </div>
            </Flex>
            <div className="text-[#767676] font-sans font-normal text-[16px] pb-[15px] border-[#F0F0F0] border-b-[1px] mb-[5px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-[#262626] font-sans font-bold text-[20px]  my-[48px]">
              Add a Review
            </div>
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              Name
            </div>
            <input
              type="text"
              placeholder="Your name here"
              className="text-[#262626] font-sans font-bold text-[16px] outline-none border-[#F0F0F0] mb-[16px] mt-[10px]"
            />
            <div className="text-[#262626] font-sans font-bold text-[16px] border-t-[1px] pt-[23px]">
              Email
            </div>
            <input
              type="text"
              placeholder="Your email here"
              className="text-[#262626] font-sans font-bold text-[16px] outline-none border-[#F0F0F0] mb-[16px] mt-[10px]"
            />
            <div className="text-[#262626] font-sans font-bold text-[16px] border-t-[1px] pt-[23px]">
              Review
            </div>
            <input
              type="text"
              placeholder="Your review here"
              className="text-[#262626] font-sans font-bold text-[16px] outline-none border-[#F0F0F0] mb-[86px] mt-[10px]"
            />
            <div className="border-[#F0F0F0] border-t-[1px]">
              <button className="w-[200px] h-[50px] mt-[29px] mb-[86px] bg-[#262626] text-[#fff] font-sans font-bold text-[14px]">
                Post
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
