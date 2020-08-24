window.onscroll = function() {scrollFunc()};

function scrollFunc() {
    if(document.body.maxWidth >= 580) {
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
    } else {
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector("header").style.padding = "2px";
            document.querySelector("header").style.maxHeight = "150px";
            document.querySelector(".jumbotron").style.fontSize = "16px";
            document.querySelector(".jumbotron").style.maxHeight = "140px";
            document.querySelector("nav").style.maxHeight = "140px";
        } else {
            document.querySelector("header").style.padding = "5px";
            document.querySelector("header").style.maxHeight = "200px";
            document.querySelector(".jumbotron").style.fontSize = "18px";
            document.querySelector(".jumbotron").style.maxHeight = "190px";
            document.querySelector("nav").style.maxHeight = "190px";
        }
    }
}