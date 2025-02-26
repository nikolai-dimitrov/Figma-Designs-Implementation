const navElement = document.querySelector(".nav");
const logoNavWrapperElement = document.querySelector(".logo-nav-wrapper");
const navIconsWrapperElement = document.querySelector(".menu-icon-wrapper");

const navMobileContainer = document.querySelector("nav .nav-mobile");

const navItemsContainerElement = document.querySelector(".nav-items-container");
const navBtnsContainerElement = document.querySelector(".nav-btns-container");

const registerBtnElement = document.querySelector(
	".nav-btns-container .btn-primary"
);
const openIconElement = document.querySelector(".menu-icon-wrapper .fa-bars");
const closeIconElement = document.querySelector(".menu-icon-wrapper .fa-x");

const mobileScreensMediaQuery = window.matchMedia("(max-width: 860px)");

const applyDesktopNav = () => {
	navElement.appendChild(navBtnsContainerElement);
	logoNavWrapperElement.appendChild(navItemsContainerElement);

	navItemsContainerElement.classList.remove("flex-col-center");
	navBtnsContainerElement.classList.remove(
		"flex-col-center",
		"gap-margin-top"
	);

	registerBtnElement.classList.remove("bg-unset");
};

const applyMobileNav = () => {
	navMobileContainer.appendChild(navItemsContainerElement);
	navMobileContainer.appendChild(navBtnsContainerElement);
	navMobileContainer.classList.add("nav-hidden");

	navItemsContainerElement.classList.add("flex-col-center");
	navBtnsContainerElement.classList.add("flex-col-center", "gap-margin-top");

	registerBtnElement.classList.add("bg-unset");
};

const mediaScreenResizeHandler = (e) => {
	// change burger menu's close icon to open icon when media screen changes
	if (closeIconElement.classList.contains("open-menu")) {
		closeIconElement.classList.replace("open-menu", "close-menu");
		openIconElement.classList.replace("close-menu", "open-menu");
	}

	// goes from desktop to mobile
	if (e.matches == true) {
		applyMobileNav();
	} else {
		applyDesktopNav();
	}
};

const navIconClickHandler = () => {
	// Change burger menu icon on click
	if (openIconElement.classList.contains("open-menu")) {
		// case when menu is closed
		openIconElement.classList.replace("open-menu", "close-menu");
		closeIconElement.classList.replace("close-menu", "open-menu");
		navMobileContainer.classList.remove("nav-hidden");
	} else {
		// case when menu is opened
		openIconElement.classList.replace("close-menu", "open-menu");
		closeIconElement.classList.replace("open-menu", "close-menu");
		navMobileContainer.classList.add("nav-hidden");
	}
};

mobileScreensMediaQuery.addEventListener("change", mediaScreenResizeHandler);
navIconsWrapperElement.addEventListener("click", navIconClickHandler);
window.onload = function () {
	if (window.innerWidth < 860) {
		applyMobileNav();
	}
};
