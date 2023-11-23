import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import { PostDataType } from "@/data/types";
import Link from "next/link";

export interface PostCardMetaProps {
  className?: string;
  meta: Pick<PostDataType, "date" | "author" | "reservationDate">;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { date, author, reservationDate} = meta;
  
  const dateStr = reservationDate ? new Date(reservationDate).toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : new Date().toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      className={`nc-PostCardMeta pt-6 inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-sm" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link
        href={author.href}
        className="flex-shrink-0 relative flex items-center space-x-2"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={author.avatar}
            userName={author.displayName}
          />
        )}
        
        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {author.displayName} 기사
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
          {dateStr}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
