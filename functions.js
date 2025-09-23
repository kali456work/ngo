let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop + 150;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else if (window.pageYOffset < (sticky - 150)) {
        navbar.classList.remove("sticky");
    }
}

// Fade in when element enters viewport

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // entry.target.style.transitionDelay = `${300}ms`; // stagger
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
});

faders.forEach(fader => observer.observe(fader));

