// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
  if (state.mushrooms) {
    oneMushroom.style.visibility = 'visible';
  } else {
    oneMushroom.style.visibility = 'hidden';
  }
});
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onegreenpepper => {
    if (state.greenPeppers) {
      onegreenpepper.style.visibility = 'visible';
    } else {
      onegreenpepper.style.visibility = 'hidden';
    }
  });
  }

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(whiteSau => {
        if (state.whiteSauce) {
      whiteSau.classList.add('sauce-white')
    } else {      
      whiteSau.classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
  crust.classList.add('crust-gluten-free')
} else {      
  crust.classList.remove('crust-gluten-free')
}
});
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnArr = document.querySelectorAll('.btn')
  let count = 0
  for(prop in state){
    if(state[prop] === true){
      //console.log(`state.${prop}=${state[prop]}`)
      btnArr[count].classList.add('active')
      count++
    }else{
      btnArr[count].classList.remove('active')
      count++
    }
      //  let buttons = document.querySelectorAll('.btn');
  }}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let items = '';
  let count =0
  const panelPrice = document.querySelectorAll('.price li')
  for (prop in state) {
    if (state[prop] ===true) {
      totalPrice += ingredients[prop].price;
      //items += `<li>$${ingredients[prop].price} ${ingredients[prop].name}</li>` //opcion1
    //panelPrice[count].style.display ='block'
    panelPrice[count].hidden =false
    }
    else{
    //panelPrice[count].style.display ='none'
    panelPrice[count].hidden= true
    }
    count++
  }
  let totalSum = document.querySelector('.price strong')
  totalSum.innerHTML = `$${totalPrice}`

  //let panel = document.querySelector('.price ul') //opcion1
  //panel.innerHTML = items //opcion1

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});