function setActiveStyle(color) {
  document.documentElement.style.setProperty(
    "--primary-color",
    getComputedStyle(document.querySelector(`.${color}`)).backgroundColor
  );
}

document.querySelector(".style-switcher-toggler").onclick = () => {
  document.querySelector(".style-switcher").classList.toggle("active");
};

// Function to close the style switcher when scrolling
function closeStyleSwitcher() {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher.classList.contains("active")) {
    styleSwitcher.classList.remove("active");
  }
}

// Listen for scroll events on the window
window.addEventListener("scroll", closeStyleSwitcher);

const body = document.body;

var bgColor = body.style.backgroundColor;
// Function to toggle dark theme and change icon
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    body.style.backgroundColor = `${"#151515"}`;
  } else {
    body.style.backgroundColor = `${"#ffffff"}`;
  }

  // Toggle icon between sun and moon
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
};

/*===============typing animation============*/
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "SQA ",
    "Writer",
    "Laravel Developer",
    "YouTuber",
    "Traveller",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});
/*================Color Animation design==============*/
function setActiveStyle(color) {
  document.documentElement.style.setProperty(
    "--primary-color",
    getComputedStyle(document.querySelector(`.${color}`)).backgroundColor
  );
}

document.querySelector(".style-switcher-toggler").onclick = () => {
  document.querySelector(".style-switcher").classList.toggle("active");
};
/*================Download Cv ==============*/

// Function to close the style switcher when scrolling
function closeStyleSwitcher() {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher.classList.contains("active")) {
    styleSwitcher.classList.remove("active");
  }
}

// Listen for scroll events on the window
window.addEventListener("scroll", closeStyleSwitcher);

//For change the theme color

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/*===============Hire me ========*/
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
