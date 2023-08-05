$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 300) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // Slide Script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// typing animation
var typed = new Typed(".typing", {
  strings: ["Developer", "Student", "UI Figma", "Copywriter","Social Media Specialist"],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});

// Button Contac Js
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
