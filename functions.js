let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop + 150;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else if (window.pageYOffset < (sticky - 150)) {
        navbar.classList.remove("sticky");
    }
}