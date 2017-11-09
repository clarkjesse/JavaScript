// JavaScript source code
console.log("Connected");

//selector
var button = document.querySelector("button");
var isPurple = false;

//manipulator
button.addEventListener("click", function () {
    //if white - make it purple
    if (isPurple) {
        document.body.style.background = "white";
        isPurple = false;
        console.log("Page is now white");
    }
    //else - make it white
    else {
        document.body.style.background = "purple";
        isPurple = true;
        console.log("Page is now purple");
    }
});