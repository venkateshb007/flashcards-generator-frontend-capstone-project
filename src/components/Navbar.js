import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="mx-7 sm:mx-12 md:mx-20 lg:mx-24 mt-10">
        <h1 className="mb-3 text-lg font-bold"> Create Flashcard </h1>
        <ul className="flex border-b-gray-500 mx-1 text-sm text-gray-500">
          <li className="font-semibold  hover:text-red-600 border-red-500 cursor-pointer">
            <Link className="focus:text-red-600 py-2 focus:border-b-2 focus:border-red-600" to="/">
              Create New
            </Link>
          </li>
          <li className="font-semibold mx-8 hover:font-semibold hover:text-red-600 border-red-600 cursor-pointer">
             <Link className="focus:text-red-600 focus:border-b-2 py-2 focus:border-red-600" to="/mycards">
                My Flashcards
            </Link>
          </li>
        </ul>
        <hr className="border-gray-400 my-2 " />
      </nav>
    </>
  );
}
