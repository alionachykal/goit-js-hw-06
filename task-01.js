
    const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories ${totalCategories.length} categories.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
