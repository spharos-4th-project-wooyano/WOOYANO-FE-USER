'use client'
import React, { FC, useEffect, useState } from "react";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import { useRouter } from "next/navigation";
import { ReviewListType, ReviewType } from "@/types/ReviewType";
import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: ReviewListType;
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {

  // 리뷰 리스트 fetch (작성일자, 에약번호, 리뷰 평가, 리뷰 아이디, 서비스 아이디)
  async function getReviewList(session: Session) {
    if (!session) {
      console.log("세션이 만료됨")
      return null
    }
    try {
      const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.result.token}`,
          Email: `${session?.user.result.email}`,
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("리뷰 리스트 성공:", result);
        setReviewList(result["result"])
        return true;
      }
    } catch (error) {
      console.error("리뷰 리스트 실패:", error);
    }
  }

  const router = useRouter();
  const { data: session } = useSession();
  // 전체 리뷰 리스트를 불러오는 함수
  const [reviewList, setReviewList] = useState<ReviewListType[]>([])

  useEffect(() => {
    const reviewListfetch = async () => {
      try {
        if (session) {
          const response = await getReviewList(session);
          console.log("세션 존재", session)
          if (!reviewList[0] === undefined) {
            return null
          }
        }
      } catch (error) {
        console.log("loading error", error)
      }
      // if (session) {
      //   const success = await getReviewList();
      // if (success) {
      //   console.log("reviewData:", reviewData);
      // } else {
      //   console.log("데이터 가져오기 실패");
      // }
      // }
    }
    reviewListfetch();
    }, [session]);

    console.log("리뷰 리스트 : ", reviewList)

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
      {Array.isArray(reviewList) && reviewList.map((item, index) => (
          <FlightCard key={index} data={item} onClick = { () => router.push(`/review/${item.reviewId}?serviceId=${item.serviceId}&&reservationNum=${item.reservationNum}`)} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
