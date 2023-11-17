import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import ImgSwiper from "./function/imgSwiper";
import { Button } from "@nextui-org/button";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import room from "@/images/test/room.png"
import room2 from "@/images/test/room2.png"
import {Card, CardBody} from "@nextui-org/react";

interface CommentListingDataType {
  name: string;
  avatar?: string;
  date: string;
  serviceDate: string;
  desc: string;
  starPoint: number;
  res: string;
  worker: string;
  service: string;
  comment: string[];
}

export interface CommentListingProps {
  className?: string;
  data?: CommentListingDataType;
  hasListingTitle?: boolean;
}

const DEMO_DATA: CommentListingDataType =
  {
  name: "이훙훙",
  date: "2023.10.20",
  serviceDate: "2023.10.15",
  desc: "꼼꼼하게 잘 해주셔서 너무 좋았습니당:) !!!",
  starPoint: 5,
  res: "다음에도 이용할게요:)",
  worker: "김하늘",
  service: "가사도우미 - 원룸",
  comment: [
    "저희 서비스를 이용해주셔서 감사합니다^^!", 
    "다음 번에도 이용해주세요-!!"
  ],
  }



const CommentListing: FC<CommentListingProps> = ({
  className = "",
  data = DEMO_DATA,
  hasListingTitle,
}) => {
  return (
    <div
      className={`nc-CommentListing flex justify-center space-x-4 ${className}`}
      data-nc-id="CommentListing"
    >
      <div className="p-0.5">
        <Avatar
          // sizeClass="h-10 w-10 text-lg"
          // radius="rounded-full"
          userName={data.name}
          // imgUrl={data.avatar}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col">
            <div className="text-sm font-semibold">
              {/* 작성자명 */}
              <span>{data.name}</span>
              {/* {hasListingTitle && (
                <>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                    {` review in `}
                  </span>
                  <a href="/">The Lounge & Bar</a>
                </>
              )} */}
            </div>
            {/* 작성일자 */}
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {data.date}
            </span>
          </div>
          {/* 평가 */}
          <div className="text-xl font-semibold text-secondary-6000">
            {data.res}
          </div>
          {/* <div className="flex text-yellow-500">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
          </div> */}
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="w-[500px]">
            <ImgSwiper/>
          </div>
        </div>

        {/* 작업자 및 서비스 */}
        <div className="flex justify-end text-xs text-gray-500 mt-5 mb-2 gap-3">
          <div className="border border-dotted border-slate-400 rounded-2xl leading-8 px-3" style={{ borderWidth: '3px' }}>
            {data.worker} 기사님
          </div>
          <div className="border border-dotted border-slate-400 rounded-2xl leading-8 px-3 " style={{ borderWidth: '3px' }}>
            {data.service}
          </div>
        </div>

        <div className="border border-white rounded-2xl relative px-4 mt-5 bg-slate-100">
          {/* 리뷰 내용 */}
          <span className="text-slate-100 text-[36px] absolute top-[-19px] left-[3px]">
            ▲
          </span>
          <span className="block text-black dark:text-neutral-300 leading-10">
            {data.desc}
          </span>
        </div>
        

        {/* 리뷰 답글 */}
        <div className="bg-blue-100 rounded-2xl relative leading-10 px-5 mt-8 break-all">
          <span className="text-blue-100 text-[36px] absolute bottom-[-29px] right-[3px]">
            ▼
          </span>
          <span>
            {DEMO_DATA.comment.map((sentence, index) => (
            <React.Fragment key = {index}>
              {sentence}
                <br />
            </React.Fragment>
            ))}
          </span>
        </div>

      </div>
    </div>
  );
};

export default CommentListing;
