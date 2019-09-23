"use strict";

document.querySelector("button").addEventListener("click", e => {
  post();
});

get();

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
      movies.forEach(addMovieToDom);
    });
}

function post() {
  const newData = {
    title: "Pulp Fiction",
    director: "Tarantino",
    actors: "Uma Thurman, John Travolta",
    releaseyear: "1999"
  };
  const postData = JSON.stringify(newData);

  fetch(`https://movies-d95a.restdb.io/rest/movies`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "5d887e76fd86cb75861e2628",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      window.location = "";
      addMovieToDom(data);
    });
}

function addMovieToDom(movie) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = movie.title;
  clone.querySelector("h2").textContent = movie.director;
  clone.querySelector("p").textContent = movie.actors;
  clone.querySelector("aside").textContent = movie.releaseyear;
  document.querySelector("#app").appendChild(clone);
}
