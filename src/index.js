function displayMenu(response) {
  console.log("menu generated");
  new Typewriter("#menu", {
    // strings: "Please wait. Your menu is being generated...",
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 0.1,
  });
}

function generateMenu(event) {
  event.preventDefault();
  let menuElement = document.getElementById("menu");
  menuElement.innerHTML = "Please Wait. You recepies are being generated... ";
  let userInstructions = document.getElementById("user-instructions");

  let apiKey = "af452f84910t3od515bb3246f723ee9b";
  let context =
    "You are experienced cook. Provide answer in HTML. Start each of 2 recepies in a new paragraph, provide ingreedients and cooking instructions. Use <strong> for the title of the recipies.  Separate recepies with <hr> Make sure that all text will fit in 800 symbols";
  let prompt = `Write menu for 2 dinners with recipies using ingredients from ${userInstructions.value} `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(prompt);
  axios.get(apiUrl).then(displayMenu);
}

let menuFormElement = document.getElementById("menu-form-element");
menuFormElement.addEventListener("submit", generateMenu);
