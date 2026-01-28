"use client"

import { RefObject } from "react";
import { FilterOption } from "./types";
import { FilterDropdownItem } from "./FilterDropdownItem";

interface ContentProps {
    dropdownRef: RefObject<HTMLDivElement | null>;
    contentRef: RefObject<HTMLDivElement | null>;
    options: FilterOption[];
    selectedValue: string;
    onSelect: (id: string) => void;
}

export function FilterDropdownContent({
    dropdownRef,
    contentRef,
    options,
    selectedValue,
    onSelect
}: ContentProps) {
    return (
        <div
            ref={dropdownRef}
            className="absolute top-full left-0 mt-1 w-full z-50"
        >
            <div
                ref={contentRef}
                className="bg-surface-card border border-dm-border-subtle rounded-lg overflow-hidden shadow-2xl hidden"
                role="listbox"
            >
                <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent py-1 font-sans">
                    {options.map((option) => (
                        <FilterDropdownItem
                            key={option.id}
                            option={option}
                            isSelected={selectedValue === option.id}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
