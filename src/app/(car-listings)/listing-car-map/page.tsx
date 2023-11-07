//자동차 목록 표시 페이지 -> 기존 업체 리스트나 작업자 리스트 표시할 때 활용해도 좋을 듯
import React, { FC } from "react";
import SectionGridHasMap from "../SectionGridHasMap";

export interface ListingCarMapPageProps {}

const ListingCarMapPage: FC<ListingCarMapPageProps> = () => {
  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap />
    </div>
  );
};

export default ListingCarMapPage;
