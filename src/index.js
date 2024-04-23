function displayMenu(response) {
  new Typewriter("#menu", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 0.1,
  });
}

function generateMenu(event) {
  event.preventDefault();
  let userInstructions = document.getElementById("user-instructions");
  let menuElement = document.getElementById("menu");

  menuElement.classList.remove("hidden");
  menuElement.innerHTML = `<siv><span class="generating">⏳</span>
  Please Wait. You recepies with  ${userInstructions.value} are being generated...</div>`;

  let apiKey = "af452f84910t3od515bb3246f723ee9b";
  let context =
    "You are experienced cook. Provide answer in HTML. Generate short and simple recipies, use no more than 300 symbols per recipe. Start each of 2 recepies in a new paragraph, provide ingreedients and cooking instructions. Use <strong> for the title of the recipies.  Separate recepies with <hr> . Start each ingredient in a new line";
  let prompt = `Write menu for 2 dinners with recipies using ingredients from ${userInstructions.value} `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayMenu);
}

let menuFormElement = document.getElementById("menu-form-element");
menuFormElement.addEventListener("submit", generateMenu);
