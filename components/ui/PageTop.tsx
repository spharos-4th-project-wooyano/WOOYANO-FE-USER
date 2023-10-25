"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PageTopData from "@/data/PageTopData";

const PageTop = () => {
    const pathname = usePathname().replace(/^\//, "").replace(/\//g, "");
    //usepathname에서 '/'모두 삭제
    console.log(pathname)
  
    return (
      <div className="box-border pt-[12vh] mx-[5vh] text-xl font-bold">
        <p>{PageTopData[pathname]?.firstLine}</p>
        <p>{PageTopData[pathname]?.secondLine}</p>
      </div>
    );
  };

export default PageTop;
