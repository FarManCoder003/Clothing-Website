import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ allData, categorySearchFilter, multiList }) => {
  let [filterShow, setFilterShow] = useState([]);
  let [categoryShow, setCategoryShow] = useState(true);
  let dispatch = useDispatch();

  useEffect(() => {
    let filter = categorySearchFilter.slice(0, 6);
    setFilterShow(filter);
  }, [categorySearchFilter]);

  let handleShow = () => {
    setFilterShow(categorySearchFilter);
    setCategoryShow(false);
  };

  let handleHide = () => {
    let filter = categorySearchFilter.slice(0, 6);
    setFilterShow(filter);
    setCategoryShow(true);
  };

  let handleCart = (item) => {
    toast("Added to cart");
    dispatch(addToCart({ ...item, qun: 1 }));
  };

  let discountedPrice = (item) => {
    let price = item.price + item.price * (item.discountPercentage / 100);
    return price;
  };

  return (
    <>
      {categorySearchFilter.length > 0
        ? filterShow.map((item) => (
            <div
              className={`${
                multiList == "activeList"
                  ? ""
                  : "flex justify-between flex-wrap w-[48%] lg:w-[32%] lg:py-5"
              }`}
            >
              <div className={`${multiList == "activeList" ? "lg:flex" : ""}`}>
                <div className="relative group overflow-hidden">
                  <Link to={`/shop/${item.id}`}>
                    {multiList == "activeList" ? (
                      <img
                        src={item.thumbnail}
                        className="lg:w-[350px] lg:h-[250px]"
                        alt=""
                      />
                    ) : (
                      <div className="relative">
                        {item.discountPercentage >= 0.4 && (
                          <div className="absolute top-0 left-0 w-[92px] h-[36px] leading-[36px] bg-[#262626] text-[#fff] font-sans text-[16px] font-bold text-center">
                            {item.discountPercentage.toFixed(0)}%
                          </div>
                        )}

                        <img
                          src={item.thumbnail}
                          className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
                          alt=""
                        />
                      </div>
                    )}
                  </Link>
                  {multiList == "activeList" ? (
                    ""
                  ) : (
                    <div className="bg-white absolute left-0 h-[50%] lg:h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                      <ul className="">
                        <li className="flex items-center justify-end text-end gap-x-2 lg:gap-x-4 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Add to Wish List
                          <FaHeart className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 lg:py-2 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Compare <TfiReload className="text-[#262626]" />
                        </li>
                        <li
                          onClick={() => handleCart(item)}
                          className="flex items-center justify-end gap-x-2 lg:gap-x-4 text-[#262626] font-sans text-[10px] lg:text-[16px] font-bold cursor-pointer"
                        >
                          Add to Cart <FaShoppingCart />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    multiList == "activeList"
                      ? ""
                      : "flex justify-between items-center py-3"
                  }`}
                >
                  <Link to={`/shop/${item.id}`}>
                    <h2
                      className={`${
                        multiList == "activeList"
                          ? "lg:text-[28px] pt-[35px]"
                          : "text-[#262626] font-sans text-xs lg:text-[18px] font-bold"
                      }`}
                    >
                      {item.title}
                    </h2>
                  </Link>
                  {multiList == "activeList" ? (
                    <div className="">
                      <Link to={`/shop/${item.id}`}>
                        <div className="text-[#262626] font-sans font-semibold text-[14px]">
                          {item.description}
                        </div>
                        <div className="flex items-center gap-[10px] pt-[15px]">
                          <div className="text-[#767676] font-sans text-[14px] lg:text-[16px] font-normal">
                            <del>${discountedPrice(item).toFixed(2)}</del>
                          </div>
                          <div className="text-[#262626] font-sans text-[18px] lg:text-[20px] font-bold">
                            ${item.price}
                          </div>
                        </div>
                      </Link>
                      <div
                        onClick={() => handleCart(item)}
                        className="w-[100px] h-[40px] leading-[40px] text-center mt-[20px] bg-black text-white font-sans text-[14px] font-bold cursor-pointer"
                      >
                        Add to cart
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#767676] font-sans text-xs lg:text-[14px] font-normal">
                      ${item.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        : allData.map((item) => (
            <div
              className={`${
                multiList == "activeList"
                  ? ""
                  : "flex justify-between flex-wrap w-[48%] lg:w-[32%] lg:py-5"
              }`}
            >
              <div className={`${multiList == "activeList" ? "lg:flex" : ""}`}>
                <div className="relative group overflow-hidden">
                  <Link to={`/shop/${item.id}`}>
                    {multiList == "activeList" ? (
                      <img
                        src={item.thumbnail}
                        className="lg:w-[350px] lg:h-[250px]"
                        alt=""
                      />
                    ) : (
                      <div className="relative">
                        {item.discountPercentage >= 0.4 && (
                          <div className="absolute top-0 left-0 lg:w-[92px] lg:h-[36px] px-[8px] lg:px-0 lg:leading-[36px] bg-[#262626] text-[#fff] font-sans text-xs lg:text-[16px] font-bold text-center">
                            -{item.discountPercentage.toFixed(0)}%
                          </div>
                        )}

                        <img
                          src={item.thumbnail}
                          className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
                          alt=""
                        />
                      </div>
                    )}
                  </Link>
                  {multiList == "activeList" ? (
                    ""
                  ) : (
                    <div className="bg-white absolute left-0 h-[50%] lg:h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                      <ul className="">
                        <li className="flex items-center justify-end text-end gap-x-2 lg:gap-x-4 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Add to Wish List
                          <FaHeart className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 lg:py-2 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Compare <TfiReload className="text-[#262626]" />
                        </li>
                        <li
                          onClick={() => handleCart(item)}
                          className="flex items-center justify-end gap-x-2 lg:gap-x-4 text-[#262626] font-sans text-[10px] lg:text-[16px] font-bold cursor-pointer"
                        >
                          Add to Cart <FaShoppingCart />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    multiList == "activeList"
                      ? ""
                      : "flex justify-between items-center py-3"
                  }`}
                >
                  <Link to={`/shop/${item.id}`}>
                    <h2
                      className={`${
                        multiList == "activeList"
                          ? "lg:text-[28px] pt-[35px]"
                          : "text-[#262626] font-sans text-xs lg:text-[18px] font-bold"
                      }`}
                    >
                      {item.title}
                    </h2>
                  </Link>
                  {multiList == "activeList" ? (
                    <div className="">
                      <Link to={`/shop/${item.id}`}>
                        <div className="text-[#262626] font-sans font-semibold text-[14px]">
                          {item.description}
                        </div>
                        <div className="flex items-center gap-[10px] pt-[15px]">
                          <div className="text-[#767676] font-sans text-[14px] lg:text-[16px] font-normal">
                            <del>${discountedPrice(item).toFixed(2)}</del>
                          </div>
                          <div className="text-[#262626] font-sans text-[18px] lg:text-[20px] font-bold">
                            ${item.price}
                          </div>
                        </div>
                      </Link>
                      <div
                        onClick={() => handleCart(item)}
                        className="w-[100px] h-[40px] leading-[40px] text-center mt-[20px] bg-black text-white font-sans text-[14px] font-bold cursor-pointer"
                      >
                        Add to cart
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#767676] font-sans text-xs lg:text-[14px] font-normal">
                      ${item.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

      {categoryShow ? (
        categorySearchFilter.length > 6 && (
          <div className="relative  mt-4 w-full text-center cursor-default after:absolute after:w-full after:content-'' after:top-[50%] after:left-0 after:h-[1px] after:bg-[black] after:-z-10">
            <button
              onClick={handleShow}
              className="py-[10px] px-[14px] text-[#262626] hover:bg-[#262626] hover:text-white duration-500 ease-in-out bg-[white] font-sans text-[14px] font-bold border-[1px] rounded-full border-[#262626]"
            >
              Show All
            </button>
          </div>
        )
      ) : (
        <div className="relative  mt-4 w-full text-center cursor-default after:absolute after:w-full after:content-'' after:top-[50%] after:left-0 after:h-[1px] after:bg-[black] after:-z-10">
          <button
            onClick={handleHide}
            className="py-[10px] px-[14px] text-[#262626] hover:bg-[#262626] hover:text-white duration-500 ease-in-out bg-[white] font-sans text-[14px] font-bold border-[1px] rounded-full border-[#262626]"
          >
            Hide
          </button>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Post;