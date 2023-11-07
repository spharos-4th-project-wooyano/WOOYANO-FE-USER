import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import DropdownTravelers from "./DropdownTravelers";
import MainGptLink from "./MainGptLink";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 md:container flex justify-between">
        <div className="flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="hidden md:block w-24 self-center" />
          <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="flex space-x-5">
            <MainGptLink/>
            <DropdownTravelers />
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden lg:flex space-x-5">
            {/* <TemplatesDropdown /> */}
            <AvatarDropdown />
          </div>
          <div className="flex space-x-2 lg:hidden">
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
