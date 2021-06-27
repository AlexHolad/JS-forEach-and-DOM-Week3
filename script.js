// What you have
const animalList = document.querySelector(".animal-list");

const animals = [
  { name: "Hector", species: "Beaver", emoji: "🦫" },
  { name: "Edouard", species: "Duck", emoji: "🦆" },
  { name: "José", species: "Boar", emoji: "🐗" },
  { name: "Mireille", species: "Bee", emoji: "🐝" },
  { name: "Fedor", species: "Pig", emoji: "🐷" }
];

// Type your code here
animals.forEach((animal) => {
    const liAnimal = document.createElement("li");
    liAnimal.classList.add("li");
    liAnimal.innerText = `${animal.emoji} - ${animal.name}`
    animalList.appendChild(liAnimal);
}) 

/* 
💡 HINT
- First, you need to select the list.
- Then use forEach, for each animal we want to create
a new li element 
- Then we want to set the text inside the li to 
  - animal.emoji - animal.name
= Then we want to add the element to the li. 
*/

