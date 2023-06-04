// console.log('test');
//*just to test if the js file is working properly or not

var nameRef = document.querySelector('input[type="text"]');
console.log(nameRef);
//Create a variable to reference the “Name” <input type="text"> element and log the variable out to the console to ensure the correct element is being referenced.

nameRef.focus();
//Use the variable and the .focus() method to add the focus state to the element.


//*test to see if the element is indeed active or not
if(document.activeElement === nameRef) {
    console.log("element has the focus state active");
} else {
    console.log("element doesn't have the focus state active");
}
//*test to see if the element is indeed active or not


// Create variables to reference the "Job Role" <select> element and the "Other job role" <input type="text"> element. 
var jobRoleRef = document.getElementById('title');
var otherJobRoleRef = document.getElementById('other-job-role')
// Create variables to reference the "Job Role" <select> element and the "Other job role" <input type="text"> element. 
console.log(jobRoleRef);
console.log(otherJobRoleRef);
//log out the two variables to test if everything is working correctly


//Use the "Other job role" variable to hide this element by default.
otherJobRoleRef.style.display = 'none';
//Use the "Other job role" variable to hide this element by default.



    // Use the variable for the "Job Role" menu to listen for the change event on this element. When a "change" is detected, use a conditional statement to check the value property of the element. The event.target statement will be helpful here. Log out the condition and the event.target’s value to inspect them. You’ll have to make a selection in the "Job Role" menu to print those log statements to the console.
jobRoleRef.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);

    if(event.target.value == "other") {
        otherJobRoleRef.style.display = 'block';
        //will show the text field if value equals other
    } 
    else {
        otherJobRoleRef.style.display = 'none';
        //will hid the text field
        otherJobRoleRef.value = "";
        //this line makes is to that the text field is blank/reset every time a different role is selected and if something was typed into the text field
    }
    // console.log(event)
    } );
    // Use the variable for the "Job Role" menu to listen for the change event on this element. When a "change" is detected, use a conditional statement to check the value property of the element. The event.target statement will be helpful here. Log out the condition and the event.target’s value to inspect them. You’ll have to make a selection in the "Job Role" menu to print those log statements to the console.

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

var colorRef = document.getElementById('color');
var designRef = document.getElementById('design');
var colorOptionsRef = colorRef.children;
//declaration
console.log(colorRef);
console.log(designRef);
console.log(colorOptionsRef);
//log to test

colorRef.disabled = true;
//set it to disabled cant interact: color select element

designRef.addEventListener("change", (event) =>
{

    colorRef.disabled = false;
    //enabled


});


