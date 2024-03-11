// index.js
let counter = 0;
let arrayCounter = 0;
let savedCounter = []

function incrementOne() {
    counter++;
    updateHTMLCounter(counter);
}

function decreaseOne(){
    counter--;
    updateHTMLCounter(counter)
}

function increaseTen(){
    counter += 10;
    updateHTMLCounter(counter)
}

function decreaseTen(){
    counter -= 10;
    updateHTMLCounter(counter)
}

function setZero(){
    counter = 0;
    updateHTMLCounter(counter)
}

function save(){
    savedCounter[arrayCounter] = counter;
    arrayCounter++;

    updateSavedCounter(savedCounter)
    setZero()
}

function resetSavedCounter(){
    for (let i = 0; i < arrayCounter; i++) {
        savedCounter[i] = null;
    }
    arrayCounter = 0;
    updateSavedCounter(savedCounter);
}

function updateSavedCounter(savedCounter){

    let finalStringOutput = "Previous Numbers: "

    for (let i = 0; i < arrayCounter; i++) {
        finalStringOutput = finalStringOutput + ", " + savedCounter[i]
    }

    document.getElementById("savedCounter").textContent = finalStringOutput;
}
function updateHTMLCounter(counter) {
    document.getElementById("count-el").textContent = counter;
}
