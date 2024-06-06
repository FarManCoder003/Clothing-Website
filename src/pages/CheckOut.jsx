import React, { useEffect } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  let data = useSelector((state) => state.product.cartItem);
  let productTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.qun;
    });
    return total.toFixed(2);
  };
  return (
    <>
      <Container>
        <div className="lg:w-8/12">
          <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
            Checkout
          </div>
          <div className="text-[#767676] font-sans font-normal text-[12px]">
            <Link to="/">Home</Link> &gt; <Link to="/Checkout">Checkout</Link>
          </div>
          <div className="flex gap-x-1 font-sans font-normal text-sm lg:text-[16px] my-[64px] cursor-pointer">
            <div className="text-[#767676]">Have a coupon?</div>
            <div className="text-[#262626]">Click here to enter your code</div>
          </div>
          <div className="text-[#262626] font-sans font-bold text-[26px] lg:text-[39px]">
            Billing Details
          </div>
          <div className="lg:flex lg:gap-x-9 mt-[24px] lg:mt-[42px]">
            <div className="lg:w-1/2">
              <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
                First Name *
              </div>
              <input
                className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
                Last Name *
              </div>
              <input
                className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Company Name (optional)
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Company Name"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Country *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Please select"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Street Address *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="House number and Street name"
            />
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Apartment, Suite, Unit etc. (optional)"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Town/City *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Town/City"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              County (optional)
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="County"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Post Code *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Post Code"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Phone *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Phone"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Email Address *
            </div>
            <input
              className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Email"
            />
          </div>
          <div className="">
            <div className="text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] mt-[64px] lg:mt-[126px]">
              Additional Information
            </div>
            <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
              Other Notes (optional)
            </div>
            <input
              className="w-full lg:hidden text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[48px] lg:pb-[87px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Notes about your order"
            />
            <input
              className="w-full hidden lg:block text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[48px] lg:pb-[87px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
              placeholder="Notes about your order,e.g. special notes for delivery."
            />
          </div>
          <div className="text-[#262626] text-[26px] lg:text-[39px] font-sans font-bold mt-[36px] mb-[24px] lg:mt-[64px] lg:mb-[48px]">
            Your Order
          </div>

          <div className="w-full lg:w-9/12 border border-[#F0F0F0] mb-[48px]">
            <div className="flex items-center text-[16px] font-sans border-b border-b-[#F0F0F0]">
              <div className="w-1/2 font-bold pl-[20px] pt-[17px] pb-[14px] border-r border-r-[#F0F0F0]">
                Product
              </div>
              <div className="w-1/2 text-[#767676] font-normal pl-[20px] pt-[17px] pb-[14px] ">
                Total
              </div>
            </div>
            {data.map((item) => (
              <div className="flex">
                <div className="w-1/2 font-bold pt-[17px] pb-[14px] border-r border-r-[#F0F0F0] border-b border-b-[#F0F0F0]">
                  <div className="flex gap-x-1 text-[16px] items-center px-[10px] pl-[10px]">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                    <div className="hidden lg:block">{item.title}</div>
                    <div className="">x</div>
                    <div className=""> {item.qun}</div>
                  </div>
                </div>
                <div className="w-1/2 pt-[25px] border-b border-b-[#F0F0F0]">
                  <div className="text-[#767676] text-[16px] font-normal pl-[20px]">
                    {(item.price * item.qun).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center border-b border-b-[#F0F0F0]">
              <div className="w-1/2 font-bold pl-[20px] pt-[17px] pb-[14px] border-r border-r-[#F0F0F0]">
                Subtotal
              </div>
              <div className="w-1/2 text-[#767676] font-normal pl-[20px] pt-[17px] pb-[14px]">
                $ {productTotal()}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 font-bold pl-[20px] pt-[17px] pb-[14px] border-r border-r-[#F0F0F0]">
                Total
              </div>
              <div className="w-1/2 text-[#262626] font-normal pl-[20px] pt-[17px] pb-[14px]">
                $ {(productTotal() * 1.1).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
