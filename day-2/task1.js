/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];


/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

function greeting(name, gender, isSelf) {
    var greetings;
    // do stuff here ...
    
    if(gender=="male")
    {
        if (isSelf==true)
        {
        greetings = `${greetingWords[0]}, ${prefixes[0]} name is ${name}`

        }
        else
        {
        greetings = `${greetingWords[0]}, ${prefixes[1]} name is ${name}`

        }
        
    }
    else if(gender=="female")
    {
        if (isSelf==true)
        {
        greetings = `${greetingWords[1]}, ${prefixes[0]} name is ${name}`

        }
        else
        {
        greetings = `${greetingWords[1]}, ${prefixes[2]} name is ${name}`

        }
        
    }
    else
    {
        greetings = `${greetingWords[2]}, ${prefixes[3]} name is ${name}`
        
    }
   

    return  greetings; // use template literal for string to return
  }

console.log(greeting(`Tek`, `male`, true));

console.log(greeting(`Jessica`,"female",false));
console.log(greeting(`Randy`, `non-binary`, false));

