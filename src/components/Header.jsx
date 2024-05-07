import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/logo.png";
import Container from "./Container";
import Flex from "./Flex";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <header className="">
      <Container>
        <Flex className="justify-between items-center lg:h-[80px] lg:py-0 py-3">
          <div className="w-1/3">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-2/3">
            <ul
              className={`lg:flex z-50  gap-x-10 lg:text-start text-center lg:p-0 p-2 absolute lg:static duration-700 ease-out ${
                show == true
                  ? "bg-[gray] lg:top-[50px] block top-10 right-0 w-[100px]"
                  : "lg:top-[50px] hidden top-10 left-[-100px]"
              }`}
            >
              <li className="font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Home
              </li>
              <li className="font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Shop
              </li>
              <li className="font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                About
              </li>
              <li className="font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Contacts
              </li>
              <li className="font-sans text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Journal
              </li>
            </ul>
          </div>
          <div className="lg:hidden" onClick={() => setShow(!show)}>
            {show == true ? <RxCross2 /> : <FaBars />}
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
