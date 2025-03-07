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

const sliderClickHandler = (event, section) => {
	sliderColorsHandler(event.target, section);
	if (section == "ourClients") {
		if (event.target.classList.contains("left-card-link")) {
			ourClientsCardsContainerElement.classList = "cards-container";
			ourClientsCardsContainerElement.classList.add("show-left-card");
		} else if (event.target.classList.contains("middle-card-link")) {
			ourClientsCardsContainerElement.classList = "cards-container";
			ourClientsCardsContainerElement.classList.add("show-middle-card");
		} else if (event.target.classList.contains("right-card-link")) {
			ourClientsCardsContainerElement.classList = "cards-container";
			ourClientsCardsContainerElement.classList.add("show-right-card");
		}
	} else if (section == "plans") {
		if (event.target.classList.contains("left-card-link")) {
			plansCardsContainerElement.classList = "plan-cards-container";
			plansCardsContainerElement.classList.add("show-left-card");
		} else if (event.target.classList.contains("middle-card-link")) {
			plansCardsContainerElement.classList = "plan-cards-container";
			plansCardsContainerElement.classList.add("show-middle-card");
		} else if (event.target.classList.contains("right-card-link")) {
			plansCardsContainerElement.classList = "plan-cards-container";
			plansCardsContainerElement.classList.add("show-right-card");
		}
	}
};

ourClientsCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "ourClients")
);
plansCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "plans")
);

sliderColorsHandler();
