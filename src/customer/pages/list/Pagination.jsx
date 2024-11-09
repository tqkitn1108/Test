import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center">
      <nav aria-label="Page navigation">
        <ul className="flex">
          {/* Previous button */}
          <li className="mx-1">
            <button
              className="py-2 px-4 bg-blue-300 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out"
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          {/* Page numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <li className="mx-1" key={i}>
              <button
                className={`py-2 px-4 rounded-full ${
                  currentPage === i + 1
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-300 text-white hover:bg-blue-700'
                } transition duration-300 ease-in-out`}
              >
                {i + 1}
              </button>
            </li>
          ))}

          {/* Next button */}
          <li className="mx-1">
            <button
              className="py-2 px-4 bg-blue-300 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out"
              disabled={currentPage === totalPages}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
