let pageNb = 1;
const param = new URLSearchParams(window.location.search);

if (param.has("s")) {
    let searchInput = param.get("s").replace(/\+/g, " ");
    document.getElementById("search-input").value = searchInput;
    searchApi(false);
}

function searchApi(fromScroll) {
  let input = document.getElementById("search-input").value;
  input = input.replace(/\s/g, "+");

  const url = `https://www.omdbapi.com/?apikey=b7685432&page=${pageNb}&s=${input}`;

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.Response == "False" && !fromScroll) {
        document.getElementById("error").innerHTML = data.Error;
      } else if (data.Response == "True") {
        document.getElementById("error").innerHTML = "";
        data.Search.forEach((element) => {
          if (element.Type == "movie" && element.Poster != "N/A") {
            let movieCard = document.createElement("a");
            movieCard.classList.add('movieCard');
            movieCard.href = `./movie.html?id=${element.imdbID}`;
            let movieTitle = document.createElement("h3");
            movieTitle.innerHTML = element.Title;
            let moviePoster = document.createElement("img");
            moviePoster.src = element.Poster;
            
            document.getElementById("movieList").appendChild(movieCard)
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(moviePoster);
          }
        });
      }
    });
}

document.getElementById("search-bar").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("movieList").innerHTML = "";
  pageNb = 1;
  searchApi(false);
});

window.onscroll = infiniteScroll;

    let isExecuted = false;

    function infiniteScroll() {
        if (window.scrollY >= (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
            isExecuted = true;
            pageNb++;

            searchApi(true);
            isExecuted = false
        }
    }