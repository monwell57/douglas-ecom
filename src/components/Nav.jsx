import { Link as NavLink } from "react-scroll";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles = "" }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.path}
            // className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            className={`${
              linkStyles ? linkStyles + " " : ""
            }cursor-pointer border-b-2 border-transparent`}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
          >
            {link.name}
          </NavLink>
        );
      })}
      <Link href="/shop">
        <p
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
        >
          Shop
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
