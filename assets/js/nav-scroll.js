function scroller() {
  const nav = document.getElementById("nav");
  if (window.scrollY > 0) {
    // adjust the 100px threshold
    nav.classList.remove("nav-be-gone");
  } else {
    nav.classList.add("nav-be-gone");
  }
}

window.addEventListener("scroll", scroller, false);
window.addEventListener("load", scroller);
