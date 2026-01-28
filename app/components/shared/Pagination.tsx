import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function PaginationDemo() {
    return <Pagination className="w-full">
        <PaginationContent>
            <PaginationItem className="mr-auto">
                <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="ml-auto">
                <PaginationNext />
            </PaginationItem>
        </PaginationContent>
    </Pagination>;
}