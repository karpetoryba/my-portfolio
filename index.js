document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const currentActive = document.querySelector(".navbar a.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }

    this.classList.add("active");
  });
});
//
function openPage(pageName, elmnt) {
  Array.from(document.getElementsByClassName("tabcontent")).forEach(function (
    tab
  ) {
    tab.style.display = "none";
  });

  Array.from(document.getElementsByClassName("tablink")).forEach(function (
    tabLink
  ) {
    tabLink.classList.remove("active");
  });

  document.getElementById(pageName).style.display = "block";
  elmnt.classList.add("active");
}

window.onload = function () {
  document.getElementsByClassName("tablink")[0].click();
};

ScrollReveal().reveal(".portfolio", {
  delay: 300,
  duration: 800,
  distance: "50px",
  origin: "bottom",
  interval: 200,
});
//pour burger menu
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}
//pour navbar
document.addEventListener("DOMContentLoaded", function () {
  var navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      var targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
