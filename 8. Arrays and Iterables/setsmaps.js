 //// in sets we don't care about the indexes
 //const ids = new Set([1, 2, 3]);
 //console.log(ids);
 //ids.add(2); // doesn't add 2 because it is already in the set
 //console.log(ids.has(2)); // perfect to check if value is there so we can use it

//for (const id of ids.entries()) {
   //console.log(id[0]) 
//} 

// -----------------------------------------------

// // Maps
// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, {address: 'Sofia'}]]); // like a dictionary in C#
// console.log(personData.get(person1));

// personData.set(person2, [{date: '01.01.2020', price: 100}, {location: 'Europe'}]);
// console.log(personData.get(person2));

// // print - way 1
// console.log(personData)

// // print - way 2
// for (const [key, value] of personData) {
  // console.log(key, value);
// }

// // print - way 3
// for (const key of personData.keys()) {
   // console.log(key);
// }

// for (const value of personData.values()) {
   // console.log(value);
// }

// console.log(personData.size);


// -----------------------------------------------
// WeakSet()
let newPerson = {name: 'Max'};
const persons = new WeakSet();
persons.add(newPerson);

// ....some operations
newPerson = null; // since newPerson is null and we don't have usage of the reference in another place in the code then the Garbage Collector will delete the reference from the "persons" WeakSet() too. In Set() the GC is holding on references even if they are not used anywhere else.
