import BgGlassmorphism from "@/components/BgGlassmorphism";
import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import { getSession } from "next-auth/react";


export interface ListingFlightsPageProps {}

const ListingFlightsPage: FC<ListingFlightsPageProps> = ({}) => {

  return (
    <div className={`nc-ListingFlightsPage relative overflow-hidden `}>
      <BgGlassmorphism />

      <div className="container relative">

        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-28" />

      </div>
    </div>
  );
};


export default ListingFlightsPage;