"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee mx-auto row">';
    // html += '<td>' + coffee.id + '</td>'; Commented out to get rid of the ID's in the HTML file
    html += '<h4 class="col-8 text-center my-2">' + coffee.name + '</h4>';
    html += '<p class="text-secondary text-center col-4 my-2">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (roastSelection.value === 'All') {
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

function sort_by_id(){
    return function (elem1, elem2){
        if (elem1.id <elem2.id) {
            return -1;
        } else if (elem1.id > elem2.id) {
            return 1;
        } else {
            return 0;
        }
    };
}
console.log(coffees.sort(sort_by_id()));

var sortByID = coffees.sort((a,b) => {
    return a.id - b.id;
});
console.log(sortByID);




