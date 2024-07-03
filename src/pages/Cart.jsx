import AddToCart from "../components/AddToCart";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <div className="lg:pt-[130px]">
        <AddToCart />
      </div>
    </>
  );
};

export default Cart;
