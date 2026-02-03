import { MdKeyboardArrowDown } from "react-icons/md";

export default function ProductDescription() {
    return <div className="w-full p-5 flex flex-col gap-y-2 bg-midnight-750 rounded-lg text-steel-500" >
        <span>From Battlefield Studios, the titans who turned digital battlefields into sprawling sandboxes of destruction, comes the next generation of combined-arms combat. For years, they have been the undisputed kings of large-scale first-person shooters, and now they are channeling that legacy into their most ambitious project ever. Prepare for the front lines of Battlefield™ 6.</span>
        <div className="text-[#65c756] flex items-center gap-x-1" >
            <span  >Read more</span>
            <MdKeyboardArrowDown size={28} />
        </div>
    </div>;
}
