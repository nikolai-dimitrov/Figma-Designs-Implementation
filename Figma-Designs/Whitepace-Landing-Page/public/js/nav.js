const navAnchorContainer = document.querySelector("nav ul");
const navButtonsContainer = document.querySelector(
	"nav .header-buttons-container"
);
const burgerMenuElement = document.querySelector(".burger-menu");

const checkTablet = window.matchMedia("(max-width: 768px)");
const checkSmallLaptop = window.matchMedia("(max-width: 1152px)");

const handleSmallLaptopScreen = () => {
	console.log("lower than 1152px");
	navAnchorContainer.classList.add("nav-hidden");
};

const handleTabletScreen = () => {
	console.log("lower than 768px");
	navButtonsContainer.classList.add("nav-btns-hidden");
};

const handleBurgerMenuClick = () => {
	if (burgerMenuElement.classList.contains("open-menu-icon")) {
		burgerMenuElement.classList.replace(
			"open-menu-icon",
			"close-menu-icon"
		);
		navAnchorContainer.classList.remove("nav-hidden");
	} else {
		burgerMenuElement.classList.replace(
			"close-menu-icon",
			"open-menu-icon"
		);
		navAnchorContainer.classList.add("nav-hidden");
	}
};

burgerMenuElement.addEventListener("click", handleBurgerMenuClick);
checkSmallLaptop.addEventListener("change", handleSmallLaptopScreen);
checkTablet.addEventListener("change", handleTabletScreen);
