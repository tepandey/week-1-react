/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
 ​
 function getArea(radius){
     return Math.PI*radius*radius;
​
 }
​
 function getDiameter(radius) {
     return radius*2;
​
 }
​
 function getCircumfrence(radius) {
     return Math.PI* getDiameter(radius);
​
​
 }
 const radius = 2;
 console.log(`Area = ${getArea(radius)}  Diameter =  ${getDiameter(radius)}  Circumference = ${getCircumfrence(radius)}`);