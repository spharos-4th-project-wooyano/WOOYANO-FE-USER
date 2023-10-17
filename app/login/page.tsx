"use client";
import Logo from "@/components/pages/login/Logo";
import Findinfo from "@/components/pages/login/Findinfo";
import LoginForm from "@/components/pages/login/LoginForm";
import SnsLoginForm from "@/components/pages/login/SnsLoginForm";
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
