// Arrays JavaScript Codealong
// Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection.

// 🌟 Warm-Up 🌟
// 1. Brainstorm a real-life scenario that uses iteration. For example- scenario: grading papers, collection: paper
// For each...


// Do this:	


// Then:



// 2. Think of how arrays are used in apps that you use. Why might developers iterate over collections? Jot down your scenario.
// Scenario	


// Collection	


// For each...	


// Do this:	


// Then:



// ---------------💪 ITERATOR METHODS 💪---------------
// You've already learned about the array methods .push() and .pop(). Today we will use another array method, .forEach(). It is an iterator method because its job is to run a function not only once, but one time for each element in the array.
// Iterators save us time. When we want to repeat the same thing for a lot of items, we only have to write that command once. 
// Example: If we wanted to do something with each string in the trending array, we would need to write code for each element, like this:
var trending = ["@thecardguy", "@cosette", "@avani", "@lorengray"];

console.log(`Have you seen that TikTok from ${trending[0]} yet?!`);
console.log(`Have you seen that TikTok from ${trending[1]} yet?!`);
console.log(`Have you seen that TikTok from ${trending[2]} yet?!`);
console.log(`Have you seen that TikTok from ${trending[3]} yet?!`);

// Right now, this doesn’t seem so bad. What if we had 100 creators on our list? 1000? That’s a lot of lines of code to write and potentially a lot of places we would need to update it every time we added or removed a creator.

// 🌟 forEach 🌟
// arrayName.forEach(function(value){whatever you want to happen});
// You make up the name for the value! Typically it is whatever the elements are inside the array

// 🌟 Try-it #1 🌟
// 1. Write an array with at least four elements, strings, of things you want to learn.


// 2. Write a forEach for this array and print out "I want to learn ____" for each element.



// ---------------💪 PLACEHOLDERS & CONTAINERS 💪---------------
// Sometimes, when iterating over an array, our end goal won’t be to do the exact same thing to each element. Sometimes we’ll want to combine elements or filter through them and only use some of them.
// Example: Tumblr has an array of posts related to each term. When we first search a term, we’ll see all the posts. If we select “Link” from the filter drop-down, we’ll only see the two posts that are links.
// Tumblr iterated over the array of all posts, checked each one for a piece of criteria, and put those that met the criteria in a placeholder. After it finished iterating, it returned the placeholder and displayed them in the browser.

// Similar to Tumblr, below we take an array of numbers and return an array of only the numbers from the original array that are greater than 10.
//❗ forEach won’t ever change the array it was called on.
var numberArray = [1, 4, 23, 14, 5, 7, 11, 6, 92];

// Create a placeholder array that will eventually store numbers over 10.


// Iterate over the array.



// 🌟 Try-it #2 🌟 
// 1. Write an array that contains at least five Strings and store it in a variable. You choose what the words are!


// 2. Use forEach to create a new array of the words from your original array that have less than 6 characters. Use console.log() to verify your new array holds what you think it does.



// ---------------🌟 CHALLENGE 🌟---------------
// Declare a function called findLongestWord. It should iterate over an array of Strings. Your function should return one String, the String from the original array that had the greatest number of characters. If there is a tie for the greatest number of characters, return the last one that is in the array.