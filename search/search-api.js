let pageNb = 1;
const apikey = "b7685432";
const searchInputField = document.getElementById("search-input");
const errorElement = document.getElementById("error");
const movieListElement = document.getElementById("movieList");
const searchBarForm = document.getElementById("search-bar");

const param = new URLSearchParams(window.location.search);
if (param.has("s")) {
    const searchInput = param.get("s").replace(/\+/g, " ");
    searchInputField.value = searchInput;
    searchApi(false);
}

function searchApi(fromScroll) {
    let input = searchInputField.value.replace(/\s/g, "+");
    const url = `https://www.omdbapi.com/?apikey=${apikey}&page=${pageNb}&s=${input}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False" && !fromScroll) {
                errorElement.innerHTML = data.Error;
            } else if (data.Response === "True") {
                errorElement.innerHTML = "";
                data.Search.forEach(element => {
                    if (element.Type === "movie" && element.Poster !== "N/A") {
                        const movieCard = document.createElement("a");
                        movieCard.classList.add('movieCard');
                        movieCard.href = `./movie.html?id=${element.imdbID}`;
                        
                        const movieTitle = document.createElement("h3");
                        movieTitle.innerHTML = element.Title;
                        
                        const moviePoster = document.createElement("img");
                        moviePoster.src = element.Poster;
                        
                        movieCard.appendChild(movieTitle);
                        movieCard.appendChild(moviePoster);
                        movieListElement.appendChild(movieCard);
                    }
                });
            }
        });
}

searchBarForm.addEventListener("submit", function(event) {
    event.preventDefault();
    movieListElement.innerHTML = "";
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
        isExecuted = false;
    }
}
