import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {dark} from '@clerk/themes';
import {
    ClerkProvider,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "LiveDocs",
    description: "Your go-to collaborative editor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: "#3371FF",
                    fontSize: "16px",
                }
            }}
        >
            <html lang="en">
                <link rel="icon" href="/assets/images/logo.png" sizes="any" />
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
