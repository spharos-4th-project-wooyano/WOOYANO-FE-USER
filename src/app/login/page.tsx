import LoginForm from "@/app/login/loginForm";
import React from "react";
import { getServerSession } from "next-auth";
import LoginLogo from "@/app/login/loginLogo";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Loginpage() {
  const session = await getServerSession(options);
  if(session?.user.success){
    redirect("/");
  }
  return (
    <div className="container mb-24 lg:mb-32">
        <LoginLogo/>
        <LoginForm/>
    </div>
  );
}

export default Loginpage;
