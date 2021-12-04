import React, { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import NavLink from "./NavLink";
const NavBar = () => {
  const NavList = [
    "Home",
    "About",
    "Projects",
    "Gallery",
    "Blog",
    "Team",
    "Donate",
  ];
  const navLinks = ["/", "/about", "/projects", "/gallery", "/team", "/donate"];
  const [navMode, setNavMode] = useState("hidden");
  const router = useRouter();
  return (
    <Wrapper>
      <Humberger
        onClick={() =>
          navMode ? setNavMode("") : setNavMode("hidden relative")
        }
      >
        <Span
          className={`${navMode == "" ? "transform rotate-45 mt-5" : ""}`}
        ></Span>
        <Span className={`${navMode == "" ? "hidden" : ""}`}></Span>
        <Span
          className={`${navMode == "" ? "transform -rotate-45 mb-5" : ""}`}
        ></Span>
      </Humberger>
      <NavItems className={navMode}>
        {/* {NavList.map((item, index) => (
          <Link
            key={index}
            href={`/${item == "Home" ? "" : item.toLocaleLowerCase()}`}
            passHref
            className={
              router.pathname == "/" + item.toLocaleLowerCase() ? "active" : ""
            }
          >
          </Link>
        ))} */}
        {NavList.map((item, index) => (
          <NavLink
            key={index}
            href={`/${item == "Home" ? "" : item.toLocaleLowerCase()}`}
          >
            <NavItem className="navItem">{item}</NavItem>
          </NavLink>
        ))}
      </NavItems>
    </Wrapper>
  );
};

export default NavBar;
const Wrapper = tw.nav`w-2/5 md:w-auto  my-10 flex flex-col relative items-end md:items-center`;
const Humberger = tw.div`cursor-pointer w-12 h-12 flex flex-col relative justify-evenly md:hidden`;
const Span = tw.span`h-1 w-full bg-yellow transition duration-300 ease-in-out `;
const NavItems = tw.div`w-4/5 md:w-auto  mt-2 flex transition ease-in-out duration-700  flex-col items-left md:flex-row md:flex`;
const NavItem = tw.div`text-2xl md:text-sm lg:text-xl xl:mx-2 font-bold my-2 p-1 pt-2 cursor-pointer text-yellow hover:shadow-xl ease-in-out duration-200 hover:underline hover:text-white rounded-t hover:bg-yellow `;
