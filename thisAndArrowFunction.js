const user={
    username:"sanskar",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    console.log(this);
    
    }
    
}

//user.welcomeMessage()

// user.username="sam"

// user.welcomeMessage()

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = () => {
//     let username="hitesh"
//     console.log(this.username);
// }

const chai = () => {

}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;
const addTwo = (num1, num2) =>  (num1 + num2);
//console.log(addTwo(3,4));

// Immeadiatel Invoked Funcion Expressions (IIFE)
(function chai1() {
    console.log(`DB CONNECTED`);
    
})();



//global scope k variable k pollution se bachne k liye usee hota h iife

(
    (name) => {
        console.log(`db connect 2 ${name}`);
        
    }
)('hitesh');