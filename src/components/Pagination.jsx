import React from 'react';

const Pagination = ({ memesPerPage, totalMemes, paginate, currentPage }) => {
  const pageNumbers = [];

  
  for (let i = 1; i <= Math.ceil(totalMemes / memesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button 
              onClick={() => paginate(number)} 
              className={`page-link ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;