
const navbar = document.getElementById("navbar")

const sticky = navbar.offsetTop;

console.log(sticky)

function scrollNav() {
    if (window.scrollY >= sticky + 100) {
      navbar.classList.add("sticky");
    } else{
      navbar.classList.remove("sticky");
    }
}
console.log(window.scrollY);
window.onscroll = function () {
  scrollNav();
};