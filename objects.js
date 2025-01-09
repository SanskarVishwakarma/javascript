//objects - singleton


//Object.create
//objects literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "hitedh choud",
    [mySym]: "myKey",
    age: 18,
    location: "jaipur",
    email: "gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);


JsUser.email = "google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    //console.log("hello jsuser");
    
}
JsUser.greeting2 = function(){
    //console.log(`hello jsuser, ${this.name}`);
    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


//object part 2

const tinderUser = new Object()
//const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "somgmail.com",
    fullName: {
        userName: {
            firstName: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullName?.userName.firstName);

const obj1 = {
    1: "a", 2:"b"
}
const obj2 = {
    3: "a", 4:"b"
}

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "gmail.com"
    },
    {
        id: 1,
        email: "gmail.com"
    },
    {
        id: 1,
        email: "gmail.com"
    }

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //to get keys of object tinderuser


// console.log(Object.values(tinderUser)); // to get values

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object part 3 json/api

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstrutor: "hitesh"
}

//course.courseInstrutor

const {courseInstrutor: instrutor} = course

//console.log(courseInstrutor);
//console.log(instrutor);

const navbar = ({comapany}) => {


}

navbar(comapany = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {}
// ]