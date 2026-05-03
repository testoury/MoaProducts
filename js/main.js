let navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((l) => l.classList.remove("active")); // remove all
    link.classList.add("active"); // add only to clicked
  });
});
