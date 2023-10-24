import { ArticlesDB } from "./data.js";
import exercisesData from "./list.js";
import examplesData from "./examples.js";
import presentationsData from "./presentationsData.js";

const configs = {
	materials: true,
	exercises: true,
	presentations: true,
}

const exercisesContainer = document.querySelector("#exercises__wrapper");

exercisesData.forEach((exercise) => {
	const exerciseTemplate = (exercise) => {
		return `<a href="${location.href}${exercise.href}" class="exercise_card" data-exercise="${exercise.category}">
					<div class="thumbnail"></div>
					<span class="exercise_card__title">${exercise.name}</span>
				</a>`;
	};
	exercisesContainer.innerHTML += exerciseTemplate(exercise);
});

const presentationsContainer = document.querySelector("#presentations__wrapper");
presentationsData.forEach((exercise) => {
	const listItem = (exercise) => {
		return `<a href="${location.href}${exercise.path}" target="_blank" class="presentation_card" data-type="Apresentação">
					<div class='presentation_card__wrapper'>
					<span class="presentation_card__title">${exercise.name}</span> 
					</div>
				</a>`;
	};

	presentationsContainer.innerHTML += listItem(exercise);
});

presentationsContainer.style.gridTemplateColumns = `repeat(${presentationsData.length}, 300px)`;


const materialsContainer = document.querySelector("#materials__wrapper");
ArticlesDB.forEach((articleSection) => {

	articleSection.articles.forEach(article => { 
			materialsContainer.innerHTML += `<a href="${article.href}"  target='_blank' class="article_link">
                  ${article.label || "te"} 
                 </div>
			</a>`;
		})
		
})

const examplesContainer = document.querySelector("#examples__wrapper");
examplesData.forEach((item) => {
	examplesContainer.innerHTML += `<a href="${location.href}${item.href}"  target='_blank' class="article_link">
                  ${item.name || "te"} 
                 </div>
			</a>`;
});