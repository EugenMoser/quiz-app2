// creat bookmark button function ->change bookmark item color
const bookmarkButton = document.querySelector('[js-data="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// creat answer button function --> show / hide anwer
const answerButton = document.querySelector('[js-data="card__button-answer"]');
const pAnswer = document.querySelector('[js-data="card__answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    //pAnswer.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  } else {
    //pAnswer.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  }
  pAnswer.classList.toggle("card__answer--active");
});

//create new Card

const cardList = document.createElement("li");
const article = document.createElement("article");
const headline = document.createElement("2");
const cardButton = document.createElement("button");
const paragraph = document.createElement("p");
const uList = document.createElement("ul");
const listItem = document.createElement("li");
const bookmark = document.createElement("div");
const createBookmarkButton = document.createElement("button");
const svg = document.createElement("svg");
const svgPath = document.createElement("path");

const form = document.querySelector('[js-data="form"]');
const formButton = document.querySelector('[js-data="form__button"]');

form.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("hey");
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  console.log("hey" + data);
});
