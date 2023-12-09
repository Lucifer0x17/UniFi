import { init } from "@airstack/airstack-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./_lib/utils";

const inter = Inter({ subsets: ["latin"] });

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? "");

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn("antialiased", inter.className)}>
                {children}
            </body>
        </html>
    );
}
