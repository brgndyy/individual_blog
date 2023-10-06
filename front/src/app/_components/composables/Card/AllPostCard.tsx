import { PropsWithChildren } from "react";
import { all_posts_card } from "@/app/_styles/cards.css";

export default function AllPostCard(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <div className={all_posts_card}>{children}</div>;
}
