"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitch, FaMicrosoft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SignIn() {
    return (
        <Dialog modal={true}>
            <DialogTrigger className="flex cursor-pointer items-center gap-x-2 px-2 py-4 text-dm-text-secondary transition-colors duration-500 hover:text-dm-text-primary outline-none cursor-pointer bg-transparent border-none">
                <PiSignInBold size={24} aria-hidden="true" />
                <span className="hidden 770:block">SIGN IN</span>
            </DialogTrigger>
            <DialogContent
                showCloseButton={true}
                className="max-w-[950px] w-full p-0 overflow-hidden gap-0 bg-surface-base border-dm-border-subtle sm:rounded-3xl data-open:animate-in data-open:slide-in-from-bottom-[100%] data-open:fade-in-0 data-closed:animate-out data-closed:slide-out-to-bottom-[100%] data-closed:fade-out-0 duration-1000 ease-out"
            >
                <DialogTitle className="sr-only">Sign In</DialogTitle>
                <DialogDescription className="sr-only">
                    Login to your account and join the world of games together
                </DialogDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
                    {/* Left Column: Hero Image with Background */}
                    <div className="relative hidden md:block h-full w-full overflow-hidden">
                        {/* Background Image (modal-animate-bg.jpg) */}
                        <Image
                            src="/modal-animate-bg.jpg"
                            alt="Modal Background"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Hero Character Image (modal-hero.webp) on top */}
                        <Image
                            src="/modal-hero.webp"
                            alt="Sign In Hero"
                            fill
                            className="object-cover z-10"
                            priority
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 to-transparent z-20" />

                        {/* Cashback Card Overlay */}
                        <div className="absolute bottom-12 left-8 right-8 z-30 bg-surface-base/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Get your Cashback
                            </h3>
                            <p className="text-dm-text-secondary text-sm leading-relaxed">
                                Log in and get up to <span className="text-white font-bold">10%</span> cashback!
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex flex-col justify-center p-8 md:p-12 bg-[#161b26] relative">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-3">
                                Log in to your account
                            </h2>
                            <p className="text-dm-text-secondary text-sm">
                                Login to your account and join the world of games together
                            </p>
                        </div>

                        {/* Google Login */}
                        <Button
                            variant="default"
                            className="w-full bg-white text-black hover:bg-gray-200 font-bold h-14 text-base rounded-xl mb-8 flex items-center justify-center gap-3 transition-all"
                        >
                            <FcGoogle className="h-6 w-6" />
                            <span>Log in with Google</span>
                        </Button>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-white/10 mb-8" />

                        {/* Social Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <SocialButton
                                icon={<MdEmail className="text-dm-text-secondary group-hover:text-white transition-colors" size={20} />}
                                label="Email"
                            />
                            <SocialButton
                                icon={<FaFacebook className="text-dm-text-secondary group-hover:text-[#1877F2] transition-colors" size={20} />}
                                label="Facebook"
                            />
                            <SocialButton
                                icon={<FaTwitch className="text-dm-text-secondary group-hover:text-[#9146FF] transition-colors" size={20} />}
                                label="Twitch"
                            />
                            <SocialButton
                                icon={<FaMicrosoft className="text-dm-text-secondary group-hover:text-[#00A4EF] transition-colors" size={20} />}
                                label="Microsoft"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function SocialButton({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <Button
            variant="outline"
            className="group w-full bg-[#1F2533] border-none hover:bg-[#2A3140] hover:text-white text-dm-text-secondary h-12 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 font-medium"
        >
            {icon}
            <span>{label}</span>
        </Button>
    );
}