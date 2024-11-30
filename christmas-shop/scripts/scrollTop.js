const scrollTopBtn = document.querySelector(".scroll-top");


function trackScroll() {
	const offset = window.scrollY;
	const windowHeight = document.documentElement.clientHeight - 360;
	if(offset > windowHeight) {
		scrollTopBtn.classList.add("scroll-top--active");
	} else {
		scrollTopBtn.classList.remove("scroll-top--active");
	}
}

window.addEventListener("scroll", trackScroll);