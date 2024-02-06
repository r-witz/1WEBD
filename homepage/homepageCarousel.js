document.addEventListener('DOMContentLoaded', function () {
    var movieList = document.getElementById('movie-list');
    var leftButton = document.getElementById('left');
    var rightButton = document.getElementById('right');
    var scrollAmount = 1350;
  
    leftButton.addEventListener('click', function () {
      movieList.scrollTo({
        left: movieList.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    });
  
    rightButton.addEventListener('click', function () {
      movieList.scrollTo({
        left: movieList.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    });
});
