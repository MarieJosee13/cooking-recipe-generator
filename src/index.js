function displayRecipe(response) {
  new Typewriter("#recipe-description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
  });
}

//all actions in this function
function generateCookingRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f6b43f078o010195155a4d3f220t84be";
  let prompt = `Generate a delicious cooking recipe about ${instructionsInput.value}`;
  let context =
    "You are a chef that likes short and simple recipes in basic HTML and seperate each line always with <br/>. Please include the title in an <h3>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //removing container until API is called & adding a loading message with animation
  let recipeElement = document.querySelector("#recipe-container");
  recipeElement.classList.remove("hide-element");
  recipeDescription = document.querySelector("#recipe-description");
  recipeDescription.innerHTML = `<div class='blink'>Generating recipe for ${instructionsInput.value}, please wait...</div>`;

  //calling API
  axios.get(apiUrl).then(displayRecipe);
}
let cookingFormElement = document.querySelector("#cooking-generator-form");
cookingFormElement.addEventListener("submit", generateCookingRecipe);
