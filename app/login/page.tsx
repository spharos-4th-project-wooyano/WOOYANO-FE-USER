// import Logo from "@/components/pages/login/logo";
import Findinfo from "@/components/pages/login/findinfo";
import LoginForm from "@/components/pages/login/loginForm";
import SnsLoginForm from "@/components/pages/login/snsLoginForm";
import Logo from "@/components/pages/login/logo";

import React from "react";
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

async function Loginpage() {
  const session = await getServerSession(options)
  console.log("session", session || "no session")
  
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
