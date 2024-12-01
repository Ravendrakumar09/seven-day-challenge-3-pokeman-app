import React from "react";
import { VscBellDot } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function navbar() {
  return (
    <div className="flex justify-between my-4 w-full text-gray-50 sm:flex-col">
      <span className="px-5 py-2 font-bold text-2xl">Flix.id</span>
      <div
        className="flex bg-black gap-5 rounded-3xl pl-6 text-gray-400 text-sm sm:
      flex-w-1/4 sm:py-2 sm:px-1 sm:justify-around sm:m-3 "
      >
        <button className="text-gray-200">Movie</button>
        <button>Series</button>
        <button>Originals</button>
        <input
          type="text"
          placeholder="S"
          className="bg-slate-700 w-12 px-4 rounded-full"
        />
      </div>
      <div className="flex items-center gap-2 pr-2 sm:m-3">
        <span className="flex bg-gray-500 rounded-full p-3">
          <VscBellDot size={20} />{" "}
        </span>
        <img src="/profile2.jpg" alt="lol" className="w-10 h-10 rounded-full" />
        <span>
          Sarah J <span className="flex text-xs">Premium</span>
        </span>
        <span>
          <RiArrowDropDownLine size={30} />
        </span>
      </div>
    </div>
  );
}
