const body = document.body;
const list = body.querySelector('#categories');
const categories = list.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach( el => {
const category = el.querySelector('h2');
    console.log(`Category: ${category.textContent}`)
const quantity = el.querySelectorAll('li')    
    console.log(`Elements: ${quantity.length}`)
});