"use client";

import React, { FC, useEffect, useState } from "react";
import ImgSwiper from "@/components/function/imgSwiper";
import { ReviewListType, ReviewType } from "@/types/ReviewType";
import { useParams } from "next/navigation";

export interface ReviewDetailProps {
  className?: string;
  // data를 함수로 변경
  data?: () => Promise<ReviewListType>;
}

// Fetch 함수 선언
const jwt="eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6ImFiY2QxMjM0QGdtYWlsLmNvbSIsImlhdCI6MTcwMDEyMzExNywiZXhwIjoxNzAwMTI2NzE3fQ.T86ZcvgzcL4kfzjnDAXD1p4yJsNPknb9JBOBAbvQBlQ"
async function getJSON(reviewId: number) {
    try {
      const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/${reviewId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "email":"abcd1234@gmail.com",
          "Authorization": `Bearer ${jwt}`
        },
      });
      
      if(response.ok){
        const result = await response.json();
        console.log("성공:", result);
        return true
      }
    } catch (error) {
      console.error("실패:", error);
      return false
    }
    
}

const ReviewDetail: FC<ReviewDetailProps> = ({ data }) => {
    const [reviewData, setReviewData] = useState<ReviewListType | null>(null);
    const { reviewId } = useParams<{reviewId: string}>();

    // useEffect(() => {
    //   if (reviewId) {
    //     // 리뷰 아이디가 존재하면 데이터 가져오기
    //     getJSON(parseInt(reviewId, 10))
    //     .then((result) => {
    //       if (result) {
    //         setReviewData(result);
    //       }
    //     });
    //   }
    // }, [reviewId]);

    const renderMain = () => {
      if (!reviewData) {
        return null;
      }

    let date = new Date(reviewData.createdAt)

    console.log('review', data);

    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="mt-5 text-3xl lg:text-4xl font-semibold">
          리뷰 상세내역
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <div className="flex gap-[200px]">
            {/* 서비스 상세 내용 */}
            <div>
              <h3 className="text-2xl font-semibold">업체명</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
              <div className=" mb-6">
                삐까뻔쩍
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">작성일자</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
              <div className=" mb-6">
                {date.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">날짜</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
                <p>
                  2023.10.30
                </p>
            </div>
          </div>

          {/* 서비스 및 기사 */}
          <div className="flex gap-[200px]">
            <div>
              <h3 className="text-2xl font-semibold">기사명</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
                <p>
                 이하늘
                </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">서비스</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
                <p>
                  가사도우미 - 원룸
                </p>
            </div>
          </div>
          {/* <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700 overflow-hidden z-10">
          </div> */}

          <div className="mt-5">
            <h3 className="text-2xl font-semibold">평가</h3>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
            <span className="text-xl font-semibold text-secondary-6000">
              다음에도 이용할게요:)
              {/* {data && data.reuse} */}
            </span>
          </div>
        </div>

        <div>
          <ImgSwiper/>
        </div>
    

        {/* 리뷰 내용 */}
        <div>
          <h3 className="text-2xl font-semibold">작성 내용</h3>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>

          <div className="mt-6">
            <span>
              꼼꼼하게 잘 해주셔서 너무 좋았어요:) !!
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderAnswer = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h3 className="text-2xl font-semibold">사장님</h3>
        <div className="mt-6">
          <span className="leading-10">
            저희 서비스가 마음에 드셨다니 기쁩니다 ! <br/>
            다음에도 이용해주세요 !
          </span>
        </div>
      </div>
    )
  }
 

  return (
    <div>
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
        <div className="mt-5 w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderAnswer()}</div>
      </main>
    </div>
  );
};

export default ReviewDetail;





