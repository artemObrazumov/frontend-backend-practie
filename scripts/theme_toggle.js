document.getElementById("theme-toggle").onclick = function () {
  if (document.body.classList.contains("theme--dark")) {
    document.getElementById("theme-toggle").textContent = "Светлая";
  } else {
    document.getElementById("theme-toggle").textContent = "Темная";
  }
  document.body.classList.toggle("theme--dark");
};
