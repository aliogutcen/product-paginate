"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  page: number;
};

const TablePagination = (props: Props) => {
  const params = new URLSearchParams(window.location.search);
  return (
    <section className="self-end">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={`${Number(params.get("skip"))===10 ? "hidden":""}`} href={`?skip=${Math.max(1, (props.page - 1) * 10)}`} />
        </PaginationItem>
        {Array.from({ length: props.page }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href={`?skip=${(index * 10) +10}`}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext className={`${Number(params.get("skip"))===100 ? "hidden":""}`} href={`?skip=${props.page * 10}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </section>
  );
};

export default TablePagination;
