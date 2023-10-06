import { AllTagsType } from "types/post";
import { all_tags_container } from "@/app/_styles/all_tags.css";
import Tag from "./Tag";

export default function AllTags({ allTags }: AllTagsType) {
  return (
    <div className={all_tags_container}>
      {allTags.map((tag, key) => {
        return <Tag key={key} tag={tag.tag} count={tag.count} />;
      })}
    </div>
  );
}
