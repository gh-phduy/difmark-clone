import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import type { MouseEvent } from "react";

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    previousLabel?: string;
    nextLabel?: string;
}

const getVisiblePages = (currentPage: number, totalPages: number) => {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: Array<number | "ellipsis-left" | "ellipsis-right"> = [1];
    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    if (start > 2) {
        pages.push("ellipsis-left");
    }

    for (let page = start; page <= end; page += 1) {
        pages.push(page);
    }

    if (end < totalPages - 1) {
        pages.push("ellipsis-right");
    }

    pages.push(totalPages);
    return pages;
};

export default function SharedPagination({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    previousLabel = "Prev",
    nextLabel = "Next",
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages = getVisiblePages(currentPage, totalPages);

    const handlePageChange = (event: MouseEvent, page: number) => {
        event.preventDefault();
        if (!onPageChange || page < 1 || page > totalPages || page === currentPage) {
            return;
        }
        onPageChange(page);
    };

    return (
        <Pagination className="w-full">
            <PaginationContent>
                <PaginationItem className="mr-auto">
                    <PaginationPrevious
                        href="#"
                        onClick={(event) => handlePageChange(event, currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    >
                        {previousLabel}
                    </PaginationPrevious>
                </PaginationItem>

                {pages.map((page) => (
                    <PaginationItem key={String(page)}>
                        {typeof page === "number" ? (
                            <PaginationLink
                                href="#"
                                isActive={page === currentPage}
                                onClick={(event) => handlePageChange(event, page)}
                            >
                                {page}
                            </PaginationLink>
                        ) : (
                            <PaginationEllipsis />
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem className="ml-auto">
                    <PaginationNext
                        href="#"
                        onClick={(event) => handlePageChange(event, currentPage + 1)}
                        className={
                            currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                        }
                    >
                        {nextLabel}
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}