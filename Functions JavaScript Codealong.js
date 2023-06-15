// Functions Codealong

// 📝 A function is an action in our code. It has a specific job, and it sits around waiting to be asked to do it. It can perform its job as many or as few times as we need. It can have a very small job (add two numbers together) or a very big job (find the standard deviation of 1 million numbers). We write them, so we have control over what each function does!

// 🌟 Let's make a function about walking a dog 🐶
// 1. Declare a function. To declare a function means to name it and give it instructions.


// 2. Call the function. Calling a function means writing a line of code to make the function carry out its task. We call a function like this: functionName();


// 🌟 Declaring & Calling a Function
// 1. Declare and call a function named sayHello. Write 2-4 console.log statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.


// 2. Declare and call a function named sayGoodbye. Write 2-4 console.log statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.


// ---------------🌟 CHALLENGE 🌟---------------
// Did your sayHello sentences print before or after your sayGoodbye sentences? Why?


// 🌟 Let's re-write our dog 🐶 function and add some parameters to help make our function more dynamic.  
// If there are two dogs, our function needs to put two leashes on, bring two poop bags, etc.
// We can make functions a little ‘smarter’ with arguments and parameters.

// 📝 Parameters live inside the parenthesis right after the function & if there is more than one they should be separated by a comma and a space.
// Now that we've given the function some parameters, it is expecting an argument. An argument is the value(s) you want to store in the parameter variable(s). 
// 🌟 Pass 2 as an argument for the parameter of numberOfDogs.


// We can also do some calculations with our parameters - just like we’ve done with variables. Let’s say we want to set an expectation that the robot walks each dog for 15 minutes. We can use the parameter to tailor the total number of minutes walked for each walk. 


// 🌟 Try-it #1 🌟
// Write a function that will take 1 argument when called, a number. The function should console.log the sum of that number and 5. Make sure to name your function something related to its job.

// 🌟 Try-it #2 🌟
// Write a function that will take 2 arguments when called, both being numbers, and that will console.log the sum of those two numbers. Make sure to name your function something related to its job.

// 🌟 Try-it #3 🌟
// Write a function that will take 3 arguments when called, all being numbers. It should sum the first two numbers, then multiply that sum by the third number and console.log the result. Make sure to name your function something related to its job.


// ---------------💪 RETURN VALUES 💪---------------
// Up until now, inside our functions, we’ve only called console.log on values- in the future, we will need our functions to return values so we can use them elsewhere.
// ❗️❗️❗️ IMPORTANT ❗️❗️❗️
// Each function can only return one value.
// If we don’t explicitly return a value with the return keyword, the default return value is undefined.
// Once the program reads the return keyword and the rest of the code on that line, it will exit that function. So, no code written below the return keyword will ever be read.

// Write a return statement for your dog 🐶 function.


//❗️In this function, we are not calling console.log, so when we call it, we won’t see an output. But, we can store the output in another variable.

// If we were only walking 1 dog, the sentences would read incorrectly, for example, “put on 1 leashes”. Let’s write a conditional inside the function based on the number of dogs.



// 🌟 Try-it #4 🌟
// Write a function that takes one argument, a gradeLevel. It should then print out "You are in elementary school" or "You are in middle school", etc. based on the grade level passed in. Now, write another function that takes in a number, a dogAge, and multiplies it by 7. It should print out a sentence telling the dog how old it is in human years.



// 🌟 Try-it #5 🌟
// As a class, let's brainstorm another task that we can code (in our previous example, it showed what you need to bring with you on a dog walk). With your partner, decide which task you'd like to write code for. Make a list of steps that would be required to complete the task. Make a list of possible arguments you could pass the function to make it dynamic. Show this to one of the members of the instructional team, and if they approve it, declare and call your function. Now, re-write your function so it not only prints data to the console, but returns a value. Store the return value in a variable.