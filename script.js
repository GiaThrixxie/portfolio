console.log("Child Theme JS is running!");
console.log("Are they workin'?");

document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initTypedJs();
});

// ---------- smooth scroll ---------- //

function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/`
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ---------- typed.js ---------- //

function initTypedJs() {
    new Typed(".typed", {
        strings: ["Line Merrild Nielsen.", "en Nørd.", "en Student.", "jeres fremtidige praktikant."],
        typeSpeed: 75,
        backSpeed: 25,
        loop: true,
    });
};

// ---------- fetch wp posts ---------- //
"use strict";

const category8_url = "http://portfolio.linemerrildnielsen.dk/wp-json/wp/v2/posts?_embed&categories=8";

fetch(category8_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
    appendPosts(posts);
  });

// append wp posts to the DOM
function appendPosts(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += /*html*/`
      <article data-augmented-ui="
      tl-2-clip-x tr-2-clip-y br-scoop bl-clip-inset both
    ">
        <div class="img-container">
            <img src="${getFeaturedImageUrl(post)}">
        </div>
        <div class="content-container">
            <div class="content">
            <h3>${post.title.rendered}</h3>
            <p>${post.content.rendered}</p>
            </div>
        </div>
      </article>
    `;
  }
  document.querySelector('#posts').innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}

// ---------- fetch wp posts - about me ---------- //
"use strict";

const category9_url = "http://portfolio.linemerrildnielsen.dk/wp-json/wp/v2/posts?_embed&categories=9";

fetch(category9_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
    appendAboutMePosts(posts);
    appendAboutMePostsImage(posts);
  });

// append wp posts to the DOM
function appendAboutMePosts(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += /*html*/`
      <div class="about-me-content">
      <p>${post.content.rendered}</p>
      </div>
    `;
  }
  document.querySelector('#aboutMePost').innerHTML = htmlTemplate;
}

// append wp posts to the DOM
function appendAboutMePostsImage(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += /*html*/`
    <div class="img-container">
    <img src="${getFeaturedImageUrl(post)}">
    </div>
    `;
  }
  document.querySelector('#aboutMeImg').innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}

// ---------- loader js ---------- //
window.onload = function(){
  setTimeout(function(){
    document.getElementsByClassName('body-custom-class')[0].className = "loaded";
  }, 1000);
 };
 