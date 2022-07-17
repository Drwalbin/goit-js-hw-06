const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const newList = ingredients.map((ingredient) => {

  const items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item");
  return items;

});
ingredientsList.append(...newList);
console.log(ingredientsList);
console.log(ingredients);