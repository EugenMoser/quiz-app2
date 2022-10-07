const bookmarkButton = document.querySelector('[js-data="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  bookmarkButton.classList.toggle("bookmark--active");
});
