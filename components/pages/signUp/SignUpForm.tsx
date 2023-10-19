'use client'
import ProgressBar from "@/components/ui/progressBar";
import Link from "next/link";
import React,{useState} from "react";

function SignUpForm() {
    // const [name,setName] = useState("")
    // const [id,setId] = useState("")
    // const [certNumber,setCertNumber] = useState("")
    // console.log(`name${name} | id:${id} | certNum:${certNumber}`)
  
    return (
      <div className="flex flex-col my-[4vh] mx-[4vh]">
        <ProgressBar completed={3} total={4} />
        
        <Link href="/signup/complete">
          <button
            className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
        dark:bg-slate-700 dark:text-slate-200"
          >
            가입하기
          </button>
        </Link>
        {/* 알럿 추가 */}
      </div>
    );
  }
export default SignUpForm