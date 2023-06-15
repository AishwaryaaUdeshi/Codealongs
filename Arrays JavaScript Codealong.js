// ---------------🌟 VARIABLE CHALLENGE 🌟---------------
// In the space below, declare a variable for every student in the room, including yourself. The variable names should be something like student1, student2, etc. and the values should be Strings of their first names. Be ready to share your code!



// ---------------💪 COLLECTIONS 💪---------------
// Collections are data types that hold multiple things. Collections are made up of many different things--Here you just made a collection of many scholar names... An array will allow us to store all scholar names in one variable!

// ---------------💪 ARRAYS 💪---------------
// Array: an ordered list of multiple values that can be stored as one variable (Order matters!!). Much simpler than declaring var several times. Pro Tip: an array can store any kind of element - from numbers to strings, even other arrays!

// In real life, Instagram uses arrays to hold all the posts for a given user. Alfie the Alpaca 🦙 has over 1,000 posts, so the array is over 1,000 elements long! 
// TikTok has an array of trending creators stored in their program. TikTok shows the information of the first four creators on the “Discover” page. When a user clicks the arrow to see more, TikTok shows the information of the second four trending creators, etc.

// 📝 Array Example: 
// var arrayName = ["item zero", "item one", "item two", "item three", "item four"];
// console.log(arrayName);

// 🌟 Try-it #1: Array Syntax 🌟
// Create a variable named students that stores an array of Strings. The Strings should be the names of the students in our camp. Make sure your array prints correctly! 


// 📝 Accessing an Element: Each element in an array is automatically assigned a number called an index. This index is based upon position and can be used to access a specific element inside the array. Indices begin at 0 and count up. 

// 📝 To access an element:
// console.log(arrayName[index]);
// Example: 
var instructors = ["Julia", "Alli", "Theresa", "Neha", "Leah"];

// Julia has an index of 0
instructors[0]
// Alli has an index of 1
instructors[1]
// Theresa an index of 2
instructors[2]
// Neha an index of 3
instructors[3]
// Leah an index of 4
instructors[4]


// 🌟 How can we print just Neha? 


// 📝 Finding Length of Array:
// console.log(arrayName.length)

// 📝 Finding a String's index:
// console.log(varName.indexOf(""));

// 🌟 Try-it #1: Creating arrays 🌟
// Create a variable that stores an array of at least 4 Strings- you choose what the content is about. The variable names should describe the type of data those 4 Strings hold.


// 🌟 Write a series of console.log() statements: print out the first element, the last element, and then the second element.


// 📝 Updating elements
// Example: arrayName[1] = "new item one"
// console.log(arrayName) 
// 🖨 This prints ["item zero", "new item one", "item two", "item three", "item four"]

// 📝 Adding elements
// .push adds to the end of an array
// Example: arrayName.push("item five")
// 🖨️ This prints ["item zero", "new item one", "item two", "item three", "item four", "item five"]

// 📝 Removing Elements
// arrayName.pop(); ➡️ This removes the last element
// Example: arrayName.pop
// console.log(arrayName) 
// 🖨️ This prints ["item zero", "new item one", "item two", "item three", "item four"]

// arrayName.shift(); ➡️ This removes the first element (think everyone is shifting forward)
// Example: arrayName.shift
// console.log(arrayName) 
// 🖨️ This prints ["new item one", "item two", "item three", "item four"]


// 🌟 Try-it #1: Modifying arrays 🌟
// For this, you will use the array you wrote in the previous Try-it.
// 1. Practice accessing specific elements. Make sure to console.log() to verify you are accessing what you think you are.


// 2. Now, add two new elements into your array. Use a console.log() to make sure they have been added.


// 3. Lastly, remove at least two elements from your array. Again, make sure they have been successfully removed by printing to the console.



// 📝  Random Elements
// Sometimes, we want to pull an element out of an array at random- have any of your teachers ever used popsicle sticks to decide who to call on? That’s a real-life example. We can do the same thing with programming!
// JavaScript gives us a tool called Math to do advanced math, like square roots, logarithms, etc. Math also includes some options for generating random numbers. We’ve got:

// Math.random(); ➡️ returns a random decimal from 0-1
// console.log(Math.random());

// Math.floor(# or variable); ➡️ returns the value of a number rounded down to the nearest integer


// 🌟 How can we generate a random integer between 0 and 10 using Math.random() and Math.floor()?


// 🌟 Let’s incorporate arrays! First, let's generate a random number for the number of students.

// 1. First, generate a random decimal:


// 2. Now, let’s multiply it by the number of students:


// 3. We need to have an integer, so let’s round the number down:


// Going back to “why would this be useful”? A teacher could have a program with an array of names, like this:
var students = ["Abigail", "Amy", "Angela", "Avery", "Chloe", "Christina", "Corina", "Dharini", "Genesis", "Grace", "Isha", "Juliana", "Keira", "Lipicka","Natalie", "Pari", "Phoebe", "Rachel", "Rohini", "Shayla"];

// 🌟 Now, the teacher can write a pickStudent function. Give it a try!



// ❗ Discuss ❗
// Considering this section on selecting random elements from an array, answer the following questions with your partner(s):
//❓ What does Math.random() do?


//❓ Why did we choose to multiply Math.random() by 20 for this example?


//❓ What does Math.floor() do?


//❓ Why do we have to pass an argument, or put a number inside the parenthesis for Math.floor()?


//❓ Is it possible for this function to ever return the same number? Why or why not?


// 🌟 Arrays Practice
// Declare a variable called following that stores an array of your top five favorite accounts to follow on social media, in strings.
var following = ["@taylorswift", "@1direction", "@badgirlriri", "@the1975", "@beyonce"]
// -Change the value of at least one of the elements in the array.


// -Add a new account to the array.


// -Remove the last account from the array.


// -Print the value of the third element of the array.


// -Change the value of another element in the array.


// -Add another account to the array.


// -Console log the value of the first element of the array.


// -Print one account to the console, at random.



// ---------------🌟 MULTI-TOPIC CHALLENGE 🌟---------------
// Write a function that takes in one argument, a String. If the String is "happy", output a randomly generated sentence about being happy. If the String is "ok", output a randomly generated sentence about being ok. If the String is "sad", output a randomly generated sentence to cheer someone up. You will need to use a function, conditional, multiple arrays, and have to generate a random number.