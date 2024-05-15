import Ad1 from "../assets/Ad 1.png";
import Ad2 from "../assets/Ad 2.png";
import Ad3 from "../assets/Ad 3.png";
import Flex from "./Flex";
import Container from "./Container";

const Ads = () => {
  return (
    <section>
      <Container>
        <Flex className="justify-between py-[35px] lg:py-[128px]">
          <div className="w-1/2">
            <img src={Ad1} alt="" className="w-full h-full" />
          </div>
          <div className="w-1/2  lg:ml-[40px] w-fill ml-[20px]">
            <img src={Ad2} alt="" className="pb-[20px] lg:pb-[40px]" />
            <img src={Ad3} alt="" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Ads;
