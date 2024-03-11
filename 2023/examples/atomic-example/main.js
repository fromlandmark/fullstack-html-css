const productContainer = document.querySelector(".product");
const componentsContainer = document.querySelector(".components");
const templateContainer = document.querySelector(".template");
const moleculesContainer = document.querySelector(".molecules");
const containers = [productContainer, componentsContainer, templateContainer, moleculesContainer];
class Controls { 
	hideAll = () => {
		containers.forEach(container => container.style.opacity = 0)
	}
	showComponents = () => {
		componentsContainer.style.opacity = 1; 
	};

	showMolecules = () => {
		moleculesContainer.style.opacity = 1;
	};

	showProduct = () => {
		productContainer.style.opacity = 1;
	};
	showTemplate = () => {
		templateContainer.style.opacity = 1;
	};
}

const controls = new Controls();
controls.hideAll()

const triggerAtoms = document.querySelector('#trigger-atoms');
const triggerMolecules = document.querySelector("#trigger-molecules");
const triggerOrganisms = document.querySelector("#trigger-organisms");
const triggerTemplates = document.querySelector("#trigger-templates");

triggerAtoms.addEventListener('click', () => controls.showComponents())
triggerMolecules.addEventListener('click', () => controls.showMolecules())
triggerOrganisms.addEventListener('click', () => controls.showProduct())
triggerTemplates.addEventListener('click', () => controls.showTemplate())