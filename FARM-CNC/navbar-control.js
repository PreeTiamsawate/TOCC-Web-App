const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav > a");
for (let navLink of navLinks) {
    if (navLink.href === currentLocation) {
        navLink.classList.add("active-page");
        navLink.setAttribute("aria-current", "page");
    }
}