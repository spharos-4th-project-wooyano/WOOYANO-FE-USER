//  localcode : sigunguCode에서 앞 2자리 , localaddress: address, extraaddress : 사용자 입력, fulladdress: ㅣlocaladdress + extraaddress
// localcode,fulladress 는 사용자에게 표시 필요없이 변수값으로만 저장
"use client";
import React, { useState } from "react";
import PostCodeDaum from "../widget/PostCodeDaum";
import { DaumAddressType } from "@/types/DaumAddrssType";

function SearchAddress() {
    const [localCode, setLocalCode] = useState("");
    const [localAddress, setLocalAddress] = useState("");
    const [extraAddress, setExtraAddress] = useState("");
    const [address, setAddress] = useState<DaumAddressType>();
    const [isView, setIsView] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsView(true);
  };

  const handleAddressChange =() => {
    const fulladdress = address?.address + " "+ extraAddress
  }

  return (
    <>
      <div className="flex flex-col">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">주소</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="주소찾기 버튼을 사용해 주세요."
              value={localAddress}
          />

          <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress}/>
          <section className="">
            <div className="">
              <button
                className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
                onClick={()=>{
                    handleOpenModal();
                }}
              >
                주소 찾기
              </button>
            </div>
            <p>{address?.address}</p>
            <p>{address?.sigunguCode}</p>
          </section>
        </div>
        <input
          type="text"
          className="mt-1 box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="상세 주소입력"
          value={extraAddress}
          onChange={(e) => setExtraAddress(e.target.value)}
        />
        
      </div>
    </>
  );
}

export default SearchAddress;
