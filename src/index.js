function generateCookingRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-header", {
    strings: "Pouding chômeur traditionnel",
    autoStart: true,
    cursor: "",
    delay: 1,
  });

  new Typewriter("#recipe-description", {
    strings:
      "150 g (1 tasse) de farine tout usage non blanchie <br> 7,5 ml (1 1/2 c. à thé) de poudre à pâte <br> 105 g (1/2 tasse) de sucre <br> 75 g (1/3 tasse) de beurre non salé, ramolli <br> 1 oeuf  <br> 60 ml (1/4 tasse) de lait",
    autoStart: true,
    delay: 5,
  });
}
let cookingFormElement = document.querySelector("#cooking-generator-form");
cookingFormElement.addEventListener("submit", generateCookingRecipe);

// function hideRecipeContainer() {
//   let recipeContainer = document.querySelector("#recipe-container");
//   let recipeDetails = document.querySelector("#recipe-description");
//   if (recipeDetails == "") {
//     alert("empty");
//   }
// }
// hideRecipeContainer();
