'use client'
import React, { FC, useEffect, useState } from "react";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import { useRouter } from "next/navigation";
import { ReviewListType } from "@/types/ReviewType";

export interface SectionGridFilterCardProps {
  className?: string;
}

// const DEMO_DATA: FlightCardProps["data"][] = [
//   {
//     id: "1",
//     res: "다음에도 이용할게요:)",
//     review: {
//       img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Er3/image/lcMcrwOiQTui8T0gzba33lrqlhI.jpg",
//       name: "업체 이름 1",
//       workername : "이하늘"
//     },
//   },
//   {
//     id: "2",
//     res: "이번에만 이용할게요:(",
//     review: {
//       img: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "업체 이름 2",
//       workername : "임찬섭"
//     },
//   },
//   {
//     id: "3",
//     res: "다음에도 이용할게요:)",
//     review: {
//       img: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
//       name: "업체 이름 3",
//       workername : "소준영"
//     },
//   }
// ];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {

  const router = useRouter();

  const [reviewData, setReviewData] = useState<ReviewListType[]>([])

  console.log("reviewData:",reviewData)


  // fetch 함수
  const jwt="eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6ImFiY2QxMjM0QGdtYWlsLmNvbSIsImlhdCI6MTcwMDEyMzExNywiZXhwIjoxNzAwMTI2NzE3fQ.T86ZcvgzcL4kfzjnDAXD1p4yJsNPknb9JBOBAbvQBlQ"
  async function getJSON() {
    try {
      
      const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "email": "abcd1234@gmail.com",
          "Authorization": `Bearer ${jwt}`
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("성공:", result);
        setReviewData(result["result"])
        return true;
      }
    } catch (error) {
      console.error("실패:", error);
      return false;
    }
  }


  useEffect(() => {
    if (reviewData[0] === undefined ){
      getJSON();
    }
  }, []);

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
      {Array.isArray(reviewData) && reviewData.map((item, index) => (
          <FlightCard key={index} data={item} onClick = { () => router.push(`/review/${item.reviewId}`)} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
