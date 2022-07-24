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

  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;

});
ingredientsList.append(...newList);
console.log(ingredientsList);
console.log(ingredients);