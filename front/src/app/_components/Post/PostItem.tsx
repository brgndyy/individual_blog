import React from "react";
import { PostType } from "types/post";
import Image from "next/image";
import {
  post_container,
  post_image_container,
  post_image,
  post_title_description_container,
  post_title,
  post_description,
  post_info_container,
  post_date,
  post_comments_count,
  post_likes_count,
} from "@/app/_styles/post_item.css";
import Link from "next/link";
import { formatDate } from "@/app/_utils/formatDate";

export default function PostItem({
  id,
  title,
  body,
  description,
  articleImage,
  tagList,
  createdAt,
  slug,
}: PostType) {
  const formattedDate = formatDate(createdAt);

  return (
    <Link href={`/posts/${slug}`} className={post_container}>
      <div className={post_image_container}>
        <Image
          className={post_image}
          src={articleImage}
          width={250}
          height={300}
          alt="게시글 이미지"
        />
      </div>
      <div className={post_title_description_container}>
        <div className={post_title}> {title}</div>
        <div className={post_description}> {description}</div>
      </div>
      <div className={post_info_container}>
        <div className={post_date}> {formattedDate}</div>
      </div>
    </Link>
  );
}
