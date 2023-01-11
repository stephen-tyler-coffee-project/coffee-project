"use strict"

// function adds the coffee's to the DIV that contains all the data in the Coffees array
function renderCoffee(coffee) {
    var html = '<div class="coffee mx-auto row">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 class="col-8 text-center my-2">' + coffee.name + '</h4>';
    html += '<p class="text-secondary text-center col-4 my-2">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// function takes array and outputs it into the HTML as a string
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// function that updates what is output when you change your roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all') { // added to search for all coffees
            filteredCoffees.push(coffee);
        }
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

var roastSelection = document.querySelector('#roast-selection');


// function that is used as a live search for coffee
function searchTheCoffees () {
    var searchBarInput = searchForCoffee.value.toUpperCase();
    var filteredCoffees =[];
    // console.log(searchBarInput);
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchBarInput)) {
        // if (coffee.name.toUpperCase().startsWith(searchBarInput)) { search with .startsWith instead of .includes
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

var searchForCoffee = document.getElementById('#searchForCoffee');
searchForCoffee.addEventListener('keyup', searchTheCoffees)


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

