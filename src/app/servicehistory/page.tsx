import React from "react";
import { DEMO_POSTS } from "@/data/posts";

import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionLatestPosts from "../blog/SectionLatestPosts";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

// DEMO DATA
const POSTS = DEMO_POSTS;

const BlogPage = async () => {
  const session = await getServerSession(options);
  console.log('servicehistory',session);
  if(!session){
    Swal.fire({
      text: `로그인이 필요한 페이지입니다.`,
      toast: false,
      position: "center",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    redirect("/");
  }
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <BgGlassmorphism />
      <div className="container relative">
        <SectionLatestPosts className="py-10" data={session.user.result}/>
      </div>
    </div>
  );
};

export default BlogPage;