const burgerMenuElement = document.querySelector(".burger-menu");
const matchMobileScreenMedia = window.matchMedia("(max-width: 768px)");

const burgerMenuTopElement = document.querySelector(".burger-menu .top");
const burgerMenuBottomElement = document.querySelector(".burger-menu .bottom");
const burgerMenuIconElementsArray = [
	...document.querySelectorAll(".burger-menu p"),
];

const navElement = document.querySelector(".nav");
const handleMobileScreenMedia = () => {
	burgerMenuIconElementsArray.forEach((el) => el.classList.remove("spin"));
	navElement.classList.remove("show");
};

const handleBurgerMenuClick = (e) => {
	if (burgerMenuTopElement.classList.contains("spin")) {
		burgerMenuIconElementsArray.forEach((el) => el.classList.remove("spin"));
		navElement.classList.remove("show");
	} else {
		burgerMenuTopElement.classList.add("spin");
		burgerMenuBottomElement.classList.add("spin");
		navElement.classList.add("show");
	}
};

matchMobileScreenMedia.addEventListener("change", handleMobileScreenMedia);
burgerMenuElement.addEventListener("click", handleBurgerMenuClick);
