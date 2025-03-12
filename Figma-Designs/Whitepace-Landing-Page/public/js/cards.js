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
	/* triggers when one of three spans in the slider is clicked and depending on which one is clicked
	 add class to cards container than container moves left or right */
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

const mobileSliderHandler = (event, section) => {
	if (event.target.tagName == "SPAN") {
		const sectionsMapper = {
			ourClients: ourClientsCardsContainerElement,
			plans: plansCardsContainerElement,
		};
		const currentSection = sectionsMapper[section];
		const [leftCard, middleCard, rightCard] = [...currentSection.children];

		[...currentSection.children].forEach((el) => {
			el.classList.remove("show-hidden-cards");
			el.classList.remove("transition-delay");
		});

		// TODO: Refactor css card order with order property
		const cardToSliderMapper = {
			"left-card-link": section == "plans" ? leftCard : middleCard,
			"middle-card-link": section == "plans" ? middleCard : leftCard,
			"right-card-link": rightCard,
		};
		
		const cardClassName = event.target.classList[0];
		cardToSliderMapper[cardClassName].classList.add("show-hidden-cards");
		cardToSliderMapper[cardClassName].classList.add("transition-delay");
	}
};

const sliderClickHandler = (event, section) => {
	sliderColorsHandler(event.target, section);
	if (window.innerWidth > 730) {
		tabletSliderHandler(event, section);
	} else {
		mobileSliderHandler(event, section);
	}
};

ourClientsCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "ourClients")
);
plansCardsSlider.addEventListener("click", (event) =>
	sliderClickHandler(event, "plans")
);

sliderColorsHandler();
