"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import StepperBtn from "./stepperBtn";
import { ChgPwType } from "@/types/ChgPwType";
import ChgPwCert from "./chgPwCert";
import ChgPwForm from "./chgPwForm";
import { useSession } from 'next-auth/react';

export default function ChgPwStepper() {
  
  const { data: session } = useSession();
  if (session) {
    // 로그인한 경우
    const userEmail = session.user.email;
    console.log(`로그인된 사용자의 이메일: ${userEmail}`);
  } else {
    // 로그인하지 않은 경우
    console.log('사용자가 로그인하지 않았습니다.');
  }

  const [stepId, setStepId] = useState<number>(1);
  const [chgPwData, setChgPwData] = useState<ChgPwType>({
    email: "",
    emailCertNumber: "",
    newpassword: "",
    checkPassword : "",
    passwordChecked : false,
    emailChecked : false
  });

  const stepperComponent: any = [
    { 1: <ChgPwCert chgPwData={chgPwData} setChgPwData={setChgPwData}/>, btnTxt: "Continue" }, 
    { 2: (<ChgPwForm chgPwData={chgPwData} setChgPwData={setChgPwData} />),btnTxt: "Complete"},
];

  useEffect(() => {}, [chgPwData]);

  return (
    <div>
      {stepperComponent[stepId - 1][stepId]}
        <StepperBtn
          chgPwData={chgPwData}
          setChgPwData={setChgPwData}
          btnText={stepperComponent[stepId - 1]["btnTxt"]}
          stepId={stepId}
          setStepId={setStepId}
        />
    </div>
  );
}
