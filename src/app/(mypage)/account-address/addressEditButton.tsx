"use client";
import { Address } from "@/types/addressListType";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import React from "react";

function AddressEditButton({ address }: { address: Address }) {
  //세션정보 불러오기
  const session = useSession();
  const usertoken = session.data?.user.result.token;
  const useremail = session.data?.user.result.email;
  
  const handleEditAddress = async () => {
    console.log(address,useremail,usertoken);
  };

  return (
    <button onClick={handleEditAddress}>
      <PencilSquareIcon className="md:h-4 md:w-4 h-6 w-6" />
    </button>
  );
}

export default AddressEditButton;
