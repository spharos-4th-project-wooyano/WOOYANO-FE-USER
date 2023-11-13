'use client'
import React from "react";
import ChgPwStepper from "./chgPwStepper";
import { SessionProvider } from "next-auth/react";

export default function ChgPwPage(props: React.JSX.IntrinsicAttributes) {
  return (
    <SessionProvider>
      <div className="container mb-24 lg:mb-32">
        <ChgPwStepper {...props} />
      </div>
    </SessionProvider>
  );
}