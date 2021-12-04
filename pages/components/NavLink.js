import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const NavLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected shadow-xl ease-in-out underline text-white rounded-t bg-yellow`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
