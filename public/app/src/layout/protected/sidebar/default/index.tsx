"use client";
import React, { useContext, useState } from "react";
import { cn, isLocationMatch, getDynamicPath } from "@/lib/utils";
import SidebarLogo from "../_components/logo";
import { menusConfig } from "@/config/menus";
import MenuLabel from "../_components/menu-label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import SingleMenuItem from "./single-menu-item";
import SubMenuHandler from "./sub-menu-handler";
import NestedSubMenu from "../_components/nested-menus";
import { useAppStore, useSidebar } from "@/store";
import { OwnerServiceContext } from "@/components/providers/owner-service-provider";
export default function DefaultSidebar({ trans }: { trans: string }) {
  const { sidebarBg } = useSidebar();

  const ownerState = useContext(OwnerServiceContext);
  const [providerState, setProviderState] = useState<[] | null>(null);

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);
  const menus = menusConfig?.sidebarMenu || [];
  const { collapsed, setCollapsed } = useSidebar();
  const { isRtl } = useAppStore();
  const [hovered, setHovered] = useState<boolean>(false);

  const toggleSubmenu = (i: number) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  const toggleMultiMenu = (subIndex: number) => {
    if (activeMultiMenu === subIndex) {
      setMultiMenu(null);
    } else {
      setMultiMenu(subIndex);
    }
  };

  const pathname = usePathname();
  const locationName = getDynamicPath(pathname);


  React.useEffect(() => {

    setProviderState(ownerState?.sidebarNavigation)
    console.log(providerState, 'providerState')

  }, [ownerState]);

  React.useEffect(() => {

    setProviderState(ownerState?.sidebarNavigation)
    console.log(providerState, 'providerState')
    let subMenuIndex = null;
    let multiMenuIndex = null;
    menus?.map((item: any, i: number) => {
      if (item?.child) {
        item.child.map((childItem: any, j: number) => {
          if (isLocationMatch(childItem.href, locationName)) {
            subMenuIndex = i;
          }
          if (childItem?.multi_menu) {
            childItem.multi_menu.map((multiItem: any, k: number) => {
              if (isLocationMatch(multiItem.href, locationName)) {
                subMenuIndex = i;
                multiMenuIndex = j;
              }
            });
          }
        });
      }
    });
    setActiveSubmenu(subMenuIndex);
    setMultiMenu(multiMenuIndex);
  }, [locationName]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "fixed  z-[999] top-0  bg-card h-full hover:!w-[248px]  border-r  ",
        {
          "w-[248px]": !collapsed,
          "w-[72px]": collapsed,
          "shadow-md": collapsed || hovered,
        }
      )}
    >
      {sidebarBg !== "none" && (
        <div
          className=" absolute left-0 top-0   z-[-1] w-full h-full bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${sidebarBg})` }}
        ></div>
      )}

      <SidebarLogo hovered={hovered} />

      <ScrollArea
        className={cn("sidebar-menu  h-[calc(100%-80px)] ", {
          "px-4": !collapsed || hovered,
        })}
      >
        <ul
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(" space-y-1", {
            " space-y-2 text-center": collapsed,
            "text-start": collapsed && hovered,
          })}
        >
          {menus.map((item, i) => (
            <li key={`menu_key_${i}`}>
              {/* single menu  */}

              {!item.child && !item.isHeader && (
                <SingleMenuItem
                  item={item}
                  collapsed={collapsed}
                  hovered={hovered}
                  trans={trans}
                />
              )}

              {/* menu label */}
              {item.isHeader && !item.child && (!collapsed || hovered) && (
                <MenuLabel item={item} trans={trans} />
              )}

              {/* sub menu */}
              {item.child && (
                <>
                  <SubMenuHandler
                    item={item}
                    toggleSubmenu={toggleSubmenu}
                    index={i}
                    activeSubmenu={activeSubmenu}
                    collapsed={collapsed}
                    hovered={hovered}
                    trans={trans}
                  />

                  {(!collapsed || hovered) && (
                    <NestedSubMenu
                      toggleMultiMenu={toggleMultiMenu}
                      activeMultiMenu={activeMultiMenu}
                      activeSubmenu={activeSubmenu}
                      item={item}
                      index={i}


                      trans={trans}
                    />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};