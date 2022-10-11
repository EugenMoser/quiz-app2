// --------------------------------

//create new Card

//create elements
const cardList = document.createElement("li");
const article = document.createElement("article");
const headline = document.createElement("h2");
const cardButton = document.createElement("button");
const paragraph = document.createElement("p");
const uList = document.createElement("ul");
const listItem = document.createElement("li");
const bookmarkDiv = document.createElement("div");
const createBookmarkButton = document.createElement("button");

const form = document.querySelector('[data-js="form"]');
const formButton = document.querySelector('[data-js="form__button"]');

//eventListener submit button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);

  //generate DOM
  form.append(cardList);
  cardList.append(article);
  article.append(headline, cardButton, paragraph, uList, bookmarkDiv);
  uList.append(listItem);
  bookmarkDiv.append(createBookmarkButton);

  //add class list + add attribute
  cardList.classList.add("card-list__item");
  article.classList.add("card");
  headline.classList.add("card__question");
  cardButton.classList.add("card__button-answer");
  cardButton.setAttribute("type", "button");
  cardButton.setAttribute("data-js", "card__button-answer");
  paragraph.classList.add("card__answer--active");
  uList.classList.add("card__tag-list");
  listItem.classList.add("card__tag-list-item");
  bookmarkDiv.classList.add("card__button-bookmark");
  createBookmarkButton.classList.add("bookmark");
  createBookmarkButton.setAttribute("js-data", "bookmark-button");

  //add text content
  const formQuestion = document.querySelector('[data-js="form__question"]');
  headline.textContent = formQuestion.value;

  const formAnswer = document.querySelector('[data-js="form__answer"]');
  paragraph.textContent = `${formAnswer.value}`;

  const formTag = document.querySelector('[data-js="form__tag"]');
  listItem.textContent = `#${formTag.value}`;

  //text button
  cardButton.textContent = "Show answer";

  //create bookmark button
  createBookmarkButton.innerHTML = `<svg
  class="bookmark__icon"
  js-data="bookmark__icon"
  xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 24 24"
>
  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
</svg>`;

  //delete text content
  formQuestion.textContent = "";
  formAnswer.textContent = "";
  formTag.textContent = "";
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
