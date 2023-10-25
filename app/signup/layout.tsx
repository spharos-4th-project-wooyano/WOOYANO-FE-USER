"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PageTopData from "@/data/PageTopData";

import ProgressBar from "@/components/ui/progressBar";
import ProgressBarData from "@/data/ProgressBarData";

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().replace(/^\//, "").replace(/\//g, "");

  return (
    <div className="pt-12 mx-[5vh]">
      <div className="box-border my-[5vh] text-xl font-bold">
        <p>{PageTopData[pathname]?.firstLine}</p>
        <p>{PageTopData[pathname]?.secondLine}</p>
        <div className="pt-10">
            <ProgressBar total={ProgressBarData[pathname]?.total} completed={ProgressBarData[pathname]?.completed} />
        </div>
      </div>
      {children}
    </div>
  );
}
