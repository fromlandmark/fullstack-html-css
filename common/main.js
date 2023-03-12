import exercisesList from './exerciseList.js';


const initHistoryNavigation = () => {
    const navbar = document.createElement('nav');
    const navLink = document.createElement('a');
        navLink.setAttribute('href', '/');
        navLink.innerHTML = 'Back';

    navbar.appendChild(navLink);

    const body = document.querySelector('body');
    body.insertAdjacentElement(0, navbar)
}

 


const exercisesContainer = document.querySelector("#exercises__wrapper");

exercisesList.forEach(exercise => {
    const exerciseTemplate = (exercise) => {
			return `<a href="./${exercise.href}" class="exercise_card" data-exercise="${exercise.category}">
				<div class="thumbnail"></div>
				<span class="exercise_card__title">${exercise.name}</span>
			</a>`;
		}

    exercisesContainer.innerHTML += exerciseTemplate(exercise)
})