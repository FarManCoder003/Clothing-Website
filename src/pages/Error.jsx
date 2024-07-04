import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  
  let handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchFilter([]);
    } else {
      let searchOne = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value)
      );
      setSearchFilter(searchOne);
    }
  };

  let handleSingleSearch = (id) => {
    navigate(`/shop/${id}`);
    setSearchFilter([]);
    setSearchInput("");
  };

  let handleKey = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowDown":
        setSelectedItemIndex((prevIndex) =>
          Math.min(prevIndex + 1, searchFilter.length - 1)
        );
        break;
      case "Enter":
        if (selectedItemIndex !== -1) {
          handleSingleSearch(searchFilter[selectedItemIndex].id);
        }
        break;
      default:
    }
    if (selectedItemIndex !== -1) {
      const selectedItemElement = document.getElementById(
        `searchItem-${selectedItemIndex}`
      );
      if (selectedItemElement) {
        selectedItemElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };
  return (
    <>
      <div className="lg:pt-[130px]">
        <Container>
          <div className="lg:w-1/2 mb-[64px]">
            <div className="text-[#262626] text-[100px] lg:text-[200px] font-sans font-bold">
              404
            </div>
            <div className="text-[#767676] text-[16px] font-sans font-normal">
              The page you were looking for couldn't be found. The page could be
              removed or you misspelled the word while searching for it. Maybe
              try a search?
            </div>
            <div className="flex items-center my-[50px] px-[21px] w-[100%] h-[71px] border border-[#F0F0F0]">
                <input
                value={searchInput}
                onKeyUp={handleKey}
                onChange={handleInput}
                placeholder="Search"
                className="w-full h-6 lg:h-[50px] font-sans font-normal text-[#C4C4C4] text-[14px]  outline-none px-2"
              />
              <div className="absolute text-sm lg:text-[14px] top-[50%] lg:right-4 right-2 translate-y-[-50%]">
                <FaSearch />
              </div>
              {searchFilter.length > 0 && (
                <div className="w-[100%] max-h-[380px] overflow-y-auto z-50 absolute bg-[#F5F5F3] top-[30px] lg:top-[50px] left-0">
                  {searchFilter.map((item, index) => (
                    <div
                      key={item.id}
                      id={`searchItem-${index}`}
                      className={`py-3 cursor-pointer ${
                        index === selectedItemIndex ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSingleSearch(item.id)}
                    >
                      <div className="flex gap-x-[20px] items-center">
                        <div className="">
                          <img
                            className="w-[20px] h-[20px] lg:w-[100px] lg:h-[100px]"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                        </div>
                        <div className="font-sans text-xs lg:text-[16px] font-normal text-[#262626]">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/">
              <div className="w-[200px] h-[50px] leading-[50px] text-center bg-black text-white font-sans text-[14px] font-bold cursor-pointer">
                Back to Home
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Error;
