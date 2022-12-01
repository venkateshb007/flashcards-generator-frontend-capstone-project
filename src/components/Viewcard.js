import React, { useState } from "react";
import {
  MdOutlinePrint,
  MdWest,
  MdDownload,
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";
import { GrRedo } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import Popup from "../components/modals/Popup";

const Viewcard = ({ data }) => {
  const { id } = useParams();

  //state for handling flashterms card definition for slider
  const [slideIndex, setSlideIndex] = useState(1);

  //state for Modal open and close
  const [openModal, setOpenModal] = useState(false);

  // nextSlide and prevSlide function to view particular flashterms defination with index number.
  const nextSlide = (card) => {
    if (slideIndex !== card.flashterms.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === card.flashterms.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = (card) => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(card.flashterms.length);
    }
  };

  return (
    <div>
      <div className="card-detail capitalize">
        {/* using filter method to match url id with oncliked card id.
        apply map method to view card details only if card id is matched with useparams id  */}
        {data
          .filter((card) => card.id === id)
          .map((card, index) => (
            <div
              key={index}
              className="mx-7 sm:mx-12 md:mx-20 lg:mx-24"
            >
              <div className="flex pt-4 break-all">
                <Link to="/Mycards">
                  <MdWest className="mr-4 mt-1.5 text-lg" />
                </Link>

                <div className="pr-6">
                  <h1 className=" font-bold">{card.groupname}</h1>
                  <p className="text-gray-500 mb-6">{card.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6  gap-6 ">
                <div className="term-list">
                  <div className="bg-slate-50 p-5 rounded-md border border-gray-200 shadow-md overflow-hidden ">
                    <h2 className="mb-3 font-semibold text-gray-400">
                      Flashcards
                    </h2>
                    <hr className="text-lg" />

                    <ul className="text-gray-500  font-semibold overflow-hidden text-ellipsis whitespace-pre">
                      {card.flashterms.map((term, index) => (
                        <li
                          key={index}
                          className={
                            slideIndex - 1 === index
                              ? "my-3 px-1 flex justify-center rounded-md bg-red-100 text-red-500"
                              : "my-3 text-gray-500"
                          }
                          onClick={() => nextSlide(index + 1)}
                        >
                          {card.flashterms[index].term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative md:grid md:grid-flow-col md:gap-6 md:col-span-4">
                  <div className=" bg-slate-50 flex px-10 py-8 mb-10 rounded-md border border-gray-200 shadow-md">
                    <div className="flex items-center p-4 justify-center sm:h-auto sm:w-40 lg:w-60 lg:h-40 border-2 rounded-md">
                      <span className="text-center text-slate-300">
                        No Image <br /> Available
                      </span>
                    </div>

                    <div className="w-auto">
                      <p className=" text-gray-500 pl-5 break-all">
                        {card.flashterms[slideIndex - 1].defination}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full flex items-center justify-center mt-5 text-3xl text-gray-400">
                    <MdOutlineNavigateBefore
                      className="before"
                      onClick={() => prevSlide(card)}
                    />
                    <small className="text-base mx-6">
                      {slideIndex}/{card.flashterms.length}
                    </small>
                    <MdOutlineNavigateNext
                      className="after"
                      onClick={() => nextSlide(card)}
                    />
                  </div>
                </div>

                <div className="grid h-40 lg:grid-cols-1 md:grid-cols-1 text-gray-500 overflow-hidden ">
                  <button
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className="btn flex items-center justify-center"
                  >
                    <GrRedo className="my-3" />
                    <div className="ml-6 cursor-pointer "> Share </div>
                  </button>
                  <button className="btn flex items-center justify-center">
                    <MdDownload className="my-3" />
                    <div className="my-1.5 ml-6"> Download </div>
                  </button>
                  <button className="btn flex items-center justify-center">
                    <MdOutlinePrint className="my-3" />
                    <div className="my-1.5 ml-6"> Print </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      ){openModal && <Popup closeModal={setOpenModal} />}
    </div>
  );
};

export default Viewcard;
