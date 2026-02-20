"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { TopUpGame } from "@/lib/constants/products";
import { cn } from "@/lib/utils";

interface TopUpGameCardProps {
  game: TopUpGame;
  className?: string;
}

export function TopUpGameCard({ game, className }: TopUpGameCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-[#1a1a1f]",
        "h-[375px] w-[375px] shrink-0 cursor-pointer",
        className,
      )}
    >
      <Link
        href={`/direct-top-up/${game.slug}`}
        className="block h-full w-full"
      >
        {/* Cover image */}
        {!imgError ? (
          <motion.div
            className="absolute inset-0"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={game.coverImage}
              alt={game.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-slate-900" />
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
        />

        {/* Label bar */}
        <motion.div
          className="absolute right-0 bottom-0 left-0 flex justify-center bg-midnight-800/60 p-5 backdrop-blur-xs"
          variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-lg font-semibold text-white">{game.name}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
