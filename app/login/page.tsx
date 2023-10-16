"use client";
import Logo from "@/components/pages/login/Logo";
import Findinfo from "@/components/pages/login/Findinfo";
import LoginForm from "@/components/pages/login/LoginForm";
// import SnsLoginForm from "@/components/pages/login/SnsLoginForm";
import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";

// const { data: session } = useSession();

function Loginpage() {
  return (
    <div className="mx-[30px] mt-[30px]">
      <Logo />
      <LoginForm />
      <Findinfo />
      {/* <SnsLoginForm />
      <button onClick={() => signIn()}>Log In</button>
      <button onClick={() => signOut()}>Log Out</button> */}
    </div>
  );
}

export default Loginpage;
