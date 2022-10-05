const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = [];
const listEl = document.querySelector("#ingredients");

ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");

  itemEl.push(element);  
  listEl.append(element);
});

















// const elements = makeAllIngredients(ingredients)
// elementUl.append(...elements);
//  console.log(makeAllIngredients)

//  let elementUl = document.getElementById("ingredients");
// const makeAllIngredients = options => {
//   return options.map(option => {
//    const navItemElement = document.createElement("li");
// const siteNav = document.createElement('ul')

// navItemElement.textContent = 'Potatoes';

// navItemElement.classList.add('item')
// siteNav.classList.add('site-nav')
//     return navItemElement;
  
//   })
// }



// ingredients.map( => {
//   const navItemElement = document.createElement("li");
// const siteNav = document.createElement('ul')

// navItemElement.textContent = 'Potatoes';

// navItemElement.classList.add('item')
//   siteNav.classList.add('site-nav')

  
// })

//  const elements = makeAllIngredients(ingredients)
// elementUl.append(...elements);
//  console.log(makeAllIngredients)

// const navItemElement = document.createElement("li");
// const siteNav = document.createElement('ul')

// navItemElement.textContent = 'Potatoes';

// navItemElement.classList.add('item')
// siteNav.classList.add('site-nav')
//  siteNav.append(...navItemElement)
// console.log(navItemElement) 
// console.log(siteNav )



// let elementUl = document.getElementById("ingredients");
// const navItemElement1 = document.createElement("li");
// navItemElement1.classList.add('item')
// navItemElement1.textContent = 'Potatoes';
// // elementUl.appendChild(navItemElement1);
 

// const navItemElement2 = document.createElement("li");
// navItemElement2.classList.add('item')
// navItemElement2.textContent = 'Mushrooms';
// // elementUl.appendChild(navItemElement2);



// const navItemElement3 = document.createElement("li");
// navItemElement3.classList.add('item')
// navItemElement3.textContent = 'Garlic';
// // elementUl.appendChild(navItemElement3);

// const navItemElement4 = document.createElement("li");
// navItemElement4.classList.add('item')
// navItemElement4.textContent = ' Tomatos';
// // elementUl.appendChild(navItemElement4);

// const navItemElement5 = document.createElement("li");
// navItemElement5.classList.add('item')
//  navItemElement4.textContent = ' Tomatos';
// // elementUl.appendChild(navItemElement5);
  

// const navItemElement6 = document.createElement("li");
// navItemElement6.classList.add('item')
// navItemElement6.textContent = ' Condiments';
// // elementUl.appendChild(navItemElement6);

// elementUl.append(navItemElement1,navItemElement2,navItemElement3,navItemElement4,navItemElement5,navItemElement6)

// console.log(navItemElement1)
// console.log(navItemElement2)
// console.log(navItemElement3)



// console.log(navItemElement4)
// console.log(navItemElement5)
// console.log(navItemElement6)





