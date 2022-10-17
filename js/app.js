'use strict'

// JS to allow employees to view different products and vote for the next product to be brought to market

console.log('Please say Hi!');

// Global Variables & Functions
// Expect 19 products to load
productArray = []

function selectRandomProduct() {
    // // return Math.floor(math.random() * (max - min) + min);
    return Math.floor(math.random() * (productArray.length - 0) + 0);
}


// Generic Product Constructor Object
function Product(name, fileExtension) {
    this.name = name;
    this.fileExtension = fileExtension;
    this.src = `img/${this.name}.${this.fileExtension}`;
    this.votes = 0;
    this.shown = 0;
}

// Products To Be Added WITH "let variable = new Goat('file name', 'fileExtension);
let bag = new Product('bag', 'jpg');
let banana = new Product('banana', 'jpg');
let bathroom = new Product('bathroom', 'jpg');
let boots = new Product('boots', 'jpg');
let breakfast = new Product('breakfast', 'jpg');
let bubblegum = new Product('bubblegum', 'jpg');
let chair = new Product('chair', 'jpg');
let cthulhu = new Product('cthulhu', 'jpg');
let dogDuck = new Product('dog-duck', 'jpg');
let dragon = new Product('dragoon', 'jpg');
let pen = new Product('pen', 'jpg');
let petSweep = new Product('pet-sweep', 'jpg');
let scissors = new Product('scissors', 'jpg');
let shark = new Product('shark', 'jpg');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun', 'jpg');
let unicorn = new Product('unicorn', 'jpg');
let waterCan = new Product('water-can', 'jpg');
let wineGlass = new Product('wine-glass', 'jpg');





// A Collection of Products

// User is presented a trio of products ---> 3 products at a time

// User should see 3 product photos

// User vote on their favorite product by clicking on it

// Data collection will show live updates to the number of votes tallied for each product

// Global variables
// - Score for the favorite
// - Count the number of views a product receives
// - Count the images
// - Windows into the DOM
// - Photo Array of product instances example - goat[randomNumner].src

// Goat Constructor
// - goat image (src)
// - goat score (how many times has this goat been voted on)
// - goat photo alt text
// - goat views - how many times did the user see the goat

// Goat Methods
// - Change out the goat images, increment the goat views
// - generate a random number, pass it into the goat array
// - check to make sure the goat images are different
// - event listener (click) - tally the vote for the goat

// create all the instances of goat
// - 
// AFTER 15 ROUNDS OF VOTING...?
// - Give the user the results (views and the score)
// - Stop voting
// - Stop generating new goat photos


// After the game gets to 15 rounds of voting
// original section + div {
// pointer-events: none;

// Style the button to allow "View Results" to be clicked
// section + div.clicks-allowes {
// background-color: color;
// color: white;
// cursor: pointer;
// pointer-events: auto;








// let myContainer = document.querySelector('section');
// let results = document.querySelector('ul');
// let resultBtn = document.querySelector('button');

// let myImage1 = document.querySelector('section img:first-child'};
// let myImage2 = document.querySelector('section img:nth-child(2)');

// let howManyTimesUserHasVoted = 0;
// let maxNumberOfVotes = 15;

// console.log(myImage2);

// image2.src = 'images/sassy-goat.jpg';

// function Goat (name, fileExtension = 'jpg') {
// 	this.name = name;
// 	this.fileExtension = fileExtension;
// 	this.src = `images/${this.name}.${this.fileExtension}`;
// 	this.votes = 0;
// 	this.views = 0;
// }

// //LIST OF GOATS WITH "let variable = new Goat('file name', 'fileExtension);


// //CREATE A GOAT ARRAY MANUALLY "let allGoats = [];

// //HOW TO CHANGE THE GOATS AUTOMATICALLY BY USING A RANDOM NUMBER

// function selectRandomGoat() {
// // random number between 0 and the length of the array(7)
// // not inclusive as we don't want it to = 7
// // return Math.floor(math.random() * (max - min) + min);
// return Math.floor(math.random() * (allGoats.length - 0) + 0);
// }

// function renderGoats() {
// 	let goat1 = selectRandomGoat();
// 	let goat2 = selectRandomGoat();
// 	console.log(goat1, goat2);
// 	// seriously consider using an array --->how do you find out if an array includes something
// 	while (goat1 === goat2) {
// 	goat2 = selectRandomGoat();	
// }

// 	image1.src = allGoats[goat1].src;
// 	image1.alt = allGoats[goat1].name;
// 	allGoats[goat1].view++;
// 	image2.src = allGoats[goat2].src;
// 	image2.alt = allGoats[goat2].name;
// 	allGoats[goat2].view++;
// }
// // Step 2 for Event Listener
// myContainer.addEventListener('click', handleGoatClicks); // when addeventlistener handles the click it sends all information from the click via any keyword used (i.e. event, click, whatever the developer wants)


// function renderResults() {
// 	// create a listing of each results
// 	for (let i=0; i < allGoats.length; i++) {
// 	let li = doument.createElement('li);
// 	li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and ${allGoats[i].score} votes`;	
// results.appendChild(li);
// 	}
// }





// // Step 3 Function

// function handleGoatClicks(event) {

// if (event.target === myContainer) {
// alert("Please click on an image.")
// }
// console.log('click');
// console.log(event.target.alt); //specifically targets the goat clicked using its name
// howManyTimesUserHasVoted++;
// let clickedGoat = event.target.alt;

// for(let i = 0; i < allGoats.length; i++) {
// if (event.target.alt === allGoats[i].name) {
// 	console.log(allGoats[i]);
// 	allGoats[i].score++;
// 	break;
// 	}
// 	}
// if (howManyTimesUserHasVoted === maxNumberofVotes) {
// 	//STOP GAME
// 	myContainer.removeEventListener('click', handleClick);
// 	resultsBtn.addEventListener(
// } else {
// renderGoats();
// }
// }



// renderGoats();


// image2.src = AllGoats[0].src

