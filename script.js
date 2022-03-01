

function clicker() {
    var randomColors = Math.floor(Math.random()*16777215).toString(16);
   document.querySelector("body").style.background = "#" +randomColors;  
}

document.querySelector('.mybutton').addEventListener("click", clicker);

