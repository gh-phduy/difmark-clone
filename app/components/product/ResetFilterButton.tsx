import { IoMdClose } from "react-icons/io";

export default function ResetFilterButton() {
    return (
        <button className="w-[44px] h-[44px] bg-surface-card hover:bg-surface-overlay flex items-center justify-center rounded-lg transition-colors border-none cursor-pointer group">
            <IoMdClose size={20} className="text-dm-text-tertiary group-hover:text-dm-text-primary transition-colors" />
        </button>
    );
}
