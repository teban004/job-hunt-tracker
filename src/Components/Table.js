// Table.js
import React, { useState, useEffect } from 'react';

const Table = ({ data, columns, defaultPageSize }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [sortedField, setSortedField] = useState(null);
  const [sortedDirection, setSortedDirection] = useState('asc');

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(0);
  };

  const handleSort = (field) => {
    if (sortedField === field) {
      setSortedDirection(sortedDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortedDirection('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortedField) {
      const aValue = a[sortedField];
      const bValue = b[sortedField];
      if (aValue < bValue) return sortedDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortedDirection === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field} onClick={() => handleSort(column.field)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            >
              {columns.map((column) => (
                <td key={column.field}>{item[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {Math.ceil(sortedData.length / pageSize)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(sortedData.length / pageSize) - 1}
        >
          Next
        </button>
        <select onChange={handlePageSizeChange} value={pageSize}>
          <option value={2}>2 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>
    </div>
  );
};

export default Table;
