const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navMenu.setAttribute("aria-hidden", !navMenu.classList.contains("active") ? "true" : "false");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.getElementById(modalId).setAttribute("aria-hidden", "false");
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById(modalId).setAttribute("aria-hidden", "true");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navMenu.setAttribute("aria-hidden", "true");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Save user preference on load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Ensure hero section spacing is sufficient
const heroSection = document.getElementById("hero");
heroSection.style.marginTop = "100px";

// Adding date
document.addEventListener("DOMContentLoaded", () => {
  const myDate = document.querySelector("#datee");
  const year = new Date().getFullYear();
  if (myDate) {
    myDate.innerHTML = year;
  }
});
