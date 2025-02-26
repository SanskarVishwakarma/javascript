const coding = ["js", "java", "ruby", "python", "c"]

// coding.forEach(
//     function (val){
//         console.log(val);
        
//     }
// )

// coding.forEach(
//     (val) => {
// console.log(val);

//     }
// )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach(
//     (item, index, arr) => {
// console.log(item, index, arr);

//     }
// )

const lang = [
    {
        languageName: "js",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    }
]

lang.forEach(
    (item) => {
console.log(item.languageName);

    }
)

// forEach never return any value