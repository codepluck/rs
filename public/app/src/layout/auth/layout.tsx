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
export default function AuthLayoutProvider({ children, trans }: { children: React.ReactNode, trans: any }) {
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
            {children}
        </>
    );

};
