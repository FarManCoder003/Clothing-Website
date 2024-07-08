import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [passShow, setPassShow] = useState(false);

  return (
    <section className="container mx-auto lg:px-0 px-4">
      <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
        Sign up
      </div>
      <div className="text-[#767676] font-sans font-normal text-[12px]">
        <Link to="/">Home</Link> &gt; <Link to="/signUp">Sign up</Link>
      </div>
      <div className="lg:w-6/12 text-[#767676] font-sans font-normal text-[16px] py-[48px] lg:py-[64px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </div>
      <div className="w-full border-y border-[#F0F0F0] py-[64px]">
        <div className=" text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] pb-[42px]">
          Your Personal Details
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              First Name
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              Last Name
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="lg:flex justify-between pt-[24px]">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              Email address
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="email"
              placeholder="company@domain.com"
            />
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              Telephone
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="tel"
              placeholder="Your phone number"
            />
          </div>
        </div>
      </div>
      <div className="w-full border-y border-[#F0F0F0] py-[64px]">
        <div className="text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] pb-[36px]">
          New Customer
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              Address 1
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              Address 2
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="lg:flex justify-between pt-[24px]">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              City
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Your city"
            />
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              Post Code
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="00000"
            />
          </div>
        </div>
        <div className="lg:flex justify-between pt-[24px]">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              Division
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Please select"
            />
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              District
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="text"
              placeholder="Please select"
            />
          </div>
        </div>
      </div>
      <div className="w-full border-y border-[#F0F0F0] py-[64px]">
        <div className="text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] pb-[36px]">
          Your Password
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[33%]">
            <div className="text-[#262626] font-sans font-bold text-[16px]">
              Password
            </div>
            <div className="relative">
              <input
                type={passShow ? "text" : "password"}
                className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
                placeholder="Password"
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute top-[50%] translate-y-[-50%] right-0 cursor-pointer"
              >
                {passShow == true ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="lg:w-[65%]">
            <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
              Repeat password
            </div>
            <input
              className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
              type="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[86px]">
        <input type="checkbox" />
        <p className="font-sans text-[14px] font-normal text-[#767676] pl-[15px]">
          I have read and agree to the Privacy Policy
        </p>
      </div>
      <div className="flex items-center pt-[23px]">
        <h3 className="font-sans text-[14px] font-normal text-[#767676]">
          Subscribe Newsletter
        </h3>
        <input type="radio" name="yes" className="ml-[33px]" />
        <h3 className="font-sans text-[14px] font-normal text-[#767676] pl-[15px]">
          Yes
        </h3>
        <input type="radio" name="yes" className="ms-4" />
        <h3 className="font-sans text-[14px] font-normal text-[#767676] pl-[15px]">
          No
        </h3>
      </div>
      <button
        className="w-[200px] h-[50px] leading-[50px] hover:text-[#262626] text-[#fff] bg-[#262626] hover:bg-[#fff] duration-500 ease-in-out font-sans font-bold text-[14px] text-center mt-[30px] border border-[#2B2B2B] mb-[64px]"
      >
        Sign up
      </button>
    </section>
  );
};

export default SignUp;
