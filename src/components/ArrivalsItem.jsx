import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const ArrivalsItem = ({ item }) => {
  return (
    <>
      <div className="px-1 py-5">
        <div className="relative group overflow-hidden">
          <img
            src={item.thumbnail}
            className="lg:w-[350px] xl:w-[376px] lg:h-[350px]"
            alt=""
          />
          <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
            <ul className="pr-5">
              <li className="flex items-center justify-end gap-x-4 text-[#767676] font-sans text-[16px] font-normal">
                Add to Wish List <FaHeart className="text-[#262626]" />
              </li>
              <li className="flex items-center justify-end gap-x-4 py-2 text-[#767676] font-sans text-[16px] font-normal">
                Compare <TfiReload className="text-[#262626]" />
              </li>
              <li className="flex items-center justify-end gap-x-4 text-[#262626] font-sans text-[16px] font-bold">
                Add to Cart <FaShoppingCart />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <h2 className="text-[#262626] font-sans text-[20px] font-bold">
            {item.title}
          </h2>
          <p className="text-[#767676] font-sans text-[16px] font-normal">
            ${item.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArrivalsItem;
