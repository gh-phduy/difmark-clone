"use client";

import Image from "next/image";
import {
  Banknote,
  ChevronDown,
  Languages,
  MapPin,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
  Trophy,
  UserPlus,
} from "lucide-react";
import type { SellerProfile } from "../seller-profile.data";

interface SellerProfileHeaderProps {
  profile: SellerProfile;
  isDescriptionOpen: boolean;
  onToggleDescription: () => void;
}

export default function SellerProfileHeader({
  profile,
  isDescriptionOpen,
  onToggleDescription,
}: SellerProfileHeaderProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-midnight-700 bg-midnight-800">
      <div className="relative h-[145px] w-full">
        <Image
          src={profile.banner}
          alt={`${profile.name} banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 to-transparent" />
        <button className="absolute top-4 right-4 inline-flex items-center gap-1 rounded bg-black/40 px-3 py-1 text-xs font-medium">
          <Share2 size={13} /> Share
        </button>
      </div>

      <div className="bg-midnight-850 px-6 py-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border-4 border-midnight-800">
              <Image
                src={profile.avatar || "/avt.jpg"}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{profile.name}</h1>
              <p className="text-sm text-steel-500">
                Member since {profile.memberSince}
              </p>
              <div className="mt-3 flex items-center gap-6 text-sm text-forest-500">
                <button
                  type="button"
                  className="inline-flex items-center gap-1"
                >
                  <MessageCircle size={14} /> Open chat
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1"
                >
                  <UserPlus size={14} /> Follow
                </button>
              </div>
            </div>
          </div>

          <div className="text-right text-sm text-steel-500">
            <div>
              Seller:{" "}
              <span className="font-semibold text-white">{profile.tier}</span>
            </div>
            <div className="text-base">{profile.badge}</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 border-t border-midnight-700 pt-5 text-sm md:grid-cols-4 md:gap-0">
          <div className="md:pr-6">
            <p className="inline-flex items-center gap-1 text-steel-500">
              <ThumbsUp size={13} /> Positive feedbacks
            </p>
            <p className="text-lg leading-tight font-semibold text-forest-500">
              {profile.positiveFeedbacks.toFixed(2)}%
            </p>
            <p className="mt-2 inline-flex items-center gap-1 text-steel-500">
              <ThumbsDown size={13} /> Negative feedbacks
            </p>
            <p className="text-lg leading-tight font-semibold text-red-400">
              {profile.negativeFeedbacks.toFixed(2)}%
            </p>
          </div>

          <div className="md:border-l md:border-midnight-700 md:px-6">
            <p className="inline-flex items-center gap-1 text-steel-500">
              <Trophy size={13} /> Total trades
            </p>
            <p className="text-lg font-semibold">
              {profile.totalSales.toLocaleString()}
            </p>
            <p className="mt-2 text-steel-500">Total reviews</p>
            <p className="text-lg font-semibold">
              {profile.totalFeedbacks.toLocaleString()}
            </p>
          </div>

          <div className="md:border-l md:border-midnight-700 md:px-6">
            <p className="inline-flex items-center gap-1 text-steel-500">
              <MapPin size={13} /> Location
            </p>
            <p className="text-lg font-semibold">{profile.location}</p>
            <p className="mt-2 inline-flex items-center gap-1 text-steel-500">
              <Languages size={13} /> Language
            </p>
            <p className="text-lg font-semibold">{profile.language}</p>
          </div>

          <div className="md:border-l md:border-midnight-700 md:pl-6">
            <p className="inline-flex items-center gap-1 text-steel-500">
              <Banknote size={13} /> Currency
            </p>
            <p className="text-lg font-semibold">{profile.currency}</p>
            <p className="mt-2 text-steel-500">Followers</p>
            <p className="text-lg font-semibold">
              {profile.followers.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-midnight-700 pt-4">
          <button
            type="button"
            onClick={onToggleDescription}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-lg font-semibold">Store description</span>
            <span className="inline-flex items-center gap-2 text-forest-500">
              {isDescriptionOpen ? "Hide" : "Show"}
              <ChevronDown
                size={16}
                className={isDescriptionOpen ? "rotate-180" : ""}
              />
            </span>
          </button>

          {isDescriptionOpen && (
            <p className="mt-3 text-sm leading-6 text-steel-500">
              {profile.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
