import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

export default function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
    // Default breadcrumb structure if no items provided
    const defaultItems: BreadcrumbItem[] = [
        { label: "Console games", href: "/console-games" },
        { label: "Xbox live", href: "/xbox-live" },
        { label: "Xbox keys", href: "/xbox-keys" },
        { label: "Xbox series x", href: "/xbox-series-x" },
    ];

    const breadcrumbItems = items.length > 0 ? items : defaultItems;

    return (
        <nav
            className="self-start flex items-center gap-2 text-sm text-gray-400"
            aria-label="Breadcrumb"
        >
            {/* Home Icon */}
            <Link
                href="/"
                className="hover:text-gray-200 transition-colors"
                aria-label="Home"
            >
                <IoMdHome className="w-5 h-5" />
            </Link>

            {/* Breadcrumb Items */}
            {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;

                return (
                    <div key={index} className="flex items-center gap-2">
                        {/* Separator */}
                        <MdChevronRight className="w-4 h-4 text-gray-500" />

                        {/* Breadcrumb Link or Text */}
                        {item.href && !isLast ? (
                            <Link
                                href={item.href}
                                className="hover:text-gray-200 transition-colors capitalize"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className={isLast ? "text-gray-300" : "capitalize"}>
                                {item.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}