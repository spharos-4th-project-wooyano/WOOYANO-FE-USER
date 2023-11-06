import Charactor from "@/images/svg_component/charactor";
import React from "react";
import 'src/fonts/line-awesome-1.3.0/css/line-awesome.css'

export default function LoginLogo() {
  return (
      <div className="flex justify-center md:justify-center items-center w-full h-auto my-16 font-semibold text-neutral-900 dark:text-neutral-100">
        <div className="h-auto">
            <Charactor/>
        </div>
        <div className="flex flex-col items-end font-bold">
          <h2 className="text-2xl leading-[115%] md:text-3xl md:leading-[115%]">
            Welcome To
          </h2>
          <h2 className="text-4xl leading-[115%] md:text-5xl md:leading-[115%]">
            WooYaNo!
          </h2>
        </div>
      </div>
  );
}
