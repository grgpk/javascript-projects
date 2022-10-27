const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// dark or light images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Save Theme in localStorage
function saveTheme(mode) {
  localStorage.setItem("theme", mode);
}

function toggleDarkLightMode(theme) {
  nav.style.backgroundColor =
    theme === DARK_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    theme === DARK_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent =
    theme === DARK_THEME ? "Dark Mode" : "Light Mode";
  theme === DARK_THEME
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  theme === DARK_THEME ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleDarkLightMode(DARK_THEME);
    saveTheme(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleDarkLightMode(LIGHT_THEME);
    saveTheme(LIGHT_THEME);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
