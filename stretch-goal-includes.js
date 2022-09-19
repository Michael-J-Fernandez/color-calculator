// This is the stretch goal for this assignment. The main solution can be found in "main.js" within this (color-calculator) repository.

const prompt = require('prompt-sync')({ sigint: true });

let colorInput = prompt("Enter two primary colors, or one secondary color: ")
let color = colorInput.toLowerCase()

if (color === "purple") {
    console.log("Purple is made by combining red and blue.")
} else if (color === "orange") {
    console.log("Orange is made by combining red and yellow.")
} else if (color === "green") {
    console.log("Green is made by combining blue and yellow.")
} else if (color.includes("red") && color.includes("blue")) {
    console.log("Red and blue make purple.")
} else if (color.includes("red") && color.includes("yellow")) {
    console.log("Red and yellow make orange.")
} else if (color.includes("blue") && color.includes("yellow")) {
    console.log("Blue and yellow make green.")
} else {
    console.log ("Error")
}