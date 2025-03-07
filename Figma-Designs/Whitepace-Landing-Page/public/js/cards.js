const plansCardsContainerElement = document.querySelector(
	".plans .plan-cards-container"
);
const plansCardsSlider = document.querySelector(".plans .slider-plans");

const ourClientsCardsContainerElement =
	document.querySelector(".cards-container");
const ourClientsCardsSlider = document.querySelector(
	".our-clients .slider-clients"
);

const slidersMapper = {
	plansSliderElements: [plansCardsSlider, [...plansCardsSlider.children]],
	ourClientsSliderElements: [
		ourClientsCardsSlider,
		[...ourClientsCardsSlider.children],
	],
};

const sliderActiveLinkerColorHandler = (clickedLinker) => {
	if (clickedLinker) {
		const sliderContainer = clickedLinker.parentElement;
		for (const key in slidersMapper) {
			// check which slider is clicked and get its children
			if (slidersMapper[key][0] == sliderContainer) {
				const sliderChildrenElementsArray = slidersMapper[key][1];
				// handle color changing (add active color to clicked children element)
				sliderChildrenElementsArray.forEach((element) => {
					if (element == clickedLinker) {
						clickedLinker.classList.add("active-color");
					} else {
						element.classList.remove("active-color");
					}
				});
			}
		}
	} else {
		// add active color to the sliders' middle element
		for (const key in slidersMapper) {
			const sliderChildrenElementsArray = slidersMapper[key][1];
			const middleSliderElement = sliderChildrenElementsArray[1];

			middleSliderElement.classList.add("active-color");
		}
	}
};

const sliderClickHandler = (event, section) => {
	sliderActiveLinkerColorHandler(event.target);
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

sliderActiveLinkerColorHandler();
