import Logo2 from "../assets/Logo 2.png";
import SocialIcons from "../assets/Social Icons.png";
import Container from "./Container";
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] lg:py-[55px] py-[24px]">
      <Container>
        <div className="lg:flex">
          <div className="lg:w-[35%] flex justify-between">
            <div className="">
              <ul className="">
                <li className="lg:text-[16px] text-[10px] font-bold font-sans lg:mb-[17px] mb-[9px]">
                  MENU
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Home
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Shop
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  About
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Contact
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D] ">
                  Journal
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="">
                <li className="lg:text-[16px] text-[10px] font-bold font-sans lg:mb-[17px] mb-[9px]">
                  SHOP
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Category 1
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Category 2
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Category 3
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Category 4
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D] ">
                  Category 5
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="">
                <li className="lg:text-[16px] text-[10px] font-bold font-sans lg:mb-[17px] mb-[9px]">
                  HELP
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Privacy Policy
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Terms & Conditions
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Special E-shop
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  Shipping
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D] ">
                  Secure Payments
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-[55%] flex justify-around lg:items-start items-center">
            <div className="lg:w-[1/2] py-4 lg:py-0 ">
              <ul className=" lg:text-start py-3 lg:py-0">
                <li className="lg:text-[16px] lg:pr-0 pr-3 text-[10px] font-bold font-sans lg:mb-[17px] mb-[9px]">
                  (052) 611-5711
                </li>
                <li className="lg:text-[16px] text-[10px] font-bold font-sans lg:mb-[17px] mb-[9px]">
                  company@domain.com
                </li>
                <li className="lg:text-[14px] text-[8px] font-normal font-sans text-[#6D6D6D]  mb-[6px]">
                  575 Crescent Ave. Quakertown, PA 18951
                </li>
              </ul>
            </div>
            <div className="">
              <img src={Logo2} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:mt-[65px]">
          <img src={SocialIcons} alt="" className="lg:w-[91px] lg:h-[16px]" />
          <div className="lg:text-[14px] text-[8px] font-sans font-normal text-[#6D6D6D]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
