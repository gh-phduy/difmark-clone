import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { QueryProvider } from "./providers/QueryProvider";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Difmark - Digital Game Marketplace",
    description: "Buy cheap digital games, gift cards, and software keys",
    keywords: ["games", "digital keys", "marketplace", "cheap games"],
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} antialiased bg-surface-base text-dm-text-primary min-h-screen flex flex-col`}
            >
                <AuthProvider>
                    <QueryProvider>
                        {/* Skip to main content link for accessibility */}
                        <a href="#main-content" className="skip-link">
                            Skip to main content
                        </a>

                        <NavBar />

                        <div className="flex-1 flex flex-col items-center">
                            {children}
                        </div>

                        <Footer />
                    </QueryProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
