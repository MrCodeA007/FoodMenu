"use strict";

let menu = {
  // Category (shown in Category selector)
  drinks: [
    // Category members (go into member display)
    "Water",
    "Tea",
    "Sweet Tea",
    "Coke",
    "Dr. Pepper",
    "Sprite",
  ],

  // Category (shown in Category selector)
  entrees: [
    // Category members (go into member display)
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],

  // Category (shown in Category selector)
  desserts: [
    // Category members (go into member display)
    "Cheesecake",
    "Chocolate Cake",
    "Snickerdoodle Cookie",
  ],
};
//console.log(`click`);
//----------------------------------------------------------------------------------------

//gather input------------------------------------------------------------
const categorySelectorEl = document.getElementById("categorySelector");
categorySelectorEl.onchange = menuitemChange;
const FoodItemsEl = document.getElementById(`FoodItems`);

function menuitemChange() {
  let selectedValue = categorySelectorEl.value;
  if (selectedValue == "drinks") {
    //console.log(menu.drinks);
    onmenuitemSelected(menu.drinks);
  }
   if (selectedValue == "entrees") {
    //console.log(menu.entrees);
    onmenuitemSelected(menu.entrees);
  }
 if (selectedValue == "desserts") {
    //console.log(menu.desserts);
    onmenuitemSelected(menu.desserts);
  } else if (selectedValue == "") {
    FoodItemsEl.options.length = 0;
    FoodItemsEl.size = 0;
  }
}

function onmenuitemSelected(itemsList) {
    //rese
    FoodItemsEl.size = itemsList.length;
    FoodItemsEl.options.length = 0;
  for (let i = 0; i < itemsList.length; i++) {
    const optionsEl = document.createElement(`option`);
    optionsEl.textContent = itemsList[i];
    FoodItemsEl.appendChild(optionsEl)
  }
}
