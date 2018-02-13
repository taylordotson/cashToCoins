console.log("Hello JavaScript");

var dollarAmount = (1.77) * 100;

var quarterValue = .25;
var dimeValue = .10;
var nickelValue = .5;
var pennyValue = .1;

var penniesSum = nickelsSum - (nickelAmount * nickelValue);
var numofPennies = Math.floor(penniesSum / pennyValue);
console.log(penniesSum);
console.log(numofPennies);

var nickelsSum = dimesSum - (dimeAmount * dimeValue);
var nickelAmount = Math.floor(nickelsSum / nickelValue);
console.log(nickelsSum);
console.log(nickelAmount);

var dimesSum = (cashAmount - (quarterAmount * quarterValue));
var dimeAmount = Math.floor(dimesSum / dimeValue);
console.log(dimesSum);
console.log(dimeAmount);

var quartersSum = (cashAmount / quarterValue);
var quarterAmount = Math.floor(cashAmount / quarterValue);
console.log(quartersSum);
console.log(quarterAmount);

var piggyBank = { pennies: numofPennies, nickels: nickelAmount, dimes: dimeAmount, quarters: quarterAmount,};
console.log("piggyBank " + piggyBank);