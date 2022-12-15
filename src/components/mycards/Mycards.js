import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { MdEast, MdDoubleArrow, MdDeleteOutline } from "react-icons/md";
import {
  getMyflashCards,
  deleteFlashCardById,
} from "../../service/Localstorage.js";

const Mycards = () => {
  const navigate = useNavigate();

  const [myFlashCards, setMyTasks] = useState([]);

  //state to handle for showing required number of cards
  const [noOfCards, setNoOfCards] = useState(6);

  // onClick function to see all hidden flashcards
  const Seeall = () => {
    setNoOfCards(noOfCards + myFlashCards.length);
  };

  //slice method used to select and view required number of cards
  const slicedCards = myFlashCards.slice(0, noOfCards);

  //it will render every time when the component changes
  useEffect(() => {
    setMyTasks(getMyflashCards());
  }, []);

  //deleting flash cards using unique id's.
  const deletecard = () => {
    deleteFlashCardById();
  };

  //using onClick function, Navigating to particular card details page.
  const cardView = (card) => {
    navigate(`/view-card/details/${card.id}`);
    window.location.reload();
  };

  return (
    <>
      {myFlashCards.length > 0 ? (
        <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mx-12 md:mx-20 lg:mx-24 mt-6 gap-4 ">
          {slicedCards.map((card, index) => {
            return (
              <div
                key={index}
                className="capitalize bg-slate-50 border border-gray-300 rounded-md h-52 "
              >
                <div className="flex items-center px-3 pt-3 overflow-hidden text-ellipsis">
                  <span className="flex items-center justify-center text-center leading-3 text-gray-400  bg-red-100 h-12 w-12 rounded-full text-xs">
                    No <br /> Image
                  </span>

                  <div className=" ml-3 truncate">
                    <h1 data-testid="cardname" className="w-14 lg:w-auto font-bold overflow-hidden text-ellipsis ">
                      {myFlashCards[index].groupname}
                    </h1>

                    <p className="text-xs">
                      {myFlashCards[index].flashterms.length} cards
                    </p>
                  </div>
                </div>

                <div className="px-4 my-1.5 h-24 text-sm overflow-hidden">
                  <p className=" break-all ">
                    {myFlashCards[index].description}
                  </p>
                </div>
                <div className="flex items-center justify-between overflow-hidden ">
                  <button className="flex ml-4  text-yellow-700 font-semibold text-xs">
                    
                    <span
                    id="view-card"
                    className="View Cards leading-none"
                    onClick={() => cardView(card)}
                    >
                      View Cards
                    </span>
                    <MdEast className="self-center ml-1" />
                  </button>
                  <div className="flex align-middle-center justify-center">
                    <button type="button" className="mr-4" onClick={deletecard}>
                      <MdDeleteOutline className="w-5 h-7 text-red-600 active:text-red-800 " />
                    </button>
                    <button type="button"></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-24 my-10 font-semibold text-xl">
          <h3 className="text-red-600 ">
            No Flash Cards to Show.
            <br />
          </h3>
          <h2 className="mt-8 "> Click Below to Create Your Flash Cards </h2>
          <Link to="/" className="flex text-blue-600">
            <MdDoubleArrow /> <MdDoubleArrow /> <MdDoubleArrow />
          </Link>
        </div>
      )}
      {myFlashCards.length > 6 && (
        <div className="flex flex-wrap justify-end mx-24 h-32 ">
          <button
            onClick={() => Seeall()}
            className="text-yellow-700 font-semibold text-md"
            href="/"
          >
            See all
          </button>
        </div>
      )}
    </>
  );
};

export default Mycards;
