"use client";
import React from "react";
import ThemeProvider from "@/components/providers/theme-provider";

export default function Providers({
                                      session,
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </>
    );
}
