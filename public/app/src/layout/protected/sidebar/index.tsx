"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

import MobileSidebar from "./mobile-sidebar";
import { useAppStore, useSidebar } from "@/store";
import DefaultSidebar from "./default";

const Sidebar = ({ trans }: { trans: string }) => {
    const { sidebarType, collapsed } = useSidebar();
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    if (!isDesktop) {
        return <MobileSidebar trans={trans} />;
    }
    return (
        <>
            <aside>
                <DefaultSidebar trans={trans} />
            </aside>
        </>
    )
};

export default Sidebar;
