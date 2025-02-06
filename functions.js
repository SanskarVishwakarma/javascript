//functions / parameters
function sayMyName() {
    console.log("H");
console.log("I");

}

//sayMyName() //for execution

// function addTwoNumbers(number1, number2) {
   
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
//    let result = number1 + number2
//    return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)

//console.log(result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
        if(!username){
console.log("please enter a username");
return 
    }
    return `${username} just logged in`
    
}

//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage("hitesh"));

//functions part 2 objects/arrays

function calculateCartPrice(val1, val2, ...num1) { //rest operator ...
    return num1
}

//console.log(calculateCartPrice(100,300, 340))

const user = {
    username: "hitesh",
    price:100
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and 
        price is ${anyObject.price}`);
    
}

//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 300, 300,500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


