function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}
