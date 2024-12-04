const scrollTopBtn = document.querySelector(".scroll-top");

function trackScroll() {
    const offset = window.scrollY;
    const windowWidth = window.innerWidth; 

    if (windowWidth <= 768 && offset > 300) {
        scrollTopBtn.classList.add("scroll-top--active");
    } else {
        scrollTopBtn.classList.remove("scroll-top--active");
    }
}

window.addEventListener("scroll", trackScroll);
window.addEventListener("resize", trackScroll);