const colors =[ "red","blue","green"];

function clicker() {
    var randomColors = colors[Math.floor(Math.random()* colors.length)];
    document.querySelector("body").style.background = randomColors;    
}

document.querySelector('.mybutton').addEventListener("click", clicker);

