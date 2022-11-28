/*MENU*/

const menu = document.querySelector('.btn-group-vertical');
const menuStyles = `
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;
menu.style.cssText = menuStyles;

const menuButtonHome = menu.querySelector('.btn-group-vertical :nth-child(1)');
const menuButtonHomeStyle = `
max-width: 80px;
border-radius: 4px;
margin-right: 5px;
`;
menuButtonHome.style.cssText = menuButtonHomeStyle;

const menuButtonAbout = menu.querySelector('.btn-group-vertical :nth-child(2)');
const menuButtonAboutStyle = `
max-width: 120px;
border-radius: 4px;
margin-right: 5px;
`;
menuButtonAbout.style.cssText = menuButtonAboutStyle;

const menuButtonServices = menu.querySelector('.btn-group-vertical :nth-child(3)');
const menuButtonServicesStyle = `
max-width: 90px;
border-radius: 4px;
margin-right: 5px;
`;
menuButtonServices.style.cssText = menuButtonServicesStyle;

const menuButtonSolutions = menu.querySelector('.btn-group-vertical :nth-child(4)');

const menuButtonSolutionsStyle = `
max-width: 90px;
border-radius: 4px;
margin-right: 5px;
`;
menuButtonSolutions.style.cssText = menuButtonSolutionsStyle;

const menuButtonFaq = menu.querySelector('.btn-group-vertical :nth-child(5)');

const menuButtonFaqStyle = `
max-width: 60px;
border-radius: 4px;
margin-right: 5px;
`;
menuButtonFaq.style.cssText = menuButtonFaqStyle;

const menuButtonContact = menu.querySelector('.btn-group-vertical :nth-child(6)');
const menuButtonContactStyle = `
max-width: 90px;
border-radius: 4px;
`;
menuButtonContact.style.cssText = menuButtonContactStyle;
/*--------------------------------------------------------------------------------------*/

/*HEADER*/

const header = document.querySelector('.jumbotron');
const headerStyles = `
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
background: #6c757d;
color: #ffffff;
`;
header.style.cssText = headerStyles;

const headerPurpose = document.querySelector('.jumbotron :nth-child(2)');
const headerPurposeStyles = `
font-weight: 400;
`;
headerPurpose.style.cssText = headerPurposeStyles;

const headerDivisor = document.querySelector('.jumbotron :nth-child(3)');
const headerDivisorStyles = `
width: 100%;
`;
headerDivisor.style.cssText = headerDivisorStyles;

const headerDescription = document.querySelector('.jumbotron :nth-child(4)');
const headerDescriptionStyles = `
text-align: right;
font-weight: 500;
`;
headerDescription.style.cssText = headerDescriptionStyles;

const headerButton = document.querySelector('.jumbotron :nth-child(5)');
const headerButtonStyles = `
background: #28a745;
border: none;
`;
headerButton.style.cssText = headerButtonStyles;
/*--------------------------------------------------------------------------------------*/

/*CARDS*/
const cards = document.querySelectorAll('.col-lg-3');

for (let i = 0; i < cards.length; i++) {
	cards[i].classList.add(i);
}

const animalCard = document.getElementsByClassName('col-lg-3 0');
const tecCard = document.getElementsByClassName('col-lg-3 1');
const peopleCard = document.getElementsByClassName('col-lg-3 2');
const natureCard = document.getElementsByClassName('col-lg-3 3');

const animalClone = animalCard[0].cloneNode(true);
const tecClone = tecCard[0].cloneNode(true);
const peopleClone = peopleCard[0].cloneNode(true);
const natureClone = natureCard[0].cloneNode(true);

let parentElement = animalCard[0].parentElement;
parentElement.removeChild(animalCard[0]);
parentElement.removeChild(tecCard[0]);
parentElement.removeChild(peopleCard[0]);
parentElement.removeChild(natureCard[0]);

const animalCloneStyle = `
background: #28a745;
border: none;
`;

animalClone.getElementsByClassName('btn btn-primary')[0].style.cssText = animalCloneStyle;

parentElement.appendChild(natureClone);
parentElement.appendChild(animalClone);
parentElement.appendChild(peopleClone);
parentElement.appendChild(tecClone);

/*--------------------------------------------------------------------------------------*/

/*BUTTON LIST*/
const list = document.querySelector('.list-group');
const addMoreButtons = ['Quarto item', 'Quinto item'];
const firstLine = document.querySelector('.list-group-item.active');
firstLine.classList.remove('active');

addMoreButtons.forEach((el) => {
	const li = document.createElement('li');
	if (el === 'Quarto item') {
		li.setAttribute('class', 'list-group-item active');
	} else {
		li.setAttribute('class', 'list-group-item');
	}
	list.appendChild(li);
	li.innerHTML = el;
});

// function renderList(el) {

// }

/*--------------------------------------------------------------------------------------*/
