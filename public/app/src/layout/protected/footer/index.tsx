import React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileFooter from "./mobile-footer";
import FooterLayout from "./layout";
import { useMounted } from "@/hooks/use-mounted";
import { useAppStore, useSidebar } from "@/store";

const Footer = ({ handleOpenSearch }: { handleOpenSearch: () => void }) => {
    const { collapsed, sidebarType } = useSidebar();
    const { layout, footerType } = useAppStore();
    const mounted = useMounted();
    const isMobile = useMediaQuery("(min-width: 768px)");

    if (!mounted || footerType === "hidden") {
        return null;
    }

    let footerClassNames = "";
    let marginLeft = "";
    let marginRight = "";

    console.log(layout, 'layout-footer')
    console.log(footerType, 'footerType-footer')

    if (layout === "semibox") {
        footerClassNames = cn("xl:mx-20 mx-6 rounded-md border", {
            "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
            "ltr:xl:ml-[272px] rtl:xl:mr-[272px]": !collapsed,
            "sticky bottom-0": footerType === "sticky",
        });
    } else if (sidebarType !== "module" && layout !== "horizontal") {
        footerClassNames = cn("", {
            "ltr:xl:ml-[248px] rtl:xl:mr-[248px]": !collapsed,
            "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
            "sticky bottom-0": footerType === "sticky",
        });
    } else if (layout === "horizontal") {
        footerClassNames = cn("", {
            "sticky bottom-0": footerType === "sticky",
        });
    } else {
        footerClassNames = cn("", {
            "ltr:xl:ml-[300px] rtl:xl:mr-[300px]": !collapsed,
            "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
            "sticky bottom-0": footerType === "sticky",
        });
    }

    return (
        <div className={footerClassNames}>
            {isMobile && sidebarType === "module" ? (
                <MobileFooter handleOpenSearch={handleOpenSearch} />
            ) : (
                <FooterLayout>
                    <FooterContent />
                </FooterLayout>
            )}
        </div>
    );
};

export default Footer;

const FooterContent = () => {
    return (
        <div className="block md:flex md:justify-between text-muted-foreground">
            <p className="sm:mb-0 text-xs md:text-sm">
                COPYRIGHT © {new Date().getFullYear()} Company All rights Reserved
            </p>
        </div>
    );
};
