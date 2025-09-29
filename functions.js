//display the data of bearer
// Function to load and display bearers
async function loadBearers() {
  try {
    // Fetch the JSON file
    const response = await fetch("about.json");
    const data = await response.json();

    // Get the container
    const container = document.getElementById("bearers-container");
    container.innerHTML = ""; // Clear previous content

    // Loop through each bearer
    data.bearers.forEach((bearer) => {
      // Create a card div
      const card = document.createElement("div");
      card.classList.add("member-info");
      card.classList.add("fade-in");

      // Add content
      card.innerHTML = `
        <div class="name-post">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill"
                            viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <h3>${bearer.name}</h3>
                        <p>(${bearer.position})</p>
                    </div>
                    <div class="member-expertise">
                        <p class="text">
                            ${bearer.bio}</span>
                            <button class="read-more" onclick="toggleReadMore(this)">Read more</button>
                        </p>

                    </div>`;

      // Append card to container
      container.appendChild(card);
      fadeIn();
    });
  } catch (error) {
    console.error("Error loading bearers:", error);
  }
}

// End of recent edits

async function mission() {
  try {
    // Fetch the JSON file
    const response = await fetch("about.json");
    const data = await response.json();

    // Get the container
    const container = document.getElementById("mission-container");
    // container.innerHTML = ""; // Clear previous content

    // Loop through each bearer
    data.focus_on.forEach((focus) => {
      // Create a card div
      const card = document.createElement("div");
      card.classList.add("mission-content");
      card.classList.add("fade-in");
      const line = document.createElement("div");
      line.classList.add("hr");
      line.style = "width:80vw;";
      line.innerHTML = `<hr/ style="background-color:var(--head)">`;
      // Add content
      card.innerHTML = `
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path
                                        d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>${focus.title}</h3>
                            <p>${focus.description}.
                            </p> `;

      // Append card to container
      // card.appendChild(line);
      container.append(line);
      container.appendChild(card);
      fadeIn();
    });
  } catch (error) {
    console.error("Error loading bearers:", error);
  }
}

//End of recent edits

// !Load works from JSON
async function works() {
  try {
    // Fetch the JSON file
    const response = await fetch("content.json");
    const data = await response.json();

    // Get the container
    const container = document.getElementById("focus-areas");
    container.innerHTML = ""; // Clear previous content

    // Loop through each bearer
    let temp = 1;
    data.works.forEach((work) => {
      // Create a card div
      const card = document.createElement("article");
      card.classList.add("focus-area");
      // card.classList.add("fade-in");

      // Add content
      card.innerHTML = `
            <h3>${temp}. ${work.title}</h3>
            <ul>
               ${work.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
`;
      temp++;

      // Append card to container
      container.appendChild(card);
      fadeIn();
    });
  } catch (error) {
    console.error("Error loading bearers:", error);
  }
}

//! Fade in when element enters viewport
function fadeIn() {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // fade in only once
      }
    });
  });

  faders.forEach((fader) => observer.observe(fader));
}
document.addEventListener("DOMContentLoaded", fadeIn);
// End of recent edits

//! remove underline from active navbar element
let navbarElements = document.querySelectorAll("#navbar-element li a");

navbarElements.forEach((element) => {
  if (element.getAttribute("id") === "active") {
    temp = element;
  }
  element.addEventListener("mouseenter", function () {
    navbarElements.forEach((el) => el.removeAttribute("id"));
    this.setAttribute("id", "active");
  });
  element.addEventListener("mouseleave", function () {
    this.removeAttribute("id");
    temp.setAttribute("id", "active"); // always keep 'home' active
  });
});

// End of recent edits

// read more functionality
function readMore() {
  // Smooth Read More Toggle
  const btn = document.getElementById("btn");
  const moreText = document.getElementById("more");
  const section = document.getElementById("text");

  btn.addEventListener("click", () => {
    moreText.style.display =
      moreText.style.display === "none" ? "inline" : "none";
    section.classList.toggle("expanded");
    btn.textContent =
      btn.textContent === "Read more" ? "Read less" : "Read more";
  });
}
//end of recent edits

//read more for all the same class items
function toggleReadMore(button) {
  const siblingDiv = button.previousElementSibling;
  const moreContext = document.querySelectorAll(".more");
  const btns = document.querySelectorAll(".read-more");

  btns.forEach((el) => {
    el.textContent = "Read more";
  });

  if (siblingDiv.style.display === "none") {
    moreContext.forEach((el) => {
      el.style.display = "none";
    });
    siblingDiv.style.display = "inline";
    button.textContent = "Read less";
  } else {
    siblingDiv.style.display = "none";
    button.textContent = "Read more";
  }
}
//end of recent edits

// !auto scroll divs content

const container = document.querySelector(".focus-context-st");
const items = document.querySelectorAll(".focus-area");

// scale items depending on distance from center
function updateScale() {
  const containerCenter = container.scrollLeft + container.offsetWidth / 2;

  items.forEach((item) => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(containerCenter - itemCenter);

    if (distance < 200) {
      // in focus
      item.style.transform = "scale(1)";
      item.style.opacity = "1";
    } else {
      // smaller & faded
      item.style.transform = "scale(0.7)";
      item.style.opacity = "0.5";
    }
  });
}
function scrollAuto() {
  // run on scroll + start
  container.addEventListener("scroll", updateScale);
  window.addEventListener("load", updateScale);
  // optional: auto scroll
  setInterval(() => {
    container.scrollBy({ left: 820, behavior: "smooth" }); // jump one item
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 4000); // every 4s
}

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});
