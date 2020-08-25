document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var bubbles = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    bubbles.style.left = x+'px';
    bubbles.style.top = y+'px';
    var size =Math.random() * 100;
    bubbles.style.width = size+'px';
    bubbles.style.height = size+'px';

    var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + r + "," + g + "," + b + ")";
bubbles.style.background = bgColor;
    body.appendChild(bubbles);

    setTimeout(function(){
        bubbles.remove();
    },4200)
})