
const navbar = document.getElementById("navbar")

const sticky = navbar.offsetTop;

function scrollNav() {
    if (window.scrollY >= sticky + 100) {
      navbar.classList.add("sticky");
    } else{
      navbar.classList.remove("sticky");
    }
}

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
    if (scrollY >= sectionTop - 100) {
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

const navLinks = document.querySelectorAll(".nav-list");
const footerLinks = document.querySelectorAll(".footer-link")
console.log(footerLinks)

Array.from(navLinks).map(navLink => {
  const navHref = navLink.getAttribute('href');
  const section = document.querySelector(navHref);

  navLink.onclick = e => {
    sectionScroll(section, e);
  }
})

Array.from(footerLinks).map((footerLink) => {
  const footerHref = footerLink.getAttribute("href");
  const section = document.querySelector(footerHref);

  footerLink.onclick = e => {
      sectionScroll(section, e);
  };
});


function sectionScroll(section, link) {
  // offset
  const offset = 100;
  // get body position
  const bodyRect = document.body.getBoundingClientRect().top;
  // get section position relative
  const sectionRect = section.getBoundingClientRect().top;
  // subtract the section from body
  const sectionPosition = sectionRect - bodyRect;
  // subtract offset
  const offsetPosition = sectionPosition - offset;

  link.preventDefault();
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// toggle burger menu

const toggle = (elementId) => {
  const element = document.getElementById(elementId);

  if(element.classList.contains(elementId + "--open")) {
    element.classList.remove(elementId + "--open")
  } else {
    element.classList.add(elementId + "--open")
  }
}

const handleToggle = () => {
  toggle("menu")
  toggle("hamburger-button")
}



