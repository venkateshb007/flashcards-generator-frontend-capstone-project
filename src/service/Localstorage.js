//function for getting all data from the local storate (if exists)
export const getMyflashCards = () => {
  if (!localStorage["myFlashCards"]) {
    localStorage["myFlashCards"] = "[]";
  }

  let myFlashCards = localStorage["myFlashCards"];
  myFlashCards = JSON.parse(myFlashCards);
  return myFlashCards;
};

// function for selecting the card with particular card id
export const getMyflashCardById = (id) => {
  const myFlashCard = getMyflashCards();
  const myCard = myFlashCard.find((myCard) => myCard.id === id);
  return myCard;
};

//function for deleting card with unique card id
export const deleteFlashCardById = (index) => {
  let myFlashCard = getMyflashCards();
  myFlashCard.splice(index, 1);
  localStorage.setItem("myFlashCards", JSON.stringify(myFlashCard));
  //after deleting, page will refresh automatically
  window.location.reload();
};
