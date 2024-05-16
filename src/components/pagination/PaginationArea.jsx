const PaginationArea = ({ pageNumber, paginate }) => {
  return (
    <>
      <nav className="py-3" aria-label="Page navigation example">
        <ul className="flex gap-[15px]">
          <li>
            <a className="flex items-center justify-center text-[#767676] font-sans text-[14px] font-normal px-[14px] py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out">
              Previous
            </a>
          </li>
          {pageNumber.map((item) => (
            <li onClick={() => paginate(item)}>
              <a className="flex items-center justify-center text-[#767676] font-sans text-[14px] font-normal px-[14px] py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out">
                {item + 1}
              </a>
            </li>
          ))}
          <li>
            <a className="flex items-center justify-center text-[#767676] font-sans text-[14px] font-normal px-[14px] py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationArea;
