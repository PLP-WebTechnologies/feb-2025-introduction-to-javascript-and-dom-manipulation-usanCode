// Select the element you want to change
const firstHeading = document.getElementById("myFirstHeading");

// Add an event listener for the mouseover event
firstHeading.addEventListener("mouseover", () => {
    firstHeading.textContent = "Introduction to Javascript DOM and manipulation (By Me)!";
});

// Add an event listener for the mouseout event to revert the change
firstHeading.addEventListener("mouseout", () => {
    firstHeading.textContent = "Introduction to Javascript DOM and manipulation"; // Replace with the original text
});

const thirdHeading = document.getElementById("myThirdHeading");

thirdHeading.addEventListener("mouseover", () => {
    thirdHeading.textContent = "What is JavaScript?(By Me)";
});

thirdHeading.addEventListener("mouseout",() => {
    thirdHeading.textContent = "What is Javascript?";
});

const divBackground = document.querySelector(".container");

divBackground.addEventListener("mouseover", () =>{
    divBackground.style.backgroundColor = "yellow"; 
});


divBackground.addEventListener("mouseout", () => {
    divBackground.style.backgroundColor = ""; 

});

// Select the button and the content div
const toggleButton = document.getElementById("toggleButton");
const dataTypesContent = document.getElementById("dataTypesContent");

// Add an event listener to the button
toggleButton.addEventListener("click", () => {
    if (dataTypesContent.style.display === "none") {
        dataTypesContent.style.display = "block"; 
        toggleButton.textContent = "Hide"; 
    } else {
        dataTypesContent.style.display = "none"; 
        toggleButton.textContent = "Show"; 
    }
});
