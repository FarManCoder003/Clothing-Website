import { useContext, useEffect, useRef, useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import { apiData } from "./ContextApi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let info = useContext(apiData);
  let data = useSelector((state) => state.product.cartItem);
  let [cartShow, setCartShow] = useState(false);
  let [userCartShow, setUserCartShow] = useState(false);
  let [userShow, setUserShow] = useState(false);
  let [searchInput, setSearchInput] = useState("");
  let [searchFilter, setSearchFilter] = useState([]);
  let [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  let cartRef = useRef();
  let userRef = useRef();
  let userAccRef = useRef();
  let navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target) == true) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
      if (userRef.current.contains(e.target) == true) {
        setUserCartShow(!userCartShow);
      } else {
        setUserCartShow(false);
      }
      if (userAccRef.current.contains(e.target) == true) {
        setUserShow(!userShow);
      } else {
        setUserShow(false);
      }
    });
  }, [cartShow, userCartShow, userShow]);

  let productTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.qun;
    });
    return total.toFixed(2);
  };

  let handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchFilter([]);
    } else {
      let searchOne = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value)
      );
      setSearchFilter(searchOne);
    }
  };

  let handleSingleSearch = (id) => {
    navigate(`/shop/${id}`);
    setSearchFilter([]);
    setSearchInput("");
  };

  let handleKey = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowDown":
        setSelectedItemIndex((prevIndex) =>
          Math.min(prevIndex + 1, searchFilter.length - 1)
        );
        break;
      case "Enter":
        if (selectedItemIndex !== -1) {
          handleSingleSearch(searchFilter[selectedItemIndex].id);
        }
        break;
      default:
    }
    if (selectedItemIndex !== -1) {
      const selectedItemElement = document.getElementById(
        `searchItem-${selectedItemIndex}`
      );
      if (selectedItemElement) {
        selectedItemElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <nav className="lg:fixed z-[999] w-[100%] bg-[#F5F5F3] py-4 pt-[55px] lg:pt-[64px]">
      <Container>
        <Flex className="items-center">
          <div className="w-[20%] lg:w-[30%] relative cursor-pointer">
            <div ref={cartRef} className="flex items-center gap-x-3">
              <FaBars />
              <p className="font-sans hidden lg:block text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Shop by Category
              </p>
            </div>
            {cartShow && (
              <div className="absolute z-50 top-[30px] left-0 bg-[#262626] w-[170px]">
                <ul className="py-4">
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white ">
                    Accessories
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Furniture
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Electronics
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Clothes
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Bags
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-sm lg:text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-[60%] lg:w-[40%]">
            <div className="relative">
              <input
                value={searchInput}
                onKeyUp={handleKey}
                onChange={handleInput}
                placeholder="Search"
                className="w-full h-6 lg:h-[50px] font-sans font-normal text-[#C4C4C4] text-[14px]  outline-none px-2"
              />
              <div className="absolute text-sm lg:text-[14px] top-[50%] lg:right-4 right-2 translate-y-[-50%]">
                <FaSearch />
              </div>
              {searchFilter.length > 0 && (
                <div className="w-[100%] max-h-[380px] overflow-y-auto z-50 absolute bg-[#F5F5F3] top-[30px] lg:top-[50px] left-0">
                  {searchFilter.map((item, index) => (
                    <div
                      key={item.id}
                      id={`searchItem-${index}`}
                      className={`py-3 cursor-pointer ${
                        index === selectedItemIndex ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSingleSearch(item.id)}
                    >
                      <div className="flex gap-x-[20px] items-center">
                        <div className="">
                          <img
                            className="w-[20px] h-[20px] lg:w-[100px] lg:h-[100px]"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                        </div>
                        <div className="font-sans text-xs lg:text-[16px] font-normal text-[#262626]">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-[20%] lg:w-[30%] relative ">
            <div className="flex justify-end items-center gap-x-2 cursor-pointer">
              <div className="flex" ref={userAccRef}>
                <FaUser />
                <MdArrowDropDown />
              </div>
              <div ref={userRef} className="">
                <div className="relative">
                  <FaCartPlus />
                  {data.length > 0 ? (
                    <div className="absolute h-[15px] leading-[15px] w-[15px] bg-[#262626] left-[10px] top-[-15px] rounded-full text-xs font-sans text-center text-white">
                      {data.length}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {userShow && (
              <div className="absolute z-50 top-[30px] right-0 w-[130px] bg-[#262626] py-1 px-3">
                <ul className="font-sans text-sm lg:text-[16px] font-normal text-[#FFFFFFB2]">
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    <Link to="/account">My Account</Link>
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    <Link to="/login">Log in</Link>
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    <Link to="/signUp">Sign Up</Link>
                  </li>
                </ul>
              </div>
            )}
            {userCartShow && data.length > 0 && (
              <div className="w-[350px] z-50 absolute bg-[#F5F5F3] top-[30px] right-0">
                <div className="p-4">
                  {data.map((item) => (
                    <div className="font-sans flex gap-x-3 items-center my-[10px]">
                      <div>
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-[40px] h-[40px]"
                        />
                      </div>
                      <div className="font-sans">
                        <h3>
                          {item.title} x {item.qun}
                        </h3>
                        <h5>${(item.price * item.qun).toFixed(2)}</h5>
                      </div>
                      <div className="cursor-pointer ml-auto">
                        <RxCross2 />
                      </div>
                    </div>
                  ))}
                  <div className="">
                    <h3 className="pl-4 py-3">
                      Subtotal: <span>${productTotal()}</span>
                    </h3>
                    <div className="flex justify-around gap-3">
                      <Link to="/cart">
                        <a className="w-[148px] h-[50px] border-[1px] border-[#262626] inline-block text-center leading-[50px] hover:bg-[#262626] hover:text-[#FFF] duration-500 ease-in-out">
                          View Cart
                        </a>
                      </Link>
                      <Link to="/CheckOut">
                        <a className="w-[148px] h-[50px] border-[1px] border-[#262626] inline-block text-center leading-[50px] hover:bg-[#262626] hover:text-[#FFF] duration-500 ease-in-out">
                          Checkout
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
