import React from "react";
import { PropsWithChildren } from "react";
import { card } from "@/app/_styles/cards.css";

export default function Card(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <div className={card}>{children}</div>;
}
