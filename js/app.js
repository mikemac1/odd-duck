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
console.log(image1);
console.log(votes);
let maxNumberOfVotes = 5;
let numberUserVotes = 0;

// Global Functions
function randomProduct() {
    // // return Math.floor(math.random() * (max - min) + min);
    return Math.floor(Math.random() * (productArray.length));
}

// Generic Product Constructor Object
function Product(name, fileExtension) {
    this.name = name;
    this.fileExtension = fileExtension;
    this.src = `img/${this.name}.${this.fileExtension}`;
    this.votes = 0;
    this.shown = 0;
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

let productArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];
console.log(productArray.length);


// User is presented a trio of products
function displayProducts() {
    let product1 = randomProduct();
    let product2 = randomProduct();
    let product3 = randomProduct();
    console.log(product1, product2, product3);
    // seriously consider using an array --->how do you find out if an array includes something
    while (product1 === product2 || product2 === product3) {
        product2 = randomProduct();
    }
    while (product1 === product3) {
        product1 = randomProduct();
    }
    image1.src = productArray[product1].src;
    image1.alt = productArray[product1].name;
    productArray[product1].shown++;
    console.log(productArray[product1].shown);
    image2.src = productArray[product2].src;
    image2.alt = productArray[product2].name;
    productArray[product2].shown++;
    console.log(productArray[product2].shown);
    image3.src = productArray[product3].src;
    image3.alt = productArray[product3].name;
    productArray[product3].shown++;
    console.log(productArray[product3].shown);
}

// Display & Tally Voting Results
function displayResults() {
    // document.getElementById("resultsViews").innerHTML = "";
    for (let i = 0; i < productArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${productArray[i].name}: ${productArray[i].votes} votes`;
        votes.appendChild(li);
    }
}

// // Step 3: The Function
function handleClicks(event) {

    if (event.target === myProduct) {
        alert("Please click on a product image.");
    }
    console.log('click');
    console.log(event.target.alt); //specifically targets the product clicked using its name
    numberUserVotes++;
    let clickedProduct = event.target.alt;

    for (let i = 0; i < productArray.length; i++) {
        if (clickedProduct === productArray[i].name) {
            console.log(productArray[i]);
            productArray[i].votes++;
            break;
        }
    }
    if (numberUserVotes === maxNumberOfVotes) {
        myProduct.removeEventListener('click', handleClicks);
        console.log('myProduct is off');
        // Removed for lab 12
        // viewResults.className = 'clicks-allowed';
        // viewResults.addEventListener('click', displayResults);
        // console.log('viewResults is on');
        displayResults();
        chartProducer();
    } else {
        displayProducts();
    }
}


function chartProducer() {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
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
          }
        },
      };

      const myChart = new Chart(
        document.getElementById('chart'),
        config
      );

}

// Step 2: TheEvent Listener
// when addeventlistener handles the click it sends all information from the click
myProduct.addEventListener('click', handleClicks);

displayProducts();