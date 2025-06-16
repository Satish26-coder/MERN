console.log("script loaded! Let's manipulate the DOM and handle events.");

// Elements selected from Day 5 (or re-select them for practice)
const mainHeading = document.getElementById("main-heading");
const introMessagePara = document.getElementById("introMessage");
const firstBox = document.getElementById("first-box");
const changeTextButton = document.getElementById("changeTextBtn");
const sampleImage = document.getElementById("sampleImage");
const changeImageButton = document.getElementById("changeImageBtn");
const testLink = document.getElementById("testLink");
const styleToggleButton = document.getElementById("styleToggleBtn");
const footerText = document.getElementById("footer-text");

console.log(mainHeading);
console.log(footerText);

/*1.how to change text or html inside the element
2.how to change attribute
3.how to change the style of an element
4.events-how to run the actions
*/
//modifying element content&attributes
//changing text content-.textContent
console.log("intitial intro text:",introMessagePara.textContent);
introMessagePara.textContent="this is new para updated by satish";
//changing html content->.innerHTML
const firstBoxContentPara=firstBox.querySelector("p");
if(firstBoxContentPara){
    firstBoxContentPara.innerHTML="Content <strong>dynamycally</strong> changed with <em>innerHTML</em> <button>click me</button>";

}
//modifying css styles
mainHeading.style.color="red";
mainHeading.style.backgroundColor="yellow";


//Events->
changeTextButton.addEventListener("click",function(){
    alert("button clicked");
});