"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonThird from "@/shared/ButtonThird";
import ButtonClose from "@/shared/ButtonClose";
import Checkbox from "@/shared/Checkbox";
import Slider from "rc-slider";
import convertNumbThousand from "@/utils/convertNumbThousand";
import FormItem from "../add-listing/FormItem";
import Select from "@/shared/Select";
import Input from "@/shared/Input";

// DEMO DATA
const typeOfPaces = [
  {
    name: "정렬"
  },
  {
    name: "최신순"
  },
  {
    name: "인기순"
  },
  {
    name: "찜순"
  }
];

const TabFilters = () => {
  
  const renderTabsTypeOfPlace = () => {
    return (
      <form className="relative z-50">
        <select name="정렬" id="sort" className="flex px-6 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none">
          {typeOfPaces.map((type,idx) => (
            <option key={idx} value={type.name}>{type.name}</option>
          ))}
        </select>
      </form>
    );
  };

  

  return (
    <div className="flex lg:space-x-4">
      <div className="hidden lg:flex space-x-4">
        {renderTabsTypeOfPlace()}
      </div>
    </div>
  );
};

export default TabFilters;
