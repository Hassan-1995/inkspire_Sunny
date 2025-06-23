"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  RiMenuFold3Line,
  RiMenuUnfold3Line,
  RiShoppingBag4Line,
} from "react-icons/ri";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [signOut, setSignOut] = useState(false);

  const pathName = usePathname();
  const mainLinks = [
    { label: "Catalog", href: "/catalog" },
    { label: "Design", href: "/design" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200 ${
        pathName === "/api/auth/localAuth" && "hidden"
      }`}
    >
      {/* Top Navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-14 w-14">
            {/* Glow behind image on group hover */}
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-50 blur-xl z-0 transition duration-300" />
            <Image
              src="/mascots/mascot_thumbsUp.png"
              alt="Inkspire Mascot"
              fill
              className="object-contain rounded-full z-10"
            />
          </div>
          <span
            className={`text-2xl font-bold  transition-colors duration-300 group-hover:text-purple-600 ${
              pathName === "/" ? "text-purple-800" : "text-stone-900"
            }`}
          >
            InkSpire
          </span>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`"text-stone-700" hover:text-purple-600 transition-colors ${
                  pathName === link.href && "underline underline-offset-[5px]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            // href={"/api/auth/signin"}
            href={"/api/auth/localAuth"}
            className="hidden md:flex text-white font-semibold bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors py-1 px-2.5 md:py-2 md:px-3.5"
          >
            Sign In
          </Link>

          <Link
            href={"/cart"}
            className="hidden md:flex text-purple-700 font-semibold rounded-lg hover:bg-text-800 transition-colors py-1 px-2.5 md:py-2 md:px-3.5"
          >
            <RiShoppingBag4Line className="text-2xl" />
          </Link>

          <button
            className="md:hidden"
            onClick={() => setModal((prev) => !prev)}
          >
            {!modal ? (
              <RiMenuFold3Line className="font-bold text-3xl text-purple-600" />
            ) : (
              <RiMenuUnfold3Line className="font-bold text-3xl text-purple-600" />
            )}
          </button>
        </div>
      </div>
      {/* Modal set-up */}

      <div
        className={`absolute backdrop-blur-md bg-orange-50/90 w-full h-screen py-1 px-2.5 ${
          modal ? "-translate-x-screen" : "translate-x-full"
        } transform-all duration-700 `}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col gap-2 mb-6 px-2">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setModal((prev) => !prev)}>
                <span className="block w-full text-base font-semibold text-purple-700 hover:text-purple-900 transition-colors px-3 py-2 rounded-md hover:bg-purple-100">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between px-2">
          {/* Sign In Button */}
          <Link
            // href={"/api/auth/signin"}
            href={"/api/auth/localAuth"}
            className="flex-1 text-center bg-purple-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-700 transition-colors"
          >
            Sign In
          </Link>

          {/* Spacer */}
          <div className="w-3"></div>

          {/* Cart Icon Button */}
          <Link
            href="/cart"
            className="flex items-center justify-center text-purple-700 font-semibold border border-purple-300 rounded-lg py-2 px-4 hover:bg-purple-100 transition"
          >
            <RiShoppingBag4Line className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Signout Setup */}
      {signOut && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center w-screen h-screen z-50">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full text-center space-y-5">
            <h2 className="text-base sm:text-lg font-medium text-gray-800">
              Do you want to sign out?
            </h2>
            <div className="flex justify-center gap-4">
              <Link
                href={"/api/auth/signout"}
                className="bg-rose-100 text-rose-600 px-5 py-2 rounded-lg hover:bg-rose-200 transition-colors duration-200"
              >
                Yes
              </Link>
              <button
                onClick={() => setSignOut(false)}
                className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
