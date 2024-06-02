//lab.js - Sort into different harry potter house
//Requirements: jQuery must be loaded for this script to work.

//Author: Harlow Knott and Maya Pahre
//Date: May 2024
//*


//To link the functionality to a button, you need to modify the JavaScript to run the function when the button is clicked. Here's how you can do it:

//Step 1: Update JavaScript to Handle Button Click
//Modify the script.js to include an event listener for the button:

// script.js

const responses = [
    {
        "answer": "yes",
        "forced": false,
      
    },
    {
        "answer": "no",
        "forced": false,
      
    }
];

const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};

const displayResponse = () => {
    const response = getRandomResponse();
    const answerElement = document.getElementById('answer');
    const imageElement = document.getElementById('image');

    answerElement.textContent = response.answer;
    imageElement.src = response.image;
};

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('displayButton');
    button.addEventListener('click', displayResponse);
});