"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";
import LayoutLoader from "@/components/layout-loader";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import MobileSidebar from "./sidebar/mobile-sidebar";
import HeaderSearch from "./header/search";
import { useAppStore, useSidebar } from "@/store";
import ThemSettings from "@/components/customizer/theme-settings";
const ProtectedLayoutProvider = ({ children, trans }: { children: React.ReactNode, trans: any }) => {
    const { collapsed, sidebarType, setCollapsed, subMenu } = useSidebar();
    const [open, setOpen] = React.useState(false);
    const { layout } = useAppStore();
    const location = usePathname();
    const isMobile = useMediaQuery("(min-width: 768px)");
    const mounted = useMounted();

    if (!mounted) {
        return <LayoutLoader />;
    }


    //working
    return (
        <>
            <Header handleOpenSearch={() => setOpen(true)} trans={trans} />
            <Sidebar trans={trans} />

            <div
                className={cn("content-wrapper transition-all duration-150 ", {
                    "ltr:xl:ml-[248px] rtl:xl:mr-[248px] ": !collapsed,
                    "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
                })}
            >
                <div
                    className={cn(
                        "  pt-6 px-6 pb-8 page-min-height h-full ",
                        {}
                    )}
                >
                    <Wrapper
                        isMobile={isMobile}
                        setOpen={setOpen}
                        open={open}
                        location={location}
                        trans={trans}
                    >
                        {children}
                    </Wrapper>
                </div>
            </div>
            <Footer handleOpenSearch={() => setOpen(true)} />
            <ThemSettings />
        </>
    );

};

export default ProtectedLayoutProvider;

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
                {children}
            </motion.main>
            <MobileSidebar trans={trans} className="left-[300px]" />
            <HeaderSearch open={open} setOpen={setOpen} />
        </>
    );
};
