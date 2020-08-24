window.onscroll = function() {scrollFunc()};

function scrollFunc() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector("header").style.padding = "2px";
        document.querySelector("header").style.maxHeight = "60px";
        document.querySelector(".jumbotron").style.fontSize = "16px";
        document.querySelector(".jumbotron").style.maxHeight = "50px";
        document.querySelector("nav").style.maxHeight = "50px";
    } else {
        document.querySelector("header").style.padding = "5px";
        document.querySelector("header").style.maxHeight = "80px";
        document.querySelector(".jumbotron").style.fontSize = "18px";
        document.querySelector(".jumbotron").style.maxHeight = "70px";
        document.querySelector("nav").style.maxHeight = "70px";
    }
}