"use strict";

// if the user at the top of the page, hide the topnav bar (unless it is a mobile device)
window.onscroll = function (ev) {
  if (window.innerWidth > 767) {
    if (window.scrollY == 0) {
      document.getElementById("topnav").style.backgroundColor = "transparent";
      document.getElementById("opennavbtn").style.backgroundColor = "transparent";
    } else {
      document.getElementById("topnav").style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--primary-color");
      document.getElementById("opennavbtn").style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--primary-color");
    }
  }
}; // if the open nav button (available only to mobile users) has been clicked, expand or retract the sub nav


var openedNav = false;

function buttonNavClick() {
  if (openedNav) {
    closeNav();
    openedNav = false;
  } else {
    openNav();
    openedNav = true;
  }
}

function openNav() {
  document.getElementById("subNavBar").style.visibility = "visible";
  document.getElementById("subNavBar").style.opacity = "1";
  document.getElementById("subNavBar").classList.add("addSubNavBarHeight");
}

function closeNav() {
  document.getElementById("subNavBar").style.visibility = "hidden";
  document.getElementById("subNavBar").style.opacity = "0";
  document.getElementById("subNavBar").classList.remove("addSubNavBarHeight");
} // if the show more button has been clicked, show or hide more projects (all those with hidden project class)


var showMoreProject = false;

function buttonShowMoreProjectClick() {
  if (showMoreProject) {
    hideHiddenProject();
    showMoreProject = false;
  } else {
    showHiddenProject();
    showMoreProject = true;
  }
}

function showHiddenProject() {
  var maxHeightHiddenProject = document.querySelector(".hidden_project").style.height;
  console.log(maxHeightHiddenProject);
  document.querySelector(".hidden_project").style.maxHeight = "100px";
}

function hideHiddenProject() {
  document.querySelector(".hidden_project").style.maxHeight = "0px";
}