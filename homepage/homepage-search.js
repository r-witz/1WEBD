document.getElementById("search-bar").addEventListener("submit", function (event) {
    event.preventDefault();
    let input = document.getElementById("search-input").value;
    input = input.replace(/\s/g, "+");
    window.location.href = `./search.html?s=${input}`;
  });
  
  