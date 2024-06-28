const navigasi = document.querySelector("#navigation");
const nav = document.querySelector(".nav");

navigasi.addEventListener("click", () => {
  nav.classList.toggle("openNav");
});