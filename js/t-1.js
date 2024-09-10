const categoriesRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.box__item');

console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach(title => {
  console.log(`\nCategory: ${title.firstElementChild.textContent}`);
  console.log(`Elements ${title.lastElementChild.children.length}`);
});

