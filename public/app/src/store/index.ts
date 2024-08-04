// useStore.ts

import { useState, useEffect } from 'react';
import Signal from './signal'; // Adjust the path based on your file structure
import { siteConfig } from "@/config/site";
import { atom, useAtom } from 'jotai';



interface AppStoreState {
  theme: string;
  setTheme: (theme: string) => void;
  radius: number;
  setRadius: (value: number) => void;
  layout: string;
  setLayout: (value: string) => void;
  navbarType: string;
  setNavbarType: (value: string) => void;
  footerType: string;
  setFooterType: (value: string) => void;
  isRtl: boolean;
  setRtl: (value: boolean) => void;
}


// Define jotai atoms for each state variable
export const themeAtom = atom<string>(siteConfig.theme || 'default');
export const primaryColorAtom = atom<string>('default');

export const radiusAtom = atom<number>(siteConfig.radius);
export const layoutAtom = atom<string>(siteConfig.layout);
export const navbarTypeAtom = atom<string>(siteConfig.navbarType);
export const footerTypeAtom = atom<string>(siteConfig.footerType);
export const isRtlAtom = atom<boolean>(false);


// Define a jotai provider for the context
export const useAppStore = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [radius, setRadius] = useAtom(radiusAtom);
  const [layout, setLayout] = useAtom(layoutAtom);
  const [navbarType, setNavbarType] = useAtom(navbarTypeAtom);
  const [footerType, setFooterType] = useAtom(footerTypeAtom);
  const [isRtl, setRtl] = useAtom(isRtlAtom);
  const [primaryColor, setPrimaryColor] = useAtom(primaryColorAtom);

  return {
    theme,
    setTheme,
    radius,
    setRadius,
    layout,
    setLayout,
    navbarType,
    setNavbarType,
    footerType,
    setFooterType,
    isRtl,
    setRtl,
    primaryColor,
    setPrimaryColor,
  };
};


interface SidebarState {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;

  sidebarType: string;
  setSidebarType: (value: string) => void;

  subMenu: boolean;
  setSubmenu: (value: boolean) => void;
  // background image
  sidebarBg: string;
  setSidebarBg: (value: string) => void;

  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;

}



// Define jotai atoms for each state variable
export const collapsedAtom = atom<boolean>(false);
export const sidebarTypeAtom = atom<string>('popover');
export const subMenuAtom = atom<boolean>(false);
export const sidebarBgAtom = atom<string>('');
export const mobileMenuAtom = atom<boolean>(false);

export const useSidebar = () => {
  const [collapsed, setCollapsed] = useAtom(collapsedAtom);
  const [sidebarType, setSidebarType] = useAtom(sidebarTypeAtom);
  const [subMenu, setSubMenu] = useAtom(subMenuAtom);
  const [sidebarBg, setSidebarBg] = useAtom(sidebarBgAtom);
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);

  return {
    collapsed,
    setCollapsed,
    sidebarType,
    setSidebarType,
    subMenu,
    setSubMenu,
    sidebarBg,
    setSidebarBg,
    mobileMenu,
    setMobileMenu,
  };
};

