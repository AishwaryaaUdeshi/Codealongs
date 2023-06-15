// Accessing Elements from the DOM & Storing in Variables  


// 📝 $- This dollar sign is packed with functionality! It gives the instructions: go to the HTML document, and find a specific element.
// ('h1') - this is the argument passed to the $ function. It says: go look in the HTML document for all the h1 elements that you find.
// Since we stored the value of this in the header variable, we can console.log() this and see the HTML element.

// 🌟 Write code to ask for the text from the element.


// We can also access elements by classes! How can we access elements by selecting the class name? 
// console.log(variableName) = $(.className);

// 🌟 How can we access the line "Baby seals are called pups" using a class name?



// 🌟 Try-it #1: Accessing Elements 🌟
// Write code to access each element and store it in a variable, then print to the console. Practice accessing elements by element type or class. In the console, you should see your console.log statements.
//Bonus: Try accessing elements' text as well!



// ---------------🌟 CHALLENGE 🌟---------------
// Create a duplicate of the `h1` element in the HTML and check the console. Was anything different printed this time? Why? What does this tell you about the importance of using classes?



// ---------------💪 CHANGING DOM CONTENT 💪---------------
// Now that we can access elements and store them in a variable, the possibilities are endless! Let’s start by changing the text inside of an element by using the method .text() 
// Change Content on the DOM by using .text()


// 🌟 Try-it #2: Change Text 🌟
// By only adding code to the JavaScript file, change the text inside of at least two elements.


// ---------------🌟 EXTREME CHALLENGE 🌟---------------
// If you changed the text of the h1 on one line of code, then on the line below changed it to something else, which one would show in the browser? Why?



// ---------------💪 EVENTS 💪---------------
// An event is any action that the user takes while on our site. Clicking a button, scrolling down, hovering over something, and more.

// 📝 Event Listener
// In order for our site to respond to events, we need to write some code so that our site becomes “smart” enough to look out for a specific event on a specific element. This “lookout” is called an event listener. Their job is to sit around and wait for an event to take place in the browser, and call a function for us when it does.

// 📝 Event Handler
// The event handler is the function that’s called when the event occurs. In our previous example, the function doSomething was our event handler. 


// 🌟 Try-it #3: Event Listeners & Handlers 🌟
// 1. Add a `button` element in the HTML.
// 2. Update the JavaScript so that when the button is clicked, the text in the `h1` changes to something that it wasn't originally.
// 3. When you're done, answer these questions with your partner:
// 3.1. What line of code is your event listener on?


// 3.2. What type of event is your listener on the lookout for?


// 3.3. What is the name of your event handler?


  
// 🌟 DOM Manipulation Practice
// Ever wonder how sites or apps create the "dark mode" feature? You're about to do just that!
// 🌟 Create two button elements in your HTML, both nested inside of a div. One button should be labeled "light mode" and the other "dark mode". They will both need their own class name.


// 🌟 Now, write the JavaScript so that when the dark mode button is clicked, the background color of the div changes to a dark color. When the light mode button is clicked, the background color should change to a light color.


// ---------------🌟 CHALLENGE 🌟---------------
// When an application uses dark mode, not only does the background color change but the fonts, colors, etc. too. Add a few more elements to your HTML. When each button is clicked, those elements should change colors appropriately.



// ---------------🌟 EXTREME CHALLENGE 🌟---------------
// In addition to light and dark modes, add a "party mode" button. When clicked, the user should see a screen that looks like a party! Use a background image instead of a background color. Have some fun with it!