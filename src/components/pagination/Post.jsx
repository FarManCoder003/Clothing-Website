import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ allData, categorySearchFilter }) => {
  let [showAll, setShowAll] = useState(false); 
  let handleShowAll = () => {
    setShowAll(true);
  };

  let visibleItems = categorySearchFilter.slice(0, showAll ? categorySearchFilter.length : Math.min(5, categorySearchFilter.length));
  return (
    <>
      {categorySearchFilter.length > 0
        ? visibleItems.map((item) => (
            <div className="w-[48%] lg:w-[32%] lg:py-5">
              <Link to={`/shop/${item.id}`}>
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img
                      src={item.thumbnail}
                      className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
                      alt=""
                    />
                    <div className="bg-white absolute left-0 h-[50%] lg:h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                      <ul className="">
                        <li className="flex items-center justify-end text-end gap-x-2 lg:gap-x-4 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Add to Wish List
                          <FaHeart className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 lg:py-2 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Compare <TfiReload className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 text-[#262626] font-sans text-[10px] lg:text-[16px] font-bold">
                          Add to Cart <FaShoppingCart />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <h2 className="text-[#262626] font-sans text-xs lg:text-[18px] font-bold">
                      {item.title}
                    </h2>
                    <p className="text-[#767676] font-sans text-xs lg:text-[14px] font-normal">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : allData.map((item) => (
            <div className="w-[48%] lg:w-[32%] lg:py-5">
              <Link to={`/shop/${item.id}`}>
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img
                      src={item.thumbnail}
                      className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
                      alt=""
                    />
                    <div className="bg-white absolute left-0 h-[50%] lg:h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                      <ul className="">
                        <li className="flex items-center justify-end text-end gap-x-2 lg:gap-x-4 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Add to Wish List
                          <FaHeart className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 lg:py-2 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                          Compare <TfiReload className="text-[#262626]" />
                        </li>
                        <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 text-[#262626] font-sans text-[10px] lg:text-[16px] font-bold">
                          Add to Cart <FaShoppingCart />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <h2 className="text-[#262626] font-sans text-xs lg:text-[18px] font-bold">
                      {item.title}
                    </h2>
                    <p className="text-[#767676] font-sans text-xs lg:text-[14px] font-normal">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
      }
      {!showAll && categorySearchFilter.length > 5 && (
        <div className="relative  mt-4 w-full text-center cursor-default after:absolute after:w-full after:content-'' after:top-[50%] after:left-0 after:h-[1px] after:bg-[black] after:-z-10">
        <button onClick={handleShowAll} className="py-[10px] px-[14px] text-[#262626] hover:bg-[#262626] hover:text-white duration-500 ease-in-out bg-[white] font-sans text-[14px] font-bold border-[1px] rounded-full border-[#262626]">
          Show All
        </button>
        </div>
      )}
    </>
  );
};

export default Post;
