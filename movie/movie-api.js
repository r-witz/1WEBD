const param = new URLSearchParams(window.location.search);

fetch(`https://www.omdbapi.com/?apikey=b7685432&i=${param.get("id")}&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    let top_left = document.getElementById("top-left");
    let top_right = document.getElementById("top-right");
    let rating_container = document.createElement("div");
    let poster_container = document.getElementById("poster-container");
    let plot_container = document.getElementById("plot");
    let actors_list = document.getElementById("actors-list");
    let directors_list = document.getElementById("directors-list");
    let writers_list = document.getElementById("writers-list");

    if (data.title !== "N/A") {
      let title = document.createElement("h1");
      title.innerHTML = data.Title;
      top_left.appendChild(title);
    }

    if (data.Genre !== "N/A") {
      let genre = document.createElement("p");
      genre.innerHTML = data.Genre;
      top_left.appendChild(genre);
    }

    if (data.Released !== "N/A") {
      let date = document.createElement("p");
      let rawDate = new Date(data.Released);
      let day = String(rawDate.getDate()).padStart(2, "0");
      let month = String(rawDate.getMonth() + 1).padStart(2, "0");
      let year = rawDate.getFullYear();
      let formatedDate = `${day}/${month}/${year}`;
      date.innerHTML = formatedDate;
      top_right.appendChild(date);
    }

    if (data.imdbRating !== "N/A") {
      let rating = document.createElement("p");
      rating.innerHTML = data.imdbRating;
      rating_container.appendChild(rating);
      top_right.appendChild(rating_container);
    }

    if (data.Poster !== "N/A") {
      let poster = document.createElement("img");
      poster.src = data.Poster;
      poster_container.appendChild(poster);
    }

    let plot = document.createElement("p");
    plot.innerHTML = data.Plot !== "N/A" ? data.Plot : "No plot available";
    plot_container.appendChild(plot);

    if (data.Actors !== "N/A") {
      let actorsArray = data.Actors.split(",");
      actorsArray.forEach((actor) => {
        let actors = document.createElement("li");
        actors.innerHTML = actor;
        actors_list.appendChild(actors);
      });
    }

    if (data.Director !== "N/A") {
      let directorsArray = data.Director.split(",");
      directorsArray.forEach((director) => {
        let directors = document.createElement("li");
        directors.innerHTML = director;
        directors_list.appendChild(directors);
      });
    }

    if (data.Writer !== "N/A") {
      let writersArray = data.Writer.split(",");
      writersArray.forEach((writer) => {
        let writers = document.createElement("li");
        writers.innerHTML = writer;
        writers_list.appendChild(writers);
      });
    }
  });
