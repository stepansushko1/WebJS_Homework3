/* YOUR CODE HERE! */

let boxesAmount = 1;
const boxes = document.getElementsByClassName('box-container')[0];
const box = document.querySelector('.box');
var cursor = document.getElementsByClassName("box")[0];

function colorChange(event) {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    event.target.style.background = color;   
}


function resizeBox(event) {
    if (event.shiftKey) {
        event.target.classList.toggle('box-large');
    }
}

function generateRandom(min = 0, max = 100) {

    let difference = max - min; 
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand + "px";
}

function createAndDeleteBox(event) {

    if (event.altKey === false && event.shiftKey === false){
        let newBox = document.createElement("div");
        boxesAmount += 1;
        newBox.classList.add("box");
        newBox.textContent = boxesAmount;
        newBox.addEventListener('contextmenu', colorChange);
        newBox.style.left = generateRandom(0, 1220);
        newBox.style.top = generateRandom(0, 500);
        setEvents(newBox);
        boxes.appendChild(newBox);
    }

    else if (event.altKey && boxesAmount > 1){
        boxesAmount -= 1;
        event.target.remove();
    }
    
}


function moveBox(event) {
    
    function move(event) {

        event.target.style.left = event.clientX - event.target.clientWidth / 2 + "px";
        event.target.style.top = event.clientY - event.target.clientHeight / 2 + "px";
    }
    
    event.target.addEventListener('mousemove', move);
    
    function stopBox() {
        event.target.removeEventListener('mousemove', move);
    };
    event.target.addEventListener('mouseup', stopBox)
        
};

function setEvents(box) {
    box.addEventListener('click', resizeBox);
    box.addEventListener('dblclick', createAndDeleteBox);
    box.addEventListener('mousedown', moveBox);
    box.addEventListener('contextmenu', colorChange);

}

setEvents(box);