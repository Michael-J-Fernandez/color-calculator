// Completed stretch goal can be found in "stretch-goal-includes.js" within this (color-calculator) repository.

const prompt = require('prompt-sync')({ sigint: true });

console.log("Would you like to combine or deconstruct a color?");

let colorMethod = Number(prompt("Type in the number for the method: 1-Combine 2-Deconstruct: > "));
let color
let color1
let color2


if (colorMethod === 1) {
    console.log("What colors would you like to combine? Type the number for:");
    color1 = Number(prompt("The first color: 1-Red, 2-Blue, 3-Yellow: > "));
    color2 = Number(prompt("The second color: 1-Red, 2-Blue, 3-Yellow: > "));
    if (color1 === 1 && color2 === 1) {
        console.log ("Your color will be Red!")
    } else if (color1 === 2 && color2 === 2) {
        console.log ("Your color will be Blue!")
    } else if (color1 === 3 && color2 === 3) {
        console.log ("Your color will be Yellow!")
    } else if ((color1 === 1 && color2 === 2) || (color1 === 2 && color2 === 1)) {
        console.log ("Your color will be Purple!")
    } else if ((color1 === 1 && color2 === 3) || (color1 === 3 && color2 === 1)) {
        console.log ("Your color will be Orange!")
    } else if ((color1 === 2 && color2 === 3) || (color1 === 3 && color2 === 2)) {
        console.log ("Your color will be Green!")
    } else {
        console.log ("Error. Invalid Entry!")
    }
} else if (colorMethod === 2) {
    console.log("What color would you like to deconstruct? Type the number for: ");
    color = Number(prompt("1-Purple, 2-Orange, 3-Green: > "));
    if (color === 1) {
        console.log("You chose Purple, which is made up of Red and Blue!") 
    } else if (color === 2) {
        console.log("You chose Orange, which is made up of Red and Yellow!") 
    } else if (color === 3) {
        console.log("You chose Green, which is made up of Blue and Yellow!") 
    } else {
        console.log ("Error. Invalid Entry!")
    }
} else {
    console.log ("Error. Invalid Entry!")
}