document.addEventListener('DOMContentLoaded', init, false);
const primaryNav = document.querySelector(".primary-nav");
const mobToggle = document.querySelector(".mobile-toggle-button");

function init() {
    mobToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");

        if (visibility === "false") {
            primaryNav.setAttribute("data-visible", "true");
            mobToggle.setAttribute("aria-expanded", "true");
        } 

        else {
            primaryNav.setAttribute("data-visible", "false");
            mobToggle.setAttribute("aria-expanded", "false");
        }
    })
}
