"use client";
import { Inter, Josefin_Sans, Josefin_Slab } from "next/font/google";
// import { useThemeStore } from "@/store";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Toaster as ReactToaster } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import { Toaster as SonnToaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const jophinSans = Josefin_Sans({ subsets: ["latin"] })
const AppProviders = ({ children }: { children: React.ReactNode }) => {
    const { theme, radius } = useAppStore();
    const location = usePathname();



  
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
    }, []);

    
    return (
        <body
            className={cn("wizz-app ",
                //  jophinSans.className,
                "theme-" + theme)}
            style={{
                "--radius": `${radius}rem`,
            } as React.CSSProperties
            }
        >
            <ThemeProvider
                attribute="class"
                enableSystem={false}
                defaultTheme="light"
            >
                <section className={cn("h-full w-full")}>
                    {children}
                    <ReactToaster />
                </section>
                <Toaster />
                <SonnToaster />
            </ThemeProvider>
        </body>
    );
};

export default AppProviders;
