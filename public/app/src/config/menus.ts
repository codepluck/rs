import ownerMenus from "./menus/owner";

export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;


}


export const menusConfig = {
  sidebarMenu: ownerMenus

}
// export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
// export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
// export type MainNavType = (typeof menusConfig.mainNav)[number]