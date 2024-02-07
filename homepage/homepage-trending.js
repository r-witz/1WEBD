let pageNb = 0;
var movieList = document.getElementById("movie-list");
let arr = [
  "tt0892769",
  "tt1646971",
  "tt2386490",
  "tt0092099",
  "tt1745960",
  "tt2015381",
  "tt3896198",
  "tt6791350",
  "tt0119217",
  "tt15398776",
  "tt2084970",
  "tt3907584",
];

function loadTrendingFilms() {
  for (let i = pageNb * 6; i < (pageNb + 1) * 6; i++) {
    if (i >= arr.length) {
      return;
    }
    let url = `https://www.omdbapi.com/?apikey=b7685432&plot=short&i=${arr[i]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        let movieCard = document.createElement("a");
        movieCard.classList.add("movieCard");
        movieCard.href = `./movie.html?id=${data.imdbID}`;
        let moviePoster = document.createElement("img");
        moviePoster.src = data.Poster;
        let movieTitle = document.createElement("h3");
        movieTitle.innerHTML = data.Title;
        let moviePlot = document.createElement("p");
        moviePlot.innerHTML = data.Plot;

        document.getElementById("movie-list").appendChild(movieCard);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(moviePoster);
      });
  }
}

loadTrendingFilms();

movieList.addEventListener("scroll", function () {
  if (movieList.scrollLeft >= movieList.scrollWidth - movieList.clientWidth - 60) {
    pageNb++;
    loadTrendingFilms();
  }
});
