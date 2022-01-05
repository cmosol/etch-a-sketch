function init(){
    const grid = document.querySelector('.grid');
    // grid.style.height="600px";
    // grid.style.width="600px";
    for (let i = 0; i<20; i++){
        const row = document.createElement('div');
        row.setAttribute('class','row');
        for (let j = 0; j<20; j++){
            const square = document.createElement('div');
            square.setAttribute('class','square');
            square.setAttribute('id',i+"x"+j);
            square.style.backgroundColor="#dbdbdb";
            square.style.height="30px";
            square.style.width="30px"; 
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

init();
    

