const orderedList = document.querySelector(".drag-list");
const button = document.querySelector(".check-btn");
const richestRestaurants = [
  "Compass Group PLC",
  "Starbucks Corp.",
  "McDonald's Corp.",
  "Darden Restaurants Inc.",
  "Yum China Holdings Inc.",
  "Chipotle Mexican Grill Inc.",
  "Restaurant Brands International Inc.",
  "Yum! Brands Inc.",
  "Haidilao International Holding Ltd.",
  "Texas Roadhouse Inc.",
];
const listItems = [];
let index;

function createList() {
  orderedList.innerHTML = "";

  [...richestRestaurants]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((elem, index) => {
      const item = document.createElement("li");

      item.setAttribute("data-index", index);

      item.innerHTML = `<div class="item-container"><span class="number">${
        index + 1
      }.</span><div class="draggable" draggable="true"><p class="first-name">${elem}</p><i class="fa-solid fa-grip-lines"></i></div></div>`;

      listItems.push(item);
      orderedList.appendChild(item);
    });
}

createList();
