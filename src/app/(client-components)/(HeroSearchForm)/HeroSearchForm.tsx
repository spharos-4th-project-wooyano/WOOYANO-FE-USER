"use client";

import React, { FC, useState } from "react";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import { usePathname, useSearchParams } from "next/navigation";

export type SearchTab = "Stays" | "Experiences" | "Cars" | "Flights";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Stays" | "Experiences" | "Cars" | "Flights";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Experiences",
  currentPage,
}) => {
  const params=useSearchParams();
  const pathname=usePathname()
  // console.log(pathname,params.get("region"),params.get("date"));
  

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {/* <ExperiencesSearchForm/> */}
      <StaySearchForm />
      {/* <RentalCarSearchForm/> */}
      {/* <FlightSearchForm /> */}
    </div>
  );
};

export default HeroSearchForm;
