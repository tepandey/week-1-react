const SUNNY_DAY_MESSAGE: string =  "It is sunny ou today";
let isSuny: boolean = true;
let numberSunnyDays: number =1;


function sunnyDayMessage(isSunny:boolean, numberSunnyDays:number):string { 
    let i:string = "sunny";

if (isSunny==false)
{
    i = "cloudy";
}
return `Hi! It is ${i} Today. It has been ${i} for  ${numberSunnyDays} days in a row.`

}

console.log(sunnyDayMessage(true, 5));