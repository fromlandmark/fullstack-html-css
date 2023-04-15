import { exercisesList, presentationsLinks, ArticlesDB } from "./data.js";

const initHistoryNavigation = () => {
	const navbar = document.createElement("nav");
	const navLink = document.createElement("a");
	navLink.setAttribute("href", "/");
	navLink.innerHTML = "Back";

	navbar.appendChild(navLink);

	const body = document.querySelector("body");
	body.insertAdjacentElement(0, navbar);
};

const exercisesContainer = document.querySelector("#exercises__wrapper");

exercisesList.forEach((exercise) => {
	const exerciseTemplate = (exercise) => {
		return `<a href="/${exercise.href}" class="exercise_card" data-exercise="${exercise.category}">
				<div class="thumbnail"></div>
				<span class="exercise_card__title">${exercise.name}</span>
			</a>`;
	};

	exercisesContainer.innerHTML += exerciseTemplate(exercise);
});

const presentationsContainer = document.querySelector("#presentations__wrapper");
presentationsLinks.forEach((exercise) => {
	const listItem = (exercise) => {
		return `<a href="/${exercise.href}" download class="presentation_card" data-type="${exercise.category}">
				 <div class='presentation_card__wrapper'>
                 <span class="presentation_card__title">${exercise.name}</span> 
                 </div>
			</a>`;
	};

	presentationsContainer.innerHTML += listItem(exercise);
});

presentationsContainer.style.gridTemplateColumns = `repeat(${presentationsLinks.length}, 300px)`;


const materialsContainer = document.querySelector("#materials__wrapper");
ArticlesDB.forEach((articleSection) => {

	articleSection.articles.forEach(article => { 
			materialsContainer.innerHTML += `<a href="${article.href}"  target='_blank' class="article_link">
                  ${article.label || "te"} 
                 </div>
			</a>`;
		})
		
})