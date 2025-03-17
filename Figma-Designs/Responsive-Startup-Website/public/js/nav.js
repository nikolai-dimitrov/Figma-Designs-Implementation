const burgerMenuElement = document.querySelector(".burger-menu");
const matchMobileScreenMedia = window.matchMedia("(max-width: 768px)");

const burgerMenuTopElement = document.querySelector(".burger-menu .top");
const burgerMenuBottomElement = document.querySelector(".burger-menu .bottom");

const handleMobileScreenMedia = () => {
	console.log("mobile screen media");
};

const handleBurgerMenuClick = (e) => {
	if (burgerMenuTopElement.classList.contains("spin")) {
		burgerMenuTopElement.classList.remove("spin");
		burgerMenuBottomElement.classList.remove("spin");
	} else {
		burgerMenuTopElement.classList.add("spin");
		burgerMenuBottomElement.classList.add("spin");
	}
};

matchMobileScreenMedia.addEventListener("change", handleMobileScreenMedia);
burgerMenuElement.addEventListener("click", handleBurgerMenuClick);
