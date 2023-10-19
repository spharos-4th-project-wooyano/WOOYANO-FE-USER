'use client'
import React from 'react'
import DaumPostcode from "react-daum-postcode";

function PostCodeDaum({isView, setIsView, setAddress}: {isView: boolean, setIsView: any, setAddress: React.Dispatch<React.SetStateAction<any>>}) {

    const complete = (data : any) =>{
        setAddress(data)
    }

  return (
    <div >
        {
            isView &&
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} 
            />
        }
    </div>
  )
}

export default PostCodeDaum