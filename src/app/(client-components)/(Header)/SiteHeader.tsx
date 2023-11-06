"use client";

import React, { useEffect, useRef, useState } from "react";

import { PathName } from "@/routers/types";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";

let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

let OBSERVER: IntersectionObserver | null = null;
const PAGES_HIDE_HEADER_BORDER: PathName[] = [
  "/listing-car-detail",
  "/listing-experiences-detail",
  "/house-keeper-detail",
];

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);
  //
  useThemeMode();
  //
  const pathname = usePathname();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
      
    });
  };

  useEffect(() => {
    // disconnect the observer
    // observer for show the LINE bellow header
    if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      OBSERVER && OBSERVER.disconnect();
      OBSERVER = null;
      return;
    }
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, [pathname]);
  
  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";
    if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      headerClassName = isTopOfPage
        ? ""
        : "shadow-sm dark:border-b dark:border-neutral-700";
    }
      return <Header className={headerClassName}  />;
      
    };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
