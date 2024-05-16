import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Post = ({ allData }) => {
  return (
    <>
      {allData.map((item) => (
        <div className="w-[32%] py-5">
          <Link to={`/shop/${item.id}`}>
            <div className="">
              <div className="relative group overflow-hidden">
                <img
                  src={item.thumbnail}
                  className="lg:w-[350px] lg:h-[350px]"
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
              <div className="flex justify-between items-center py-3">
                <h2 className="text-[#262626] font-sans text-[18px] font-bold">
                  {item.title}
                </h2>
                <p className="text-[#767676] font-sans text-[14px] font-normal">
                  ${item.price}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Post;
