"use client";
import Logo from "@/components/pages/login/logo";
import Findinfo from "@/components/pages/login/findInfo";
import LoginForm from "@/components/pages/login/loginForm";
import SnsLoginForm from "@/components/pages/login/snsLoginForm";
import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";

// const { data: session } = useSess ion();

function Loginpage() {
  return (
    <div className="mx-[30px] mt-[30px]">
      <Logo />
      <LoginForm />
      <Findinfo />
      <SnsLoginForm />
    </div>
  );
}

export default Loginpage;
