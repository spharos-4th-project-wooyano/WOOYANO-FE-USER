import React from "react";
import SignUpCert from "./signUpCert";
import SignUpCertNumber from "./signUpCertNumber";
import SingUpForm from "./signUpForm";
import ButtonPrimary from "@/shared/ButtonPrimary";

export default function SignUpPage() {
  return (
    <div className="container mb-24 lg:mb-32">
      <div className="my-10 text-center">
        progress bar / stepper
        <p>SIGN UP</p>
      </div>
      <div>
        {/* <SignUpCert /> */}
        <SignUpCertNumber/>
        {/* <SingUpForm/> */}
      </div>
    </div>
  );
}
