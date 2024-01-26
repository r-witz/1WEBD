function searchApi() {
  let input = document.getElementById("inputField").value;
  input = input.replace(/\s/g, "+");

  const url = `https://www.omdbapi.com/?apikey=b7685432&s=${input}`;

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.Response == "False") {
        alert(data.Error);
      } else {
        data.Search.forEach((element) => {
          if (element.Type == "movie" && element.Poster != "N/A") {
            let movieTitle = document.createElement("h3");
            movieTitle.innerHTML = element.Title;
            let moviePoster = document.createElement("img");
            moviePoster.src = element.Poster;

            document.getElementById("movieList").appendChild(movieTitle);
            document.getElementById("movieList").appendChild(moviePoster);
          }
        });
      }
    });
}

document.getElementById("apiForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("movieList").innerHTML = "";
  searchApi();
});
