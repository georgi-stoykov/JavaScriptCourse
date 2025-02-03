/*
function add(num1, num2){
    return num1 + num2;
}

function addRandom(num){
    return num + Math.random();
}*/

// --------------------------

/*
//Factory function
function createTaxCalculator(tax){
    function calculateTax(amount){
        return amount * tax; // tax is accessible
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19); //tax amount
const calculateIncomeTaxAmount = createTaxCalculator(0.25); //tax amount

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));
*/

// --------------------------


let userName = 'Max';

function greetUser(){
    let name = userName;
    console.log('Hi ' + userName);
}

userName = 'Nikola';

greetUser();

















