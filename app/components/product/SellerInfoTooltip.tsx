import { Tooltip, TooltipContent, TooltipTrigger, TooltipArrow } from "@/components/ui/tooltip";

interface SellerInfoTooltipProps {
    icon: React.ReactNode;
    content: React.ReactNode;
}

export default function SellerInfoTooltip({ icon, content }: SellerInfoTooltipProps) {
    return (
        <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
                <div className="cursor-pointer w-[24px] h-[24px] text-steel-500 rounded-full bg-midnight-500 flex items-center justify-center">
                    {icon}
                </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-midnight-500 text-white text-base border-none">
                {content}
                <TooltipArrow className="fill-midnight-500" />
            </TooltipContent>
        </Tooltip>
    );
}
