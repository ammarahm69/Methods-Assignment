
/**Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser/**/

let userInput = prompt("Enter phone name");
let word = userInput.split(" ");
let capsSentence = "    ";
for (let i = 0; i < word.length; i++) {
    capsWord = word[i][0].toUpperCase() + word[i].slice(1);
    capsSentence += capsWord + "  ";
}

document.write(`<h1>My favourite phone is : ${capsSentence}</h1>` + '<br>');
document.write(`<h3>Length of favourite phone is ${capsSentence.length}<br>`);

document.write('<br>');

/**Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */
let country = 'pakistani';
let str = country.charAt(0).toUpperCase() + country.slice(1);
document.write(`<h2>String : ${str}` + '<br>')
let index = str.indexOf("n");
document.write(`Index of 'n' ; ${index}` + '<br>');
document.write(`Character at index (3) is : ${str.charAt(3)}`)

document.write('<br>');
// document.write('<br>');
// document.write('<br>');

/**Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */
let greet = "hello world";
let str2 = greet.split(" ");
let capitalSentence = "";
for (let i = 0; i < str2.length; i++) {
    capitalWord = (str2[i][0].toUpperCase() + str2[i].slice(1));
    capitalSentence += capitalWord + " ";
}
document.write(`String : ${capitalSentence}` + '<br>');
document.write(`Last Index of 'l' : ${capitalSentence.lastIndexOf("l")}  ` + '<br>');


/**Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. */

const city = "Hyderabad";
document.write(city + " replaced by Hyder to Islam")
const newCity = city.replace("Hyder", "Islam");
document.write('<br>')
document.write("New word " + newCity);

/**Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */

const message = "Ali and Sami are best friends. They play cricket and football together.";
const replace = message.replace(/and/g, "&");
document.write('<br>');
document.write('<h2>' + replace + '<br>');
/**9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */

let numberString = "472";
document.write(typeof parseInt(numberString));

/**Write a program that takes user input. Convert and
show the input in capital letters. */
const userText = "peanut".toUpperCase();
console.log(userText);

/**Write a program that takes user input. Convert and
show the input in title case. */
let txt = 'javascript';
let uppercase = txt.toUpperCase().charAt(0) + txt.slice(1);
console.log(uppercase);


/**Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */
let num2 = 35.36.toString();
console.log(num2);
let result = num2.replace(".", "");
console.log(result);


/**Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ . */

const username = prompt("Enter your username: ");
const specialSymbols = ['@', '.', ',', '!'];
let isValid = true;
for (let i = 0; i < specialSymbols.length; i++) {
    if (username.indexOf(specialSymbols[i]) !== -1) {
        isValid = false;
        break;
    }
}
if (isValid) {
    alert("Valid username!");
} else {
    alert("Invalid username! Please enter a valid username without special symbols.");
}


/**You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example: */

const search = prompt("Search item").toLowerCase();
const items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let found = false;
for (let i = 0; i < items.length; i++) {
    if (search.indexOf(items[i]) !== -1) {
        found = true;
        break;
    }
}
document.write('<br>')
document.write('<br>')
if (found == true) {
    document.write(`<h2>${search} is available in our bakery`)
} else {
    document.write(`<h2>${search} is not available in our bakery`)

}


/**Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */

let userPasword = prompt("Enter password");
if (userPasword.charAt(0) == parseInt(userPasword) || userPasword == userPasword.slice(0,7)){
   alert("Enter a valid password (a-z, A-Z & 0-9) and it must 6 character long")
}else{
    alert("Correct Password!!")


}
/**Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */
let university = "University of Karachi";
let res = university.split("");
for(let i = 0 ; i< res.length ; i++){
    console.log(res[i]);
}


/**Write a program to display the last character of a user
input. */
let userLast = prompt("Enter name");
let lastChar = userLast.slice(-1);
console.log("User name is "+userLast+" & last alphabet is "+lastChar);

/**You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string. */
let dummyTxt= "The quick brown fox jumps over the lazy dog".toLowerCase();
console.log(dummyTxt);
let count = 0;
for(let i =0 ; i <dummyTxt.length; i++){
   if(dummyTxt.slice(i,i+3) == 'the'){
    count++;
    // console.log(dummyTxt[i]);
   }
}
console.log("There are "+count+ " the in this text");






