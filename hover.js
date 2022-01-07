let mode = "BW"

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover',function(){toggleColor(square)});
});

function toggleColor(square){
    if (square.id==='clear' && mode==='BW'){
        square.setAttribute('id','bw');
        square.style.backgroundColor="#000000";
    }
    if (square.id==='clear' && mode==='COLOR') {
        square.setAttribute('id','color');
        square.style.backgroundColor=rgbGenerator();
    }
    if (square.id!=='clear' && mode==='ERASER'){
        square.setAttribute('id','clear');
        square.style.backgroundColor="#dbdbdb"
    }
}

function rgbGenerator() {
    const x = Math.floor(Math.random()*256);
    const y = Math.floor(Math.random()*256);
    const z = Math.floor(Math.random()*256);
    const rgb = "rgb("+x+","+y+","+z+")";
    return rgb;
}

function init() {
    const btns = document.querySelectorAll('button');
    const squares = document.querySelectorAll('.square');
    btns.forEach((button) => {
        button.addEventListener('click', function () {
            if (button.id==='clear') {
                squares.forEach((square) =>{
                    square.style.backgroundColor="#dbdbdb";
                    square.setAttribute('id','clear');
                });
            }
            if (button.id==="bw") {
                mode="BW";
            }
            if (button.id==="color") {
                mode = "COLOR";
            }
            if (button.id==="eraser") {
                mode = "ERASER";
            }
        });
    });
}

init();