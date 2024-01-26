const param = new URLSearchParams(window.location.search);

fetch(`https://www.omdbapi.com/?apikey=b7685432&i=${param.get("id")}&plot=full`)
.then((response) => response.json())
.then((data) => {

    let title = document.createElement("h2");
    title.innerHTML = data.Title;

    let poster = document.createElement("img");
    poster.src = data.Poster;

    let plot = document.createElement("p");
    plot.innerHTML = data.Plot;

    let genre = document.createElement("p");
    genre.innerHTML = data.Genre;

    let actors = document.createElement("p");
    actors.innerHTML = data.Actors;

    let rating = document.createElement("p");
    rating.innerHTML = data.imdbRating;

    let date = document.createElement("p");
    let rawDate = new Date(data.Released);
    let day = String(rawDate.getDate()).padStart(2, '0')
    let month = String((rawDate.getMonth() + 1)).padStart(2, '0')
    let year = rawDate.getFullYear();
    let formatedDate=  `${day}/${month}/${year}`;
    date.innerHTML = formatedDate;

    document.body.appendChild(title);
    document.body.appendChild(poster);
    document.body.appendChild(plot);
    document.body.appendChild(genre);
    document.body.appendChild(actors);
    document.body.appendChild(rating);
    document.body.appendChild(date);

});
