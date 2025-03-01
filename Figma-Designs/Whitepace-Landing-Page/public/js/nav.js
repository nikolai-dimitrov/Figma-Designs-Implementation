const navAnchorContainer = document.querySelector("nav ul");
const navButtonsContainer = document.querySelector(
	"nav .header-buttons-container"
);
const burgerMenu = document.querySelector(".burger-menu");

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

checkSmallLaptop.addEventListener("change", handleSmallLaptopScreen);
checkTablet.addEventListener("change", handleTabletScreen);
