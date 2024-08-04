import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search } from "lucide-react";
import { useAppStore, useSidebar } from "@/store";



const MenuBar = ({ collapsed, setCollapsed }) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <button
      className="relative group disabled:cursor-not-allowed opacity-50"
      onClick={toggleCollapsed}
    >
      <div>
        {collapsed ? (
          <div>
            <div
              className="flex flex-col justify-between w-[20px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden"
            >
              <div
                className="bg-card-foreground h-[2px] transform rotate-45 transition-all duration-300 origin-left delay-150"
              ></div>
              <div
                className="bg-card-foreground h-[2px] transform -rotate-45 transition-all duration-300 origin-left delay-150"
              ></div>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="flex flex-col justify-between w-[20px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden"
            >
              <div
                className="bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150"
              ></div>
              <div
                className="bg-card-foreground h-[2px] w-7 rounded transform transition-all duration-300"
              ></div>
              <div
                className="bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150"
              ></div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};




type DefaultHeaderProps = {
  handleSearch: () => void;
};
const DefaultHeader: React.FC<DefaultHeaderProps> = ({ handleSearch }) => {
  const { collapsed, setCollapsed } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  let LogoContent = null;
  let menuBar = null;
  let searchButton = null;

  const openSearchHandler = (e: any) => {
    handleSearch();
  }

  const SearchContent = (
    <div>
      <button
        type="button"
        className=" inline-flex  gap-2 items-center text-default-600 text-sm"
        onClick={(e) => { openSearchHandler(e) }}
      >
        <span>
          <Search className=" h-4 w-4" />
        </span>
        <span className=" md:block hidden"> Type to search the content</span>
      </button>
    </div>
  );
  if (isDesktop) {
    menuBar = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }
  searchButton = SearchContent;
  return (
    <>
      <div className="flex items-center md:gap-6 gap-3">
        {LogoContent}
        {menuBar}
        {searchButton}
      </div>
    </>
  );
};

export default DefaultHeader;