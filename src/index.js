function generateMenu(event) {
  event.preventDefault();
  let menuElement = document.getElementById("menu");

  new Typewriter("#menu", {
    strings: "Please wait. You menu is being generated...",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let menuFormElement = document.getElementById("menu-form-element");
menuFormElement.addEventListener("submit", generateMenu);
