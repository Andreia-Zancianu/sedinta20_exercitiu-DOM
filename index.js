const addDropdownClass = document.querySelector(".menu-icon-container ul");
const dropdownButton = document.querySelector(".menu-icon");

addDropdownClass.className = "show-dropdown";

dropdownButton.addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".show-dropdown");
  const dropdownListStyle = window.getComputedStyle(dropdownMenu);
  const visibility = dropdownListStyle.getPropertyValue("visibility");

  if (visibility === "hidden") {
    dropdownMenu.style.visibility = "visible";
  } else {
    dropdownMenu.style.visibility = "hidden";
  }
});

// FOLOSIND METHOD TOGGLE
// const dropdownButton = document.querySelector(".menu-icon ");
// const dropdownList = document.querySelector("nav ul");

// dropdownButton.addEventListener("click", function () {
//   dropdownList.classList.toggle("show-dropdown");
// });
