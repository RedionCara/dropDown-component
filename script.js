import { persons } from "./db.js";

const body = document.querySelector("body");

const arrow = document.getElementById("arrow");
const dropdown = document.getElementById("dropdown");
const input = document.getElementById("autocomplete-input");

arrow.addEventListener("click", () => {
  toggleClassName();
  populateDropdown(persons);
});

const toggleClassName = () => {
  dropdown.classList.toggle("show");
  arrow.classList.toggle("rotate");
};

const populateDropdown = (data) => {
  dropdown.innerHTML = "";

  const ul = document.createElement("ul");
  data.forEach((person) => {
    const li = document.createElement("li");

    li.textContent = `${person.firstName} ${person.lastName} ${person.id}`;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      input.placeholder = `${person.firstName} ${person.lastName} ${person.id}`;
    });
  });

  dropdown.appendChild(ul);
};
