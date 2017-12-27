
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var indexIngredients = 0
while (indexIngredients < 8) {
  console.log(ingredients[indexIngredients]);
  indexIngredients++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < 8; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}
