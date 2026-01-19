import React from "react"
import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("relative overflow-hidden rounded-md bg-gray-700", className)}
            {...props}
        >
            {/* Shimmer Effect - Inner Div for maximum compatibility */}
            <div
                className="absolute inset-0 -translate-x-full animate-shimmer"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                }}
            />
        </div>
    )
}

export { Skeleton }
