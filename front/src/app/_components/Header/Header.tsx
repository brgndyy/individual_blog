import React from "react";

import {
  header_category_container,
  header_container,
  toggle_input,
  toggle_label,
  toggle_label_checked,
  header_link,
  link,
} from "@/app/_styles/header.css";
import { myStyle } from "@/app/_styles/vars.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={`${header_container} ${myStyle}`}>
      <div className={header_category_container}>
        <input
          type={"checkbox"}
          id="darkmode-toggle"
          // onChange={themeToggleHandler}
          className={toggle_input}
        />
        <label
          htmlFor="darkmode-toggle"
          // className={`${toggle_label} ${darkTheme ? toggle_label_checked : ""}`}
          className={`${toggle_label} ${toggle_label_checked}`}
        ></label>
        {/* <div className={`${header_link}`}>
          <Link href={"/register"} className={link}>
            Sign in
          </Link>
        </div>
        <div className={header_link}>
          <Link href={"/login"} className={link}>
            Login
          </Link>
        </div> */}
      </div>
    </div>
  );
}
