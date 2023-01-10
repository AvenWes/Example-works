var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "/Art/purepng.com-skyline-wide-nightskylinecityenglandwidehugenightdarktallbig-481522277039rhlxy.png"
  ) {
    myImage.setAttribute("src", "/art/Tiero fotor.png");
  } else {
    myImage.setAttribute(
      "src",
      "/Art/purepng.com-skyline-wide-nightskylinecityenglandwidehugenightdarktallbig-481522277039rhlxy.png"
    );
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
