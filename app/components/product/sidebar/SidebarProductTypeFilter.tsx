"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GoTriangleUp } from "react-icons/go";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Separator } from "@base-ui/react";
import { PRODUCT_TYPES_DATA } from "./filter-data";
import { FilterItemRow } from "./FilterItemRow";

export default function SidebarProductTypeFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(["game-keys"]);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleToggleCheck = (id: string, subItemIds?: string[]) => {
    setCheckedIds((prev) => {
      const isChecked = prev.includes(id);
      let newChecked = [...prev];

      if (isChecked) {
        newChecked = newChecked.filter((i) => i !== id);
        if (subItemIds) {
          newChecked = newChecked.filter((i) => !subItemIds.includes(i));
        }
      } else {
        newChecked.push(id);
        if (subItemIds) {
          newChecked = Array.from(new Set([...newChecked, ...subItemIds]));
        }
      }
      return newChecked;
    });
  };

  // Sort Product Types: Checked ones (or ones with checked sub-items) go to top
  const sortedProductTypes = useMemo(() => {
    return [...PRODUCT_TYPES_DATA].sort((a, b) => {
      const aChecked =
        checkedIds.includes(a.id) ||
        a.subItems.some((sub) => checkedIds.includes(sub.id));
      const bChecked =
        checkedIds.includes(b.id) ||
        b.subItems.some((sub) => checkedIds.includes(sub.id));

      if (aChecked && !bChecked) return -1;
      if (!aChecked && bChecked) return 1;
      return 0;
    });
  }, [checkedIds]);

  return (
    <>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-60 bg-gray-700"
      />
      <div className="w-full border-t border-[#30363d]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer items-center justify-between py-2 text-lg text-white hover:text-gray-300"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold">Product type</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-midnight-600 text-xs text-gray-400">
              {checkedIds.length > 0 ? checkedIds.length : 83}
            </span>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 0 : -180 }}
            transition={{ duration: 0.2 }}
          >
            <GoTriangleUp size={36} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2 pb-4">
                <div className="relative mb-4">
                  <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search product type"
                    className="h-9 border-[#30363d] bg-midnight-750 pl-8 text-sm text-gray-300 placeholder:text-gray-500"
                  />
                </div>

                <LayoutGroup>
                  {sortedProductTypes.map((type) => (
                    <FilterItemRow
                      key={type.id}
                      item={type}
                      isExpanded={expandedItems.includes(type.id)}
                      onToggleExpand={toggleExpand}
                      checkedIds={checkedIds}
                      onToggleCheck={handleToggleCheck}
                    />
                  ))}
                </LayoutGroup>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
