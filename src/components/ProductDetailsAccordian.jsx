import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaPlus } from "react-icons/fa";
import Flex from "./Flex";

const ProductDetailsAccordian = () => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProductDetailsAccordian;
