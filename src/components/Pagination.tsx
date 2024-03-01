import React, { useState } from "react";

type PaginationProps = {
  currentPage: number;
  rowsPerPage: number;
  totalRecords: number;
  hasPrevious: boolean;
  hasNext: boolean;
};

type RangeProps = {
  from: number;
  to: number;
};

export default function Pagination({
  currentPage,
  rowsPerPage,
  totalRecords,
  hasPrevious,
  hasNext,
}: PaginationProps) {
  const range = (): RangeProps => {
    let _from = (currentPage - 1) * rowsPerPage;
    let _to = _from + rowsPerPage;
    if (totalRecords && _to > totalRecords) {
      _to = totalRecords;
    }
    return {
      from: _from,
      to: _to,
    };
  };

  return (
    <div className="flex items-center justify-center md:justify-between">
      <div className="flex items-center gap-2 text-base">
        <div className="hidden md:block text-left md:my-4 text-dark-500">
          Showing
          {range()?.from || 1} -{range()?.to}
          of {totalRecords}
        </div>
      </div>
    </div>
  );
}
