import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AboutImg from "../assets/About.png";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <Container>
      <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
        About
      </div>
      <div className="text-[#767676] font-sans font-normal text-[12px]">
        <Link to="/">Home</Link> &gt; <Link to="/About">About</Link>
      </div>
      <div className="">
        <img src={AboutImg} alt="About Img" className="w-full my-[64px]" />
      </div>
      <div className="text-[#262626] font-sans text-lg lg:text-[30px] font-normal pb-[64px]">
        Orebi is one of the world's leading e-commerce brands and is
        internationally recognized for celebrating the essence of classic
        Worldwide cool looking style.
      </div>
      <div className="lg:flex justify-between pb-[64px]">
        <div className="lg:w-[30%]">
          <div className="text-[#262626] font-sans text-2xl font-bold">
            Our Vision
          </div>
          <div className="text-[#767676] font-sans text-[16px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="lg:w-[30%] py-4 lg:py-0">
          <div className="text-[#262626] font-sans text-2xl font-bold">
            Our Story
          </div>
          <div className="text-[#767676] font-sans text-[16px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="text-[#262626] font-sans text-2xl font-bold">
            Our Brands
          </div>
          <div className="text-[#767676] font-sans text-[16px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
