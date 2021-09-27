function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  //   document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
}

const currentLocation = location.href;
const navLinks = document.querySelectorAll(".nav-link");
for (navLink of navLinks) {
  if (navLink.href === currentLocation) {
    navLink.classList.add("nav-active");

    navLink.setAttribute("aria-current", "page");
  }
}
