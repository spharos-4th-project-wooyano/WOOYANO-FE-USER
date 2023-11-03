// "use client";
// import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";

// function SnsLoginForm() {
//   return (
//     <div className="box-border my-8 dark:invert">
//       <div className="flex justify-between gap-6 mb-6">
//         {/* 카카오 로그인 */}
//         <button
//           className="w-full h-10 pt-[13px] pb-[12.33px] bg-white rounded-[5px] border border-slate-200 justify-center items-center inline-flex"
//           onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
//         >
//           <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g clip-path="url(#clip0_712_441)">
//               <path d="M14.6249 3.43262H1.5249V9.28288H14.6249V3.43262Z" fill="white" />
//               <path
//                 d="M6.3085 5.53775L5.8475 6.83831H6.768L6.3085 5.53775ZM6.3085 5.53775L5.8475 6.83831H6.768L6.3085 5.53775ZM8 0C3.5825 0 0 2.80463 0 6.26478C0 8.50339 1.4965 10.4655 3.75 11.574C2.6315 15.4067 1.974 15.6572 6.579 12.4321C7.05 12.4986 7.5245 12.5316 8 12.5311C12.4175 12.5311 16 9.72494 16 6.26478C16 2.80463 12.4175 0 8 0ZM3.5765 8.45288C2.778 8.45288 3.249 7.34883 3.1155 5.29224C2.8245 5.24274 1.9415 5.49025 1.9415 4.84272C1.943 4.59421 2.1455 4.3937 2.394 4.3947C4.0725 4.5142 5.21 4.08218 5.21 4.84272C5.21 5.50175 4.3605 5.23674 4.0375 5.29224C3.9035 7.34183 4.3735 8.45288 3.5765 8.45288ZM7.917 8.38288C7.2 8.70889 7.1825 7.97436 7.011 7.65535H5.6045C5.4315 7.98136 5.417 8.7144 4.6985 8.38288C4.159 8.13537 5.0375 6.88031 5.6935 4.84522C5.803 4.5057 6.167 4.3197 6.5065 4.4292C6.704 4.4932 6.8585 4.64771 6.9225 4.84522C7.5915 6.91931 8.4595 8.13537 7.917 8.38288ZM8.7695 8.38288C7.997 8.38288 8.467 7.33983 8.333 4.84822C8.333 4.24169 9.2755 4.24319 9.2755 4.84822V7.54484C9.7205 7.60434 10.698 7.32533 10.698 7.96536C10.692 8.64189 9.642 8.29988 8.7695 8.38588V8.38288ZM13.037 8.25037L11.955 6.82481L11.795 6.98482V7.98686C11.795 8.24087 11.589 8.44638 11.3355 8.44638H11.3325C10.531 8.44638 11.011 7.29133 10.8715 4.85072C10.873 4.59721 11.079 4.3927 11.3325 4.3927C12.029 4.3927 11.728 5.37724 11.7935 5.83727C13.1025 4.58771 13.069 4.4552 13.338 4.4552C13.709 4.4552 13.936 4.91622 13.6885 5.16073L12.637 6.20528L13.773 7.70085C14.144 8.18537 13.4035 8.7379 13.037 8.25337V8.25037ZM5.8475 6.83831H6.768L6.3085 5.53775L5.8475 6.83831ZM6.3085 5.53775L5.8475 6.83831H6.768L6.3085 5.53775ZM6.3085 5.53775L5.8475 6.83831H6.768L6.3085 5.53775Z"
//                 fill="#142535"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_712_441">
//                 <rect width="16" height="14.6667" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </button>
//         {/* 네이버 로그인 */}
//         <button
//           className="w-full h-10 pt-[13px] pb-[12.33px] bg-white rounded-[5px] border border-slate-200 justify-center items-center inline-flex"
//           onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
//         >
//           <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g clip-path="url(#clip0_712_447)">
//               <path
//                 d="M12 0V11H8.24813L4.125 5.48862V11H0V0H3.75L4.11188 0.517759L7.84875 5.63845C7.86562 5.59483 7.875 5.54931 7.875 5.5V0H12Z"
//                 fill="#142535"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_712_447">
//                 <rect width="12" height="11" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </button>
//         {/* 구글 로그인 */}
//         <button
//           className="w-full h-10 pt-[13px] pb-[12.33px] bg-white rounded-[5px] border border-slate-200 justify-center items-center inline-flex"
//           onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
//         >
//           <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M6.01596 4.90304C9.14551 4.90304 11.0174 4.90304 11.6316 4.90304C11.8363 5.98522 11.7925 7.03815 11.5 8.06183C11.2075 9.05627 10.6957 9.88984 9.96445 10.5625C9.29175 11.1768 8.4728 11.6008 7.50762 11.8348C6.45468 12.0688 5.431 12.0542 4.43657 11.791C3.64687 11.5862 2.93029 11.2206 2.28683 10.6942C1.58488 10.1384 1.04379 9.48036 0.663566 8.71991C0.0201081 7.4915 -0.15538 6.18996 0.1371 4.8153C0.224845 4.28883 0.400333 3.79161 0.663566 3.32364C1.36552 1.86124 2.49157 0.866807 4.04172 0.340341C5.38713 -0.127628 6.73254 -0.113004 8.07795 0.384213C8.77991 0.647446 9.42336 1.04229 10.0083 1.56876C9.94983 1.6565 9.84746 1.7735 9.70122 1.91974C9.55498 2.03673 9.46724 2.12447 9.43799 2.18297C9.321 2.27071 9.13088 2.4462 8.86765 2.70944C8.63367 2.94342 8.45818 3.13353 8.34119 3.27977C7.96096 2.89955 7.52224 2.63632 7.02502 2.49007C6.44006 2.31459 5.8551 2.29996 5.27014 2.4462C4.56818 2.59244 3.9686 2.91417 3.47138 3.41139C3.09116 3.82086 2.79868 4.30346 2.59394 4.85917C2.33071 5.61962 2.33071 6.39469 2.59394 7.18439C2.85717 7.94484 3.32514 8.55905 3.99785 9.02702C4.40732 9.3195 4.84604 9.50961 5.31401 9.59736C5.75273 9.6851 6.23532 9.6851 6.76179 9.59736C7.25901 9.50961 7.69773 9.33412 8.07795 9.07089C8.75066 8.63217 9.14551 8.01796 9.2625 7.22826C8.18032 7.22826 7.09814 7.22826 6.01596 7.22826C6.01596 7.05277 6.01596 6.67255 6.01596 6.08759C6.01596 5.47338 6.01596 5.07853 6.01596 4.90304ZM18.7389 5.03466V6.52631H16.6769V8.54443H15.1852V6.52631H13.1232V5.03466H15.1852V2.97267H16.6769V5.03466H18.7389Z"
//               fill="#142535"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className="text-slate-600 text-xs font-normal leading-tight text-center">Sign in with social networks</div>
//     </div>
//   );
// }

// export default SnsLoginForm;
import React from 'react'
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Image from "next/image";

const loginSocials = [
  {
    name: "Continue with Kakao",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Naver",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

function snsLogin() {
  
  return (
    <div className="grid gap-3">
    {loginSocials.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
      >
        <Image
          className="flex-shrink-0"
          src={item.icon}
          alt={item.name}
        />
        <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
          {item.name}
        </h3>
      </a>
    ))}
  </div>
  )
}

export default snsLogin