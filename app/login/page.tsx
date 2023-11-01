"use client";
import Logo from "@/components/pages/login/logo";
import Findinfo from "@/components/pages/login/findinfo";
import LoginForm from "@/components/pages/login/loginForm";
import SnsLoginForm from "@/components/pages/login/snsLoginForm";
import React from "react"
// import { signIn, signOut, useSession } from "next-auth/react";

// const { data: session } = useSess ion();

function Loginpage() {
  return (
    <div className="mx-[30px] pt-[10vh]">
      <Logo />
      <LoginForm />
      <Findinfo />
      <SnsLoginForm />
    </div>
  );
}

export default Loginpage;
