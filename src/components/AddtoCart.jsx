import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import { useDispatch, useSelector } from "react-redux";
import {
  productIncrement,
  productDecrement,
  removeProduct,
} from "./slice/productSlice";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((state) => state.product.cartItem);
  let handleIncrement = (index) => {
    if (data[index].qun < data[index].stock) {
      dispatch(productIncrement(index));
    }
  };
  let handleDecrement = (index) => {
    dispatch(productDecrement(index));
  };
  let handleRemove = (index) => {
    dispatch(removeProduct(index));
  };
  let productTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.qun;
    });
    return total.toFixed(2);
  };
  const { totalQuantity } = data.reduce(
    (acc, item) => {
      acc.totalQuantity += item.qun;
      return acc;
    },
    { totalQuantity: 0 }
  );
  let handleCheckOut = () => {
    toast("Checking Out");
    setTimeout(() => {
      navigate("/checkout");
    }, 1700);
  };
  let handleUpdateCart = () => {
    toast("Cart updated");
  };
  return (
    <>
      <section className="py-[48px] lg:py-[64px]">
        <Container>
          <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px]">
            Cart
          </div>
          <div className="text-[#767676] font-sans font-normal text-[12px]">
            <Link to="/">Home</Link> &gt; <Link to="/cart">Cart</Link>
          </div>
          <Flex className="mt-[64px] py-[16px] lg:py-[32px] px-[20px] bg-[#F5F5F3]">
            <div className="w-1/3 lg:w-6/12 text-[#262626] font-sans font-bold text-[16px]">
              Product
            </div>
            <div className="hidden lg:block lg:w-2/12 text-[#262626] font-sans font-bold text-[16px]">
              Price
            </div>
            <div className="w-1/3 lg:w-3/12 text-[#262626] text-center lg:text-start font-sans font-bold text-[16px]">
              Quantity
            </div>
            <div className="w-1/3 lg:w-1/12 text-[#262626] text-center lg:text-start font-sans font-bold text-[16px]">
              Total
            </div>
          </Flex>
          {data.map((item, index) => (
            <Flex className="items-center px-4 lg:px-[20px] py-[30px] border-x-[1px] border-x-[#F0F0F0]">
              <div className="w-1/3 lg:w-6/12 flex items-center">
                <div
                  className="mr-[15px] lg:mr-[40px] cursor-pointer"
                  onClick={() => handleRemove(index)}
                >
                  <RxCross2 />
                </div>
                <div className="w-[100px] lg:h-[100px] lg:mr-[20px]">
                  <img src={item.thumbnail} alt="" className="w-full" />
                </div>
                <div className="hidden lg:block text-[#262626] font-sans font-bold text-[10px] lg:text-[16px]">
                  {item.title}
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12">
                <div className="text-[#262626] font-sans font-bold text-[16px]">
                  ${item.price}
                </div>
              </div>
              <div className="w-1/3 lg:w-3/12">
                <div className="flex justify-between w-[65px] lg:w-[139px] border border-[#F0F0F0] mx-auto lg:mx-0 px-2 lg:px-[21px] py-[3px] text-[#767676] font-sans font-normal text-[16px]">
                  <div
                    onClick={() => handleDecrement(index)}
                    className="cursor-pointer"
                  >
                    -
                  </div>
                  <div className="">{item.qun}</div>
                  <div
                    onClick={() => handleIncrement(index)}
                    className="cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="w-1/3 lg:w-1/12">
                <div className="text-[#262626] text-center lg:text-start font-sans font-bold text-[16px]">
                  ${(item.price * item.qun).toFixed(2)}
                </div>
              </div>
            </Flex>
          ))}
          <Flex className="items-center border-[1px] border-[#F0F0F0] p-[10px] lg:p-[20px]">
            <select className="w-[100px] lg:w-[255px] bg-[transparent] border border-[#EAEAEA] text-[#767676] text-[10px] lg:text-[16px] font-sans font-normal py-[10px] lg:pl-[21px]">
              <option value="Size">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <div className="text-[#262626] font-sans font-bold ml-[5px] lg:ml-[23px] text-[14px]">
              Apply coupon
            </div>
            <div
              className="text-[#262626] ml-auto font-sans font-bold text-[14px] cursor-pointer"
              onClick={handleUpdateCart}
            >
              Update cart
            </div>
          </Flex>
          <div className="lg:text-end mt-[54px] mb-[24px] text-[#262626] text-[20px] font-sans font-bold">
            Cart totals
          </div>
          <Flex className="lg:w-5/12 ml-auto border border-[#F0F0F0]">
            <div className="w-1/2 text-[#262626] text-[16px] font-sans font-bold border-r border-r-[#F0F0F0]">
              <div className="pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                Total Quantity
              </div>
              <div className="pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                Subtotal
              </div>
              <div className="pl-[20px] pt-[17px] pb-[14px] ">Total</div>
            </div>
            <div className="w-1/2 text-[16px] font-sans">
              <div className="text-[#767676] font-normal pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                {totalQuantity}
              </div>
              <div className="text-[#767676] font-normal pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                $ {productTotal()}
              </div>
              <div className="text-[#262626] font-normal pl-[20px] pt-[17px] pb-[14px]">
                $ {(productTotal() * 1.1).toFixed(2)}
              </div>
            </div>
          </Flex>
          <div
            className="w-[200px] h-[50px] leading-[50px] text-center mt-[30px] ml-auto bg-black text-white font-sans text-[14px] font-bold cursor-pointer"
            onClick={handleCheckOut}
          >
            Proceed to Checkout
          </div>
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
        </Container>
      </section>
    </>
  );
};

export default AddToCart;
