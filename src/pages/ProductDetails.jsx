import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import ProductDetailsAccordion from "../components/ProductDetailsAccordion";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  let [singleData, setSingleData] = useState([]);
  let productId = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
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
  let Rating = Array.from({ length: 5 }, (_, index) => {
    let ratingNumber = index + 0.5;
    return singleData.rating >= index + 1 ? (
      <FaStar className="text-[#FFD881]" />
    ) : singleData.rating > ratingNumber ? (
      <FaRegStarHalfStroke className="text-[#FFD881]" />
    ) : (
      <FaRegStar className="text-[#FFD881]" />
    );
  });
  const clientRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      let ratingNumber = index + 0.5;
      return rating >= index + 1 ? (
        <FaStar key={index} className="text-[#FFD881]" />
      ) : rating > ratingNumber ? (
        <FaRegStarHalfStroke key={index} className="text-[#FFD881]" />
      ) : (
        <FaRegStar key={index} className="text-[#FFD881]" />
      );
    });
  };
  let handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }));
  };
  let handleCart = () => {
    toast("Added to Cart");
    setTimeout(() => {
      navigate("/cart");
    }, 1700);
  };
  let handleWishList = () => {
    toast("Added to Wish List");
  };

  let discountedPrice = (item) => {
    let price = item.price + item.price * (item.discountPercentage / 100);
    return price;
  };

  const formatDateToRelative = (dateString) => {
    const currentDate = new Date();
    const reviewDate = new Date(dateString);

    const diffMonths =
      currentDate.getMonth() -
      reviewDate.getMonth() +
      12 * (currentDate.getFullYear() - reviewDate.getFullYear());

    return `${diffMonths} months ago`;
  };

  return (
    <>
      <section className="lg:pt-[100px]">
        <Container>
          <Flex className="flex-wrap justify-between mb-[49px]">
            {singleData?.images?.map((item) => (
              <div className="w-[32%] lg:my-5 h-full">
                <img src={item} alt="" className="w-full" />
              </div>
            ))}
          </Flex>
          <div className="lg:w-1/2">
            <div className="text-[#262626] font-sans text-xl lg:text-[39px] font-bold pb-[15px]">
              {singleData.title}
            </div>
            <div className="flex items-center text-[#767676] font-sans text-[14px] font-normal">
              {Rating} <span className="ml-[12px]">Review</span>
            </div>
            <Flex className="gap-x-[10px] lg:gap-x-[15px] items-center my-[21px]">
              <div className="text-[#767676] font-sans text-[14px] lg:text-[16px] font-normal">
                {singleData.discountPercentage > 0.9 && (
                  <del>${discountedPrice(singleData).toFixed(2)}</del>
                )}
              </div>
              <div className="text-[#262626] font-sans text-[18px] lg:text-[20px] font-bold">
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
              <button
                className="w-1/2 lg:w-[200px] h-[50px] border border-[#262626] font-sans text-[14px] font-bold text-[#262626] bg-[#fff] hover:bg-[#262626] hover:text-[#fff] transition duration-700 ease-in-out"
                onClick={handleWishList}
              >
                Add to Wish List
              </button>
              <div className="w-1/2" onClick={handleCart}>
                <button
                  className="w-full lg:w-[200px] h-[50px] border border-[#262626] font-sans text-[14px] font-bold text-[#262626] bg-[#fff] hover:bg-[#262626] hover:text-[#fff] transition duration-700 ease-in-out"
                  onClick={() => handleAddToCart(singleData)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <ProductDetailsAccordion />
            <Flex className="mt-[48px] lg:mt-[123px] mb-[42px] gap-[62px]">
              <div className="text-[#767676] font-sans font-normal text-[20px]">
                Description
              </div>
              <div className="text-[#262626] font-sans font-bold text-[20px]">
                Reviews ({singleData.reviews?.length || 0})
              </div>
            </Flex>
            <div className="text-[#767676] font-sans font-normal text-[14px] mb-[16px]">
              ({singleData.reviews?.length || 0}) review for Product
            </div>
          </div>
          <div className="w-full border-t-[1px] border-[#F0F0F0]">
            {singleData.reviews?.map((review, index) => (
              <div className="">
                <Flex className="items-center justify-between pt-[23px] pb-[14px]">
                  <Flex className="items-center gap-[27px]">
                    <div className="text-[#262626] font-sans font-normal text-[16px]">
                      {review.reviewerName}
                    </div>
                    <div className="flex gap-x-[5px]">
                      {clientRating(review.rating)}
                    </div>
                  </Flex>
                  <div className="text-[#767676] font-sans font-normal text-[16px]">
                    {formatDateToRelative(review.date)}
                  </div>
                </Flex>

                <div className="text-[#767676] font-sans font-normal text-[16px] pb-[15px] border-[#F0F0F0] border-b-[1px] mb-[5px]">
                  {review.comment}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
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
          <ToastContainer
            position="top-right"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;