// creat bookmark button function ->change bookmark item color
const bookmarkButton = document.querySelector('[js-data="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// creat answer button function --> show / hide anwer
const answerButton = document.querySelector('[js-data="card__button-answer"]');
const pAnswer = document.querySelector('[js-data="card__answer"]');

answerButton.addEventListener("click", () => {
  pAnswer.classList.toggle("card__answer--active");

  // add / remove text
  // ???? why it works???
  if (pAnswer.className === "card__answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});
// ????? The toggle functionality should be applied by using a class which is named "hidden"
