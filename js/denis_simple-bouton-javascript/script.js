// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Faire quelque chose";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("j'ai fait quelque chose");
});

/* Read 

https://css-tricks.com/use-button-element/
*/