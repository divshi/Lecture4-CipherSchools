// Promise is a class in JS
// constructor (function)

// let myPromise = new Promise((fulfilled, notFullfilled) => {
//     let num1 = 10;
//     let num2 = 15;
//     let sum = num1 + num2;
//     if (sum > 24) {
//         fulfilled();
//     } else {
//         notFullfilled();
//     }
// });

// myPromise
//     .then(() => {
//         console.log("Promise was fulfilled");
//     })
//     .catch(() => {
//         console.log("Promise was not fulfilled");
//     });

function addTwoNumbers(num1, num2) {
    //     let myPromise = new Promise((fulfilled, notFullfilled) => {
    //         // setTimeout(()=>{
    //         //     console.log("Inside setTimeout");
    //         //     fulfilled(num1+num2);
    //         // }, 5000);
    //         // notFullfilled(new Eroor ("An error occurred"));
    //    });

    return new Promise((fulfilled, notFullfilled) => {
            setTimeout(()=>{
                console.log("Inside setTimeout");
                fulfilled(num1+num2);
            }, 5000);
        });
    }


    addTwoNumbers(10, 5)
        .then(() => {
            console.log("Promise was fulfilled");
        })
        .catch(() => {
            console.log("Promise was not fulfilled");
        });

// function addTwoNumbers(num1, num2){
//     let sum = 0;
//     setTimeout(()=> {
//         // It will occur during API calls and database calls
//         // Creating/Reading a file
//         console.log(num1 +num2);
//         sum = num1 + num2;
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }

// console.log(addTwoNumbers(2,3));