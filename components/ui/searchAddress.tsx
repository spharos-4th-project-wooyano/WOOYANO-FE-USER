"use client";
import React, { useState } from "react";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useDaumPostcodePopup} from "react-daum-postcode"
import DaumPostcode from "react-daum-postcode";

function SearchAddress() {
    
//     const [localCode,setLocalCode] = useState("")
//     const [localAddress, setLocalAddress] = useState("");
//     const [extraAddress, setExtraAddress] = useState("");

//     const open = useDaumPostcodePopup(postcodeScriptUrl);
//     console.log(localCode,localAddress,extraAddress);

//     const handleComplete = (data : any) => { 
//         setLocalCode(data?.sigunguCode?.substring(0,2));
//         setLocalAddress(data?.address); 
//     }

//     const handleClick = () => {
//         open({onComplete: handleComplete})
//     }

  return (
      <div className="flex flex-col">
              <button
                className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
                // onClick={()=>{
                //     handleClick();
                // }}
              >
                주소 찾기
              </button>
        </div>
  );
}

export default SearchAddress;

