const buttonsNumbers = document.getElementsByName("data-number");
const buttonsOperation = document.getElementsByName("data-operation");
const buttonDelete = document.getElementsByName("data-delete")[0];
const buttonEqual = document.getElementsByName("data-equal")[0];
var outcome = document.getElementById("outcome");
var currentOperation = "";
var previousOperation = "";
var operation = undefined;


buttonsNumbers.forEach( function(button) {
    button.addEventListener("click", function() {
       addNumber(button.innerText);
    });
});

buttonsOperation.forEach(function(button) {
    button.addEventListener("click", function() {
        selectOperation(button.innerText);
        
    });
});

buttonEqual.addEventListener("click", function() {
    equal();
    refresh();
});

buttonDelete.addEventListener("click", function() {
    clear();
    refresh();
});

function addNumber (number) {
    currentOperation = currentOperation + number.toString();
    refresh();
}; 

function refresh () {
    outcome.Value = currentOperation;
    console.log(outcome.Value)
};

function clear() {
    currentOperation = '';
    previousOperation = '';
    operation = undefined;
};