import { Pagination } from "flowbite-react";
import React from "react";
import { useState } from "react";

export default function PaginationComponent({ currentPage, onPageChange }) {
  return (
    <>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
