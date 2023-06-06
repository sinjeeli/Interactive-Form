
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
//////////////////////////////////////////////////////////

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate Name field
  if (nameRef.value.trim() === '') {
    // Display error for Name field
    displayError(nameRef.parentNode);
  } else {
    // Remove error for Name field
    removeError(nameRef.parentNode);
  }

  // Validate Email field
  if (!isValidEmail(email.value)) {
    // Display error for Email field
    displayError(email.parentNode);
  } else {
    // Remove error for Email field
    removeError(email.parentNode);
  }

  // Validate Activities section
  if (!isActivitiesSelected()) {
    // Display error for Activities section
    displayError(activitiesRef.parentNode);
  } else {
    // Remove error for Activities section
    removeError(activitiesRef.parentNode);
  }

  // Validate Credit Card section if selected
  if (payment.value === 'credit-card') {
    if (!isValidCardNumber(cardNumber.value)) {
      // Display error for Card Number field
      displayError(cardNumber.parentNode);
    } else {
      // Remove error for Card Number field
      removeError(cardNumber.parentNode);
    }

    if (!isValidZipCode(zipCode.value)) {
      // Display error for Zip Code field
      displayError(zipCode.parentNode);
    } else {
      // Remove error for Zip Code field
      removeError(zipCode.parentNode);
    }

    if (!isValidCVV(cVV.value)) {
      // Display error for CVV field
      displayError(cVV.parentNode);
    } else {
      // Remove error for CVV field
      removeError(cVV.parentNode);
    }
  }

  // Check if any errors exist
  if (form.querySelectorAll('.not-valid').length === 0) {
    // Submit the form if all fields are valid
    form.submit();
  } else {
    console.log('One or more fields invalid');
  }
});

function displayError(element) {
  element.classList.add('not-valid');
  element.classList.remove('valid');
  element.lastElementChild.style.display = 'block';
}

function removeError(element) {
  element.classList.remove('not-valid');
  element.classList.add('valid');
  element.lastElementChild.style.display = 'none';
}

function isValidEmail(email) {
  // Email validation logic (regex or other methods)
  // Return true if email is valid, false otherwise

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isActivitiesSelected() {
  // Activities section validation logic
  // Return true if at least one activity is selected, false otherwise
  const activityCheckboxes = document.querySelectorAll('#activities input[type="checkbox"]');
  return Array.from(activityCheckboxes).some(checkbox => checkbox.checked);
}

function isValidCardNumber(cardNumber) {
  // Card number validation logic (regex or other methods)
  // Return true if card number is valid, false otherwise
  const cardNumberRegex = /^\d{16}$/;
  return cardNumberRegex.test(cardNumber);
}

function isValidZipCode(zipCode) {
  // Zip code validation logic (regex or other methods)
  // Return true if zip code is valid, false otherwise
  const zipCodeRegex = /^\d{5}$/;
  return zipCodeRegex.test(zipCode);
}

function isValidCVV(cvv) {
  // CVV validation logic (regex or other methods)
  // Return true if CVV is valid, false otherwise.
  const cvvRegex = /^\d{3}$/;
  return cvvRegex.test(cvv);
}


const activityCheckboxes = document.querySelectorAll('#activities input[type="checkbox"]');

activityCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('focus', () => {
    checkbox.parentNode.classList.add('focus');
  });

  checkbox.addEventListener('blur', () => {
    checkbox.parentNode.classList.remove('focus');
  });
});
