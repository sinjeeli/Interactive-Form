// console.log('test');
//*just to test if the js file is working properly or not

var nameRef = document.getElementById('name');
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

    for(let i = 0; i < colorOptionsRef.length; i++) {
        var tarGet = event.target.value;
        var dataTheme = colorOptionsRef[i].getAttribute('data-theme');
        console.log(tarGet);
        console.log(dataTheme);

        if(tarGet == dataTheme) {
            colorOptionsRef[i].hidden = false;
            colorOptionsRef[i].setAttribute('selected','selected');

        }
            else{
            colorOptionsRef[i].hidden = true;
            colorOptionsRef[i].removeAttribute('selected');

        }


    }
    ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
   



});


var activitiesRef = document.getElementById('activities');
var activitiescostRef = document.getElementById('activities-cost');
console.log(activitiesRef);
console.log(activitiescostRef);

var totalCost = 0;

activitiesRef.addEventListener("change", (event) => {

var dataCostRef = +event.target.getAttribute('data-cost');
console.log(dataCostRef);
console.log(typeof dataCostRef);
//
if(event.target.checked) {

    totalCost += dataCostRef;
    console.log('checked');
    }
    else{

        totalCost -= dataCostRef;
        console.log('unchecked');
    }
    console.log(totalCost);
    activitiescostRef.innerHTML = `Total: $${totalCost}`;
});
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var payment = document.getElementById('payment');
var credit = document.getElementById('credit-card');
var paypal = document.getElementById('paypal');
var bitcoin = document.getElementById('bitcoin');

console.log(payment);
console.log(credit);
console.log(paypal);
console.log(bitcoin);
//////////////////////log//////////////////////////
paypal.hidden = true;
bitcoin.hidden = true;


payment.children[1].setAttribute('selected', 'selected');

payment.addEventListener('change', (event) => {


    var selectedPayment = event.target.value;

    if(selectedPayment === 'paypal') {

        paypal.hidden = false;
        bitcoin.hidden = true;
        credit.hidden = true;   

    } else if (selectedPayment === 'bitcoin') {
        
        paypal.hidden = true;
        bitcoin.hidden = false;
        credit.hidden = true;   


    } else {

        paypal.hidden = true;
        bitcoin.hidden = true;
        credit.hidden = false; 

    }


}); 
//////////////////////////////////////////////////
var nameRef2 = document.getElementById('name');

console.log(activitiesRef);
var email = document.getElementById('email');
console.log(email);
var cardNumber = document.getElementById('cc-num');
console.log(cardNumber);
var zipCode = document.getElementById('zip');
console.log(zipCode);
var cVV = document.getElementById('cvv');
console.log(cVV);
const form = document.querySelector('form');
console.log(form);
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
form.addEventListener('submit', (event) => {

event.preventDefault();


var newNameRef = nameRef2.value;
var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var testResults = regex.test(newNameRef);
//console.log(testResults);


var newEmailRef = email.value;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var emailTestResults = emailRegex.test(newEmailRef);
/////////////////////////////////////////////////////////////////////////
var newcardNumber = cardNumber.value;
var cardNumberRegex = /^\d{16}$/;
var cardNumberTestResults = cardNumberRegex.test(newcardNumber);
/////////////////////////////////////////////////////////////////////////
var newcVV = cVV.value;
var newcVVregex = /^[0-9]{3,4}$/;
var newcVVTestResults = newcVVregex.test(newcVV);
///////////////////////////////////////////////////////////////////////////
var newZipCode = zipCode.value;
var zipCoderegex = /^\d{5}(?:-\d{4})?$/;
var zipCodeTestResults = zipCoderegex.test(newZipCode);
    ////////////////////

var nameHint = document.getElementById('name-hint');
var emailHint = document.getElementById('email-hint');
var ccHint = document.getElementById('cc-hint');
var cvvHint = document.getElementById('cvv-hint');
var zipHint = document.getElementById('zip-hint');






if (!testResults) {
    event.preventDefault();
    console.log('Invalid Name');
    nameHint.style.display = "inline";
    nameRef2.value = '';
    nameRef2.nextElementSibling.textContent = "Invalid Name";
}
else {
    nameRef2.nextElementSibling.textContent = '';
    nameHint.style.display = "none";

  }
  
  if (!emailTestResults) {
    event.preventDefault();
    console.log('Invalid Email');
    emailHint.style.display = "inline";
    email.value = '';
    email.nextElementSibling.textContent = "Invalid Email";
}
else {
    email.nextElementSibling.textContent = '';
    emailHint.style.display = "none";
  }
  
  
  if (!cardNumberTestResults) {
    event.preventDefault();
    console.log('Invalid Card Number');
    ccHint.style.display = "inline";
    cardNumber.value = '';
    cardNumber.nextElementSibling.textContent = "Invalid card";
}
else {
    cardNumber.nextElementSibling.textContent = '';
    ccHint.style.display = "none";
  }
  
  if (!newcVVTestResults) {
    event.preventDefault();
    console.log('Invalid CVV');
    cvvHint.style.display = "inline";
    cVV.value = '';
    cVV.nextElementSibling.textContent = "Invalid CVV";
}
else {
    cVV.nextElementSibling.textContent = '';
    cvvHint.style.display = "none";
    
  }
  
  if (!zipCodeTestResults) {
    event.preventDefault();
    console.log('Invalid Zip Code');
    zipHint.style.display = "inline";
    zipCode.value = '';
    zipCode.nextElementSibling.textContent = "Invalid zipCode";
}
else {
    zipCode.nextElementSibling.textContent = '';
    zipHint.style.display = "none";
    
  
  }
  ////////////////////////////////////////////////////////////////////////////

  if (testResults && emailTestResults && cardNumberTestResults && newcVVTestResults && zipCodeTestResults) {
    alert('Form Submission Successful. Thank you.');    
    form.submit();

  } else {
    console.log('One or more fields invalid');
  }

});