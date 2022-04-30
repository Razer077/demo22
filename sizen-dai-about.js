const body = document.querySelector("body");
const nav = document.querySelector(".m-nav");
const mobNav = document.querySelectorAll(".mob-nav-icon");
const home = mobNav[0];
const about = mobNav[1];
const skill = mobNav[2];
const work = mobNav[3];
const content = mobNav[4];

function toggleBar() {
    nav.classList.toggle("active");
}

home.addEventListener("click", () => {
    window.location.replace("http://127.0.0.1:5500/sizen-dai.htm");
})

content.addEventListener("click", () => {
    window.location.replace("http://127.0.0.1:5500/sizen-dai-contents.html");
})

about.addEventListener("click", () => {
    window.location.replace("http://127.0.0.1:5500/sizen-dai-about.html");
})