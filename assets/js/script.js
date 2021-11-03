
const navbar = document.getElementById("navbar")

const sticky = navbar.offsetTop;

function scrollNav() {
    if (window.scrollY >= sticky + 100) {
      navbar.classList.add("sticky");
    } else{
      navbar.classList.remove("sticky");
    }
}
console.log(window.scrollY);


// scroll active

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("nav .nav-menu li a");

window.onscroll = () => {
  let current = "";
    scrollNav();

    // console.log(document.body.offsetHeight);
    // console.log(window.innerHeight + window.scrollY);
    // console.log(document.body.offsetHeight);
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 40) {
      current = section.getAttribute("id");
    }
  })

  navLink.forEach((anchor) => {
    // console.log(current)
    anchor.classList.remove("active");
    if ((window.innerHeight + window.scrollY) === document.body.offsetHeight) {
      navLink[3].classList.remove("active");
      navLink[4].classList.add("active");
    } if (anchor.classList.contains(current)) {
      anchor.classList.add("active");
    }
  })
}