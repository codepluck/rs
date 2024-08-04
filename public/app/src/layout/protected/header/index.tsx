"use client";
import React from "react";
import { cn } from "@/lib/utils";
import ProfileInfo from "./menu/dropdown/profile-info";
import MobileMenuHandler from "./mobile-menu-handler";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useAppStore, useSidebar } from "@/store";
import ThemeToggle from "@/components/theme-toggle";
import { Notifications } from "./notifications";
import DefaultHeader from "./layout/default-layout";
const MainNav = ({ isDesktop, isMobile, sidebarType }: { isDesktop: boolean; isMobile: boolean; sidebarType: string }) => {
    return (
        <div className="nav-tools flex items-center  gap-2">
            {/* {isDesktop && <Language />} */}
            {/* {isDesktop && <FullScreen />} */}

            <ThemeToggle />
            {/* <Inbox /> */}
            <Notifications />

            <div className="*:ltr:pl-2 rtl:pr-2">
                <ProfileInfo />
            </div>
            {!isDesktop && sidebarType !== "module" && <MobileMenuHandler />}
        </div>
    );
};
const Header = ({ handleOpenSearch, trans }: { handleOpenSearch: () => void; trans: string }) => {
    const { collapsed, sidebarType, setCollapsed, subMenu, setSidebarType } =
        useSidebar();
    const { layout, navbarType, setLayout
    } = useAppStore();

    const isDesktop = useMediaQuery("(min-width: 1280px)");

    const isMobile = useMediaQuery("(min-width: 768px)");
    // set header style to classic if isDesktop
    React.useEffect(() => {
        if (!isDesktop && layout === "horizontal") {
            setSidebarType("classic");
        }
    }, [isDesktop]);

    // working
    if (navbarType === "hidden") {
        return null;
    }


    return (
        <>
            <header
                className={cn("z-50", {
                    "ltr:xl:ml-[248px] rtl:xl:mr-[248px]": !collapsed,
                    "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
                    "sticky top-0": navbarType === "sticky",
                })}
            >

                <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
                    <div className="flex justify-between items-center h-full">
                        <DefaultHeader
                            handleSearch={handleOpenSearch}
                        />
                        <MainNav
                            isDesktop={isDesktop}
                            isMobile={isMobile}
                            sidebarType={sidebarType}
                        />
                    </div>
                </div>
            </header>
        </>

    );


};

export default Header;
