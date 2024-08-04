"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";
import ThemeCustomize from "@/components/customizer/theme-customizer";
import { useAppStore, useSidebar } from "@/store";
import LayoutLoader from "@/components/layout-loader";
import SiteHeader from "./header";
import Footer from "./footer";
export default function GlobalLayoutProvider({ children, trans }: { children: React.ReactNode, trans: any }) {
    const { collapsed, sidebarType, setCollapsed, subMenu } = useSidebar();
    const [open, setOpen] = React.useState(false);
    const { layout } = useAppStore();
    const location = usePathname();
    const isMobile = useMediaQuery("(min-width: 768px)");
    const mounted = useMounted();

    if (!mounted) {
        return <LayoutLoader />;
    }


    const onHeaderClickHandler = () => {
        console.log("onHeaderClickHandler");
        const value = (open) ? true : false;

        // setOpen(value)
    }

    //working
    return (
        <>
            <SiteHeader />
            <Wrapper
                isMobile={isMobile}
                setOpen={setOpen}
                open={open}
                location={location}
                trans={trans}
            >
                {children}
            </Wrapper>
            <Footer />
        </>
    );

};

const Wrapper = ({ children, isMobile, setOpen, open, location, trans }: { children: React.ReactNode, isMobile: boolean, setOpen: any, open: boolean, location: any, trans: any }) => {
    return (
        <>
            <motion.main
                key={location}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                    pageInitial: {
                        opacity: 0,
                        y: 50,
                    },
                    pageAnimate: {
                        opacity: 1,
                        y: 0,
                    },
                    pageExit: {
                        opacity: 0,
                        y: -50,
                    },
                }}
                transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.5,
                }}
            >
                <>{children}</>
            </motion.main>
        </>
    );
};
