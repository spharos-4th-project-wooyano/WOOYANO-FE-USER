import LoginForm from "@/components/login/loginForm";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import LoginLogo from "@/components/login/loginLogo";
import SnsLoginForm from "@/components/login/snsLogin";

async function Loginpage() {
  const session = await getServerSession(options);
  console.log("session", session || "no session");

  return (
    <div className="container mb-24 lg:mb-32">
      <div className="max-w-md mx-auto space-y-6">
        <LoginLogo />
        <LoginForm />
        <SnsLoginForm />
      </div>
    </div>
  );
}

export default Loginpage;
