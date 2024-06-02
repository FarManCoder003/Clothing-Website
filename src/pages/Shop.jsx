import { useEffect } from "react";
import Product from "../components/Product";

const Shop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <>
      <div className="pt-[130px]">
        <Product />
      </div>
    </>
  );
};

export default Shop;
