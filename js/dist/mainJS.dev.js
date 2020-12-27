"use strict";

// if the user at the top of the page, hide the topnav bar (unless it is a mobile device)
window.onscroll = function (ev) {
  if (window.innerWidth > 767) {
    if (window.scrollY == 0) {
      document.getElementById("topnav").style.backgroundColor = "transparent";
      document.getElementById("topnav").style.borderBottom = "transparent";
    } else {
      document.getElementById("topnav").style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--color2");
      document.getElementById("topnav").style.borderBottom = "2px" + getComputedStyle(document.body).getPropertyValue("--color1") + " solid";
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


function showHiddenProject() {
  document.getElementById("show_more_project_button").style.visibility = "hidden";
  document.getElementById("show_more_project_button").style.marginTop = "0px";
  document.getElementById("hide_project_button").style.visibility = "visible";
  document.getElementById("hide_project_button").style.display = "block";
  document.getElementById("hide_project_button").style.marginTop = "50px";
  document.querySelector(".hidden_divider").style.margin = "15vh 0px 20vh 0px";
  document.querySelector(".hidden_divider").style.opacity = "0.3"; // add extra max height in case the div gets cut

  document.querySelector(".hidden_project").style.maxHeight = document.querySelector(".hidden_project").scrollHeight + 500 + "px";
  document.querySelector(".hidden_project").style.padding = window.getComputedStyle(document.querySelector(".project")).padding;
}

function hideHiddenProject() {
  document.getElementById("show_more_project_button").style.visibility = "visible";
  document.getElementById("show_more_project_button").style.marginTop = "50px";
  document.getElementById("hide_project_button").style.visibility = "hidden";
  document.getElementById("hide_project_button").style.display = "none";
  document.getElementById("hide_project_button").style.marginTop = "0px";
  document.querySelector(".hidden_divider").style.margin = "0vh 0px 0vh 0px";
  document.querySelector(".hidden_divider").style.opacity = "0";
  document.querySelector(".hidden_project").style.maxHeight = "0px";
  document.querySelector(".hidden_project").style.padding = "0px 0px";
}