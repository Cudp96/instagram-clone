"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from "react-modal";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="flex gap-2 items-center">
            <IoIosAddCircleOutline
              className="text-3xl cursor-pointer transform hover:scale-125 transition- duration-300 hover:text-red-600"
              onClick={() => setIsOpen(true)}
            />
            <img
              src={session.user.image}
              alt={session.user.name}
              className="rounded-full h-10 w-10 cursor-pointer "
              onClick={() => signOut()}
            />
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <HiCamera className="text-5xl cursor-pointer text-gray-400 " />
          </div>
          <input
            type="text"
            maxLength="150"
            placeholder="Caption it!!!"
            className="my-4 border-none text-center w-full focus:ring-0 outline-none"
          />
          <button className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">
            Upload Post
          </button>
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300 "
          />
        </Modal>
      )}
    </nav>
  );
};

export default Header;
