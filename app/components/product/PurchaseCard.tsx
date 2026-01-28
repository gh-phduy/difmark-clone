"use client"

import Image from "next/image";
import { FaKey, FaGamepad, FaTruck, FaShoppingCart, FaEye, FaShareAlt, FaComments } from "react-icons/fa";
import { MdPerson, MdInfo } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedAvatar } from "@/app/components/shared/OptimizedAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FcGoogle } from "react-icons/fc";
import { FaApplePay } from "react-icons/fa";
import { PurchaseCardProps } from "@/app/types/product";


export default function PurchaseCard({
    product,
    seller,
    onAddToCart,
    onCheckout,
    onChat
}: PurchaseCardProps) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Card className="w-[780px] bg-[#2a3441]/80 backdrop-blur-md border-none">
            <CardContent className="p-6 flex flex-col gap-5">
                {/* Seller Info Section */}
                <div className="flex items-start justify-between">
                    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                        <PopoverTrigger asChild>
                            <div
                                className="flex items-center gap-3 cursor-pointer"
                                onMouseEnter={() => setIsPopoverOpen(true)}
                                onMouseLeave={() => setIsPopoverOpen(false)}
                            >
                                {/* Seller Avatar - Using OptimizedAvatar for Next.js Image optimization */}
                                <OptimizedAvatar
                                    src={seller.avatar}
                                    alt={`${seller.name} avatar`}
                                    size={48}
                                    isOnline={seller.isOnline}
                                    fallback={seller.name.substring(0, 2).toUpperCase()}
                                />

                                {/* Seller Name and Badge */}
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold">{seller.name}</span>
                                        <span className="text-yellow-500">{seller.badge}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="flex items-center gap-1 text-xs border-green-500/30 bg-green-500/10 text-gray-400 hover:bg-green-500/10">
                                            <span className="text-green-500">🏆</span>
                                            {seller.tier}
                                        </Badge>
                                        {/* Star Rating */}
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`text-sm ${i < seller.rating ? 'text-yellow-500' : 'text-gray-600'}`}>⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent
                            className="w-[320px] bg-[#3a4654] border-gray-600 p-4"
                            side="bottom"
                            align="start"
                            onMouseEnter={() => setIsPopoverOpen(true)}
                            onMouseLeave={() => setIsPopoverOpen(false)}
                        >
                            {/* Tooltip Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <OptimizedAvatar
                                    src={seller.avatar}
                                    alt={`${seller.name} avatar`}
                                    size={48}
                                    isOnline={seller.isOnline}
                                    fallback={seller.name.substring(0, 2).toUpperCase()}
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold">{seller.name}</span>
                                        <span className="text-yellow-500">{seller.badge}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="flex items-center gap-1 text-xs border-green-500/30 bg-green-500/10 text-gray-400 hover:bg-green-500/10">
                                            <span className="text-green-500">🏆</span>
                                            {seller.tier}
                                        </Badge>
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`text-xs ${i < seller.rating ? 'text-yellow-500' : 'text-gray-600'}`}>⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Success rate:</div>
                                    <div className="text-white font-semibold">{seller.successRate.toFixed(2)}%</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Total feedbacks:</div>
                                    <div className="text-white font-semibold">{seller.totalFeedbacks.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Seller's time zone:</div>
                                    <div className="text-white font-semibold">{seller.timezone}</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Total sales:</div>
                                    <div className="text-white font-semibold">{seller.totalSales.toLocaleString()}</div>
                                </div>
                            </div>

                            {/* Feedback Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Positive feedbacks:</div>
                                    <div className="text-green-500 font-semibold">{seller.positiveFeedbacks.toFixed(2)}%</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Negative feedbacks:</div>
                                    <div className="text-red-500 font-semibold">{seller.negativeFeedbacks.toFixed(2)}%</div>
                                </div>
                            </div>

                            {/* Chat Button */}
                            <Button
                                className="w-full bg-[#4ade80] hover:bg-[#3bc66d] text-white font-semibold"
                                onClick={onChat}
                            >
                                <FaComments className="w-4 h-4 mr-2" />
                                CHAT
                            </Button>
                        </PopoverContent>
                    </Popover>

                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-transparent">
                            <FaEye className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-transparent">
                            <FaShareAlt className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Product Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="flex flex-col gap-3">
                        {/* Product Type */}
                        <div className="flex items-center gap-3">
                            <FaKey className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">Product type:</span>
                            <span className="text-white font-medium">{product.type}</span>
                        </div>

                        {/* Platform */}
                        <div className="flex items-center gap-3">
                            <FaGamepad className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">Platform:</span>
                            <span className="text-white font-medium">{product.platform}</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-3">
                        {/* Edition */}
                        <div className="flex items-center gap-3">
                            <MdPerson className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">Edition:</span>
                            <span className="text-white font-medium">{product.edition}</span>
                        </div>

                        {/* Delivery */}
                        <div className="flex items-center gap-3">
                            <FaTruck className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">Delivery:</span>
                            <span className="text-white font-medium">{product.delivery}</span>
                        </div>
                    </div>
                </div>

                {/* Activation Info */}
                <div className="flex items-center gap-2 text-sm">
                    <IoMdCheckmarkCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">Can be activated from <span className="text-white font-medium">{product.activationRegion}</span></span>
                    <Button variant="ghost" size="icon" className="ml-auto text-gray-400 hover:text-white hover:bg-transparent">
                        <MdInfo className="w-5 h-5" />
                    </Button>
                </div>

                {/* Divider with Price Label */}
                <div className="flex w-full items-center gap-x-4">
                    <Separator className="flex-1 bg-gray-600" />
                    <span className="text-gray-400 text-xs">Price</span>
                    <Separator className="flex-1 bg-gray-600" />
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Total amount:</span>
                    <div className="flex items-center gap-3">
                        <span className="text-white text-3xl font-bold">{product.currency} {product.price.toFixed(2)}</span>
                        {/* Payment Options */}
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-white text-black rounded-full px-3 py-1.5">
                                <FcGoogle size={16} />
                                <span className="text-sm font-medium">Pay</span>
                            </Badge>
                            <Badge variant="secondary" className="bg-white text-black rounded-full ">
                                <FaApplePay size={32} />
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Button
                        className="flex-1 bg-[#3d4b5c] hover:bg-[#4a5866] text-white font-semibold"
                        onClick={onAddToCart}
                    >
                        <FaShoppingCart className="w-4 h-4 mr-2" />
                        ADD TO CART
                    </Button>
                    <Button
                        className="flex-1 bg-[#4ade80] hover:bg-[#3bc66d] text-white font-semibold"
                        onClick={onCheckout}
                    >
                        GO TO CHECKOUT
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}