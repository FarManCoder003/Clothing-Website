import AddtoCart from "../components/AddtoCart";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <div className="pt-[130px]">
        <AddtoCart />
      </div>
    </>
  );
};

export default Cart;
