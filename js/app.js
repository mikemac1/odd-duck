'use strict'

// JS to allow employees to view different products and vote for the next product to be brought to market

console.log('Please say Hi!');

// Global Variables
// Step 1: Window Into The Dom
let myProduct = document.querySelector('#oddDucks');
let image1 = document.querySelector('#duckOne');
let image2 = document.querySelector('#duckTwo');
let image3 = document.querySelector('#duckThree');
let votes = document.querySelector('#resultsViews');
let viewResults = document.querySelector('#viewResults');

let maxNumberOfVotes = 5;
let numberUserVotes = 0;

let indexArray = [];

let productArray = [];

// Global Functions
function randomProduct() {
    // // return Math.floor(math.random() * (max - min) + min);
    return Math.floor(Math.random() * (productArray.length));
}

// Generic Product Constructor Object
function Product(name, fileExtension, votes=0, shown=0) {
    this.name = name;
    this.fileExtension = fileExtension;
    this.src = `img/${this.name}.${this.fileExtension}`;
    this.votes = votes;
    this.shown = shown;
    productArray.push(this);
}

// Products To Be Added
let bag = new Product('bag', 'jpg');
let banana = new Product('banana', 'jpg');
let bathroom = new Product('bathroom', 'jpg');
let boots = new Product('boots', 'jpg');
let breakfast = new Product('breakfast', 'jpg');
let bubblegum = new Product('bubblegum', 'jpg');
let chair = new Product('chair', 'jpg');
let cthulhu = new Product('cthulhu', 'jpg');
let dogDuck = new Product('dog-duck', 'jpg');
let dragon = new Product('dragon', 'jpg');
let pen = new Product('pen', 'jpg');
let petSweep = new Product('pet-sweep', 'jpg');
let scissors = new Product('scissors', 'jpg');
let shark = new Product('shark', 'jpg');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun', 'jpg');
let unicorn = new Product('unicorn', 'jpg');
let waterCan = new Product('water-can', 'jpg');
let wineGlass = new Product('wine-glass', 'jpg');

// console.log(productArray.length);

// User is presented a trio of products
function displayProducts() {
    // Ensures the current round of pictures & the next two rounds are all different
    while (indexArray.length < 9) {
        let generateNum = randomProduct();
        if (!indexArray.includes(generateNum)) {
            indexArray.push(generateNum);
        }
    }

    let product1 = indexArray.shift();
    let product2 = indexArray.shift();
    let product3 = indexArray.shift();

    image1.src = productArray[product1].src;
    image1.alt = productArray[product1].name;
    productArray[product1].shown++;

    image2.src = productArray[product2].src;
    image2.alt = productArray[product2].name;
    productArray[product2].shown++;

    image3.src = productArray[product3].src;
    image3.alt = productArray[product3].name;
    productArray[product3].shown++;

}

// Display & Tally Voting Results
function displayResults() {
    // document.getElementById("resultsViews").innerHTML = "";
    for (let i = 0; i < productArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${productArray[i].name} - ${productArray[i].votes} votes & ${productArray[i].shown} views`;
        votes.appendChild(li);
    }
}

// // Step 3: The Click Function
function handleClicks(event) {
    if (event.target === myProduct) {
        alert("Please click on a product image.");
    }
    numberUserVotes++;
    let clickedProduct = event.target.alt;

    for (let i = 0; i < productArray.length; i++) {
        if (clickedProduct === productArray[i].name) {
            // console.log(productArray[i]);
            productArray[i].votes++;
            break;
        }
    }
    if (numberUserVotes === maxNumberOfVotes) {
        myProduct.removeEventListener('click', handleClicks);
        // console.log('myProduct is off');
        
        // console.log(productArray);
        displayResults();
        // console.log(productArray);
        chartProducer();
    } else {
        displayProducts();
        storeData();
    }
}


function chartProducer() {
    // Create arrays to build data sets
    let productNames = [];
    let productShown = [];
    let productVotes = [];
    for (let i = 0; i < productArray.length; i++) {
        productNames.push(productArray[i].name);
        productShown.push(productArray[i].shown);
        productVotes.push(productArray[i].votes);
    }

    const labels = productNames;
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Number Of Votes',
                data: productVotes,
                backgroundColor: [
                    'rgba(151, 51, 201, 0.2)',
                ],
                borderColor: [
                    'rgb(151, 51, 201)',
                ],
                hoverBackgroundColor: [
                    'rgb(151, 51, 201)',
                ],
                hoverBorderColor: [
                    'rgb(114, 36, 152)',
                ],
                borderWidth: 1,
                pointStyle: 'star',
                borderRadius: 7,
            },
            {
                label: 'Number Of Times Shown',
                data: productShown,
                backgroundColor: [
                    'rgba(11, 192, 47, 0.2)',
                ],
                borderColor: [
                    'rgb(11, 192, 47)',
                ],
                hoverBackgroundColor: [
                    'rgb(11, 192, 47)',
                ],
                hoverBorderColor: [
                    'rgb(11, 165, 42)',
                ],
                borderWidth: 1,
                pointStyle: 'star',
                borderRadius: 7,
            }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    position: 'top',
                    text: 'Product Votes By Employees at Lobby Kiosk',
                    font: {
                        size: 30
                    }
                },

            }
        },
    };
    const myChart = new Chart(
        document.getElementById('chart'),
        config
    );
}


// BUILD-OUT & RECALL LOCALSTORAGE
// Create
function storeData() {
    let viewedStringProds = JSON.stringify(productArray);
    // create a key for the data that needs to be in local storage
    localStorage.setItem('shown', viewedStringProds)
}

// Recall
function retrieveData() {
    // check if local storage has views available
    // if no views maybeShown will be null
    let maybeShown = localStorage.getItem('shown');
    // if it does have orders, unpack them)
    if (maybeShown) {
        // turn it back into an array
        let parsedShown = JSON.parse(maybeShown);
        // console.log(parsedShown);
        
        // reset productArray to an empty array
        productArray = [];
        console.log(productArray);
        // NEW WAY -  (let varNameReferEachItemArray of nameOfArray)

        for (let item of parsedShown) {
            // console.log(item);
            let name = item.name;
            let fileExtension = item.fileExtension;
            let votes = item.votes;
            let shown = item.shown;
            // parsedShown (name, fileExtension, votes, shown)
            new Product (name, fileExtension, votes, shown);
            // console.log('made it!');
        }
        console.log(productArray);
    }
}

// Step 2: TheEvent Listener
// when addeventlistener handles the click it sends all information from the click
myProduct.addEventListener('click', handleClicks);
retrieveData();
displayProducts();