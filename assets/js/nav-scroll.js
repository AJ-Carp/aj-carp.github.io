function scroller () {
  const nav = document.getElementById("nav");
  if (window.scrollY > 0) {   // adjust the 100px threshold
    nav.classList.remove("nav-be-gone");
  } else {
    nav.classList.add("nav-be-gone");
  }
}

// Disable browser scroll restoration on reload/navigation.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Ensure we’re at the very top after everything is ready.
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", scroller, false);