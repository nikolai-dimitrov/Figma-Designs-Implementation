const navAnchorContainer = document.querySelector("nav ul");
const navButtonsContainer = document.querySelector(
	"nav .header-buttons-container"
);
const burgerMenuElement = document.querySelector(".burger-menu");

const checkTablet = window.matchMedia("(max-width: 980px)");
const checkSmallLaptop = window.matchMedia("(max-width: 1152px)");

const handleNavVisibility = () => {
	if (window.innerWidth <= 1152) {
		navAnchorContainer.classList.add("nav-hidden");
	}

	if (window.innerWidth <= 980) {
		navButtonsContainer.classList.add("nav-btns-hidden");
	}
};

const handleSmallLaptopScreen = () => {
	navAnchorContainer.classList.add("nav-hidden");
	burgerMenuElement.classList.replace("close-menu-icon", "open-menu-icon");
};

const handleTabletScreen = () => {
	navAnchorContainer.classList.add("nav-hidden");
	navButtonsContainer.classList.add("nav-btns-hidden");
	burgerMenuElement.classList.replace("close-menu-icon", "open-menu-icon");
};

const handleBurgerMenuClick = () => {
	if (burgerMenuElement.classList.contains("open-menu-icon")) {
		burgerMenuElement.classList.replace(
			"open-menu-icon",
			"close-menu-icon"
		);

		navAnchorContainer.classList.remove("nav-hidden");
		if (navButtonsContainer.classList.contains("nav-btns-hidden")) {
			navButtonsContainer.classList.remove("nav-btns-hidden");
		}
	} else {
		burgerMenuElement.classList.replace(
			"close-menu-icon",
			"open-menu-icon"
		);
		navAnchorContainer.classList.add("nav-hidden");
		navButtonsContainer.classList.add("nav-btns-hidden");
	}
};

burgerMenuElement.addEventListener("click", handleBurgerMenuClick);
checkSmallLaptop.addEventListener("change", handleSmallLaptopScreen);
checkTablet.addEventListener("change", handleTabletScreen);
window.addEventListener("load", handleNavVisibility);
