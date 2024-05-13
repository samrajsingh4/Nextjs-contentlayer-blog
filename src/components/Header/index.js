"use client"
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-col4 z-0 overflow-hidden">
      <Logo />

      <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className={`py-3 px-6 sm:px-8 font-medium capitalize ${
          click ? "absolute left-0 w-full bg-col5" : "hidden"
        } sm:hidden transition-all ease duration-300 z-10`}
        style={{
          top: click ? "4rem" : "-5rem",
        }}
      >
        <Link href="/" className="block w-full text-center py-2">Home</Link>
        <Link href="/tools" className="block w-full text-center py-2">Tools</Link>
        <Link href="/about" className="block w-full text-center py-2">About</Link>
        <Link href="/contact" className="block w-full text-center py-2">Contact</Link>
      </nav>

      <nav className="w-max py-3 px-8 font-medium capitalize items-center hidden sm:flex top-6 right-0 z-50">
        <Link href="/" className="mr-2 text-lg">Home</Link>
        <Link href="/tools" className="mx-2 text-lg">Tools</Link>
        <Link href="/about" className="mx-2 text-lg">About</Link>
        <Link href="/contact" className="mx-2 text-lg">Contact</Link>
      </nav>

    </header>
  );
};

export default Header;