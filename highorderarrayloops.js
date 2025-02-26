//for of loop
// let arr = [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val);
    
// }
// const menus = ["WSSD", "WDSDFW", "DWQD"]
// for (const val of menus){
//     console.log(`values of menu are ${val}`);

// }

//map

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('Fr', 'France')

//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

//console.log(myObject[key]);
console.log(`${key} shortcut is for ${myObject[key]}`);
}

