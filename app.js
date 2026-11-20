/*const decBtn = document.getElementById("decbtn");
const resetBtn = document.getElementById("resetbtn");
const incBtn = document.getElementById("incbtn");

const displayedNumber = document.getElementById("displayedNumber");

incBtn.addEventListener("click", increaseCount() );
decBtn.addEventListener("click", decreaseCount() );
resetBtn.addEventListener("click", resetCount() );*/

let count = 0;
let savedValue = document.getElementById("savedvalue");
let newSaveSentence = "Recent Values: ";
let saveLim = document.getElementById("savelim");


function updateCount() {
    if (count > 0){
    displayedNumber.style.color = "#223f23";}
    else if (count < 0){displayedNumber.style.color = "#540c14";}
    else {displayedNumber.style.color = "hsl(317, 22%, 49%)";};
    displayedNumber.textContent = count;
};


function increaseCount() {
    console.log("inc btn clicked");
    count++;
    updateCount();
};

function decreaseCount() {
    console.log("dec btn clicked");
    count--;
    updateCount();
};


function resetCount() {
    console.log("reset btn clicked");
    count = 0;
    updateCount();
};


function saveCount() {
    saveLim.textContent = "";
    console.log(count);
    newSaveSentence = newSaveSentence + count + " ";
    savedValue.textContent = newSaveSentence;
    if (newSaveSentence.length > 45) {
    saveLim.textContent = "Save Limit Reached";
    newSaveSentence = "Recent Values: ";};
}

function clearHistory() {
    newSaveSentence = ""
    savedValue.textContent = newSaveSentence;
    newSaveSentence = "Recent Values: ";
    saveLim.textContent = "";
};

/*if (newSaveSentence.length > 50) {
    newSaveSentence = "Recent Values: ";
    newSaveSentence = newSaveSentence + count + " ";
    savedValue.textContent = newSaveSentence;};*/