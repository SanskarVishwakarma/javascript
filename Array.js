//array

const myArr = [0, 1, 2,3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3)

//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice, splice

//console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // slice just pick the 1, 2 array 
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3) //splice just manipulate the original array removing 1,2,3
// console.log("C ", myArr);
// console.log(myn2);

//Array part 2

const marvel_heros = ["thosr", "ironman", "spider"]
const dc = ["superman", "flash", "batman"]

//marvel_heros.push(dc)

//console.log(marvel_heros);
//const allHeroes = marvel_heros.concat(dc)
//console.log(allHeroes);


//spread operator 

const all_new_heroes = [...marvel_heros, ...dc]
console.log(all_new_heroes);

//flat arr to spread recursive array inside main arr

console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));

let score1 = 100
let score2 = 200
let score = 300

console.log(Array.of(score1, score2, score));


