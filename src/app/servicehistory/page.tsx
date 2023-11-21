import React from "react";
import { DEMO_POSTS } from "@/data/posts";

import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionMagazine5 from "../blog/SectionMagazine5";
import SectionAds from "../blog/SectionAds";
import SectionLatestPosts from "../blog/SectionLatestPosts";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const BlogPage: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
     {/* 배경 */}
      <BgGlassmorphism />
      
      <div className="container relative">
        <SectionLatestPosts className="py-16 lg:py-28" />
      </div>
    </div>
  );
};

export default BlogPage;