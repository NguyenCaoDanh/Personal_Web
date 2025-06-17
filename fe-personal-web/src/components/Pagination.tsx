import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
                                                 currentPage = 1,
                                                 totalPages = 1,
                                                 onPageChange,
                                                 className,
                                                 maxVisiblePages = 5,
                                               }) => {
  const [inputPage, setInputPage] = React.useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = parseInt(inputPage);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        onPageChange(page);
        setInputPage("");
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);

    // Adjust if we're near the end
    if (endPage <= startPage && totalPages > 2) {
      endPage = totalPages - 1;
      startPage = Math.max(2, endPage - maxVisiblePages + 3);
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pages.push("ellipsis-start");
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1 && totalPages > 2) {
      pages.push("ellipsis-end");
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
      <div
          className={cn("flex items-center justify-center space-x-2", className)}
      >
        {/* Previous button */}
        <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-[#252B39] border-none text-white hover:bg-[#374153] disabled:opacity-50"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        {/* Page numbers */}
        {visiblePages.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
                <span key={`ellipsis-${index}`} className="px-2 text-white">
              ...
            </span>
            );
          }

          return (
              <Button
                  key={`page-${page}`}
                  variant="outline"
                  size="icon"
                  onClick={() => onPageChange(page as number)}
                  className={cn(
                      "border-none",
                      currentPage === page
                          ? "bg-[#FFB800] text-black hover:bg-[#E6A700]"
                          : "bg-[#252B39] text-white hover:bg-[#374153]"
                  )}
              >
                {page}
              </Button>
          );
        })}

        {/* Page input */}
        <div className="relative w-20 mx-2">
          <Input
              value={inputPage}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Trang"
              className="h-9 w-full bg-[#1F2632] border-[#374153] text-white placeholder:text-gray-400 text-center"
          />
        </div>

        {/* Next button */}
        <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-[#252B39] border-none text-white hover:bg-[#374153] disabled:opacity-50"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
  );
};

export default Pagination;
