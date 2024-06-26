import Container from "../components/Container";
import { Link } from "react-router-dom";
import ContactImg from "../assets/Contact.png";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <Container>
        <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
          Contact
        </div>
        <div className="text-[#767676] font-sans font-normal text-[12px]">
          <Link to="/">Home</Link> &gt; <Link to="/contact">Contact</Link>
        </div>
        <div className="text-[#262626] font-sans font-bold text-[25px] lg:text-[39px] pt-[64px] pb-[48px]">
          Fill up a Form
        </div>
        <div className="">
          <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
            Name
          </div>
          <input
            className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
            placeholder="Your name here"
          />
        </div>
        <div className="">
          <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
            Email
          </div>
          <input
            className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[16px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
            placeholder="Your email here"
          />
        </div>
        <div className="">
          <div className="text-[#262626] font-sans font-bold text-sm lg:text-[16px]">
            Message
          </div>
          <input
            className="w-full text-[#767676] font-sans font-bold text-[14px] pt-[10px] pb-[48px] lg:pb-[87px] border-b border-[#F0F0F0] mt-[10px] mb-[24px] outline-none"
            placeholder="Your message here"
          />
        </div>
        <div className="w-[200px] h-[50px] text-center leading-[50px] bg-[#262626] text-[white] font-sans text-[14px] font-bold">
          Post
        </div>
        <div className="py-[64px]">
          <img src={ContactImg} alt="ContactImg" className="w-full" />
        </div>
      </Container>
    </>
  );
};

export default Contact;
