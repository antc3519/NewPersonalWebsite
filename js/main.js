// JavaScript source code

var isNavigating;

function delay(URL) {
    if (URL != "#") {
        var transition = document.getElementById("transition");
        setTimeout(function () { window.location = URL }, 2000);
        transition.style.clipPath = "circle(150% at 0% 0%)";
        localStorage.setItem('isNavigating', true);
    }
    

}

window.onbeforeunload = function unloadCheck() {
    if (localStorage.getItem('isNavigating') == "false") {
        localStorage.removeItem('isNavigating');
    }

}


function loaded() {

    console.log(localStorage.getItem('isNavigating'));
    var transition = document.getElementById("transition2");
    transition.style = "clip-path:circle(0% at 100% 100%);";
    if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "") {
        if (localStorage.getItem('isNavigating') != "true") {
            transition.style = "clip-path:circle(0% at 100% 100%); opacity:0;";
            console.log("works");
        }
    }
    localStorage.setItem('isNavigating', false);
}

function aboutMenu(thisMenu, newMenu) {
    
    var sound = document.getElementById('sound1');
    sound.play();
    document.getElementById(thisMenu).style.display = "none";
    document.getElementById(newMenu).style.display = "initial";
}