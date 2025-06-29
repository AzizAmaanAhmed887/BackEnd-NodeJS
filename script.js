import {sum , PI} from "./math.js"
import { generate } from "random-words";
// console.log(sum(1,5));

console.log(generate());


// const fruits = require('./fruits');
// console.log(fruits.banana); // banana

// // Throws error because module figlet not downloaded here in Directory -> Node.js
// let figlet = require("figlet");
//
// figlet("Aziz Amman Ahmed!!", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });
//
// figlet.text(
//     "hello Amman!",
//     {
//         font: "Ghost",
//         horizontalLayout: "default",
//         verticalLayout: "default",
//         width: 80,
//         whitespaceBreak: true,
//     },
//     function (err, data) {
//         if (err) {
//             console.log("Something went wrong...");
//             console.dir(err);
//             return;
//         }
//         console.log(data);
//     }
// );