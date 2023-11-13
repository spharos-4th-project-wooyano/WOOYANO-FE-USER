import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionGridFilterCardProps {
  className?: string;
}

const DEMO_DATA: FlightCardProps["data"][] = [
  {
    id: "1",
    res: "다음에도 이용할게요:)",
    review: {
      img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Er3/image/lcMcrwOiQTui8T0gzba33lrqlhI.jpg",
      name: "업체 이름 1",
      workername : "이하늘"
    },
  },
  {
    id: "2",
    res: "이번에만 이용할게요:(",
    review: {
      img: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "업체 이름 2",
      workername : "임찬섭"
    },
  },
  {
    id: "3",
    res: "다음에도 이용할게요:)",
    review: {
      img: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      name: "업체 이름 3",
      workername : "소준영"
    },
  },
  // {
  //   id: "1",
  //   price: "$4,100",
  //   airlines: {
  //     logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
  //     name: "Korean Air",
  //   },
  // },
  // {
  //   id: "2",
  //   price: "$3,380",
  //   airlines: {
  //     logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
  //     name: "Singapore Airlines",
  //   },
  // },
  // {
  //   id: "1",
  //   price: "$4,100",
  //   airlines: {
  //     logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
  //     name: "Korean Air",
  //   },
  // },
  // {
  //   id: "2",
  //   price: "$3,380",
  //   airlines: {
  //     logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
  //     name: "Singapore Airlines",
  //   },
  // },
];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        className="mt-10"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            최근 작성한 리뷰 순으로 표시됩니다.
          </span>
        }
      />
      <div className="lg:dark:bg-black/20 grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl">
        {DEMO_DATA.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}

        {/* <div className="flex mt-12 justify-center items-center">
          <ButtonPrimary loading>Show more</ButtonPrimary>
        </div> */}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
