import Container from "../components/Container";
import Flex from "../components/Flex";
import { apiData } from "../components/ContextApi";
import { useContext } from "react";
import ArrivalsItem from "../components/ArrivalsItem";
const Product = () => {
  let data = useContext(apiData);
  return (
    <>
      <section className="lg:py-[64px]">
        <Container>
          <div className="text-[#262626] font-sans font-bold text-[49px]">
            Products
          </div>
          <div className="text-[#767676] font-sans font-normal text-[12px]">
            Home &gt; Products
          </div>
          <Flex className="my-[124px]">
            <div className="w-3/12">
              <ul className="mb-[74px]">
                <li className="text-[#262626] font-sans text-[20px] font-bold mb-[26px]">
                  Shop by Category
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[20px]">
                  Category 1
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Category 2
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Category 3
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Category 4
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Category 5
                </li>
              </ul>
              <ul className="mb-[74px]">
                <li className="text-[#262626] font-sans text-[20px] font-bold mb-[26px]">
                  Shop by Color
                </li>
                <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[black] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px]">
                  Color 1
                </li>
                <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[#FF8686] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px]">
                  Color 2
                </li>
                <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[#7ED321] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px]">
                  Color 3
                </li>
                <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[#B6B6B6] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px]">
                  Color 4
                </li>
                <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[#15CBA5] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px]">
                  Color 5
                </li>
              </ul>
              <ul className="mb-[74px]">
                <li className="text-[#262626] font-sans text-[20px] font-bold mb-[26px]">
                  Shop by Brand
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[20px]">
                  Brand 1
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Brand 2
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Brand 3
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Brand 4
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  Brand 5
                </li>
              </ul>
              <ul className="mb-[74px]">
                <li className="text-[#262626] font-sans text-[20px] font-bold mb-[26px]">
                  Shop by Price
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[20px]">
                  $0.00 - $9.99
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  $10.00 - $19.99
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  $20.00 - $29.99
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  $30.00 - $39.99
                </li>
                <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px]">
                  $40.00 - $69.99
                </li>
              </ul>
            </div>
            <div className="w-9/12">
              <Flex className="justify-between items-center">
                <div className="flex gap-[20px]">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <rect width="36" height="36" fill="#262626" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.1999 16.6944V13.0833C19.1999 12.485 19.6849 12 20.2832 12H24.8573C25.4556 12 25.9406 12.485 25.9406 13.0833V16.6944C25.9406 17.2928 25.4556 17.7778 24.8573 17.7778H20.2832C19.6849 17.7778 19.1999 17.2928 19.1999 16.6944ZM17.7554 20.3056V23.9167C17.7554 24.515 17.2704 25 16.672 25H12.098C11.4997 25 11.0146 24.515 11.0146 23.9167V20.3056C11.0146 19.7072 11.4997 19.2222 12.098 19.2222H16.6721C17.2704 19.2222 17.7554 19.7072 17.7554 20.3056ZM17.7554 16.6944V13.0833C17.7554 12.485 17.2704 12 16.6721 12H12.098C11.4997 12 11.0146 12.485 11.0146 13.0833V16.6944C11.0146 17.2928 11.4997 17.7778 12.098 17.7778H16.672C17.2704 17.7778 17.7554 17.2928 17.7554 16.6944ZM24.8573 25H20.2832C19.6849 25 19.1999 24.515 19.1999 23.9167V20.3056C19.1999 19.7072 19.6849 19.2222 20.2832 19.2222H24.8573C25.4556 19.2222 25.9406 19.7072 25.9406 20.3056V23.9167C25.9406 24.515 25.4556 25 24.8573 25Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="35"
                        height="35"
                        stroke="#F0F0F0"
                      />
                      <path
                        d="M15 24.4375V22.5625C15 22.2518 14.7122 22 14.3571 22H11.6429C11.2878 22 11 22.2518 11 22.5625V24.4375C11 24.7482 11.2878 25 11.6429 25H14.3571C14.7122 25 15 24.7482 15 24.4375Z"
                        fill="#737373"
                      />
                      <path
                        d="M16.9414 12.5625V14.4375C16.9414 14.7482 17.589 15 18.3878 15H24.495C25.2938 15 25.9414 14.7482 25.9414 14.4375V12.5625C25.9414 12.2518 25.2938 12 24.495 12H18.3878C17.589 12 16.9414 12.2518 16.9414 12.5625H16.9414Z"
                        fill="#737373"
                      />
                      <path
                        d="M15 14.4375V12.5625C15 12.2518 14.7122 12 14.3571 12H11.6429C11.2878 12 11 12.2518 11 12.5625V14.4375C11 14.7482 11.2878 15 11.6429 15H14.3571C14.7122 15 15 14.7482 15 14.4375Z"
                        fill="#737373"
                      />
                      <path
                        d="M15 19.4375V17.5625C15 17.2518 14.7122 17 14.3571 17H11.6429C11.2878 17 11 17.2518 11 17.5625V19.4375C11 19.7482 11.2878 20 11.6429 20H14.3571C14.7122 20 15 19.7482 15 19.4375Z"
                        fill="#737373"
                      />
                      <path
                        d="M18.3878 20H24.495C25.2938 20 25.9414 19.7482 25.9414 19.4375V17.5625C25.9414 17.2518 25.2938 17 24.495 17H18.3878C17.589 17 16.9414 17.2518 16.9414 17.5625V19.4375C16.9414 19.7482 17.589 20 18.3878 20Z"
                        fill="#737373"
                      />
                      <path
                        d="M18.3878 25H24.495C25.2938 25 25.9414 24.7482 25.9414 24.4375V22.5625C25.9414 22.2518 25.2938 22 24.495 22H18.3878C17.589 22 16.9414 22.2518 16.9414 22.5625V24.4375C16.9414 24.7482 17.589 25 18.3878 25Z"
                        fill="#737373"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center text-[#767676] font-sans text-[16px] font-normal">
                  <div className="">Sort by:</div>
                  <div className="ml-[12px]">
                    <select className="lg:w-[239px] h-[36px] px-[10px] py-[3px] border-[1px] border-solid border-[#F0F0F0] bg-transparent">
                      <option>Featured</option>
                      <option>Featured 2</option>
                      <option>Featured 3</option>
                      <option>Featured 4</option>
                      <option>Featured 5</option>
                    </select>
                  </div>
                  <div className="ml-[40px] mr-[17px]">Show:</div>
                  <div className="">
                    <select className="lg:w-[139px] h-[36px] px-[10px] py-[3px] border-[1px] border-solid border-[#F0F0F0] bg-transparent">
                      <option>1</option>
                      <option> 2</option>
                      <option> 3</option>
                      <option> 4</option>
                      <option> 5</option>
                    </select>
                  </div>
                </div>
              </Flex>
              <Flex className="justify-between flex-wrap mt-[60px]">
                {data.map((item) => (
                  <ArrivalsItem item={item} />
                ))}
              </Flex>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Product;
