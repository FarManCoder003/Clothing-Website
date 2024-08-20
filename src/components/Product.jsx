import Container from "../components/Container";
import { apiData } from "../components/ContextApi";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../components/pagination/Post";
import PaginationArea from "../components/pagination/PaginationArea";
import { IoGrid } from "react-icons/io5";
import { RiListCheck } from "react-icons/ri";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Product = () => {
  let data = useContext(apiData);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(12);
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allData = data.slice(firstPage, lastPage);
  let [category, setCategory] = useState([]);
  let [categorySearchFilter, setCategorySearchFilter] = useState([]);
  let pageNumber = [];
  let [multiList, setMultiList] = useState("");
  let [lowPrice, setLowPrice] = useState("");
  let [highPrice, setHighPrice] = useState("");
  let [filterPrice, setFilterPrice] = useState([]);
  let [responsiveView, setResponsiveView] = useState(true);

  for (
    let i = 0;
    i <
    Math.ceil(
      categorySearchFilter.length > 0
        ? categorySearchFilter
        : data.length / perPage
    );
    i++
  ) {
    pageNumber.push(i);
  }
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let handleSubcategory = (items) => {
    let categoryFilter = data.filter((item) => item.category == items);
    setCategorySearchFilter(categoryFilter);
    setCurrentPage(1);
  };
  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };
  let handlePrice = (value) => {
    setLowPrice(value.low);
    setHighPrice(value.high);
    let priceFilter = data.filter(
      (item) => item.price > value.low && item.price < value.high
    );
    priceFilter.sort((a, b) => a.price - b.price);
    setFilterPrice(priceFilter);
    setCurrentPage(1);
  };
  let [categoryShow, setCategoryShow] = useState(false);
  let [showColor, setShowColor] = useState(false);
  let [showBrand, setShowBrand] = useState(false);
  let [showPrice, setShowPrice] = useState(false);

  let handleList = () => {
    setMultiList("activeList");
  };

  let handleShowData = (e) => {
    setPerPage(e.target.value);
  };

  useEffect(() => {
    function responsiveViews() {
      if (window.innerWidth < 1024) {
        setResponsiveView(false);
      } else {
        setResponsiveView(true);
      }
    }
    responsiveViews();
    window.addEventListener("resize", responsiveViews);
  }, []);

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
          <div className="lg:flex my-[48px] lg:my-[124px]">
            <div className="w-full lg:w-3/12 relative">
              <h3
                onClick={() => setCategoryShow(!categoryShow)}
                className="flex justify-between items-center text-[#262626] font-sans text-[20px] font-bold mb-[26px] cursor-pointer"
              >
                Shop by Category
                <p className="mr-[36px]">
                  {categoryShow == true ? <FaAngleUp /> : <FaAngleDown />}
                </p>
              </h3>
              {categoryShow && (
                <ul className="mb-[74px]">
                  {category.map((item) => (
                    <li
                      onClick={() => handleSubcategory(item)}
                      className="text-[#767676] hover:text-black font-sans text-[12px] lg:text-[16px] font-normal my-[20px] cursor-pointer capitalize
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <ul>
                <li
                  onClick={() => setShowColor(!showColor)}
                  className="flex justify-between items-center text-[#262626] font-sans text-[20px] font-bold mb-[26px] cursor-pointer"
                >
                  Shop by Color
                  <span className="text-[18px] mr-[36px]">
                    {showColor == true ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </li>
                {showColor && (
                  <div className="">
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
                    <li className="relative after:absolute after:top-[6px] after:left-[0] after:w-[11px] after:h-[11px] after:bg-[#15CBA5] after:rounded-[100%]   text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal pl-[20px] my-[20px] mb-[74px]">
                      Color 5
                    </li>
                  </div>
                )}
              </ul>
              <ul>
                <li
                  onClick={() => setShowBrand(!showBrand)}
                  className="flex justify-between items-center text-[#262626] font-sans text-[20px] font-bold mb-[26px] cursor-pointer"
                >
                  Shop by Brand
                  <span className="text-[18px] mr-[36px]">
                    {showBrand == true ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </li>
                {showBrand && (
                  <div className="">
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
                    <li className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] mb-[74px]">
                      Brand 5
                    </li>
                  </div>
                )}
              </ul>
              <ul className="mb-[74px]">
                <li
                  onClick={() => setShowPrice(!showPrice)}
                  className="flex justify-between items-center text-[#262626] font-sans text-[20px] font-bold mb-[26px] cursor-pointer"
                >
                  Shop by Price
                  <span className="text-[18px] mr-[36px]">
                    {showPrice == true ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </li>
                {showPrice && (
                  <div className="">
                    <li
                      onClick={() => handlePrice({ low: 0, high: 19.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[20px] cursor-pointer"
                    >
                      $1 - $19.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 20, high: 49.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $20 - $49.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 50, high: 99.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $50 - $99.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 100, high: 499.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $100 - $499.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 500, high: 999.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $500 - $999.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 1000, high: 4999.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $1000 - $4999.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 5000, high: 9999.99 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $5000 - $9999.99
                    </li>
                    <li
                      onClick={() => handlePrice({ low: 10000, high: 30000 })}
                      className="text-[#767676] font-sans text-[12px] lg:text-[16px] font-normal my-[30px] cursor-pointer"
                    >
                      $10000 - $30000
                    </li>
                  </div>
                )}
              </ul>
            </div>
            <div className="w-full lg:w-9/12">
              <div className="lg:flex justify-between items-center mb-[60]">
                <div className="flex lg:justify-end gap-[20px]">
                  <div
                    onClick={() => setMultiList("")}
                    className={`w-[36px] h-[36px] flex justify-center items-center border border-[#F0F0F0] transition duration-500 ease-in-out cursor-pointer ${
                      multiList == "activeList"
                        ? "bg-white text-[#767676]"
                        : "bg-[#262626] text-white"
                    }`}
                  >
                    <IoGrid className="w-[20px] h-[20px]" />
                  </div>
                  <div
                    onClick={handleList}
                    className={`w-[36px] h-[36px] flex justify-center items-center border border-[#F0F0F0] transition duration-500 ease-in-out cursor-pointer ${
                      multiList == ""
                        ? "bg-white text-[#767676]"
                        : "bg-[#262626] text-white"
                    }`}
                  >
                    <RiListCheck className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="flex items-center mt-[12px] lg:mt-0 text-[#767676] font-sans text-xs lg:text-[16px] font-normal">
                  <div className="">Sort by: </div>
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
                  <select
                    onChange={handleShowData}
                    className="lg:w-[139px] h-[36px] px-[10px] py-[3px] border-[1px] border-solid border-[#F0F0F0] bg-transparent"
                  >
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between flex-wrap mt-[60px]">
                <Post
                  allData={allData}
                  categorySearchFilter={categorySearchFilter}
                  multiList={multiList}
                  filterPrice={filterPrice}
                />
              </div>
              <div className="">
                {filterPrice.length === 0 && (
                  <div className="">
                    <PaginationArea
                      pageNumber={pageNumber}
                      paginate={paginate}
                      currentPage={currentPage}
                      next={next}
                      prev={prev}
                      responsiveView={responsiveView}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
