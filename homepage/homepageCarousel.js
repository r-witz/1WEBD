document.addEventListener("DOMContentLoaded", function () {
  var movieList = document.getElementById("movie-list");
  var leftButton = document.getElementById("left");
  var rightButton = document.getElementById("right");
  var scrollAmount = 500;
  leftButton.style.display = "none";

  movieList.addEventListener("scroll", function () {
    if (movieList.scrollLeft > 0) {
      leftButton.style.display = "block";
    } else {
      leftButton.style.display = "none";
    }

    if (
      movieList.scrollLeft <
      movieList.scrollWidth - movieList.clientWidth - 10
    ) {
      rightButton.style.display = "block";
    } else {
      rightButton.style.display = "none";
    }
  });

  leftButton.addEventListener("click", function () {
    movieList.scrollBy({top: 0, left: -scrollAmount, behavior: "smooth"});
  });

  rightButton.addEventListener("click", function () {
    movieList.scrollBy({top: 0, left: scrollAmount, behavior: "smooth"});
  });
});
