const plansCardsContainerElement = document.querySelector(
	".plans .plan-cards-container"
);
const plansCardsSlider = document.querySelector(".plans .slider-plans");

const ourClientsCardsContainerElement =
	document.querySelector(".cards-container");
const ourClientsCardsSlider = document.querySelector(
	".our-clients .slider-clients"
);

const sectionsToSliderElementsMapper = {
	plans: [plansCardsSlider, [...plansCardsSlider.children]],
	ourClients: [ourClientsCardsSlider, [...ourClientsCardsSlider.children]],
};

const sliderColorsHandler = (eventTarget, section) => {
	// section param - won't be undefined only if user click on slider
	if (section) {
		if (eventTarget.tagName == "SPAN") {
			const sliderChildrenElementsArray =
				sectionsToSliderElementsMapper[section][1];
			sliderChildrenElementsArray.forEach((element) => {
				if (element == eventTarget) {
					eventTarget.classList.add("active-color");
				} else {
					element.classList.remove("active-color");
				}
			});
		}
		// section param - will be undefined on page reload or initial page load
	} else {
		for (const key in sectionsToSliderElementsMapper) {
			const sliderChildrenElementsArray =
				sectionsToSliderElementsMapper[key][1];
			const middleSliderElement = sliderChildrenElementsArray[1];

			middleSliderElement.classList.add("active-color");
		}
	}
};

const tabletSliderHandler = (event, section) => {
	if (event.target.tagName == "SPAN") {
		const cardLink = event.target.classList[0];
		const cardToSliderMapper = {
			"left-card-link": "show-left-card",
			"middle-card-link": "show-middle-card",
			"right-card-link": "show-right-card",
		};

		if (section == "ourClients") {
			ourClientsCardsContainerElement.classList = "cards-container";
			ourClientsCardsContainerElement.classList.add(
				cardToSliderMapper[cardLink]
			);
		} else if (section == "plans") {
			plansCardsContainerElement.classList = "plan-cards-container";
			plansCardsContainerElement.classList.add(
				cardToSliderMapper[cardLink]
			);
		}
	}
};

const mobileSliderHandler = (event) => {
	// const [leftCard, middleCard, rightCard] = [
	// 	...ourClientsCardsContainerElement.children,
	// ];
	// [...ourClientsCardsContainerElement.children].forEach((el) =>
	// 	el.classList.remove("show-hidden-cards")
	// );
	// if (event.target.classList.contains("left-card-link")) {
	// 	middleCard.classList.add("show-hidden-cards");
	// } else if (event.target.classList.contains("right-card-link")) {
	// 	rightCard.classList.add("show-hidden-cards");
	// } else if (event.target.classList.contains("middle-card-link")) {
	// 	leftCard.classList.add("show-hidden-cards");
	// }
};
const sliderClickHandler = (event, section) => {
	sliderColorsHandler(event.target, section);
	if (window.innerWidth > 730) {
		tabletSliderHandler(event, section);
	} else {
		mobileSliderHandler(event);
	}
};

ourClientsCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "ourClients")
);
plansCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "plans")
);

sliderColorsHandler();
