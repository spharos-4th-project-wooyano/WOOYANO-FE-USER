//사용자 세이브 리스트 -> 찜 리스트로 활용
import { Nav } from "@/app/(mypage)/(components)/Nav";
import React, { FC } from "react";


export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="nc-CommonLayoutAccount bg-neutral-50 dark:bg-neutral-900">
      <div className="border-b border-neutral-200 dark:border-neutral-700 md:pt-12 pt-2 bg-white dark:bg-neutral-800">
        <Nav />
      </div>
      <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">{children}</div>
    </div>
  );
};

export default CommonLayout;
