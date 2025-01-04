// // Dates

// let myDate = new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2024-01-24")
// console.log(myCreatedDate.toDateString());

// //console.log(myCreatedDate.toLocaleString());

// // let myTimeStamp = Date.now
// // console.log(myTimeStamp);
// // console.log(myTimeStamp.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getUTCFullYear());

const myDate = newDate.toLocaleString('default',{
    weekday:"long",
    
})
console.log(myDate);
