let btn = document.querySelector(".scroll");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// the hamburgar menu
let menu = document.querySelector(".list");
let bttn = document.querySelector("#hambargur");
bttn.addEventListener("click", () => {
  menu.classList.toggle("open");
  console.log("click");
});
