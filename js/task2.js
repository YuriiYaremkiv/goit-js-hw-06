const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector('#ingredients');

const makeIngredientsList = options => {
  return options.map(option => {
    const itemListEl = document.createElement('li');
    itemListEl.textContent = option;

    return itemListEl;
  });
};

listEl.append(...makeIngredientsList(ingredients));


