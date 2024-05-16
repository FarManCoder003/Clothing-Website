import Container from "../components/Container";
import Flex from "../components/Flex";
import { apiData } from "../components/ContextApi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../components/pagination/Post";
import PaginationArea from "../components/pagination/PaginationArea";
import { IoGrid } from "react-icons/io5";
import { RiListCheck } from "react-icons/ri";

const Product = () => {
  let data = useContext(apiData);
  let [currentPage, setCurrentpage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allData = data.slice(firstPage, lastPage);
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i);
  }
  let paginate = (pageNumber) => {
    setCurrentpage(pageNumber + 1);
  };

  return (
    <>
      <section className="lg:py-[64px]">
        <Container>
          <div className="text-[#262626] font-sans font-bold text-[49px]">
            Products
          </div>
          <div className="text-[#767676] font-sans font-normal text-[12px]">
            <Link to="/">Home</Link> &gt; <Link to="/shop">Products</Link>
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
              <Flex className="justify-between items-center mb-[60]">
                <div className="flex gap-[20px]">
                  <div className="w-[36px] h-[36px] flex justify-center items-center border border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white transition duration-500 ease-in-out">
                    <IoGrid className="w-[20px] h-[20px]" />
                  </div>
                  <div className="w-[36px] h-[36px] flex justify-center items-center border border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white transition duration-500 ease-in-out">
                    <RiListCheck className="w-[20px] h-[20px]" />
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
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </Flex>
              <div className="flex justify-between flex-wrap mt-[60px]">
                <Post allData={allData} />
              </div>
              <div className="">
                <PaginationArea pageNumber={pageNumber} paginate={paginate} />
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Product;
