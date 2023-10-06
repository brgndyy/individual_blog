import {
  post_tag,
  text_and_count_container,
  tag_count,
  tag_text,
} from "@/app/_styles/all_tags.css";
import { TagType } from "types/post";
import Link from "next/link";

export default function Tag({ tag, count }: TagType) {
  return (
    <Link href={`/tag/${tag}`} className={post_tag}>
      <div className={text_and_count_container}>
        <div className={tag_text}>{tag}</div>
        <div className={tag_count}> ({count})</div>
      </div>
    </Link>
  );
}
