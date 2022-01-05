const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover',function(){toggleColor(square)});
});

function toggleColor(square){
    square.style.backgroundColor=rgbGenerator();
}

function rgbGenerator() {
    const x = Math.floor(Math.random()*256);
    const y = Math.floor(Math.random()*256);
    const z = Math.floor(Math.random()*256);
    const rgb = "rgb("+x+","+y+","+z+")";
    return rgb;
}