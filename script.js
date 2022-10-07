// theme changer handler

var btn = document.getElementById("button");
var btnContainer = document.getElementById("btn-container");
var nav = document.querySelector("nav");
var article = document.querySelector("article");
var rightFixed = document.getElementById("right-fixed");
var profileCard = document.getElementById("profile-card");
let allNavs = document.querySelectorAll("a"); // navlinks
let allSkeletons = document.querySelectorAll(".skeleton");
var isLight = true;
btnContainer.addEventListener("click", (e) => {
  if (isLight) {
    btn.classList.remove("light");
    btn.classList.add("dark");
    btnContainer.classList.remove("btnlight");
    btnContainer.classList.add("btndark");
    nav.classList.remove("light-theme");
    nav.classList.add("dark-theme");
    article.classList.remove("article-light-theme");
    article.classList.add("article-dark-theme");
    rightFixed.classList.remove("light-theme");
    rightFixed.classList.add("dark-theme");
    profileCard.classList.remove("light-font");
    profileCard.classList.add("dark-font");
    // navlinks color change on theme change

    allNavs.forEach((el) => {
      if (el.classList.contains("navlink-active-on-light")) {
        el.classList.remove("navlink-active-on-light");
        el.classList.add("navlink-active-on-dark");
      }
    });
    // skeletons color on theme change
    allSkeletons.forEach((el) => {
      el.classList.remove("skeleton-light");
      el.classList.add("skeleton-dark");
    });
    isLight = false;
  } else {
    btn.classList.remove("dark");
    btn.classList.add("light");
    btnContainer.classList.remove("btndark");
    btnContainer.classList.add("btnlight");
    nav.classList.remove("dark-theme");
    nav.classList.add("light-theme");
    article.classList.remove("article-dark-theme");
    article.classList.add("article-light-theme");
    rightFixed.classList.remove("dark-theme");
    rightFixed.classList.add("light-theme");
    profileCard.classList.remove("dark-font");
    profileCard.classList.add("light-font");

    // navlinks color change on theme change
    allNavs.forEach((el) => {
      if (el.classList.contains("navlink-active-on-dark")) {
        el.classList.remove("navlink-active-on-dark");
        el.classList.add("navlink-active-on-light");
      }
    });
    // skeletons color on theme change
    allSkeletons.forEach((el) => {
      el.classList.remove("skeleton-dark");
      el.classList.add("skeleton-light");
    });
    isLight = true;
  }
});

// navigation links active handler

//navlinks states

let navs = {
  about: 0,
  portfolio: 0,
  contact: 0,
};
let prevClicked = "";
allNavs.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(prevClicked);
    e.preventDefault();
    navs[prevClicked] = 0;
    console.log(navs[prevClicked]);
    prevClicked = el.id;
    navs[el.id] = 1;

    ["about", "portfolio", "contact"].forEach((id) => {
      let element = document.getElementById(id);
      if (navs[id] === 1) {
        isLight
          ? element.classList.add("navlink-active-on-light")
          : element.classList.add("navlink-active-on-dark");
      } else {
        element.classList.contains("navlink-active-on-light")
          ? element.classList.remove("navlink-active-on-light")
          : null;
        element.classList.contains("navlink-active-on-dark")
          ? element.classList.remove("navlink-active-on-dark")
          : null;
      }
    });
  });
});

// page changer handler

/*

Uses jQuery in here,,,

*/
