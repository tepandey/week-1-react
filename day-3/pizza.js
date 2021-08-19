/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
 ​
 */
function drawSmallPizzaSlice() {
    return 'Small' + '\n' + ' - ' + '\n' + '|_| ' + '\n' + '\n';
}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 */
function drawMediumPizzaSlice() {
    return 'medium' + '\n' + '\n' + ' -- ' + '\n' + '|__|' + '\n' + '\n';
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
 ​
 */
function drawLargePizzaSlice() {
    return 'large' + '\n' + '\n' + ' -- ' + '\n' + '| .| ' + '\n' + '|__| ';
}
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 *
 * Small - Length 1 width 1:
   -
  |_|
 ​
 *
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 ​
 *
 * Large - Length 2 width 2:
 *
  
   --
  | .|
  |__|
 ​
 */
function drawAnyPizzaSlice(input) {
    //condition ? expression_1 : expression_2
    if(input==`small`)
    {
    console.log(drawSmallPizzaSlice());
        
    }
    else if (input==`medium`)
    {
    console.log(drawMediumPizzaSlice());

    }
    else if(input ==`large`)
    {
    console.log(drawLargePizzaSlice());
    }
    else if(input ==`large`){
    console.log(drawSmallPizzaSlice());
    console.log(drawMediumPizzaSlice());
    console.log(drawLargePizzaSlice());
    }
    else
    {
    console.log(`Please enter a valid input`)
    }


}

const input = prompt("Enter a size, small ,medium, large", "all")

console.log(drawLargePizzaSlice(input));
