"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <nav className="shadow-sm border-b sticky top-0 bg-white z-30 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href={"/"}>
          <Image
            src={"/instagram black.webp"}
            width={96}
            height={96}
            alt="Instagram logo"
            className=" hidden lg:inline-flex"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/Instagram logo.webp"}
            width={40}
            height={40}
            alt="Instagram logo"
            className=" lg:hidden inline-flex"
          />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />

        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="rounded-full h-10 w-10 cursor-pointer "
            onClick={() => signOut()}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
