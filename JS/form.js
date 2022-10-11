// --------------------------------

//create new Card

//create elements

const form = document.querySelector('[data-js="form"]');
const formButton = document.querySelector('[data-js="form__button"]');

const cardList = document.createElement("li");
const article = document.createElement("article");
const headline = document.createElement("h2");
const cardButton = document.createElement("button");
const paragraph = document.createElement("p");
const uList = document.createElement("ul");
const listItem = document.createElement("li");
const bookmarkDiv = document.createElement("div");
const createBookmarkButton = document.createElement("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);

  //generate DOM
  //li
  form.append(cardList);
  cardList.classList.add("card-list__item");

  //article
  cardList.append(article);
  article.classList.add("card");

  // h2, button, p, ul, div
  article.append(headline, cardButton, paragraph, uList, bookmarkDiv);
  headline.classList.add("card__question");
  cardButton.classList.add("card__button-answer");
  cardButton.setAttribute("type", "button");
  cardButton.setAttribute("js-data", "card__button-answer");
  cardButton.textContent = "Show answer";
  //create card with display answer ( class: "card__answer--active" )
  paragraph.classList.add("card__answer--active", "card__answer");
  paragraph.setAttribute("data-js", "card__answer--active");
  uList.classList.add("card__tag-list");
  bookmarkDiv.classList.add("card__button-bookmark");

  //li
  uList.append(listItem);
  listItem.classList.add("card__tag-list-item");

  //button
  bookmarkDiv.append(createBookmarkButton);
  createBookmarkButton.classList.add("bookmark");
  createBookmarkButton.setAttribute("js-data", "bookmark-button");
  createBookmarkButton.setAttribute("aria-label", "bookmark");
  createBookmarkButton.setAttribute("type", "button");
  createBookmarkButton.innerHTML = `<svg
  class="bookmark__icon"
  js-data="bookmark__icon"
  xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 24 24"
>
  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
</svg>`;

  // add text content
  const formQuestion = document.querySelector('[data-js="form__question"]');
  headline.textContent = `${formQuestion.value}`;

  const formAnswer = document.querySelector('[data-js="form__answer"]');
  paragraph.textContent = formAnswer.value;

  const formTag = document.querySelector('[data-js="form__tag"]');
  listItem.textContent = `#${formTag.value}`;

  //delete textarea content/value
  formQuestion.value = "";
  formAnswer.value = "";
  formTag.value = "";
});

//text counter

//add display max length question
const questionElement = document.querySelector('[data-js="form__question"]');
const amountLeftQuestion = document.querySelector('[data-js="amountLeftQuestion"]');
const maxLengthQuestion = questionElement.getAttribute("maxlength");

const updateAmountLeftQuestion = (value1) => {
  amountLeftQuestion.innerText = value1;
};
updateAmountLeftQuestion(maxLengthQuestion);

questionElement.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - questionElement.value.length);
});

//add display max length answer

const answerElement = document.querySelector('[data-js="form__answer"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLengthAnswer = answerElement.getAttribute("maxlength");

const updateAmountLeftAnswer = (value2) => {
  amountLeftAnswer.innerText = value2;
};

updateAmountLeftAnswer(maxLengthAnswer);

answerElement.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answerElement.value.length);
});
console.log(amountLeftAnswer.value);
