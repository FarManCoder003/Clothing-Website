import { apiData } from "./ContextApi";
import { useContext } from "react";
import ArrivalsItem from "./ArrivalsItem";
import Container from "./Container";
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="text-[30px] lg:text-[45px] absolute top-[30%] lg:top-[40%] right-0 lg:right-[-15px] z-40 translate-y-[-50%]"
    >
      <FaCircleArrowRight className="inline-block text-[#979797] bg-[white] rounded-[100%]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="text-[30px] lg:text-[45px] absolute top-[30%] lg:top-[40%] left-0 lg:left-[-15px] z-40 translate-y-[-50%]"
    >
      <FaCircleArrowLeft className="inline-block text-[#979797] bg-[white] rounded-[100%]" />
    </div>
  );
}

const Arrivals = () => {
  let data = useContext(apiData);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <h2 className="font-sans font-bold text-xl lg:text-[39px] text-[#262626]">
          New Arrivals
        </h2>
        <Slider className="w-full lg:h-[400px] lg:my-5" {...settings}>
          {data.map((item) => (
            <Link to="/shop">
              <ArrivalsItem item={item} />
            </Link>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Arrivals;
