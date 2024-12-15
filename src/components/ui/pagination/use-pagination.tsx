type PaginationProps = {
  currentPage: number;
  totalEntries: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalEntries,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalEntries / pageSize);

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = parseInt(event.target.value, 10);
    onPageChange(selectedPage);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="font-lato text-[15.32px] font-bold leading-[18.38px] tracking-[0.03em]">
        Results{' '}
        <span className="font-lato text-[15.32px] font-bold leading-[18.38px] tracking-[0.03em]">
          {(currentPage - 1) * pageSize + 1}
        </span>{' '}
        -{' '}
        <span className="ffont-lato text-[15.32px] font-bold leading-[18.38px] tracking-[0.03em]">
          {Math.min(currentPage * pageSize, totalEntries)}
        </span>{' '}
        of{' '}
        <span className="font-lato text-[15.32px] font-bold leading-[18.38px] tracking-[0.03em]">
          {totalEntries}
        </span>{' '}
        Entries
      </span>
      <div className="xs:mt-0 relative mt-2 inline-flex">
        {/* <button
          className="flex h-10 items-center justify-center rounded-s bg-gray-800 px-4 text-base font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <svg
            className="me-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          className="flex h-10 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-4 text-base font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button> */}

        <select
          value={currentPage}
          onChange={handlePageChange}
          className="w-[85px] appearance-none border-0 bg-white px-4 py-[5.5px] text-[11.14px] font-bold leading-[13.37px] tracking-[0.03em] text-[#282828] outline-none focus:outline-none"
        >
          {pageNumbers.map((page) => (
            <option key={page} value={page}>
              Page {page}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-0 top-0 cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10L12 15L17 10H7Z" fill="black" />
        </svg>
      </div>
    </div>
  );
};
