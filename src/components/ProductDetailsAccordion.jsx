import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Flex from "./Flex";

const ProductDetailsAccordion = () => {
  let [singleData, setSingleData] = useState([]);
  let productId = useParams();
  let getData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Accordion allowZeroExpanded preExpanded={["a"]}>
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton>
              <Flex className="justify-between border-y-[1px] border-[#F0F0F0] mb-[20px] py-[21px]">
                <div className="text-[#262626] font-sans font-bold text-[16px]">
                  FEATURES & DETAILS
                </div>
                <div className="">
                  <FaPlus />
                </div>
              </Flex>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="text-[#767676] font-sans font-normal text-[16px]">
              {singleData.description}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Flex className="justify-between border-b-[1px] border-[#F0F0F0] mb-[20px] py-[21px]">
                <div className="text-[#262626] font-sans font-bold text-[16px]">
                  SHIPPING & RETURNS
                </div>
                <div className="">
                  <FaPlus />
                </div>
              </Flex>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="text-[#767676] font-sans font-normal text-[16px]">
              {singleData.shippingInformation} <br />
              {singleData.warrantyInformation} <br />
              {singleData.returnPolicy}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProductDetailsAccordion;
