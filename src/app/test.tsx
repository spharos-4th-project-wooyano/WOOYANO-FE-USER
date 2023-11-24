// "use client";

// import React, { FC, useEffect, useState } from "react";
// import ImgSwiper from "@/components/function/imgSwiper";
// import { ReserveDataType, ReviewDetailType, ReviewListType } from "@/types/ReviewType";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { Session } from "next-auth";

// export interface ReviewDetailProps {
//   className?: string;
//   // data를 함수로 변경
//   data?: () => Promise<ReviewDetailType>;
// }

// // Fetch 함수 선언
// async function getReviewData(reviewId: number, session: Session) {

//     if (!session) {
//       console.error("Session error");
//       return null
//     }
//     try {
//       const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/${reviewId}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${session?.user.result.token}`,
//           Email: `${session?.user.result.email}`,
//         },
//       });
      
//       if(response.ok){
//         const result = await response.json();
//         console.log("review data 성공:", result);
        
//         return result;
//       }
//     } catch (error) {
//       console.error("review data 실패:", error);
//       return null;
//     }
    
// }

// async function getWorkerId(reservationNum: string, session: Session | undefined) {
//   console.log(reservationNum)
//   try {
//     const response = await fetch(`http://3.35.62.185:8000/api/v1/reservation/review`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${session?.user.result.token}`,
//       },
//       body:JSON.stringify({
//         "reservationNum" : reservationNum,
//       })
//     })
//     if(response.ok){
//       const result = await response.json();
//       console.log("woker data성공:", result);
//       return result;
//     }
//   } catch (error) {
//     console.error("worker data실패:", error);
//     return null;
//   }
// }


// const ReviewDetail: FC<ReviewDetailProps> = ({ data }) => {
  
//     const { data: session } = useSession();
//     const [reviewDetailData, setReviewDetailData] = useState<ReserveDataType>()
//     const [reviewContent, setReviewContent] = useState<ReviewDetailType>()
//     const router = useRouter();
//     const pathname=usePathname();
//     const reviewId=pathname.split("/")[2];
//     const [date,setDate]=useState<Date>();
//     const reservationNum = useSearchParams().get('reservationNum')



//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           if (reviewId && session) {
//             const parsedReviewId = parseInt(reviewId as string, 10);
//             console.log("Before getReviewData");
//             const res = await getReviewData(parsedReviewId, session);
//             console.log("After getReviewData");
//             console.log("날짜", res.result.createdAt)
//             if (res) {
//               // setReviewData(res.result);
//               console.log(res)
//               setDate(new Date(res.result.createdAt));
//               setReviewContent(res.result)
    
//               if (res.result && reservationNum) {
//                 console.log("Before getWorkerId");
//                 const workerRes = await getWorkerId(reservationNum, session);
//                 console.log("After getWorkerId");
//                 if (workerRes) {
//                   const reviewDatailContent = setReviewDetailData(workerRes);
//                 }
//               }
//             }
//           }
//         } catch (error) {
//           console.error("데이터를 불러오는 도중 에러 발생:", error);
//         }
//       };
    
//       fetchData();
//     }, [reviewId, session, reservationNum]);
    

//     const renderMain = () => {
//       if (!reviewContent) {
//         return <p>리뷰를 불러오는 중입니다...</p>;
//       }

//     return (
//       <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
//         <h2 className="mt-5 text-3xl lg:text-4xl font-semibold">
//           리뷰 상세내역
//         </h2>
//         <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
//         <div className="">
//           <div className="flex flex-wrap gap-10">
//             {/* 서비스 상세 내용 */}
//             <div>
//               <h3 className="text-2xl font-semibold">업체명</h3>
//               <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//               <div className=" mb-6">
//                 삐까뻔쩍
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold">작성일자</h3>
//               <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//               <div className=" mb-6">
//                 {date?.toLocaleDateString("ko-KR", {
//                   year: "numeric",
//                   month: "2-digit",
//                   day: "2-digit",
//                 })}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold">날짜</h3>
//               <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//                 <p>
//                   2023.10.30
//                 </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold">기사명</h3>
//               <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//                 <p>
//                  이하늘
//                 </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold">서비스</h3>
//               <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//                 <p>
//                   ddd
//                 </p>
//             </div>
//           </div>

//           {/* 서비스 및 기사 */}
//           <div className="">
            
//             <div></div>
//           </div>
//           {/* <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700 overflow-hidden z-10">
//           </div> */}

//           <div className="mt-5">
//             <h3 className="text-2xl font-semibold">평가</h3>
//             <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>
//             <span className="text-xl font-semibold text-secondary-6000">
//               {/* 다음에도 이용할게요:) */}
//               {reviewContent.reuse ? "다음에도 이용할게요:)" : "이번에만 이용할게요:(" }
//             </span>
//           </div>
//         </div>

//         <div>
//           <ImgSwiper/>
//         </div>
    

//         {/* 리뷰 내용 */}
//         <div>
//           <h3 className="text-2xl font-semibold">작성 내용</h3>
//           <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-3"></div>

//           <div className="mt-6">
//             <span>
//               {reviewContent?.content}
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderAnswer = () => {
//     return (
//       <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
//         <h3 className="text-2xl font-semibold">사장님</h3>
//         <div className="mt-6">
//           <span className="leading-10">
//             {reviewContent?.answerContent}
//           </span>
//         </div>
//       </div>
//     )
//   }
 

//   return (
//     <div>
//       <main className="container mt-11 mb-24 lg:mb-32 flex flex-col lg:flex-row">
//         <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
//         <div className="mt-5 w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderAnswer()}</div>
//       </main>
//     </div>
//   );
// };

// export default ReviewDetail;