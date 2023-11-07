'use client'
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

export interface Heading2Props {
  subHeading?: React.ReactNode;
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({ className = "", subHeading }) => {
  const [heading, setHeading] = useState<string>("");
  const pathname = usePathname()
  // pathname에 따라 heading 텍스트를 설정
  useEffect(() => {
    console.log(pathname)
    // pathname에 따라 heading 텍스트를 설정
    if (pathname === '/house-keeper') {
      setHeading('가사도우미');
    } else if (pathname === '/moving-clean') {
      setHeading('이사/입주 청소');
    } else if (pathname === '/office-clean') {
      setHeading('사무실 청소');
    } else if (pathname === '/electronics-clean') {
      setHeading('가전 청소');
    }
  }, [pathname]);

  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl font-semibold">
        {heading}
      </h2>
      {subHeading ? (
        subHeading
      ) : (
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          nnn개의 업체가 조회되었습니다.
        </span>
      )}
    </div>
  );
};

export default Heading2;
