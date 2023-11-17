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

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleTouch = (e: TouchEvent) => {
  //     if (e.touches[0].clientY > 100) {
  //       setIsActive(true);
  //     }
  //   };
  //   window.addEventListener("touchmove", handleTouch);
  //   return () => {
  //     window.removeEventListener("touchmove", handleTouch);
  //   };
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsActive(false);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
      return <Header className={headerClassName}  
      isActive={isActive}
      />;
      
    };

  return (
    <>
     
        {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
