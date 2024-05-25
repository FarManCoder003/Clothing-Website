import { Link } from "react-router-dom";
import Container from "../components/Container";

const Error = () => {
  return (
    <>
      <Container>
        <div className="w-1/2 my-[64px]">
          <div className="text-[#262626] text-[200px] font-sans font-bold">
            404
          </div>
          <div className="text-[#767676] text-[16px] font-sans font-normal">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </div>
          <div className="flex items-center my-[50px] px-[21px] w-[100%] h-[71px] border border-[#F0F0F0]">
            <input
              type=""
              className="w-full h-full outline-none"
              placeholder="Type to search"
            />
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6409 10.6979L15.7505 13.8074C16.0405 14.1006 16.0405 14.5747 15.7474 14.8678L14.8647 15.7505C14.5747 16.0437 14.1006 16.0437 13.8074 15.7505L10.6979 12.6409C10.5575 12.5006 10.4795 12.3103 10.4795 12.1107V11.6023C9.37856 12.4632 7.99376 12.9747 6.48733 12.9747C2.9037 12.9747 0 10.071 0 6.48733C0 2.9037 2.9037 0 6.48733 0C10.071 0 12.9747 2.9037 12.9747 6.48733C12.9747 7.99376 12.4632 9.37856 11.6023 10.4795H12.1107C12.3103 10.4795 12.5006 10.5575 12.6409 10.6979ZM2.49513 6.48733C2.49513 8.69552 4.28226 10.4795 6.48733 10.4795C8.69552 10.4795 10.4795 8.6924 10.4795 6.48733C10.4795 4.27914 8.6924 2.49513 6.48733 2.49513C4.27914 2.49513 2.49513 4.28226 2.49513 6.48733Z"
                  fill="#262626"
                />
              </svg>
            </span>
          </div>
          <Link to="/">
            <div className="w-[200px] h-[50px] leading-[50px] text-center bg-black text-white font-sans text-[14px] font-bold cursor-pointer">
              Back to Home
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Error;
