"use strict";
//storing a person name in a variable
let personName = "ammara riaz";
//printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//printing a person name in uppercase
console.log("uppercase:", personName.toUpperCase());
//printing a person name in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
