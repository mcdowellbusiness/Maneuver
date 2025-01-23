"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "@/constants";
import Dropdown from "@/molecules/dropdown";
import { logoTitle } from "@/assets";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = location;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const level = pathname !== "/" ? 100 : 200;
      if (scrollTop > level) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const renderNavLinks = () => {
    const renderCorrectNavItem = (nav) => {
      switch (nav.type) {
        case "page":
          return <Link to={nav.url}>{nav.title}</Link>;
        case "dropdown":
          return <Dropdown name={nav.title} submenu={nav.submenu} />;
        default:
          return <a href={`/#${nav.id}`}>{nav.title}</a>;
      }
    };

    return (
      <ul
        className={`list-none flex space-x-4 md:space-x-10 lg:space-x-10 text-tertiary font-bold text-lg mr-12`}
      >
        {navLinks.map((nav) => (
          <li key={nav.id} className="text-md font-md">
            {renderCorrectNavItem(nav)}
          </li>
        ))}
      </ul>
    );
  };

  const renderClasses = () => {
    if (scrolled) return "bg-secondary";
    if (pathname !== "/") {
      return "bg-transparent";
    } else {
      return "bg-transparent absolute top-[12.5rem]";
    }
  };
  return (
    <nav className={`w-full py-3 z-20 fixed top-0 ${renderClasses()}`}>
      <div className="flex justify-end items-center h-14">
        {/* <Logo /> */}
        {renderNavLinks()}
      </div>
    </nav>
  );
};

export default Header;
