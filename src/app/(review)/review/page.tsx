import SectionHeroArchivePage from "@/app/(server-components)/SectionHeroArchivePage";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";


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