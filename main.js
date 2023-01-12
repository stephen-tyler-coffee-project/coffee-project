"use strict"

// function adds the coffee's to the DIV that contains all the data in the Coffees array
function renderCoffee(coffee) {
    var html = '<div class="coffee mx-auto row">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3 class="fugaz-one col-xl-2 col-lg-3 col-md-3 col-sm-3 text-center my-2 text-mocha">' + coffee.name + '</h3>';
    html += '<p class="fugaz-one text-center col-xl-1 col-lg-2 col-md-2 col-sm-3 my-3 text-tan">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// function takes array and outputs it into the HTML as a string
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// function that updates what is output when you change your roast selection AND search
function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchBarInput = searchForCoffee.value.trim().toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all' && searchBarInput === '') {
            filteredCoffees.push(coffee);
            return
        }
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(searchBarInput)) {
            filteredCoffees.push(coffee);
            return
        }
        if (coffee.roast === selectedRoast && searchBarInput === '') {
            filteredCoffees.push(coffee);
            return
        }
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchBarInput)) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

var searchForCoffee = document.querySelector('#searchForCoffee');
searchForCoffee.addEventListener('keyup', updateCoffees);
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees);


function addUniqueCoffee() {
    // e.preventDefault();
    var newUniqueCoffee = {
        id: coffees.length + 1,
        name: document.querySelector('#add-coffee-name').value.trim().toLowerCase(),
        roast: document.querySelector('#add-coffee-roast').value
    };
    console.log(newUniqueCoffee);
    coffees.push(newUniqueCoffee);
    return updateCoffees(coffees);
}

var addAUniqueCoffee = document.querySelector('#submitNewCoffee');
addAUniqueCoffee.addEventListener('click', addUniqueCoffee);


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// variables that are used to place data into the HTML
var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// var sortByID = coffees.sort((a,b) => {
//     return a.id - b.id;
// });
// console.log(sortByID);