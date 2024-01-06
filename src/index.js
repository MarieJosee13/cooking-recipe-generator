function displayRecipe(response) {
  new Typewriter("#recipe-description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
  });
}

function generateCookingRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f6b43f078o010195155a4d3f220t84be";
  let prompt = `Generate a delicious cooking recipe about ${instructionsInput.value}`;
  let context =
    "You are a simplistic chef that likes short and simple recipes in basic HTML and seperate each line with a <br/>. Please include the title in an <h3>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
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
