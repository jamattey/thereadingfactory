import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const NavLink = (props) => {
  const router = useRouter();

  let className = props.children.props.className || "";
  if (router.pathname === props.href) {
    className = `${className} selected shadow-xl ease-in-out underline text-white rounded-t bg-yellow`;
  }

  return (
    <Link href={props.href}>
      {React.cloneElement(props.children, { className })}
    </Link>
  );
};

export default NavLink;
