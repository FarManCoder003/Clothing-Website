import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const ArrivalsItem = ({ item }) => {
  return (
    <>
      <div className="px-1 lg:py-5">
        <div className="relative group overflow-hidden">
          <img
            src={item.thumbnail}
            className="mx-auto w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
            alt=""
          />
          <div className="bg-white absolute left-0 h-[50%] lg:h-[38%] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
            <ul className="">
              <li className="flex items-center justify-end gap-x-2 lg:gap-x-4 text-[#767676] font-sans text-[10px] lg:text-[16px] font-normal">
                Add to Wish List <FaHeart className="text-[#262626]" />
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
          <h2 className="text-[#262626] font-sans text-xs lg:text-lg font-bold">
            {item.title}
          </h2>
          <p className="text-[#767676] font-sans text-xs lg:text-[16px] font-normal">
            ${item.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArrivalsItem;
