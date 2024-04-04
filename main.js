import {ArticlesDB} from './_database/material-apoio.js'
import   exercises  from "./_database/exercises.js";
import presentations from "./_database/presentations.js";

const articleTemplate = (el) => {
	return `<a href="${el.href}" target="_blank" class="article_card" data-type="${el.category}">
					<span class="article_card__title">${el.label}</span> 
                    <span class="article_card__category">${el.category}</span> 
				</a>`;
};

const exerciseTemplate = (el) => {
	return `<a href="${el.href}" data-exercise="${el.category}" target="_blank" class="presentation_card" data-type="Exercise">
					<div class='presentation_card__wrapper'>
					<span class="presentation_card__title">${el.label}</span> 
					</div>
				</a>`;
};


const presentationTemplate = (el) => {
	return `<a href="${el.href}" data-exercise="${el.category}" target="_blank" class="presentation_card" data-type="Presentation">
					<div class='presentation_card__wrapper'>
					<span class="presentation_card__title">${el.label}</span> 
					</div>
				</a>`;
};


class Chapter { 
    show = false
    data = this.data
    populateData = (anchor, template) => {
        const anchorElement = document.getElementById(anchor)
        this.data.forEach(el => {
			if (!el.hidden) {
				anchorElement.innerHTML += template(el);
			}
		})  
    }
}


const Articles = new Chapter();
const Exercises = new Chapter();
const Presentations = new Chapter();


Articles.data = ArticlesDB;
Articles.populateData("articles", articleTemplate); 

Exercises.data = exercises;
Exercises.populateData("exercises", exerciseTemplate); 

Presentations.data = presentations;
Presentations.populateData("presentations", presentationTemplate); 