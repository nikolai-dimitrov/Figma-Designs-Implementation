const burgerMenuElement = document.querySelector(".burger-menu");
const matchMobileScreenMedia = window.matchMedia("(max-width: 768px)");

const burgerMenuTopElement = document.querySelector(".burger-menu .top");
const burgerMenuBottomElement = document.querySelector(".burger-menu .bottom");

const navElement = document.querySelector(".nav")
const handleMobileScreenMedia = () => {
	console.log("mobile screen media");
    burgerMenuTopElement.classList.remove("spin");
    burgerMenuBottomElement.classList.remove("spin");
    navElement.classList.remove("show");
};

const handleBurgerMenuClick = (e) => {
	if (burgerMenuTopElement.classList.contains("spin")) {
		burgerMenuTopElement.classList.remove("spin");
		burgerMenuBottomElement.classList.remove("spin");
        navElement.classList.remove("show");

	} else {
		burgerMenuTopElement.classList.add("spin");
		burgerMenuBottomElement.classList.add("spin");
        navElement.classList.add("show");
	}
};

matchMobileScreenMedia.addEventListener("change", handleMobileScreenMedia);
burgerMenuElement.addEventListener("click", handleBurgerMenuClick);
