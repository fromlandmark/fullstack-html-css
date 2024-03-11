import {ArticlesDB} from './material-apoio.js'

const articleTemplate = (el) => {
	return `<a href="${el.href}" target="_blank" class="article_card" data-type="${el.category}">
				 
					<span class="article_card__title">${el.label}</span> 
                    <span class="article_card__category">${el.category}</span> 

				</a>`;
};

class Chapter { 
    show = false
    data = this.data
    populateData = (anchor, template) => {
        const anchorElement = document.getElementById(anchor)
        this.data.forEach(el => ( 
            anchorElement.innerHTML += template(el) 
        ))  
    }
}


const Presentations = new Chapter();
Presentations.data = ArticlesDB
Presentations.populateData("articles", articleTemplate);
console.log(Presentations)