import React from "react";
import { PostListType } from "types/post";
import PostItem from "./PostItem";
import { post_list_ul } from "@/app/_styles/post_list.css";

export default function PostList({ allPosts }: PostListType) {
  return (
    <>
      <ul className={post_list_ul}>
        {allPosts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              tagList={post.tagList}
              description={post.description}
              createdAt={post.createdAt}
              articleImage={post.articleImage}
              body={post.body}
            />
          );
        })}
      </ul>
    </>
  );
}
