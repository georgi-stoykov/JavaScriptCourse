// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(4,5,6);
// console.log(moreNumbers);

// const evenMoreNumbers = new Array(5);
// console.log(evenMoreNumbers);

// var arrayObj = Array.from('I am an array-like object');
// console.log(arrayObj);

// ---------------------------------------------------

const hobbies = ['Fitness', 'Cooking'];
// hobbies.push('Reading'); // adds at the end
// hobbies.unshift('Coding'); // adds as 0 index and shift the rest by 1. Like: shift all elements to the right
// hobbies.pop(); // removes the last element and return it
// hobbies.shift(); // remove the first (0) element. Like: shifts all elements to the left
// // unshift() and shift() are slower than push() and pop()

// // Splice is function that is available only on real arrays. That is one of the reasons we may prefer to convert array-like to array with Array.from()
// hobbies.splice(0, 0, 'Swimming');
// hobbies.splice(1, 1, 'JS'); // replaces the first 1st element 'Fitness' with 'JS'
// const removedItem = hobbies.splice(-2, 1, 'Glovo'); // replaces the last element 'Cooking' with 'Glovo'
// console.log(removedItem);
// console.log(hobbies);

// // slice
// const testArr = [1, 1.53, 7, 10.99, -5, 10]; // 6 in total
// const newCopyArr = testArr.slice();
// const subArrFromStart = testArr.slice(0, 2); // returns [1, 1.53] BUT NOT 7
// const subArrFromEnd = testArr.slice(-3, -1); // returns [10.99, -5]
// const subArrToTheEnd = testArr.slice(3);
// console.log(testArr, newCopyArr, subArrFromStart, subArrFromEnd, subArrToTheEnd);

// // concat
// const fistArr = [1, 1.53, 7, 10.99, -5, 10]; // 6 in total
// const secondArr = [32, 9, 15];
// const brandNewArr = fistArr.concat(secondArr);
// console.log(brandNewArr);

// // IndexOf and LastIndexOf - Works good BUT for primitive objects like numbers
// const arrWithDuplicates = [3, 5, 44, -3, 5, 1]; // 6 in total
// console.log(arrWithDuplicates.indexOf(5)); // outputs 1
// console.log(arrWithDuplicates.lastIndexOf(5)); // outputs 4
// console.log(arrWithDuplicates.lastIndexOf(8888888888888888)); // outputs -1

// // Find
// const personArr = [{ name: 'Max' }, { name: 'Peter' }];
// console.log(personArr.indexOf({ name: 'Peter' })); // returns -1 (not found)
// const peter = personArr.find((person, index, persons) => person.name == 'Peter'); // returns { name: 'Peter'}
// const alsoPeter = personArr.find(x => x.name === 'Peter'); // returns { name: 'Peter'}
// const zhivko = personArr.find(x => x.name === 'Zhivko'); // returns -1

// // Includes
// const arr = [1, 1.53, 7, 10.99, -5, 10]; // 6 in total
// console.log(arr.includes(7)); // returns true
// console.log(arr.indexOf(7) !== -1); // returns true
// console.log(arr.includes(20)); // returns false

// ------------------------------------------------

// ForEach
// const pricesArr = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// pricesArr.forEach((price, idx, prices) => {
// const taxedPrice = {index: idx, taxAdjustedPrice: price * (1 + tax) };
// taxAdjustedPrices.push(price);
// });
// console.log(pricesArr);
// console.log(taxAdjustedPrices);

// ------------------------------------------------

// // Map
// var anotherPriceTaxAdjust = pricesArr.map((pr, idx, prices) => {
// return { index: idx, newPrice:(pr * (1 + tax)) }
// });
// console.log(anotherPriceTaxAdjust);

// ------------------------------------------------

// // Sort
// const numbers = [10.99, 5.99, 3.99, 6.59];

// // way 1 - bad
// numbers.sort(); // returns [10.99, 3.99, 5.99, 6.59] because it sorts by first letter
// console.log(numbers);

// // way 2 - good
// const realSort = numbers.sort((a, b) => {
// if (a > b) {
// return 1;
// } else if (a === b) {
// return 0;
// } else {
// return -1;
// }
// });
// console.log(realSort);

// // way 3 - the best
// const realQuickSort = numbers.sort((a,b) => a > b ? 1 : -1);
// console.log(realQuickSort);

// // way 4 - reverse()
// const newNumbersArr = [10, 5, 3, 6];
// newNumbersArr.sort((a,b) => a > b ? 1 : -1).reverse(); // to reverse an array correctly we should first sort it ....
// console.log(newNumbersArr);

// ------------------------------------------------

// // filter
// const arrToFilter = [10, 5, 3, 9].filter(x => x < 6);
// console.log(arrToFilter);

// // reduce - reduces an array to simpler value 
// const arrToSumWithReduce = [34, 2, -14, 5].reduce((prevValue, curValue, curIndex, prices) => prevValue + curValue, 0);
// console.log(arrToSumWithReduce);

// ------------------------------------------------

// // split
// const dataToSplitArr = 'new your; 10.99;2000';
// const splitArr = dataToSplitArr.split(';');
// console.log(splitArr);

// // join
// const namesArrToJoin = ['Peter', 'Jones'];
// const joinedNames = namesArrToJoin.join(' '); // by default are joined with comma
// console.log(joinedNames);

// ------------------------------------------------

//// cloning "primitive" arrays with the "spread" (...) operator 
 //const names = ['Peter', 'John'];
 //const copiedNames = [...names];
 //names.push('Max');
 //console.log(names); // ['Peter', 'John', 'Max']
 //console.log(copiedNames); // ['Peter', 'John']

 //const numArr = [5, 3, 11];
 //console.log(...numArr); // returns 5 3 11 ; like 3 arguments and then I can pass them to functions like below with Math.min()
 //console.log(Math.min(...numArr)); // returns 3

// // cloning array of "object" references with the spread" (...) operator 
// const students1 = [ {name: 'Max', age: 30}, {name: 'John', age: 30}];
// const students2 = [...students1];
// console.log(students1, students2);
// students1[0].name = 'George'; // changes also in the "students2" because we cloned the references!
// console.log(students1, students2);

// cloning array of "object" with BRAND NEW objects references
// const students3 = [ {name: 'Max', age: 30}, {name: 'John', age: 30}];
// const students4 = [...students3.map(student => ({name: student.name, age: student.age}))]; // mapping will cloning
// console.log(students3, students4);
// students3[0].name = 'George';
// console.log(students3, students4);

// // array destruction
// const [firstName, lastName, ...args] = ['Peter', 'Jones', 30, 'United States'];
// console.log(firstName); // Peter
// console.log(lastName); // Jones
// console.log(args); // [30, 'United States']
