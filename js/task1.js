const refs = {
    categories: document.querySelectorAll('.item'),
    numberCaregories: document.querySelector('#categories'),
};

console.log('Number of categories: ', refs.numberCaregories.children.length);
console.log(''); //пробіл між виведенням в консоль


refs.categories.forEach(category => {
    console.log('Category: ', category.querySelector('h2').textContent);
    console.log('Category: ', category.querySelectorAll('li').length);
    console.log('');
})