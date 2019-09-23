"use strict";

function get() {
  fetch("https://movies-d95a.restdb.io/rest/movies", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "5d887e76fd86cb75861e2628",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(movies => {
      movies.forEach(movie => {
        const template = document.querySelector("template").content;
        const clone = template.cloneNode(true);
        clone.querySelector("h1").textContent = movie.title;
        clone.querySelector("h2").textContent = movie.director;
        clone.querySelector("p").textContent = movie.actors;
        clone.querySelector("aside").textContent = movie.releaseyear;
        document.querySelector("#app").appendChild(clone);
      });
    });
}

get();
