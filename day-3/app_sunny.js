var SUNNY_DAY_MESSAGE = "It is sunny ou today";
var isSuny = true;
var numberSunnyDays = 1;
function sunnyDayMessage(isSunny, numberSunnyDays) {
    var i = "sunny";
    if (isSunny == false) {
        i = "cloudy";
    }
    return "Hi! It is " + i + " Today. It has been " + i + " for  " + numberSunnyDays + " days in a row.";
}
console.log(sunnyDayMessage(true, 5));
