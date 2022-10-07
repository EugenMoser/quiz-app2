// creat bookmark button function ->change bookmark item color
const bookmarkButton = document.querySelector('[js-data="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// creat answer button function --> show / hide anwer
const answerButton = document.querySelector('[js-data="card__button-answer"]');
const pAnswer = document.querySelector('[js-data="card__answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    pAnswer.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  } else {
    pAnswer.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});
