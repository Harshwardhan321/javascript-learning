const myArr = [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(myArr[1]);

// Note: zero based indexing means arrays starts with 0th index.
// In JS array copy operations create shallow copies rather than deep copies
// Shallow copy: Shallow copy of an object whose properties share the same 
// references means whatever we make changes in the copied array also reflect 
// to the original array.
// Deep Copy is vice versa of shallow copy

const myHeros = ["Iron Man", "Shaktiman"];


// Methods:-

// Push & Pop
myHeros.push("Zen");
// myHeros.pop();

// console.log(myHeros);

// Shift & Unshift - This operation inserts elements in the first pos but the problem behind using this operation is, it shift all the array elements which is costlier operation

// myArr.unshift(8);
// myArr.shift();

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

const newArr = myHeros.join()
console.log(newArr);

// Join - It joins all the elements of array and convert it to string

// Slice & Splice

const myn1 = myArr.slice(1, 3) // Returns a copy of a section of an array

console.log(myn1);

const myn2 = myArr.splice(1, 3) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(myn2);

// Main Difference between slice and splice is slice returns a copy of section while splice manipulate the array and returns the requested set of elements

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Concat operator

const marvel_heroes = ["Thor", "Ironman", "Hulk"]

const dc_heroes = ["Flash", "Superman", "Batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// Output : [ 'Thor', 'Ironman', 'Hulk', [ 'Flash', 'Superman', 'Batman' ] ]
// Push functions basically add another array as element in the previous array.
// we can use concat - It combines two or more and returns a new array.

const heroes = marvel_heroes.concat(dc_heroes)
console.log(heroes);

// Spread Operator - Alternative way of concat

const all_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_heros);

// Flat operator - It concates all the nested arrays in one single array

const array1 = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0]]]

const useable_arr = array1.flat(Infinity)
console.log(useable_arr);

// isArray/from/of operator 

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh")); // output: [ 'H', 'a', 'r', 's', 'h' ] - It changes anything to array
console.log(Array.from({name: "Harsh"})); // Output : [] - Here we have to be specific that we want key to be array or value to be array/

let point1 = 300 
let point2 = 500
let point3 = 700
console.log(Array.of(point1, point2, point3)); // Output : [ 300, 500, 700 ]
// of operator also used to covert into array