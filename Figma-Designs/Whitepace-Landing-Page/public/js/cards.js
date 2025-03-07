// const ourClientsCardsContainerElement =
// 	document.querySelector(".cards-container");
// const [middleCardElement, leftCardElement, rightCardElement] =
// 	ourClientsCardsContainerElement.children;

const plansCardsSlider = document.querySelector(".plans .slider-plans");
const ourClientsCardsSlider = document.querySelector(
	".our-clients .slider-clients"
);
// const [leftCardLinkerElement, middleCardLinkerElement, rightCardLinkerElement] =
// 	ourClientsCardsSlider.children;

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

const sliderClickHandler = (event) => {
	sliderActiveLinkerColorHandler(event.target);
};

ourClientsCardsSlider.addEventListener("click", sliderClickHandler);
plansCardsSlider.addEventListener("click", sliderClickHandler);
sliderActiveLinkerColorHandler();

// const showFirstArticle = () => {
// 	cardsContainerElement.classList.add("show-left-card");
// };

// ourClientsFirstArticle.addEventListener("click", showFirstArticle);
