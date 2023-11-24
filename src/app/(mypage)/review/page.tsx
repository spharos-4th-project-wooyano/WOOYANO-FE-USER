import BgGlassmorphism from "@/components/BgGlassmorphism";
import React, { FC } from "react";
import SectionGridFilterCard from "../../(review)/SectionGridFilterCard";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";


export interface ListingFlightsPageProps {}
export interface newDataType {
  reviewId: number;
  serviceId: number;
  serviceName: string;
  reservationNum: string;
  reuse: boolean;
  createdAt: Date;
  reservationDate: Date;
  workerId: number;
  workerName: string;
}

export const getData = async (token:string, email:string) => {
    if (!token) {
      console.log("세션이 만료됨")
      return null
    }
    try {
      const response = await fetch(`http://3.35.62.185:8000/api/v1/review-bookmark/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Email: `${email}`,
        },
      });
  
      if (response.ok) {
        const res = await response.json();
        console.log("리뷰 리스트 성공:", res);
        return res.result;
      }
    } catch (error) {
      console.error("리뷰 리스트 실패:", error);
    }
  }

export const getWorkerId = async (reservationNum: string, token:string) => {
  if (!token) {
    console.error("세션이 만료됨")
    return null
  }
  try {
    const response = await fetch(`http://3.35.62.185:8000/api/v1/reservation/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body:JSON.stringify({
      "reservationNum" : reservationNum,
      })
  })
  if (response.ok) {
    const res = await response.json();
    return res.result[0];
    }
  } catch (error) {
    console.log('worker data', error)
  }
}

export const getWorkNameAndClientName = async (serviceId: number, token:string, workerId: number) => {
  if (!token) {
    console.error("세션이 만료됨")
    return null
  }
  try {
    const response = await fetch(`http://3.35.62.185:8000/api/v1/client/review/detail?serviceId=${serviceId}&workerId=${workerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
    if (response.ok) {
      const res = await response.json();
      return res.result;
      }
    } catch (error) {
      console.log('worker data', error)
    }
}

const ListingFlightsPage: FC<ListingFlightsPageProps> = async ({}) => {

  const session = await getServerSession(options);
  console.log('servicehistory',session);
  if(!session){
    Swal.fire({
      text: `로그인이 필요한 페이지입니다.`,
      toast: false,
      position: "center",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    redirect("/");
  }

  const data = await getData(session.user.result.token, session.user.result.email);
  const userName = await session.user.result.username;

  let newData:newDataType[] = []
  
  for (let i = 0; i < data.length; i++) {
    const workerId = await getWorkerId(data[i].reservationNum, session.user.result.token);
    const workerName = await getWorkNameAndClientName(data[i].serviceId, session.user.result.token, workerId.workerId);
    console.log("workerName",workerName)
    newData.push({
      reviewId: data[i].reviewId,
      serviceId: data[i].serviceId,
      serviceName: workerName.serviceName,
      reservationNum: data[i].reservationNum,
      reuse: data[i].reuse,
      createdAt: data[i].createdAt,
      workerId: workerId.workerId,
      workerName: workerName.workerName,
      reservationDate: workerId.reservationDate
    })
  }
  console.log("newData",newData)


  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <BgGlassmorphism />
      <SectionGridFilterCard data={newData} userName={userName}/>
    </div>
  );
};


export default ListingFlightsPage;