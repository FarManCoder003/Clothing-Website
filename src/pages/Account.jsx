import Container from "../components/Container";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <Container>
        <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
          My Account
        </div>
        <div className="text-[#767676] font-sans font-normal text-[12px]">
          <Link to="/">Home</Link> &gt; <Link to="/account">My Account</Link>
        </div>
        <div className="lg:flex py-[64px] lg:py-[124px]">
          <div className="lg:w-2/12">
            <ul className="flex flex-wrap justify-between lg:block font-sans text-[16px]">
              <li className="py-[20px] font-bold text-[#262626]">Dashboard</li>
              <li className="py-[20px] lg:border-y border-y-[#F0F0F0] font-normal text-[#767676]">
                Others
              </li>
              <li className="py-[20px] font-normal text-[#767676]">
                Downloads
              </li>
              <li className="py-[20px] lg:border-y border-y-[#F0F0F0] font-normal text-[#767676]">
                Addresses
              </li>
              <li className="py-[20px] font-normal text-[#767676]">
                Account details
              </li>
              <li className="py-[20px] lg:border-y border-y-[#F0F0F0] font-normal text-[#767676]">
                Logout
              </li>
            </ul>
          </div>
          <div className="lg:w-10/12">
            <div className="font-sans text-[16px] font-normal text-[#767676] pt-[20px]">
              Hello <span className="text-[#262626]">admin</span> (not{" "}
              <span className="text-[#262626]">admin</span>?{" "}
              <span className="text-[#262626]">Log out</span>)
            </div>
            <div className="font-sans text-[16px] font-normal text-[#767676] pt-[30px]">
              From your account dashboard you can view your{" "}
              <span className="text-[#262626]">recent orders</span>, manage your{" "}
              <span className="text-[#262626]">
                shipping and billing addresses
              </span>
              , and{" "}
              <span className="text-[#262626]">
                edit your password and account details
              </span>
              .
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Account;
