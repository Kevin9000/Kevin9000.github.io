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
    document.getElementById("subNavBar").classList.add("addClass");
}

function closeNav() {
    document.getElementById("subNavBar").style.visibility = "hidden";
    document.getElementById("subNavBar").style.opacity = "0";
    document.getElementById("subNavBar").classList.remove("addClass");
}

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
}