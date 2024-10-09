export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-4">
        {pageNumbers.map((number) => (
          <li key={number} className="cursor-pointer">
            <span
              onClick={() => paginate(number)}
              className={`px-3 py-1 bg-gray-300 rounded hover:bg-blue-500 hover:text-white ${
                currentPage === number && "!bg-blue-800 text-white font-bold"
              }`}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
