 // Select elements we'll work with
const clickMeButton = document.getElementById("clickButton");
const hoverMeButton = document.getElementById("hoverButton");
const eventInfoBox = document.getElementById("eventBox");
const nameInputField = document.getElementById("nameInput");
const inputDisplayPara = document.getElementById("inputDisplay");
const messageAreaPara = document.getElementById("messageArea");

console.log("Elements selected. Ready for events!");

// Event listeners will be added here during the class
//what are events?
//event handling->
//element.addEventListener("event", function(){}); //anonymous function
//click event on button
clickMeButton.addEventListener("click", function(eventDetails) {
    console.log(eventDetails); //log the event object to console
    console.log("Event type: " + eventDetails.type); //log the event type
    console.log("Event target: " + eventDetails.target); //log the event target

    console.log("Button clicked!");
    alert("Button clicked!");
    messageAreaPara.textContent = `you ${eventDetails.type}ed on button with ID: ${eventDetails.target.id}`;
    messageAreaPara.style.color = "blue";
});
//mouseover event on button
hoverMeButton.addEventListener("mouseover", function() {
    //console.log("Button hovered!");
    alert("Button hovered!");
    eventInfoBox.textContent = "You hovered over the button!";
    eventInfoBox.style.color = "green";
});
hoverMeButton.addEventListener("mouseout", function() {
    //console.log("Mouse left the button!");
    eventInfoBox.textContent = "You left the button!";
    eventInfoBox.style.color = "red";
});
//the event object and common events
//the event object:
//common events:
//click, mouseover, mouseout, keydown, keyup, input, change, submit
nameInputField.addEventListener("change", function(event) {
    console.log("Key pressed: " + event.key); //log the key pressed
    inputDisplayPara.textContent = `You typed: ${nameInputField.value}`;
    inputDisplayPara.style.color = "purple";
});
//input/change events:
//form event:submit
//
const myForm = document.getElementById("myForm");
if (myForm) {
    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); //prevent the form from submitting
        console.log("Form submitted!");
        alert("Form submitted!");
        messageAreaPara.textContent = "Form submitted successfully!";
        messageAreaPara.style.color = "orange";
    });
  }
  //recap:
  //1. Select elements we want to work with
  //2. Add event listeners to those elements
  //3. Handle events with functions
//4. Use the event object to get details about the event
//5. Use event.preventDefault() to prevent default actions (like form submission)
//6. Use event.target to get the element that triggered the event 
//7. Use event.type to get the type of event (click, mouseover, etc.)
//8. Use event.key to get the key pressed in keyboard events

